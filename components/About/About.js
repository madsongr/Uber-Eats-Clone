import React from 'react';
import { View, Text, Image } from 'react-native';

const image = "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg";

const name = "Beachside Bar";
const description = 'Thai - Confort Food'

export default function About(props) {

    const { name, image, price, reviews, rating, categories } = props.route.params;

    const formattedCategories = categories.map((cat) => cat.title).join(" • ");

    const description = `${formattedCategories} ${price ? " • " + price : "" } • 🎫 • ${rating} ⭐ (${reviews}+)`;

    return (
        <View>
            <RestaurantImage image={image} />
            <RestaurantName name={name} />
            <RestaurantDescription description={description} />
        </View>
    )
}

const RestaurantImage = (props) => (
    <Image
        source={{ uri: props.image }}
        style={{
            width: '100%',
            height: 180
        }}
    />
)

const RestaurantName = (props) => (
    <Text
        style={{
            fontSize: 29,
            fontWeight: 'bold',
            marginTop: 10,
            marginHorizontal: 15
        }}
    >
        {props.name}
    </Text>
)

const RestaurantDescription = (props) => (
    <Text
        style={{
            fontSize: 15.5,
            marginTop: 10,
            fontWeight: '500',
            marginHorizontal: 15
        }}
    >
        {props.description}
    </Text>
)