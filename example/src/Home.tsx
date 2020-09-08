import React, { useState, useEffect } from 'react';
import { InteractiveSectionList } from 'react-native-expo-interactive-section-list';

import DishItem from './DishItem';

const DATA = [
  {
    title: 'Main dishes',
    data: ['Pizza', 'Burger', 'Risotto'],
  },
  {
    title: 'Sides',
    data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
  },
  {
    title: 'Drinks',
    data: ['Water', 'Coke', 'Beer'],
  },
  {
    title: 'Desserts',
    data: ['Cheese Cake', 'Ice Cream'],
  },
  {
    title: 'Italian',
    data: ['Pizza', 'Burger', 'Risotto'],
  },
  {
    title: 'Fried',
    data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
  },
  {
    title: 'Cold',
    data: ['Water', 'Coke', 'Beer'],
  },
  {
    title: 'Sweet',
    data: ['Cheese Cake', 'Ice Cream'],
  },
];

const searchIcon = require('../assets/search.png');

const Home: React.FC = () => {
  const [data, setData] = useState<Array<any>>([]);

  useEffect(() => {
    setData(DATA);
  }, []);

  return (
    <InteractiveSectionList
      data={data}
      renderItem={({ item }) => <DishItem item={item} />}
      itemHeight={100}
      tabbarItemWidth={100}
      tabbarItemSpaceBetween={8}
      tabbarItemFontSize={16}
      tabbarItemActiveColor="#FED41A"
      tabbarItemInactiveColor="#FFF"
      titleInactiveColor="#ABABAB"
      tabbarItemHeight={40}
      tabbarIcon={searchIcon}
    />
  );
};

export default Home;
