import React, {useEffect} from 'react';
import {View, FlatList} from 'react-native';
import styles from './Products.style';

import ProductCard from '../../components/ProductCard';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

import {useDispatch, useSelector} from 'react-redux';
import {selectProducts} from '../../redux/product/productSlice';
import {getItemAsync} from '../../redux/product/services';

const Products = ({navigation}) => {
  const products = useSelector(selectProducts);
  const loading = useSelector(state => state.products.loading);
  const error = useSelector(state => state.products.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItemAsync());
  }, [dispatch]);

  // const addFavorites = id => {
  //   console.log('id', id);
  //   const isFavorite = favorites.find(favorite => favorite.id === id);
  //   if (isFavorite) {
  //     setFavorites(favorites.filter(favorite => favorite.id !== id));
  //   } else {
  //     const newFavorite = products?.find(coin => coin?.id === id);
  //     setFavorites([...favorites, newFavorite]);
  //   }
  //   setHeart(!heart);
  // };
  // console.log('favorites', favorites);

  const renderProduct = ({item}) => (
    <ProductCard
      product={item}
      onSelect={() => navigation.navigate('Detail', {id: item.id})}
    />
  );

  if (error) {
    return <Error />;
  }

  return (
    <View style={styles.container}>
      {loading ? (
        <Loading />
      ) : (
        <FlatList
          data={products}
          keyExtractor={item => item.id}
          renderItem={renderProduct}
          numColumns={2}
        />
      )}
    </View>
  );
};

export default Products;
