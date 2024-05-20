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

const KesiapanLebasPekerjaan = () => {
  const navigation = useNavigation();
  const [projectData, setProjectData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'http://192.168.1.12:5000/kesiapanLahan',
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
            <Text style={[styles.header, {width: 150}]}>No Item Pekerjaan</Text>
            <Text style={[styles.header, {width: 150}]}>
              Pilih Nama Item Pekerjaan
            </Text>
            <Text style={[styles.header, {width: 150}]}>Keterangan</Text>
            <Text style={[styles.header, {width: 150}]}>
              Pilih Kondisi Cuaca
            </Text>
            <Text style={[styles.header, {width: 150}]}>
              Dokumentasi Cuaca Di Amp
            </Text>
            <Text style={[styles.header, {width: 150}]}>
              GPS Dokumentasi Cuaca Di Amp
            </Text>
            <Text style={[styles.header, {width: 150}]}>
              Waktu Dokumentasi Cuaca Di Amp
            </Text>
            <Text style={[styles.header, {width: 150}]}>
              Pilih Kondisi Cuaca2
            </Text>
            <Text style={[styles.header, {width: 150}]}>
              Dokumentasi Cuaca Di Lahan Penghamparan
            </Text>
            <Text style={[styles.header, {width: 150}]}>
              GPS Dokumentasi Cuaca Di Lahan Penghamparan
            </Text>
            <Text style={[styles.header, {width: 150}]}>
              Waktu Dokumentasi Cuaca Di Lahan Penghamparan
            </Text>
            <Text style={[styles.header, {width: 150}]}>
              Pilih Kondisi Cuaca3
            </Text>
            <Text style={[styles.header, {width: 150}]}>
              Dokumentasi Kondisi Lahan
            </Text>
            <Text style={[styles.header, {width: 150}]}>
              GPS Dokumentasi Pengukuran Tebal
            </Text>
            <Text style={[styles.header, {width: 150}]}>
              Waktu Dokumentasi Pengukuran Tebal
            </Text>
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
              <Text style={[styles.cell, {width: 150}]}>{item.keterangan}</Text>
              <Text style={[styles.cell, {width: 150}]}>
                {item.kondisiCuaca}
              </Text>
              <Text style={[styles.cell, {width: 150}]}>
                {item.dokumentasiCuacaDiAmp}
              </Text>
              <Text style={[styles.cell, {width: 150}]}>
                {item.gpsDokumentasiCuacaDiAmp}
              </Text>
              <Text style={[styles.cell, {width: 150}]}>
                {item.waktuDokumentasiCuacaDiAmp}
              </Text>
              <Text style={[styles.cell, {width: 150}]}>
                {item.kondisiCuaca2}
              </Text>
              <Text style={[styles.cell, {width: 150}]}>
                {item.dokumentasiCuacaDiLahanPenghamparan}
              </Text>
              <Text style={[styles.cell, {width: 150}]}>
                {item.gpsDokumentasicuacaDiLahanPenghamparan}
              </Text>
              <Text style={[styles.cell, {width: 150}]}>
                {item.waktuDokumentasiCuacaDiLahanPenghamparan}
              </Text>
              <Text style={[styles.cell, {width: 150}]}>
                {item.kondisiCuaca3}
              </Text>
              <Text style={[styles.cell, {width: 150}]}>
                {item.DokumentasiKondisiLahan}
              </Text>
              <Text style={[styles.cell, {width: 150}]}>
                {item.gpsDokumentasiPengukuranTebal}
              </Text>
              <Text style={[styles.cell, {width: 150}]}>
                {item.waktuDokumentasiPengukurantebal}
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

export default KesiapanLebasPekerjaan;
