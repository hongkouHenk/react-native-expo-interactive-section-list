import React, { useEffect, useState, useRef } from 'react';
import {
  View,
  SectionList,
  Text,
  StyleSheet,
  ImageSourcePropType,
} from 'react-native';
import sectionListGetItemLayout from 'react-native-section-list-get-item-layout';

import ScrollableTabbar from './ScrollableTabbar';

import { contentViewStyles as styles } from './styles';

interface Props {
  data: Array<any>;
  renderItem: (item: any) => JSX.Element;
  itemHeight: number;
  tabbarItemWidth?: number;
  tabbarItemHeight?: number;
  tabbarItemSpaceBetween?: number;
  tabbarItemActiveColor?: string;
  tabbarItemInactiveColor?: string;
  tabbarItemFontSize?: number;
  tabbarIcon?: ImageSourcePropType;
}

// DATA IS SORTED ALPHABETICALL
// TO KEEP TRACK OF SECTION IN VIEW DURING
// SCROLL, A SECTIONINDEX IS ADDED TO EACH
// LISTITEM AND A SECOND FLATTENDED LIST IS
// CREATED (FOR COMPARISSON)
const getData = (items: Array<any>) => {
  const flattenedList: Array<any> = [];

  items.sort((a, b) => {
    if (a.title > b.title) {
      return 1;
    }

    return -1;
  });

  const sectionList: Array<any> = items.map((section, index) => {
    section.data.forEach((sectionItem: any) => {
      sectionItem.sectionIndex = index;
      flattenedList.push(sectionItem);
    });

    return section;
  });

  return { sectionList, flattenedList };
};

// TAB ITEMS CREATED FROM SECTION DATA ADDED TO SECTIONLIST
const getTabbarItems = (items: Array<any>) => {
  const tabbarItems: Array<string> = [];

  items.forEach((item: any) => {
    if (!tabbarItems.some((tabbarItem) => tabbarItem === item.title)) {
      tabbarItems.push(item.title);
    }
  });

  return tabbarItems;
};

let scrollOffset = 0;

const SelectableSectionList: React.FC<Props> = ({
  data,
  renderItem,
  itemHeight,
  tabbarItemWidth,
  tabbarItemHeight,
  tabbarItemSpaceBetween,
  tabbarItemActiveColor,
  tabbarItemInactiveColor,
  tabbarItemFontSize,
  tabbarIcon,
}) => {
  const flatListRef = useRef<SectionList>(null);

  const [sectionsFeed, setSectionsFeed] = useState<Array<any>>([]);
  const [flattenedList, setFlattenedList] = useState<Array<any>>([]);

  const [tabbarItems, setTabbarItems] = useState<Array<string>>([]);

  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [firstIndexInView, setFirstIndexInView] = useState<number>(0);
  const [isManualSelect, setIsManualSelect] = useState<boolean>(false);
  const [scrollDirection, setScrollDirection] = useState<string>('DOWN');

  const [sectionHeaderHeight, setSectionHeaderHeight] = useState<number>(40);
  const [layoutHeight, setLayoutHeight] = useState<number>(0);

  const handleTabItemPress = (index: number) => {
    setSelectedIndex(index);
    setIsManualSelect(true);
  };

  const getItemLayout = sectionListGetItemLayout({
    getItemHeight: () => itemHeight,
    getSeparatorHeight: () => StyleSheet.hairlineWidth,
    getSectionHeaderHeight: () => sectionHeaderHeight,
    getSectionFooterHeight: () => 0,
    listHeaderHeight: 0,
  });

  useEffect(() => {
    if (!isManualSelect) return;

    if (flatListRef && flatListRef.current) {
      flatListRef.current.scrollToLocation({
        animated: true,
        itemIndex: 0,
        sectionIndex: selectedIndex,
        viewPosition: 0,
      });
    }
  }, [selectedIndex]);

  useEffect(() => {
    const listObject = getData(data);

    setSectionsFeed(listObject.sectionList);
    setFlattenedList(listObject.flattenedList);
    setTabbarItems(getTabbarItems(listObject.sectionList));
  }, []);

  const renderFlatlist = () => (
    <SectionList
      ref={flatListRef}
      contentContainerStyle={styles.contentContainer}
      sections={sectionsFeed}
      renderItem={(args) => renderItem(args)}
      getItemLayout={(data: any, index: number) => getItemLayout(data, index)}
      renderSectionHeader={({ section: { title } }) => (
        <Text
          style={styles.sectionHeader}
          onLayout={({ nativeEvent }) =>
            setSectionHeaderHeight(nativeEvent.layout.height)
          }
        >
          {title}
        </Text>
      )}
      scrollEventThrottle={16}
      onScroll={({ nativeEvent }) => {
        if (layoutHeight === 0) {
          setLayoutHeight(nativeEvent.layoutMeasurement.height);
        }

        //  IDENTIFY SECTION IN VIEW
        const itemIndex = Math.floor(
          nativeEvent.contentOffset.y /
            (itemHeight +
              ((sectionHeaderHeight + StyleSheet.hairlineWidth) *
                sectionsFeed.length) /
                flattenedList.length)
        );

        // EXIT IF SCROLL OUT OF BOUNDS
        if (itemIndex < 0 || itemIndex > flattenedList.length - 1) return;

        // SET FIRST SECTION IN VIEW (TOP)
        const sectionIndex = flattenedList[itemIndex].sectionIndex;
        setFirstIndexInView(sectionIndex);

        // SET SCROLLDIRECTION
        if (nativeEvent.contentOffset.y > scrollOffset) {
          setScrollDirection('DOWN');
        } else {
          setScrollDirection('UP');
        }
        scrollOffset = nativeEvent.contentOffset.y;
      }}
      onScrollBeginDrag={() => {
        setSelectedIndex(-1);
        setIsManualSelect(false);
      }}
      ItemSeparatorComponent={() => <View style={styles.border} />}
      keyExtractor={(item, index) => index.toString()}
    />
  );

  return (
    <>
      <ScrollableTabbar
        items={tabbarItems}
        onPress={(index: number) => handleTabItemPress(index)}
        selectedIndex={selectedIndex}
        firstValueInView={data[firstIndexInView].title}
        isManualSelect={isManualSelect}
        scrollDirection={scrollDirection}
        itemWidth={tabbarItemWidth}
        itemHeight={tabbarItemHeight}
        itemSpaceBetween={tabbarItemSpaceBetween}
        activeColor={tabbarItemActiveColor}
        inactiveColor={tabbarItemInactiveColor}
        fontSize={tabbarItemFontSize}
        icon={tabbarIcon}
      />
      {React.useMemo(() => renderFlatlist(), [sectionsFeed])}
    </>
  );
};

export default SelectableSectionList;
