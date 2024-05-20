import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';

const InformasiProyek = () => {
  const navigation = useNavigation();
  const [projectData, setProjectData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://192.168.1.12:5000/proyect');
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
      {/* <Text style={styles.title}>Informasi Proyek</Text> */}
      <ScrollView style={{flex: 1}}>
        <View style={styles.table}>
          {/* Render judul kolom */}
          <View style={styles.row}>
            <Text style={[styles.header, {width: 50}]}>No</Text>
            <Text style={[styles.header, {width: 150}]}>Nomor Kontrak</Text>
            <Text style={[styles.header, {width: 150}]}>Nama Paket</Text>
            <Text style={[styles.header, {width: 150}]}>Nama SATKER</Text>
            <Text style={[styles.header, {width: 150}]}>Nama PPK</Text>
            <Text style={[styles.header, {width: 150}]}>Nama Kontrak</Text>
            <Text style={[styles.header, {width: 150}]}>Lokasi Pekerjaan</Text>
            <Text style={[styles.header, {width: 150}]}>Tanggal Kontrak</Text>
            <Text style={[styles.header, {width: 150}]}>Masa pelaksanaan</Text>
            <Text style={[styles.header, {width: 150}]}>Tanggal PHO</Text>
          </View>
          {/* Render data proyek */}
          {projectData.map((item, index) => (
            <View style={styles.row} key={index}>
              <Text style={[styles.cell, {width: 50}]}>{item.id}</Text>
              <Text style={[styles.cell, {width: 150}]}>
                {item.NomorKontrak}
              </Text>
              <Text style={[styles.cell, {width: 150}]}>{item.NamaPaket}</Text>
              <Text style={[styles.cell, {width: 150}]}>{item.NamaSATKER}</Text>
              <Text style={[styles.cell, {width: 150}]}>{item.NamaPPK}</Text>
              <Text style={[styles.cell, {width: 150}]}>
                {item.NilaiKontrak}
              </Text>
              <Text style={[styles.cell, {width: 150}]}>
                {item.LokasiPekerjaan}
              </Text>
              <Text style={[styles.cell, {width: 150}]}>
                {item.TanggalKontrak}
              </Text>
              <Text style={[styles.cell, {width: 150}]}>
                {item.MasaPelaksanaan}
              </Text>
              <Text style={[styles.cell, {width: 150}]}>{item.TanggalPHO}</Text>
            </View>
          ))}
          <TouchableOpacity style={styles.button} onPress={handleBackToHome}>
            <Text style={styles.buttonText}>back</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
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
    fontSize: 12,
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
    alignItems: 'center', // Agar teks di tengah vertikal
  },
  header: {
    paddingHorizontal: 5,
    fontWeight: 'bold',
    textAlign: 'center', // Agar teks rata tengah
  },
  cell: {
    paddingHorizontal: 5,
    textAlign: 'center', // Agar teks rata tengah
  },
});

export default InformasiProyek;
