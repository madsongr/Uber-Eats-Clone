import React, { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { Divider } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";

import Categories from "../components/Categories/Categories";
import HeaderTabs from "../components/HeaderTabs/HeaderTabs";
import RestaurantItems, { localRestaurants } from "../components/RestaurantItems/RestaurantItems";
import SearchBar from "../components/SearchBar/SearchBar";
import BottomTabs from "../components/BottomTabs/BottomTabs";

// create your own Yelp API KEY 
const YELP_API_KEY = "";

export default function Home({ navigation, route }) {    

    const [restaurantData, setRestaurantData] = useState(localRestaurants);
    const [city, setCity] = useState("San Francisco");
    const [activeTab, setActiveTab] = useState("Delivery");

    const getReastaurantsFromYelp = async () => {

        const yelpURL = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

        const apiOptions = {
            headers: {
                Authorization: `Bearer ${YELP_API_KEY}`
            }
        }

        return await fetch(yelpURL, apiOptions).then((res) => res.json()).then((json) => {

            json.businesses.filter(business => {

                if (business.transactions.length > 0) {
                    setRestaurantData(
                        json.businesses.filter(business =>
                            business.transactions.includes(activeTab.toLowerCase())
                        )
                    );
                } else {
                    setRestaurantData(json.businesses);
                }
            });

        });
    };

    useEffect(() => {
        getReastaurantsFromYelp();
    }, [city, activeTab]);

    return (
        <SafeAreaView style={{ backgroundColor: '#eeeeee', flex: 1 }}>
            <View style={{ backgroundColor: '#ffffff', paddingVertical: 15 }}>

                <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
                <SearchBar cityHandler={setCity} />

            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Categories />
                <RestaurantItems restaurantData={restaurantData} navigation={navigation} />
            </ScrollView>

            <Divider width={1} />
            <BottomTabs />
        </SafeAreaView>
    );
}