import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';

const InformasiProyek = () => {
  const navigation = useNavigation();
  const [nomorKontrak, setnomorKontrak] = useState('');
  const [namaPaket, setnamaPaket] = useState('');
  const [namaSatker, setnamaSatker] = useState('');
  const [namaPkk, setnamaPkk] = useState('');
  const [nilaiKontrak, setnilaiKontrak] = useState('');
  const [lokasiPekerjaan, setlokasiPekerjaan] = useState('');
  const [tanggalKontrak, settanggalKontrak] = useState('');
  const [masaPelaksanaan, setmasaPelaksanaan] = useState('');
  const [tanggalPho, settanggalpho] = useState('');

  const handleSimpan = async () => {
    const data = {
      NomorKontrak: nomorKontrak,
      NamaPaket: namaPaket,
      NamaSATKER: namaSatker,
      NamaPPK: namaPkk,
      NilaiKontrak: nilaiKontrak,
      LokasiPekerjaan: lokasiPekerjaan,
      TanggalKontrak: tanggalKontrak,
      MasaPelaksanaan: masaPelaksanaan,
      TanggalPHO: tanggalPho,
    };
    console.log('data', data);
    await axios
      .post('http://192.168.1.12:5000/proyect', data)
      .then(response => {
        console.log('res: ', response.data);
        navigation.navigate('Home');
        // Tambahkan logika untuk menangani respons dari backend
      })
      .catch(error => {
        if (error.response) {
          // Request made and server responded
          console.log('ha1', error.response.data);
          console.log('aha2', error.response.status);
          console.log('ahaa3', error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          console.log('ahaaa4', error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error4', error.message);
        }
      });
  };

  const handleBackToHome = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Informasi Proyek</Text>
      <TextInput
        style={styles.input}
        placeholder="Nomor Kontrak"
        value={nomorKontrak}
        onChangeText={text => setnomorKontrak(text)}
      />
      <TextInput
        style={[styles.input]}
        placeholder="Nama Paket"
        value={namaPaket}
        onChangeText={text => setnamaPaket(text)}
      />
      <TextInput
        style={[styles.input]}
        placeholder="Nama SATKER"
        value={namaSatker}
        onChangeText={text => setnamaSatker(text)}
      />
      <TextInput
        style={[styles.input]}
        placeholder="Nama PPK"
        value={namaPkk}
        onChangeText={text => setnamaPkk(text)}
      />
      <TextInput
        style={[styles.input]}
        placeholder="Nilai Kontrak (Rp)"
        value={nilaiKontrak}
        onChangeText={text => setnilaiKontrak(text)}
      />
      <TextInput
        style={[styles.input]}
        placeholder="Lokasi Pekerjaan"
        value={lokasiPekerjaan}
        onChangeText={text => setlokasiPekerjaan(text)}
      />
      <TextInput
        style={[styles.input]}
        placeholder="Tanggal Kontrak"
        value={tanggalKontrak}
        onChangeText={text => settanggalKontrak(text)}
      />
      <TextInput
        style={[styles.input]}
        placeholder="Masa Pelaksanaan (hari)"
        value={masaPelaksanaan}
        onChangeText={text => setmasaPelaksanaan(text)}
      />
      <TextInput
        style={[styles.input]}
        placeholder="Tanggal PHO"
        value={tanggalPho}
        onChangeText={text => settanggalpho(text)}
      />
      <TouchableOpacity style={styles.button} onPress={handleSimpan}>
        <Text style={styles.buttonText}>Simpan</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleBackToHome}>
        <Text style={styles.buttonText}>back</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top', // membuat text area memulai dari atas
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
  },
});

export default InformasiProyek;
