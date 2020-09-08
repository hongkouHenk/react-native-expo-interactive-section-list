# React Native Interactive Section List

Interactive Section List is a scrollable tab bar-controlled SectionList.

![preview](https://github.com/hongkouHenk/react-native-expo-interactive-section-list/blob/master/preview.gif)

## Features

- SectionList that scrolls to tab bar button selected sections.
- Tab bar button controls that follow along with SectionList scroll actions.
- Compatible with Expo.
- Written in TypeScript.

## Installation

```bash
yarn add react-native-expo-interactive-section-list

# or

npm install react-native-expo-interactive-section-list
```

## Usage

```python
import React, { useState, useEffect} from 'react';

import InteractiveSectionList from 'react-native-expo-interactive-section-list';

import MyItem from './MyItem';
import MySectionHeader from './MySectionHeader';

const searchIcon = require('../../assets/search.png');

const DATA = [
  {
    title: "Main dishes",
    data: ["Pizza", "Burger", "Risotto"]
  },
  {
    title: "Sides",
    data: ["French Fries", "Onion Rings", "Fried Shrimps"]
  },
  {
    title: "Drinks",
    data: ["Water", "Coke", "Beer"]
  },
  {
    title: "Desserts",
    data: ["Cheese Cake", "Ice Cream"]
  }
];

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(DATA);
  }, []);

  return (
    <InteractiveSectionList
      data={data} // REQUIRED: SECTIONLIST DATA
      renderItem={({ item }) => <MyItem item={item} />} // REQUIRED: SECTIONLIST ITEM COMPONENT
      itemHeight={100}  // REQUIRED: USED TO IMPROVE PERFORMANCE
      renderSectionHeader={({ section }) => <MySectionHeader section={section} />} // OPTIONAL
      tabbarItemWidth={100}  // OPTIONAL
      tabbarItemSpaceBetween={8}  // OPTIONAL
      tabbarItemFontSize={16}  // OPTIONAL
      tabbarItemActiveColor='#FED41A'  // OPTIONAL
      tabbarItemInactiveColor='#FFF'  // OPTIONAL
      tabbarItemTitleActiveColor='#000' // OPTIONAL
      tabbarItemTitleInactiveColor='#EDEDED' // OPTIONAL
      tabbarItemHeight={40}  // OPTIONAL
      tabbarIcon={searchIcon}  // OPTIONAL
    />
  )};

export default Home;
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
