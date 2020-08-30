import React from 'react';

import { SelectableSectionList } from 'react-native-expo-interactive-section-list';

import DishItem from './DishItem';

// import { recipies } from './dataHelper';
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
];

const searchIcon = require('../assets/search.png');

const Home: React.FC = () => (
  <SelectableSectionList
    data={DATA}
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
