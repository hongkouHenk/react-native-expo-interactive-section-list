import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';

type dishType = {
  id: string;
  title: string;
  image: string;
  imageType: string;
  type: string;
};

export interface Props {
  item: dishType;
}

const DishItem: React.FC<Props> = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.infoView}>
        <Text style={styles.title} numberOfLines={1}>
          {item}
        </Text>
        <Text style={styles.description} numberOfLines={2}>
          Here will be a short descriptions for this dish. Tell you one thing,
          it' delicious.
        </Text>
        <View style={styles.footerView}>
          <Text style={styles.footerLabel}>$1,45</Text>
          <Text style={styles.footerLabel}>2354 kcal</Text>
        </View>
      </View>
      <Image style={styles.image} source={{ uri: item.image }} />
    </View>
  );
};

export default DishItem;
