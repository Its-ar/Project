import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';

const DimensiKerjaan = () => {
  const navigation = useNavigation();
  const [projectData, setProjectData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'http://192.168.1.12:5000/dimensiPekerjaan',
        );
        setProjectData(response.data.data);
      } catch (error) {
        console.error('Error:', error.message);
      }
    };

    fetchData();
  }, []);

  const handleBackToHome = () => {
    navigation.navigate('Home');
  };

  return (
    <ScrollView horizontal={true} style={styles.container}>
      <ScrollView style={{flex: 1}}>
        <View style={styles.table}>
          <View style={styles.row}>
            <Text style={[styles.header, {width: 50}]}>No</Text>
            <Text style={[styles.header, {width: 150}]}>No Item</Text>
            <Text style={[styles.header, {width: 150}]}>Nama Item</Text>
            <Text style={[styles.header, {width: 150}]}>Peruntukan</Text>
            <Text style={[styles.header, {width: 150}]}>Panjang Pekerjaan</Text>
            <Text style={[styles.header, {width: 150}]}>Dokumentasi</Text>
            <Text style={[styles.header, {width: 150}]}>
              Pengukuran Panjang
            </Text>
            <Text style={[styles.header, {width: 150}]}>GPS Dokumentasi</Text>
            <Text style={[styles.header, {width: 150}]}>Waktu Dokumentasi</Text>
            <Text style={[styles.header, {width: 150}]}>Lebar Pekerjaan</Text>
            <Text style={[styles.header, {width: 150}]}>Dokumentasi</Text>
            <Text style={[styles.header, {width: 150}]}>Pengukuran Lebar</Text>
            <Text style={[styles.header, {width: 150}]}>GPS Dokumentasi</Text>
            <Text style={[styles.header, {width: 150}]}>Waktu Dokumentasi</Text>
            <Text style={[styles.header, {width: 150}]}>Tebal Pekerjaan</Text>
            <Text style={[styles.header, {width: 150}]}>Dokumentasi</Text>
            <Text style={[styles.header, {width: 150}]}>Pengukuran Tebal</Text>
            <Text style={[styles.header, {width: 150}]}>GPS Dokumentasi</Text>
            <Text style={[styles.header, {width: 150}]}>Waktu Dokumentasi</Text>
          </View>
          {projectData.map((item, index) => (
            <View style={styles.row} key={index}>
              <Text style={[styles.cell, {width: 50}]}>{item.id}</Text>
              <Text style={[styles.cell, {width: 150}]}>
                {item.selectedItem}
              </Text>
              <Text style={[styles.cell, {width: 150}]}>
                {item.selectedItem2}
              </Text>
              <Text style={[styles.cell, {width: 150}]}>{item.peruntukan}</Text>
              <Text style={[styles.cell, {width: 150}]}>
                {item.panjangPekerjaan}
              </Text>
              <Text style={[styles.cell, {width: 150}]}>
                {item.dokumentasiPanjang}
              </Text>
              <Text style={[styles.cell, {width: 150}]}>
                {item.pengukuranPanjang}
              </Text>
              <Text style={[styles.cell, {width: 150}]}>
                {item.gpsDokumentasiPanjang}
              </Text>
              <Text style={[styles.cell, {width: 150}]}>
                {item.waktuDokumentasiPanjang}
              </Text>
              <Text style={[styles.cell, {width: 150}]}>
                {item.lebarPekerjaan}
              </Text>
              <Text style={[styles.cell, {width: 150}]}>
                {item.dokumentasiLebar}
              </Text>
              <Text style={[styles.cell, {width: 150}]}>
                {item.pengukuranLebar}
              </Text>
              <Text style={[styles.cell, {width: 150}]}>
                {item.gpsDokumentasiLebar}
              </Text>
              <Text style={[styles.cell, {width: 150}]}>
                {item.waktuDokumentasiLebar}
              </Text>
              <Text style={[styles.cell, {width: 150}]}>
                {item.tebalPekerjaan}
              </Text>
              <Text style={[styles.cell, {width: 150}]}>
                {item.dokumentasiTebal}
              </Text>
              <Text style={[styles.cell, {width: 150}]}>
                {item.pengukuranTebal}
              </Text>
              <Text style={[styles.cell, {width: 150}]}>
                {item.gpsDokumentasiTebal}
              </Text>
              <Text style={[styles.cell, {width: 150}]}>
                {item.waktuDokumentasiTebal}
              </Text>
            </View>
          ))}
          <TouchableOpacity style={styles.button} onPress={handleBackToHome}>
            <Text style={styles.buttonText}>Kembali</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
  },
  table: {
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#007bff',
    paddingVertical: 10,
    alignItems: 'center',
  },
  header: {
    paddingHorizontal: 5,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  cell: {
    paddingHorizontal: 5,
    textAlign: 'center',
  },
});

export default DimensiKerjaan;
