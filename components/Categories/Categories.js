import React from 'react'
import { View, Text, Image, ScrollView } from 'react-native'

export default function Categories() {

    const items = [
        {
            id: '1',
            image: require('../../assets/images/shopping-bag.png'),
            text: 'Pick-up'
        },
        {
            id: '2',
            image: require('../../assets/images/bread.png'),
            text: 'Bakery Items'
        },
        {
            id: '3',
            image: require('../../assets/images/fast-food.png'),
            text: 'Fast Foods'
        },
        {
            id: '4',
            image: require('../../assets/images/deals.png'),
            text: 'Deals'
        },
        {
            id: '5',
            image: require('../../assets/images/coffee.png'),
            text: 'Coffee & Tea'
        },
        {
            id: '6',
            image: require('../../assets/images/desserts.png'),
            text: 'Desserts'
        },
    ];

    return (
        <View
            style={{
                marginTop: 5,
                backgroundColor: '#fff',
                paddingVertical: 10,
                paddingLeft: 20
            }}
        >
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {items.map(item => (
                    <View
                        key={item.id}
                        style={{
                            alignItems: 'center',
                            marginRight: 30
                        }}
                    >
                        <Image
                            source={item.image}
                            style={{
                                width: 50,
                                height: 50,
                                resizeMode: 'contain'
                            }}
                        />
                        <Text
                            style={{
                                fontSize: 13,
                                fontWeight: '900'
                            }}
                        >
                            {item.text}
                        </Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}
