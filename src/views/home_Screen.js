import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, TextInput, StatusBar, ScrollView } from 'react-native';
// import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign'
import Icon1 from 'react-native-vector-icons/FontAwesome5'
import LinearGradient from 'react-native-linear-gradient';

export default HomeScreen = ({ navigation }) => {

  const [searchText, setSearchText] = useState('');
  const [activeTab, setActiveTab] = useState('Home');
  // nav
  // const handleSearch = () => {
  //   // Xử lý tìm kiếm dựa trên searchText
  //   console.log('Đã tìm kiếm: ' + searchText);
  //   // Thực hiện logic tìm kiếm ở đây, ví dụ: gọi API tìm kiếm, cập nhật danh sách sản phẩm, vv.
  // };

  const [originalData, setOriginalData] = useState([]);

  useEffect(() => {
    fetch('http://192.168.41.106:3000/asm')
      .then(rep => rep.json())
      .then(data => {
        setOriginalData(data); // Lưu trữ danh sách sản phẩm gốc
        setData(data);
        setLoading(false);
      })
      .catch(err => console.log(err));
  }, []);

  const handleSearch = (text) => {
    setSearchText(text); // Cập nhật searchText khi người dùng nhập liệu

    const filteredProducts = originalData.filter(item => item.name.toLowerCase().includes(text.toLowerCase()));
    setData(filteredProducts);
  };

  useEffect(() => {
    handleSearch(searchText);
  }, [searchText]);

  // const handleSearch = () => {
  //     const filteredProducts = originalData.filter(item => item.name.toLowerCase().includes(searchText.toLowerCase()));
  //     setData(filteredProducts);
  // };
  <View>
    <Image source={require('../image/Rectangle.png')} style={{ width: '100%', height: '100%', }} resizeMode='contain' />
  </View>


  // them san pham

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://10.24.32.167:3000/giohang')
      .then(rep => rep.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(err => console.log(err));

  }, []);

  const renderProductItem = ({ item }) => (

    <TouchableOpacity
      onPress={() => navigation.navigate('ChiTietSanPham', { name: item.name, chitiet: item.chitiet, image: item.image, gia: item.gia })}
      style={styles.productItem}
    >
      {item.image && <Image source={{ uri: item.image }} style={styles.productImage} />}
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productName}>{item.gia}<Text style={{ color: 'red' }}> đ</Text></Text>
    </TouchableOpacity>

  );

  const products = data.map(item => ({
    id: item.id,
    name: item.name,
    chitiet: item.chitiet,
    image: item.image,
    gia: item.gia
  }));

  useEffect(() => {
    fetch('http://192.168.41.106:3000/giohang')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  const giamSoLuong = (sanPham) => {
    const gioHangMoi = [...data];
    const indexSanPham = gioHangMoi.findIndex((sp) => sp.id === sanPham.id);

    if (indexSanPham !== -1) {
      if (gioHangMoi[indexSanPham].soluong > 1) {
        gioHangMoi[indexSanPham].soluong -= 1;
        setData(gioHangMoi);
      } else {
        gioHangMoi.splice(indexSanPham, 1);
        setData(gioHangMoi);
      }
    }
  };

  const tangSoLuong = (sanPham) => {
    const gioHangMoi = [...data];
    const indexSanPham = gioHangMoi.findIndex((sp) => sp.id === sanPham.id);

    if (indexSanPham !== -1) {
      gioHangMoi[indexSanPham].soluong += 1;
      setData(gioHangMoi);
    }
  };

  const tinhTongTien = () => {
    let tongTien = 0;
    data.forEach((sanPham) => {
      tongTien += sanPham.gia * sanPham.soluong;
    });
    return tongTien;
  };

  const renderSanPhamGioHang = ({ item }) => (
    <View style={[styles.sanPhamGioHang, styles.borderSanPham]}>
      <Image source={{ uri: item.hinhanh }} style={styles.hinhAnhSanPham} />
      {/* {item.hinhanh && <Image source={{ uri: item.hinhanh }} style={styles.hinhAnhSanPham} />} */}

      <View style={styles.chiTietSanPham}>
        <Text style={styles.tenSanPham}>{item.ten}</Text>
        <Text style={styles.kichThuocSanPham}>Size: {item.kichThuoc} </Text>
        <Text style={styles.kichThuocSanPham}>Giá: {item.gia}đ </Text>
        <View style={styles.soLuongSanPham}>
          <TouchableOpacity style={styles.soLuongSanPhamText} onPress={() => giamSoLuong(item)}>
            <Text style={styles.controlSanPham}>-</Text>
          </TouchableOpacity>
          <Text style={styles.soLuongSanPhamText}> {item.soluong}</Text>
          <TouchableOpacity style={styles.soLuongSanPhamText} onPress={() => tangSoLuong(item)}>
            <Text style={styles.controlSanPham}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );



  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor='rgba(0,0,0,0)' />
      {activeTab === 'Home' && (
        <View style={styles.tabContent}>
          <View style={styles.imageContainer}>
            <TouchableOpacity onPress={() => {
              navigation.navigate('Setting')
            }}>
              <Image source={require('../image/Rectangle.png')} style={styles.image1} />
              <Image source={require('../image/element-3.png')} style={styles.image2} />
            </TouchableOpacity>

            <Image source={require('../image/Intersect.png')} style={styles.image3} />
          </View>
          <View>
            <Text style={{ color: "white", fontSize: 28, fontWeight: 600, marginLeft: 30 }}>
              Find the best
            </Text>
            <Text style={{ color: "white", fontSize: 28, fontWeight: 600, marginLeft: 30 }}>
              coffee for you
            </Text>
          </View>

          <View style={styles.searchContainer}>
            <TouchableOpacity onPress={handleSearch}>
              <Image source={require('../image/search-normal.png')} style={styles.searchIcon} />
            </TouchableOpacity>
            <TextInput
              style={styles.searchInput}
              placeholder="Find Your Coffee..."
              placeholderTextColor={'#52555A'}
              value={searchText}
              onChangeText={text => setSearchText(text)}
            />
          </View>
          {loading ? (
            <Text>Loading...</Text>
          ) : (
            <FlatList
              data={products}
              renderItem={renderProductItem}
              keyExtractor={(item) => item.id.toString()}
              numColumns={2}
              columnWrapperStyle={styles.productColumn}
            />
          )}
        </View>
      )}

      {activeTab === 'Giohang' && (
        <View style={styles.tabContent}>
          <Text style={styles.tieude}>Giỏ Hàng</Text>
          {loading ? (
            <Text>Loading...</Text>
          ) : (
            <FlatList
              data={data}
              renderItem={renderSanPhamGioHang}
              keyExtractor={(item) => item.id.toString()}
            />
          )}
          <View style={styles.phantong}>
            <Text style={styles.tongtientra}>Tổng tiền: {tinhTongTien()} đ</Text>
            <TouchableOpacity style={styles.dathang} onPress={() => {
              navigation.navigate('Payment_Screen')
            }}>
              <Text style={styles.dathangtext}>Đặt hàng</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      {activeTab === 'YeuThich' && (

        <View style={styles.tabContent}>
          <ScrollView>
            <View style={{ flex: 0.4 }}>
              <View style={styles.ytimg}>
                <TouchableOpacity onPress={() => {
                  navigation.navigate('Setting')
                }}>
                  <Image source={require('../image/element-3.png')} style={styles.ytimage} />
                </TouchableOpacity>

                <Image source={require('../image/Intersect.png')} style={styles.ytimage1} />

              </View>
              <Text style={styles.yttext}>Favorites</Text>
            </View>

            <View style={styles.imgMain}>

              <Image source={require('../image/image_6_1.png')} style={{ width: 375, borderTopLeftRadius: 30, borderTopRightRadius: 30 }} />
              <Icon name='heart' style={styles.icon} size={15}></Icon>

            </View>

            <View style={styles.borderName}>
              <View style={styles.textName}>
                <Text style={{ color: 'white', fontWeight: 600, fontSize: 20 }}>Cappuccino</Text>
                <Text style={{ color: '#AEAEAE', fontWeight: 400, fontSize: 12 }}>With Steamed Milk</Text>
                <Icon name='star' style={styles.iconstar} size={20}> <Text style={{ color: 'white', fontSize: 16, fontWeight: 600 }}>4.5 <Text style={{ color: '#AEAEAE', fontWeight: 400, fontSize: 10 }}>(6,879)</Text></Text></Icon>
              </View>

              <View style={{ flexDirection: 'row', alignSelf: 'flex-end' }}>
                <View style={styles.buttonCoffee}>
                  <Image source={require('../image/Coffee_beanse.png')} />
                  <Text style={{ color: '#AEAEAE', fontWeight: 500, fontSize: 10 }}>Coffee</Text>
                </View>

                <View style={styles.buttonMilk}>
                  <Image source={require('../image/giot_nuoc.png')} />
                  <Text style={{ color: '#AEAEAE', fontWeight: 500, fontSize: 10 }}>Milk</Text>
                </View>

                <View style={styles.buttonMedium}>
                  <Text style={{ color: '#AEAEAE', fontWeight: 500, fontSize: 10 }}>Medium Roasted</Text>
                </View>
              </View>
            </View>


            <LinearGradient colors={['#808080', '#00FF00']} style={styles.footeryt}>
              {/* <View style={styles.footeryt}> */}
              <Text style={{ color: '#AEAEAE', fontWeight: 600, fontSize: 14, paddingLeft: 20, paddingTop: 20 }}>Description</Text>
              <Text style={{ color: 'white', fontWeight: 400, fontSize: 12, paddingLeft: 20 }}>Cappuccino is a latte made with more foam than</Text>
              <Text style={{ color: 'white', fontWeight: 400, fontSize: 12, paddingLeft: 20 }}>steamed milk, often with a sprinkle of cocoa</Text>
              <Text style={{ color: 'white', fontWeight: 400, fontSize: 12, paddingLeft: 20, paddingBottom: 20 }}>powder or cinnamon on top.</Text>
              {/* </View> */}
            </LinearGradient>




          </ScrollView>
        </View >
      )
      }

      <View style={styles.navBar}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'Home' && styles.activeTab]}
          onPress={() => setActiveTab('Home')}
        >
          <Image source={require('../image/home.png')} style={styles.iconImage} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'Giohang' && styles.activeTab]}
          onPress={() => setActiveTab('Giohang')}
        >
          <Image source={require('../image/group.png')} style={styles.iconImage} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'YeuThich' && styles.activeTab]}
          onPress={() => setActiveTab('YeuThich')}
        >
          <Image source={require('../image/heart.png')} style={styles.iconImage} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'ThongBao' && styles.activeTab]}
          onPress={() => setActiveTab('ThongBao')}
        >
          <Image source={require('../image/notification.png')} style={styles.iconImage} />
        </TouchableOpacity>
      </View>
    </View >
  );
};

const styles = StyleSheet.create({
  // main 
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'flex-end',
  },
  productColumn: {
    justifyContent: 'space-around',
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingVertical: 8,
    backgroundColor: '#f2f2f2',
  },
  tab: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    marginRight: 8,
  },
  activeTab: {
    backgroundColor: '#ccc',
  },
  tabContent: {
    flex: 1,
  },
  imageContainer: {
    position: 'relative',
    // width: '30%',
    height: '9%',
    marginTop: 30,
    marginLeft: 30
  },
  image1: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  image2: {
    position: 'absolute',
    top: 8,
    left: 7.5,

  },
  image3: {
    position: 'absolute',
    top: 0,
    left: "80%",

  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 15,
    marginBottom: 10,
    padding: 5,
    marginLeft: 30,
    marginRight: 30,
    backgroundColor: '#DDDDDD',
    marginTop: 40,
    marginBottom: 30
  },
  searchInput: {
    flex: 1,
    height: 40,
    color: 'black'
  },
  searchIcon: {
    width: 23,
    height: 23,
    marginLeft: 15,
    marginRight: 15
  },
  productList: {
    paddingBottom: 16,
  },
  productItem: {
    flex: 0.4,
    alignItems: 'center',
    marginBottom: 46,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    padding: 5,
    width: 100,
    height: 210,
    backgroundColor: '#222222',
  },
  productImage: {
    width: 120,
    height: 120,
    marginBottom: 13,
  },
  productName: {
    fontSize: 16,
    textAlign: 'center',
    color: 'white',
  },
  iconImage: {
    width: 24,
    height: 24,
    marginRight: 20,
    marginLeft: 20
  },
  // het main

  tieude: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: 'white',
    margin: 10
  },
  danhSachGioHang: {
    flexGrow: 1,
    margin: 10
  },
  separatorSanPham: {
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    marginBottom: 8,
  },
  containerSanPham: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sanPhamGioHang: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  borderSanPham: {
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 8,
    padding: 8,
  },
  hinhAnhSanPham: {
    width: 85,
    height: 85,
    marginRight: 12,
  },
  chiTietSanPham: {
    flex: 1,
  },
  tenSanPham: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: 'white'
  },
  kichThuocSanPham: {
    fontSize: 14,
    marginBottom: 8,
    color: 'white'
  },
  soLuongSanPham: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  controlSanPham: {
    fontSize: 18,
    paddingHorizontal: 8,
    color: 'white'
  },
  soLuongSanPhamText: {
    fontSize: 16,
    marginHorizontal: 8,
    color: 'white'
  },
  phantong: {
    borderTopWidth: 1,
    borderTopColor: 'lightgray',
    paddingTop: 5,
    paddingBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'gray'
  },
  tongtientra: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    paddingLeft: 10
  },
  text_d: {
    fontSize: 18,
    fontWeight: '500',
    color: 'red',
    paddingLeft: 10
  },
  dathang: {
    backgroundColor: 'blue',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  dathangtext: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },

  //Yêu thích
  ytimg: {
    top: 48,
    left: 20,
    height: 35,
    width: 36,
    padding: 9,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#21262E',
    flexDirection: 'row'
  },
  ytimage: {

  },
  ytimage1: {
    marginLeft: 320
  },
  icon: {
    position: 'absolute',
    top: 30,
    padding: 10,
    marginLeft: 315,
    borderRadius: 13,
    backgroundColor: '#21262E',
    color: 'red'
  },
  yttext: {
    marginTop: 20,
    fontWeight: '600',
    fontSize: 20,
    color: 'white',
    marginLeft: 165,
  },
  imgMain: {
    flex: 3,
    marginTop: 35,
    alignSelf: 'center'
  },
  borderName: {
    bottom: 25,
  },
  textName: {
    position: 'absolute',
    padding: 25,
    height: 140,
    bottom: 24,
    left: 18,
    right: 18,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.4)',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: 'rgba(0, 0, 0, 0.45)',
  },
  iconstar: {
    color: '#D17842',
    paddingTop: 30
  },
  buttonCoffee: {
    bottom: 100,
    backgroundColor: '#141921',
    marginRight: 20,
    borderRadius: 10,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonMilk: {
    bottom: 100,
    backgroundColor: '#141921',
    marginRight: -120,
    borderRadius: 10,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonMedium: {
    bottom: 40,
    backgroundColor: '#141921',
    marginRight: 40,
    borderRadius: 10,
    width: 120,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  footeryt: {
    marginTop: -48,
    paddingLeft: 10,
    marginLeft: 18,
    marginRight: 18,
    // backgroundColor: '#1C2027',
    borderBottomLeftRadius: 23,
    borderBottomRightRadius: 23,
    // borderWidth: 1,
    // borderColor: 'red',
    // height: 70, 
  }

});

// export default Main;