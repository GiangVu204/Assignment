import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';

export default ChiTietSanPham = ({route}) => {
  const [soLuong, setSoLuong] = useState(1);
  const [giaTien, setGiaTien] = useState(route.params?.gia); // Giá tiền mặc định là 100
  const [size, setSize] = useState('S'); // Size mặc định là S

  const tangSoLuong = () => {
    setSoLuong(soLuong + 1);
    setGiaTien(giaTien * (soLuong + 1));
  };

  const giamSoLuong = () => {
    if (soLuong > 1) {
      setSoLuong(soLuong - 1);
      setGiaTien(giaTien * (soLuong - 1));
    }
  };

  const chonSize = (selectedSize) => {
    setSize(selectedSize);
    // Cập nhật giá tiền dựa trên size đã chọn
    if (selectedSize === 'S') {
      setGiaTien(route.params?.gia);
    } else if (selectedSize === 'M') {
      setGiaTien(route.params?.gia*2);
    } else if (selectedSize === 'L') {
      setGiaTien(route.params?.gia*3);
    }
  };

  const muaSanPham = () => {
    // Xử lý logic khi nhấn nút "Mua"
  };

  // const themVaoGioHang = () => {
  //     // Xử lý logic khi nhấn nút "Thêm vào giỏ hàng"
  // };

  const image = route.params?.image; // Lấy dữ liệu ảnh từ route.params
  const gia = route.params?.gia; // Lấy dữ liệu ảnh từ route.params
  return (
    <ScrollView style={styles.container}>
      <Image
        source={{ uri: image }} // Sử dụng dữ liệu ảnh đã truyền vào
        style={styles.image}
        resizeMode="contain"
      />

      <View style={styles.textOverlay}>
        <Text style={styles.title}>Tên sản phẩm: {route.params?.name}</Text>
        <Text style={styles.details}>Chi tiết sản phẩm: {route.params?.chitiet}</Text>
        <Text style={styles.sizeLabel}>Chọn size:</Text>
      </View>
      <View style={styles.sizeContainer}>
        <TouchableOpacity
          onPress={() => chonSize('S')}
          style={[styles.sizeButton, size === 'S' && styles.selectedSizeButton]}
        >
          <Text style={styles.sizeButtonText}>S</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => chonSize('M')}
          style={[styles.sizeButton, size === 'M' && styles.selectedSizeButton]}
        >
          <Text style={styles.sizeButtonText}>M</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => chonSize('L')}
          style={[styles.sizeButton, size === 'L' && styles.selectedSizeButton]}
        >
          <Text style={styles.sizeButtonText}>L</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.soLuongContainer}>
        {/* <Text style={styles.soLuongLabel}>Số lượng:</Text> */}
        <TouchableOpacity onPress={giamSoLuong} style={styles.soLuongButton}>
          <Text style={styles.soLuongButtonText}>-</Text>
        </TouchableOpacity>
        <TextInput
          style={styles.soLuongInput}
          value={soLuong.toString()}
          keyboardType="numeric"
          onChangeText={(value) => setSoLuong(parseInt(value))}
        />
        <TouchableOpacity onPress={tangSoLuong} style={styles.soLuongButton}>
          <Text style={styles.soLuongButtonText}>+</Text>
        </TouchableOpacity>
      </View>



      <View style={styles.muahang}>
        <View style={styles.priceContainer}>
          <Text style={styles.priceLabel}>Giá tiền:</Text>
          <Text style={styles.price}>{giaTien} <Text style={styles.price_1}> đ</Text></Text>

        </View>
        <TouchableOpacity onPress={muaSanPham} style={styles.muaButton}>
          <Text style={styles.muaButtonText}>Mua Ngay</Text>
        </TouchableOpacity>
      </View>

      {/* <TouchableOpacity onPress={themVaoGioHang} style={styles.gioHangButton}>
                <Text style={styles.gioHangButtonText}>Thêm vào giỏ hàng</Text>
            </TouchableOpacity> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    backgroundColor: 'black'
  },
  image: {
    width: '100%',
    height: 535,
    marginBottom: 10,

  },
  textOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingBottom: 230,
    paddingLeft: 10,
    paddingTop: 10,
    borderRadius: 25
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white'
  },
  details: {
    marginBottom: 10,
    color: 'white'
  },
  soLuongContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    marginLeft: 50,
  },
  soLuongLabel: {
    marginRight: 10,
  },
  soLuongButton: {
    backgroundColor: '#DDDDDD',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
    margin: 10,
  },
  soLuongButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  soLuongInput: {
    borderColor: 'gray',
    width: 50,
    textAlign: 'center',
    height: 50,
    borderRadius: 10,
    fontSize: 20,
    color: 'white'
  },
  sizeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 60,
    marginTop: 20

  },
  sizeLabel: {
    marginRight: 10,
    fontSize: 17,
    marginBottom: 10,
    color: 'white'
  },
  sizeButton: {
    backgroundColor: '#141921',
    paddingHorizontal: 35,
    paddingVertical: 6,
    borderRadius: 10,
    marginRight: 10,
    
  },
  selectedSizeButton: {
    backgroundColor: '#141921',
    borderColor: '#D17842',
    borderWidth: 2,
  },
  sizeButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white'
  },
  muahang: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
    paddingHorizontal: 10,
    marginTop: 20
  },
  priceContainer: {
    backgroundColor: 'black',
    width: 150,
    paddingVertical: 3,
    alignItems: 'center',
    borderRadius: 20,
  },
  priceLabel: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  price: {
    marginBottom: 5,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  },
  price_1: {
    marginBottom: 5,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#D17842'
  },
  muaButton: {
    backgroundColor: '#FF5722',
    paddingHorizontal: 66,
    paddingVertical: 17,
    borderRadius: 20,
    marginLeft: 15,
  },
  muaButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  // gioHangButton: {
  //     backgroundColor: '#4CAF50',
  //     paddingHorizontal: 16,
  //     paddingVertical: 8,
  //     borderRadius: 4,
  // },
  // gioHangButtonText: {
  //     color: '#FFFFFF',
  //     fontSize: 18,
  //     fontWeight: 'bold',
  // },
});

// export default ChiTietSanPham;