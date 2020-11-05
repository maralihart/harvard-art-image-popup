import React, {Component} from 'react';
import {View, Button} from 'react-native';

import authHandler from "../../utils/authenticationHandler.js";

const LoginScreen = () => {
   return (
      <View>
        <Button onPress={ () => authHandler.onLogin()} title="Login"/> 
      </View>
    );
}

export default LoginScreen;