import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SettingsScreen from './screens/SettingsScreen';
import HomeScreen from './screens/HomeScreen';

const Tab = createBottomTabNavigator();

export default function App(){
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="HomePage" component={HomeScreen} />
                <Tab.Screen name="Settings" component={SettingsScreen} />
                <Tab.Screen name="Test" component={SettingsScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
