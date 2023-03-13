import {Text, View, Image, Alert} from 'react-native';
import React from 'react';
import {Formik} from 'formik';
import {useDispatch, useSelector} from 'react-redux';

import styles from './Login.style';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {userLogin} from '../../redux/auth/services';

const Login = () => {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.user.authLoading);
  const error = useSelector(state => state.user.authError);

  const handleLogin = data => {
    dispatch(userLogin(data));
  };

  if (error) {
    Alert.alert('Legend Store', 'Something went wrong!');
    console.log(error);
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../assets/login-logo.png')}
      />
      <View style={styles.info}>
        <Text>Username: johnd</Text>
        <Text>Password: m38rmF$</Text>
      </View>
      <Formik
        initialValues={{username: '', password: ''}}
        onSubmit={handleLogin}>
        {({handleSubmit, handleChange, values}) => (
          <View style={styles.body_container}>
            <Input
              placeholder="Username"
              value={values.username}
              onType={handleChange('username')}
            />
            <Input
              placeholder="Password"
              value={values.password}
              onType={handleChange('password')}
              isSecure
            />
            <Button text="Login" onPress={handleSubmit} loading={loading} />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default Login;
