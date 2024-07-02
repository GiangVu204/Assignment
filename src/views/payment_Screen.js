import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
import Icon1 from 'react-native-vector-icons/FontAwesome5'
import LinearGradient from 'react-native-linear-gradient';

export default Payment_Screen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity
        onPress={() => {
          navigation.goBack() //.pop(2): có thể thoát 2 lần
        }}>
          <Icon name='left' style={styles.iconback} size={20}></Icon>
        </TouchableOpacity>
        
        <Text style={styles.titleSetting}>Payment</Text>
      </View>

      <View style={styles.borderCard}>
        <Text style={styles.nameCard}>Credit Card</Text>
        {/* <LinearGradient
          colors={['#23282F','#1E232A', '#20242B', '#191D23', '#14181E', '#101419' ]}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
          style={{ borderWidth: 1, borderColor: '#262B33', height: 186, width: 330, marginLeft: 20, borderRadius: 25, marginTop: 20, marginBottom: 20  }}>
        </LinearGradient> */}
        <View style={{ borderWidth: 1, borderRadius: 25, borderColor: '#181818', height: 186, width: 330, marginLeft: 20, borderRadius: 25, marginTop: 20, marginBottom: 20, backgroundColor: '#181818' }}>

          <View style={styles.goldChip}>
            <Image source={require('../image/gold_chip.png')} />
            <Image source={require('../image/visa.png')} style={{ marginLeft: 220 }} />
          </View>

          <View style={styles.numberCard}>
            <Text style={{ color: 'white', fontFamily: 'Poppins-BlackItalic', fontWeight: 700, fontSize: 18 }}>3 8 9 7   8 9 2 3   6 7 4 5   4 6 3 8</Text>
          </View>

          <View style={{ flexDirection: 'row' }}>
            <View style={{ flexDirection: 'column', marginTop: 33, marginLeft: 15 }}>
              <Text style={{ color: '#AEAEAE', fontFamily: 'Poppins-Regular', fontSize: 9, fontWeight: 400 }}>Card Holder Name</Text>
              <Text style={{ color: 'white', fontFamily: 'Poppins-MediumItalic', fontSize: 17, fontWeight: 300 }}>Robert Evans</Text>
            </View>

            <View style={styles.textDate}>
              <Text style={{ color: '#AEAEAE', marginLeft: 131, fontFamily: 'Poppins-Regular', fontSize: 10, fontWeight: 400 }}>Expiry Date</Text>
              <Text style={{ color: 'white', marginLeft: 139, fontFamily: 'Poppins-MediumItalic', fontSize: 16, fontWeight: 600 }}>02/30</Text>
            </View>
          </View>
        </View>
      </View>

      <View>
        <View style={styles.iconwallet}>
          <Icon1 name='wallet' size={30} style={styles.wallet}></Icon1>
          <Text style={{ color: 'white', paddingLeft: 20, fontSize: 17, fontWeight: 500 }}>Wallet</Text>
          <Text style={{ color: 'white', paddingLeft: 160, fontSize: 17, fontWeight: 400 }}>$ 100.50</Text>
        </View>

        <View style={styles.imgGPay}>
          <Image source={require('../image/Google_pay.png')} />
          <Text style={{ color: 'white', paddingLeft: 20, fontSize: 17, fontWeight: 500 }}>Google Pay</Text>
        </View>

        <View style={styles.iconApplePay}>
          <Icon name='apple1' size={30} style={styles.apple1}></Icon>
          <Text style={{ color: 'white', paddingLeft: 20, fontSize: 17, fontWeight: 500 }}>Apple Pay</Text>
        </View>

        <View style={styles.iconAmazonPay}>
          <Image source={require('../image/amazon_Pay.png')} />
          <Text style={{ color: 'white', paddingLeft: 20, fontSize: 17, fontWeight: 500 }}>Amazon Pay</Text>
        </View>

        {/* <LinearGradient colors={['#262B33', '#0C0F14']} style={{ flex: 0.2, borderRadius: 25 }}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: 'white', fontSize: 20 }}>Gradient Example</Text>
        </View>
      </LinearGradient> */}
      </View>

      <View style={styles.footer}>

        <View style={styles.priceContainer}>
          <Text style={styles.priceLabel}>Price</Text>
          <Text style={styles.priceAmount}>$ <Text style={styles.priceValue}>4.20</Text></Text>
        </View>

        <TouchableOpacity style={styles.payButton}>
          <Text style={styles.payButtonText}>Pay from Credit Card</Text>
        </TouchableOpacity>

      </View>

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
  iconbackk: {
    color: '#AEAEAE',
    position: 'absolute',
    right: 0,
    marginRight: 30
  },
  titleSetting: {
    color: 'white',
    top: 48,
    left: 150,
    fontSize: 20,
    fontWeight: '600'
  },

  borderCard: {
    width: 375,
    height: 261,
    top: 70,
    left: 20,
    right: 20,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#D17842'
  },
  nameCard: {
    marginLeft: 15,
    marginTop: 10,
    color: 'white',
    fontSize: 16,
    fontFamily: 'Poppins-SemiBoldItalic',
    fontWeight: '600'

  },
  goldChip: {
    flexDirection: 'row',
    marginLeft: 12,
    marginTop: 18
  },
  numberCard: {
    alignItems: 'center',
    marginTop: 35,
    marginLeft: -33
  },
  textDate: {
    flexDirection: 'column',
    justifyContent: 'flex-end'
  },
  iconwallet: {
    top: 90,
    height: 50,
    paddingLeft: 25,
    marginRight: 20,
    marginLeft: 20,
    borderColor: '#262B33',
    borderWidth: 1,
    borderRadius: 25,
    // justifyContent: 'center',
    backgroundColor: '#262B33',
    flexDirection: 'row',
    alignItems: 'center'
  },
  wallet: {
    color: '#D17842'
  },
  imgGPay: {
    top: 100,
    height: 50,
    paddingLeft: 25,
    marginRight: 20,
    marginLeft: 20,
    borderColor: '#262B33',
    borderWidth: 1,
    borderRadius: 25,
    backgroundColor: '#262B33',
    flexDirection: 'row',
    alignItems: 'center'
  },
  iconApplePay: {
    top: 110,
    height: 50,
    paddingLeft: 25,
    marginRight: 20,
    marginLeft: 20,
    borderColor: '#262B33',
    borderWidth: 1,
    borderRadius: 25,
    backgroundColor: '#262B33',
    flexDirection: 'row',
    alignItems: 'center'
  },
  apple1: {
    color: 'white'
  },
  iconAmazonPay: {
    top: 120,
    height: 50,
    paddingLeft: 25,
    marginRight: 20,
    marginLeft: 20,
    borderColor: '#262B33',
    borderWidth: 1,
    borderRadius: 25,
    backgroundColor: '#262B33',
    flexDirection: 'row',
    alignItems: 'center'
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 'auto',
    marginBottom: 20
  },
  priceContainer: {
    flexDirection: 'column',
    marginLeft: 15
  },
  priceLabel: {
    color: '#AEAEAE',
    marginLeft: 11,
    fontSize: 12
  },
  priceAmount: {
    color: '#D17842',
    fontSize: 20,
    fontWeight: '600'
  },
  priceValue: {
    color: 'white'
  },
  payButton: {
    backgroundColor: '#D17842',
    paddingHorizontal: 40,
    paddingVertical: 16,
    borderRadius: 15
  },
  payButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600'
  }
})