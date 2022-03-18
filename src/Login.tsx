import React from 'react';
import { View, Text, Button } from 'react-native';
import { useKeycloak } from '../smd/useKeycloak';
import styles from './styles';

const Login = () => {
  const { keycloak } = useKeycloak();

  return (
    <View style={styles.container}>
      <Text>{`Welcome ${keycloak?.authenticated} - ${keycloak?.token}!`}</Text>
      <Button onPress={() => keycloak?.login()} title="Login" />
    </View>
  );
};

export default Login;
