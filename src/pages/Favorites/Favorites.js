import {View, Text, FlatList} from 'react-native';
import React from 'react';

import styles from './Favorites.style';
import FavoriteCard from './FavoriteCard';
import {useSelector} from 'react-redux';

const Favorites = () => {
  const favorites = useSelector(state => state.favorites.favorites);

  const renderFavorites = ({item}) => <FavoriteCard favorite={item} />;

  return (
    <>
      {favorites.length === 0 ? (
        <View style={styles.landing_container}>
          <Text style={styles.landing_text}>Favorites is empty!</Text>
        </View>
      ) : (
        <FlatList
          data={favorites}
          keyExtractor={item => item.id}
          renderItem={renderFavorites}
          numColumns={2}
        />
      )}
    </>
  );
};

export default Favorites;
