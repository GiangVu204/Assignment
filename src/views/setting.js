import { StyleSheet, Text, View, TouchableOpacity, Alert, TextInput, Button, SaveProduct } from 'react-native'
import React from 'react'
import { useState } from "react";
import Icon from 'react-native-vector-icons/AntDesign'
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon2 from 'react-native-vector-icons/Entypo'
import Icon3 from 'react-native-vector-icons/FontAwesome5'
import Icon4 from 'react-native-vector-icons/MaterialIcons'
import Icon5 from 'react-native-vector-icons/Foundation'
import Icon6 from 'react-native-vector-icons/MaterialCommunityIcons'

export default Setting = ({ navigation }) => {

    const handleLogout = () => {
        Alert.alert(
            "Đăng xuất",
            "Bạn có chắc chắn muốn đăng xuất?",
            [
                {
                    text: "Hủy",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "Đồng ý", onPress: () => navigation.navigate('Login_screen') }
            ],
            { cancelable: false }
        );
    }

    // const [tenSP, settenSP] = useState('');
    // const [gia, setgia] = useState(0);


    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row' }}>
                <Icon name='left' style={styles.iconback} size={20}
                onPress={() => {
                    navigation.goBack() //.pop(2): có thể thoát 2 lần
                  }}></Icon>
                <Text style={styles.titleSetting}>Setting</Text>
            </View>

            <View style={styles.history}>
                <Icon1 name='history' style={styles.iconhistory} size={20}></Icon1>
                <Text style={styles.textHistory}>History</Text>
                <Icon2 name='chevron-right' style={styles.iconbackk} size={30}></Icon2>
            </View>

            <View style={styles.personal_details}>
                <Icon3 name='map-marker-alt' style={styles.iconuser} size={18}></Icon3>
                <Text style={styles.textuser}>Address</Text>
                <Icon2 name='chevron-right' style={styles.iconbackk} size={30}></Icon2>
            </View>

            <View style={styles.personal_details}>
                <Icon4 name='payment' style={styles.iconuser} size={20}></Icon4>
                <TouchableOpacity onPress={() => {
                    navigation.navigate('Payment_Screen')
                }}>
                    <Text style={styles.textuser}>Payment Method</Text>
                </TouchableOpacity>
                <Icon2 name='chevron-right' style={styles.iconbackk} size={30}></Icon2>
            </View>

            <View style={styles.personal_details}>
                <Icon5 name='info' style={styles.iconuser} size={20}></Icon5>
                <Text style={styles.textuser}>About</Text>
                <Icon2 name='chevron-right' style={styles.iconbackk} size={30}></Icon2>
            </View>

            <View style={styles.personal_details}>
                <Icon name='questioncircleo' style={styles.iconuser} size={20}></Icon>
                <Text style={styles.textuser}>Help</Text>
                <Icon2 name='chevron-right' style={styles.iconbackk} size={30}></Icon2>
            </View>

            <View style={styles.personal_details}>
                <Icon6 name='logout' style={styles.iconuser} size={20}></Icon6>
                <TouchableOpacity onPress={handleLogout}>
                    <Text style={styles.textuser}>Log out</Text>
                </TouchableOpacity>
                <Icon2 name='chevron-right' style={styles.iconbackk} size={30}></Icon2>
            </View>

            {/* <Text style={{color: 'white'}}>Thêm SP</Text>
            <TextInput placeholder="Tên SP"
                onChangeText={(txt) => { settenSP(txt) }}
                placeholderTextColor={'white'}
                color= {'white'} />
            <TextInput placeholder="Giá tiền"
                onChangeText={(txt) => { setgia(txt) }}
                placeholderTextColor={'white'}
            />
            <Button title="Save" onPress={SaveProduct} /> */}

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        marginTop: 20
    },
    iconback: {
        top: 48,
        left: 20,
        height: 30,
        width: 30,
        paddingTop: 5.7,
        paddingLeft: 3,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 10,
        color: '#383A3E',
        backgroundColor: '#21262E',
        flexDirection: 'row'
    },
    titleSetting: {
        color: 'white',
        top: 48,
        left: 150,
        fontSize: 20,
        fontWeight: '600'

    },
    iconbackk: {
        color: '#AEAEAE',
        position: 'absolute',
        right: 0,
        marginRight: 30
    },
    history: {
        marginTop: 100,
        marginLeft: 30,
        flexDirection: 'row'
    },
    iconhistory: {
        padding: 5,
        borderWidth: 1,
        borderRadius: 20,
        borderColor: 'rgba(209, 120, 66, 0.3)',
        backgroundColor: 'rgba(209, 120, 66, 0.27)',
        color: '#D17842'
    },
    textHistory: {
        color: 'white',
        fontSize: 16,
        fontWeight: '500',
        marginTop: 5,
        marginLeft: 35
    },
    personal_details: {
        marginTop: 25,
        marginLeft: 30,
        flexDirection: 'row'
    },
    iconuser: {
        padding: 5,
        borderWidth: 1,
        borderRadius: 22,
        borderColor: 'rgba(209, 120, 66, 0.3)',
        backgroundColor: 'rgba(209, 120, 66, 0.27)',
        color: '#D17842'
    },
    textuser: {
        color: 'white',
        fontSize: 16,
        fontWeight: '500',
        marginTop: 5,
        marginLeft: 35
    },
})