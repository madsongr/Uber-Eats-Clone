import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import { styles } from "./styles";

export default function HeaderTabs(props) {


    return (
        <View
            style={{
                flexDirection: 'row',
                alignSelf: 'center'
            }}
        >
            <HeaderButton
                title="Delivery"
                btnColor="black"
                textColor="white"
                activeTab={props.activeTab}
                setActiveTab={props.setActiveTab}
            />
            <HeaderButton
                title="Pickup"
                btnColor="white"
                textColor="black"
                activeTab={props.activeTab}
                setActiveTab={props.setActiveTab}
            />
        </View>
    );
}

const HeaderButton = (props) => (
    <TouchableOpacity
        style={{
            backgroundColor: props.activeTab === props.title ? 'black' : 'white',
            paddingVertical: 6,
            paddingHorizontal: 16,
            borderRadius: 30
        }}
        onPress={() => props.setActiveTab(props.title)}
    >
        <Text
            style={{
                fontSize: 15,
                fontWeight: "bold",
                color: props.activeTab === props.title ? 'white' : 'black',
            }}
        >
            {props.title}
        </Text>
    </TouchableOpacity>
);