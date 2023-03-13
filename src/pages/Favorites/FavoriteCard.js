import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch} from 'react-redux';
import {removeFav} from '../../redux/favorite/favoriteSlice';

import styles from './Favorites.style';

const FavoriteCard = ({favorite}) => {
  const dispatch = useDispatch();

  return (
    <TouchableWithoutFeedback>
      <View style={styles.card_container}>
        <Icon
          style={styles.icon}
          name="heart"
          size={25}
          color="#c62828"
          onPress={() => dispatch(removeFav(favorite))}
        />
        {favorite.image && (
          <Image style={styles.image} source={{uri: favorite?.image}} />
        )}
        <View style={styles.body_container}>
          <Text style={styles.title} numberOfLines={3}>
            {favorite?.title}
          </Text>
          <Text style={styles.price}>{favorite?.price} $</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default FavoriteCard;
