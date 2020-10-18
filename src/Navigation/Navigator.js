import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from '../screens/Home';
import Chat from '../screens/Chat';
import Discussion from '../screens/Discussion';
import Profile from '../screens/Profile';
import {StyleSheet} from 'react-native';

const Tabs = createBottomTabNavigator();

const TabNavigation = () => (
  <Tabs.Navigator
    tabBarOptions={{
      activeTintColor: '#f2404c',
      inactiveTintColor: '#000119',
      style: {
        height: 75,
        backgroundColor: '#FFF',
        elevation: 2,
      },
    }}
    screenOptions={({route}) => ({
      tabBarLabel: '',
      tabBarIcon: ({color}) => {
        let iconName = '';
        if (route.name === 'Home') {
          iconName = 'ios-compass';
        } else if (route.name === 'Chat') {
          iconName = 'chatbubble-ellipses-outline';
        } else if (route.name === 'Profile') {
          iconName = 'person-circle-outline';
        }
        return (
          <Ionicons
            name={iconName}
            size={30}
            color={color}
            style={styles.icon}
          />
        );
      },
    })}>
    <Tabs.Screen name="Home" component={Home} />
    <Tabs.Screen name="Chat" component={Chat} />
    <Tabs.Screen name="Profile" component={Profile} />
  </Tabs.Navigator>
);

const Stack = createStackNavigator();

const StackNavigation = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="Chat" component={TabNavigation} />
    <Stack.Screen name="Discussion" component={Discussion} />
  </Stack.Navigator>
);

const styles = StyleSheet.create({
  icon: {position: 'absolute', top: 10},
});

export default StackNavigation;
