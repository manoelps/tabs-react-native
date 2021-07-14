import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, Feather } from '@expo/vector-icons'; //importa as bibliotecas de icones

import Home from './pages/Home';
import New from './pages/New';
import Notification from './pages/Notification';
import Profile from './pages/Profile';
import Search from './pages/Search';

import ButtonNew from './pages/components/ButtonNew'; //Importa o componente ButtonNew

const Tab = createBottomTabNavigator();

//exporta as rotas
export default function Routes() {
  return (

    <Tab.Navigator

      tabBarOptions={{
        style: {
          backgroundColor: '#121212',
          borderTopColor: 'transparent'
        },
        activeTintColor: '#FFF',
        tabStyle: {
          paddingBottom: 5,
          paddingBottom: 5,
        }
      }}
    >
      <Tab.Screen
        name="Inicio"
        component={Home}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Entypo name="home" size={size} color={color} />
          )
        }}
      />

      <Tab.Screen
        name="Procurar"
        component={Search}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="search" size={size} color={color} />
          )
        }}
      />

      <Tab.Screen
        name="Novo"
        component={New}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ focused, size }) => (
            <ButtonNew size={size} focused={focused} />
          )
        }}
      />

      <Tab.Screen
        name="Notificação"
        component={Notification}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Entypo name="notification" size={size} color={color} />
          )
        }}
      />

      <Tab.Screen
        name="Pefil"
        component={Profile}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="user" size={size} color={color} />
          )
        }}
      />
    </Tab.Navigator>

  )
}