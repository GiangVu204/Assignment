import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';

export default RegisterScreen = ({ navigation }) => {
  const [fullname, setFullname] = useState('');
  const [fullnameError, setFullnameError] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const handleRegister = () => {
    let isValid = true;

    if (!fullname) {
      setFullnameError('Please enter your fullname');
      isValid = false;
    } else {
      setFullnameError('');
    }

    if (!validateEmail(email)) {
      setEmailError('Invalid email address');
      isValid = false;
    } else {
      setEmailError('');
    }

    if (password !== confirmPassword) {
      setPasswordError('Passwords do not match');
      isValid = false;
    } else {
      setPasswordError('');
    }

    if (isValid) {
      const newUser = {
        name: fullname,
        email: email,
        password: password,
      };

      fetch('http://192.168.41.106:3000/nguoidung', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      })
        .then(response => {
          if (response.ok) {
            Alert.alert('Success', 'thành công');
            // Xử lý logic sau khi đăng ký thành công
            navigation.navigate('Login_screen'); 
          } else {
            Alert.alert('Error', 'Failed to add user');
            // Xử lý logic khi đăng ký thất bại
          }
        })
        .catch(error => {
          console.error('Error:', error);
          // Xử lý logic khi có lỗi xảy ra
        });
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
  };

  return (
    <View style={styles.container}>
      <Image source={require('../image/tach_tra.png')} style={styles.logo} />
      <Text style={styles.title}>Welcome to Lungo !!</Text>
      <Text style={styles.title1}>Register to Continue</Text>
      <TextInput
        style={[styles.input, { color: '#fff' }]}
        placeholder="Fullname"
        placeholderTextColor="#999"
        value={fullname}
        onChangeText={(text) => setFullname(text)}
      />
      {fullnameError ? <Text style={styles.error}>{fullnameError}</Text> : null}
      <TextInput
        style={[styles.input, { color: '#fff' }]}
        placeholder="Email"
        placeholderTextColor="#999"
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
      />
      {emailError ? <Text style={styles.error}>{emailError}</Text> : null}
      <TextInput
        style={[styles.input, { color: '#fff' }]}
        placeholder="Password"
        placeholderTextColor="#999"
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      {passwordError ? <Text style={styles.error}>{passwordError}</Text> : null}
      <TextInput
        style={[styles.input, { color: '#fff' }]}
        placeholder="Confirm Password"
        placeholderTextColor="#999"
        secureTextEntry={true}
        value={confirmPassword}
        onChangeText={(text) => setConfirmPassword(text)}
      />
      {confirmPasswordError ? (
        <Text style={styles.error}>{confirmPasswordError}</Text>
      ) : null}

      <TouchableOpacity
        style={{
          width: '100%',
          height: '7%',
          borderColor: 'black',
          borderWidth: 1,
          borderRadius: 17,
          backgroundColor: '#D17842',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 30,
        }}
        onPress={handleRegister}
      >
        <Text style={{ color: 'white', fontSize: 15, fontWeight: '700' }}>Register</Text>
      </TouchableOpacity>

      <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'center' }}>
        <Text style={{ color: '#828282', fontWeight: '700' }}>You have an account? Click </Text>
        <TouchableOpacity
          onPress={()=>{
            navigation.navigate('Login_screen');
          }}
        >
          <Text style={{ color: '#D17842', fontWeight: '700' }}> Sign in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'black',
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 20,
    color: '#fff',
  },
  title1: {
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 20,
    color: '#828282',
    marginBottom: 40,
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#252A32',
    borderRadius: 9,
    marginBottom: 10,
    paddingHorizontal: 10,
    color: '#fff',
  },
  buttonContainer: {
    width: '100%',
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  login: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 20,
    marginLeft: 250,
    marginTop: 10,
    color: '#fff',
  },
  logo: {
    width: 220,
    height: 150,
    marginBottom: 20,
  },
  error: {
    color: 'red',
    marginBottom: 5,
  },
});