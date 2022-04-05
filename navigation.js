import React, { useContext, useEffect, useState } from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Provider as ReduxProvider } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { USER_COLLECTION } from "./config/database";
import configureStore from './redux/store';

import Home from "./screens/Home";
import RestaurantDetails from "./screens/RestaurantDetails";
import OrderCompleted from "./screens/OrderCompleted";
import SignIn from './screens/SignIn';


export default function RootNavigation() {

    const loadUserData = async () => {

        const storage = await AsyncStorage.getItem(USER_COLLECTION);

        if (storage) {
            const userData = JSON.parse(storage);
            console.log('user data: ' + JSON.stringify(userData));
        }
    }

    async function signOut() {

        AsyncStorage.clear();
    }

    const Stack = createStackNavigator();

    const store = configureStore();

    const screenOptions = {
        headerShown: false
    }

    useEffect(() => {
        loadUserData();
        // signOut();
    }, []);

    return (
        <ReduxProvider store={store}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName={"SignIn"} screenOptions={screenOptions}>
                    <Stack.Screen name="SignIn" component={SignIn} />
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="RestaurantDetails" component={RestaurantDetails} />
                    <Stack.Screen name="OrderCompleted" component={OrderCompleted} />
                </Stack.Navigator>
            </NavigationContainer>
        </ReduxProvider>
    );

}
