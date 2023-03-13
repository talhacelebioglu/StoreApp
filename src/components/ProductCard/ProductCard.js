import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './ProductCard.style';
import {useDispatch, useSelector} from 'react-redux';
import {addFav} from '../../redux/favorite/favoriteSlice';

const ProductCard = ({product, onSelect}) => {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites.favorites);

  const favorited = item => {
    const boolen = favorites.some(favorite => favorite.id === item.id);
    return boolen;
  };

  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>
        <Icon
          style={styles.icon}
          name={favorited(product) ? 'heart' : 'heart-outline'}
          size={25}
          color={favorited(product) ? '#c62828' : 'grey'}
          onPress={() => dispatch(addFav(product))}
        />
        <Image style={styles.image} source={{uri: product.image}} />
        <View style={styles.body_container}>
          <Text style={styles.title} numberOfLines={3}>
            {product.title}
          </Text>
          <Text style={styles.price}>$ {product.price}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ProductCard;
