import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './Detail.style';

import Loading from '../../components/Loading';
import Error from '../../components/Error';

import {addToCart} from '../../redux/cart/cartSlice';
import {getItemIdAsync} from '../../redux/product/services';

const Detail = ({route}) => {
  const {id} = route.params;
  const dispatch = useDispatch();
  const data = useSelector(state => state.products.details);
  const loading = useSelector(state => state.products.loading);
  const error = useSelector(state => state.products.error);

  useEffect(() => {
    dispatch(getItemIdAsync(id));
  }, [dispatch, id]);

  if (error) {
    return <Error />;
  }

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <View style={styles.container}>
          <ScrollView>
            {data.image && (
              <Image style={styles.image} source={{uri: data?.image}} />
            )}
            <View style={styles.body_container}>
              <Text style={styles.title}>{data?.title}</Text>
              <View style={styles.rating_container}>
                <Icon
                  style={styles.icon}
                  name="star"
                  size={18}
                  color="orange"
                />
                <Text style={styles.rate}>{data?.rating?.rate}</Text>
              </View>
              <Text style={styles.desc}>{data?.description}</Text>
              <View style={styles.footer_container}>
                <Text style={styles.price}>$ {data?.price}</Text>
                <TouchableOpacity
                  style={styles.button_container}
                  onPress={() => dispatch(addToCart(data))}>
                  <Text style={styles.button_text}>Add to Cart</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      )}
    </>
  );
};

export default Detail;
