import React, { useState } from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert
} from 'react-native';

export default function LoginScreen({ navigation }) {
  const [getPasswordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async () => {
    if (email.length === 0) {
      Alert.alert("Vui lòng nhập tên.");
      return;
    }
    if (password.length === 0) {
      Alert.alert("Vui lòng nhập mật khẩu.");
      return;
    }
  
    let url_check = "http://192.168.41.106:3000/nguoidung?email=" + email;
    try {
      const response = await fetch(url_check);
      const red_login = await response.json();
      
      if (red_login.length !== 1) {
        Alert.alert("Tên đăng nhập không đúng hoặc có lỗi.");
      } else {
        let objU = red_login[0];
        console.log(objU);
        if (objU.password !== password) {
          Alert.alert("Mật khẩu không đúng.");
          return;
        } else {
          try {
            
            navigation.navigate('HomeScreen');
          } catch (e) {
            console.log(e);
          }
        }
      }
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <ImageBackground style={{ backgroundColor: 'black' }}>
      <Image source={require('../image/tach_tra.png')} style={{ width: '100%', height: '45%', marginTop: -67 }} resizeMode='center' />

      <View>
        <Text style={{ color: 'white', fontSize: 17, fontWeight: '700', textAlign: 'center', marginTop: -80, marginBottom: 45 }}>Welcome to Lungo !!</Text>
        <Text style={{ color: '#828282', fontSize: 12, fontWeight: '700', textAlign: 'center', marginTop: -30 }}>Login to Continue</Text>
      </View>
      <View>
        <View style={{ width: '95%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginLeft: 10, marginTop: 40, borderColor: '#252A32', borderRadius: 10, borderWidth: 1 }}>
          {/* <Text style={{ color: 'white' }}>Email:</Text> */}
          <TextInput
            style={{ color: 'white', height: '100%', width: '100%', paddingLeft: 10 }}
            placeholder=' Address'
            placeholderTextColor='gray'
            autoCapitalize='none'
            onChangeText={text => setEmail(text)}
          />
        </View>

        <View style={{ width: '95%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginLeft: 10, marginTop: 15, borderColor: '#252A32', borderRadius: 10, borderWidth: 1 }}>
          {/* <Text style={{ color: 'white' }}>Password:</Text> */}
          <TextInput
            style={{ color: 'white', height: '100%', width: '100%', paddingLeft: 10 }}
            placeholder='Password'
            placeholderTextColor='gray'
            autoCapitalize='none'
            secureTextEntry={getPasswordVisible ? false : true} // Làm ẩn password trở thành dấu *****
            onChangeText={text => setPassword(text)}
          />
          <TouchableOpacity
            style={{ height: '100%', width: 30, aspectRatio: 1, position: 'absolute', right: 10 }}
            onPress={() => {
              setPasswordVisible(!getPasswordVisible)
            }}
          >
            {getPasswordVisible ?
              <Image source={require('../image/vector.png')} style={{ width: '100%', height: '100%' }} resizeMode='contain' />
              :
              <Image source={require('../image/vector.png')} style={{ width: '100%', height: '100%' }} resizeMode='contain' />}
          </TouchableOpacity>
        </View>
      </View>

      {/* Button */}
      <View style={{ width: '100%', height: '20%', justifyContent: 'center', alignItems: 'center', marginTop: 40 }}>
        {/* Đăng nhập */}
        <TouchableOpacity
          style={{ width: '94%', height: '40%', borderColor: 'black', borderWidth: 1, borderRadius: 20, backgroundColor: '#D17842', justifyContent: 'center', alignItems: 'center' }}
          onPress={handleSignIn}
        >
          <Text style={{ color: 'white', fontSize: 15, fontWeight: 700 }}>Sign In</Text>
        </TouchableOpacity>

        {/* Đăng ký */}

        <TouchableOpacity
          style={{ borderRadius: 20, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFFFFF', marginTop: 5, width: '94%', height: '40%', borderColor: 'white', borderWidth: 1, flexDirection: 'row' }}
          onPress={() => {
            navigation.navigate('RegisterScreen');
          }}
        >
          <Image source={require('../image/icon_google.png')} style={{ width: '40%', height: '40%', marginLeft: -170, marginRight: 30 }} resizeMode='contain' />
          <Text style={{ color: 'black', fontSize: 15, fontWeight: 700 }}>Sign in with Google</Text>
        </TouchableOpacity>
      </View>
      <View>
        <View style={{ flexDirection: 'row', marginTop: 20, justifyContent: 'center', }}>
          <Text style={{ color: '#828282', fontWeight: 700 }}>Don't have account? Click </Text>
          <TouchableOpacity onPress={() => {
            navigation.navigate('RegisterScreen');
          }}>
            <Text style={{ color: '#D17842', fontWeight: 700 }}>Register</Text>

          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: 'row', marginTop: 15, marginBottom: 60, justifyContent: 'center', }}>
          <Text style={{ color: '#828282', fontWeight: 700 }}>Forget Password? Click  </Text>
          <Text style={{ color: '#D17842', fontWeight: 700 }}>Reset</Text>
        </View>
      </View>
      {/* Các phần còn lại của mã */}
    </ImageBackground>
  );
}