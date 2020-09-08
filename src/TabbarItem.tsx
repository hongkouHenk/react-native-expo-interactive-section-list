import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  GestureResponderEvent,
  LayoutChangeEvent,
} from 'react-native';

import { tabbarItemStyles as styles } from './styles';

export interface Props {
  item: string;
  onPress: (event: GestureResponderEvent) => void;
  onLayout: (event: LayoutChangeEvent) => void;
  selected: boolean;
  isFirstInView: boolean;
  isManualSelect: boolean;
  itemWidth?: number;
  itemHeight?: number;
  activeColor?: string;
  inactiveColor?: string;
  titleActiveColor?: string;
  titleInactiveColor?: string;
  fontSize?: number;
}

const TabbarItem: React.FC<Props> = ({
  item,
  onPress,
  onLayout,
  selected,
  isFirstInView,
  isManualSelect,
  itemWidth,
  itemHeight,
  activeColor,
  inactiveColor,
  titleActiveColor,
  titleInactiveColor,
  fontSize,
}) => {
  return (
    <TouchableOpacity
      onLayout={onLayout}
      style={[
        styles.container,
        {
          width: itemWidth,
          height: itemHeight,
        },
        ,
      ]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <View
        style={[
          styles.innerContainer,
          {
            backgroundColor:
              (isManualSelect && selected) || (!isManualSelect && isFirstInView)
                ? activeColor
                : inactiveColor,
          },
        ]}
      >
        <Text
          style={[
            styles.itemTitle,
            { fontSize },
            {
              color:
                (isManualSelect && selected) ||
                (!isManualSelect && isFirstInView)
                  ? titleActiveColor
                  : titleInactiveColor,
            },
          ]}
          numberOfLines={1}
        >
          {item}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default TabbarItem;
