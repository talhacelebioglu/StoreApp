import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch, useSelector} from 'react-redux';
import {removeUser} from '../redux/auth/authSlice';

import Products from '../pages/Products';
import Detail from '../pages/Detail';
import Favorites from '../pages/Favorites';
import Cart from '../pages/Cart';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const Home = () => {
  const dispatch = useDispatch();

  const homeHeaderRight = () => (
    <Icon
      name="logout"
      size={28}
      color="red"
      onPress={() => dispatch(removeUser())}
    />
  );

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Products"
        component={Products}
        options={{
          title: 'Hi, johnd',
          headerTitleStyle: {fontWeight: 'bold'},
          headerRight: homeHeaderRight,
        }}
      />
      <Stack.Screen name="Detail" component={Detail} options={{title: ''}} />
    </Stack.Navigator>
  );
};

const BottomTabNavigator = () => {
  const cartItems = useSelector(state => state.cart.cartItems);

  return (
    <Tab.Navigator screenOptions={tabScreenOptions}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Favorites" component={Favorites} />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarBadge: cartItems.length,
          tabBarBadgeStyle: {
            backgroundColor: '#45B39C',
            color: '#fff',
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

const tabScreenOptions = ({route}) => ({
  headerShown: false,
  tabBarActiveTintColor: '#45B39C',
  tabBarIcon: ({color, size, focused}) => {
    let iconName;

    if (route.name === 'Home') {
      iconName = focused ? 'home' : 'home-outline';
    } else if (route.name === 'Favorites') {
      iconName = focused ? 'heart' : 'heart-outline';
    } else if (route.name === 'Cart') {
      iconName = focused ? 'cart' : 'cart-outline';
    }

    return <Icon name={iconName} size={28} color={color} />;
  },
});
