import React, { useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as Google from 'expo-google-app-auth';
import AsyncStorage from "@react-native-async-storage/async-storage";

import { USER_COLLECTION } from "../config/database";

export default function SignIn({ navigation }) {


    const login = async () => {

        // use your google project iOS and Android credentials

        await Google.logInAsync({
            iosClientId: '',
            androidClientId: ''
        }).then(res => {

            const { type, user } = res;
            if (type === 'success') {

                AsyncStorage.setItem(USER_COLLECTION, JSON.stringify(user));
                navigation.navigate("Home");
            }

        }).catch(error => {
            console.log(error);
        });

    }

    return (
        <View style={styles.container}>
            <Text style={styles.signInText}>Sign In</Text>
            <TouchableOpacity
                style={styles.signInBtn}
                onPress={() => login()}
            >
                <Text style={styles.signInBtnText}>Sign in with Google</Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    signInText: {
        fontSize: 18
    },
    signInBtn: {
        marginTop: 15,
        backgroundColor: '#4285F4',
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    signInBtnText: {
        color: 'white',
        fontSize: 18
    },
});