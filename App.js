import React from 'react';

import Routes from './src/routes'; //importa as rotas
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (


    <NavigationContainer>

      <Routes />
    </NavigationContainer>


  );
}