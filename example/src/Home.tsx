import React from 'react';

import { SelectableSectionList } from 'react-native-expo-interactive-section-list';

import DishItem from './DishItem';

import { recipies } from './dataHelper';

const searchIcon = require('../assets/search.png');

// CONVERTS DATA INTO SECTIONLIST COMPATIBLE DATA
const getSectionListData = (data: Array<any>) => {
  const sectionData: Array<any> = [];

  data.forEach((item) => {
    const matchIndex = sectionData.findIndex(
      (sectionItem) => sectionItem.title === item.type
    );
    if (matchIndex === -1) {
      sectionData.push({
        title: item.type,
        data: [item],
      });
    } else {
      sectionData[matchIndex].data.push(item);
    }
  });

  return sectionData;
};

const Home: React.FC = () => (
  <SelectableSectionList
    data={getSectionListData(recipies)}
    renderItem={({ item }) => <DishItem item={item} />}
    itemHeight={100}
    tabbarItemWidth={100}
    tabbarItemSpaceBetween={8}
    tabbarItemFontSize={16}
    tabbarItemActiveColor="#FED41A"
    tabbarItemInactiveColor="#FFF"
    tabbarItemHeight={40}
    tabbarIcon={searchIcon}
  />
);

export default Home;
