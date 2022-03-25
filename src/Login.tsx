import React from 'react';
import { View, Text, Button } from 'react-native';
import { useKeycloak } from '../smd/useKeycloak';
import styles from './styles';
const Login = () => {
  const { keycloak, initialized } = useKeycloak();
  console.log('token: ', keycloak?.token);
  
  const checkLogin = () => {
    if(!keycloak?.authenticated){
      return (
        <View>
          {/* <Text>{`Welcome ${keycloak?.authenticated ? keycloak.tokenParsed.email : 'You need to login'} - ${keycloak?.token}!`}</Text> */}
        <Button onPress={() => keycloak?.login()} title="Login" />
        </View>
      )
    }
    else{
      return (
        <View>
           <Text>{`Welcome ${keycloak.tokenParsed.email} - ${keycloak?.token}!`}</Text>
          {keycloak.authenticated && (
          <Button onPress={() => keycloak.logout()} title="Logout" />
        )}
        </View>
      )
    }
  }
  return (
    <View style={styles.container}>
     {checkLogin()}
    </View>
  );
};

export default Login;
