// rnfes
import React, { Component } from "react"
import {
    View,
    Text,
    SafeAreaView
} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import 'react-native-gesture-handler';
import Login_screen from "./login_Screen";
import RegisterScreen from "./register_Screen";
import HomeScreen from "./home_Screen";
import ChiTietSanPham from "./chitietSP";
import Setting from "./setting";
import Menu from "./payment_Screen";
const Stack = createNativeStackNavigator();

export default RootComponent = function () {
    return (
        // <SafeAreaView>
        //     <Login_screen />
        // </SafeAreaView >
        <NavigationContainer>
            {/* Rest of your app code */}
            <Stack.Navigator initialRouteName="Login_screen" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Login_screen" component={Login_screen} />
                <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
                <Stack.Screen name="ChiTietSanPham" component={ChiTietSanPham} />
                <Stack.Screen name="Setting" component={Setting} />
                <Stack.Screen name="Payment_Screen" component={Payment_Screen} />
            </Stack.Navigator>

        </NavigationContainer>


    )
}