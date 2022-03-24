import React from 'react';
import { View, Text, Button } from 'react-native';
import { useKeycloak } from '../smd/useKeycloak';
import styles from './styles';
const Login = () => {
  const { keycloak, initialized } = useKeycloak();
  console.log('dasyss', keycloak);
  
  return (
    <View style={styles.container}>
      <View>
      <Text>{`Welcome ${keycloak?.authenticated ? keycloak.tokenParsed.email : 'You need to login'} - ${keycloak?.token}!`}</Text>
      <Button onPress={() => keycloak?.login()} title="Login" />
      
      {!!keycloak.authenticated && (
        <Button onPress={() => keycloak.logout()} title="Logout" />
      )}
    </View>
    </View>
  );
};

export default Login;
