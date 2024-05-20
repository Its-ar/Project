import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {Picker} from '@react-native-picker/picker';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';

const DimensiKerjaan = () => {
  const navigation = useNavigation();

  const [selectedItem, setSelectedItem] = useState('');
  const [selectedItem2, setSelectedItem2] = useState('');
  const [peruntukan, setperuntukan] = useState('');
  const [panjangPekerjaan, setpanjangPekerjaan] = useState('');
  const [pengukuranPanjang, setpengukuranPanjang] = useState('');
  const [dokumentasiPanjang, setdokumentasiPanjang] = useState('');
  const [gpsDokumentasiPanjang, setgpsDokumentasiPanjang] = useState('');
  const [waktuDokumentasiPanjang, setwaktuDokumentasiPanjang] = useState('');
  const [lebarPekerjaan, setlebarPekerjaan] = useState('');
  const [pengukuranLebar, setpengukuranLebar] = useState('');
  const [dokumentasiLebar, setdokumentasiLebar] = useState('');
  const [gpsDokumentasiLebar, setgpsDokumentasiLebar] = useState('');
  const [waktuDokumentasiLebar, setwaktuDokumentasiLebar] = useState('');
  const [tebalPekerjaan, settebalPekerjaan] = useState('');
  const [pengukuranTebal, setpengukuranTebal] = useState('');
  const [dokumentasiTebal, setdokumentasiTebal] = useState('');
  const [gpsDokumentasiTebal, setgpsDokumentasiTebal] = useState('');
  const [waktuDokumentasiTebal, setwaktuDokumentasitebal] = useState('');

  const handleSimpan = async () => {
    // Lakukan sesuatu dengan data proyek yang telah diisi
    const data = {
      selectedItem: selectedItem,
      selectedItem2: selectedItem2,
      peruntukan: peruntukan,
      panjangPekerjaan: panjangPekerjaan,
      pengukuranPanjang: pengukuranPanjang,
      dokumentasiPanjang: dokumentasiPanjang,
      gpsDokumentasiPanjang: gpsDokumentasiPanjang,
      waktuDokumentasiPanjang: waktuDokumentasiPanjang,
      lebarPekerjaan: lebarPekerjaan,
      pengukuranLebar: pengukuranLebar,
      dokumentasiLebar: dokumentasiLebar,
      gpsDokumentasiLebar: gpsDokumentasiLebar,
      waktuDokumentasiLebar: waktuDokumentasiLebar,
      tebalPekerjaan: tebalPekerjaan,
      pengukuranTebal: pengukuranTebal,
      dokumentasiTebal: dokumentasiTebal,
      gpsDokumentasiTebal: gpsDokumentasiTebal,
      waktuDokumentasiTebal: waktuDokumentasiTebal,
    };
    console.log('data = ', data);
    await axios
      .post('http://192.168.1.12:5000/dimensiPekerjaan', data)
      .then(response => {
        console.log('res = ', response.data);
        navigation.navigate('Home');
      })
      .catch(error => {
        if (error.response) {
          console.log('error = ', error.response);
        }
      });
  };

  const handleBackToHome = () => navigation.navigate('Home');

  const handleSelectedItemChange = itemValue => {
    setSelectedItem(itemValue);
  };
  const handleSelectedItemChange1 = itemValue => {
    setSelectedItem2(itemValue);
  };

  return (
    <ScrollView contentContainerStyle={styles.ScrollView}>
      <View style={styles.container}>
        <Text style={styles.title}>Pelaporan Dimensi Pekerjaan</Text>
        <Text style={styles.title}>pilih nomor Item Pekerjaan</Text>
        <Picker
          selectedValue={selectedItem}
          onValueChange={handleSelectedItemChange}>
          <Picker.Item label=" 1" value="1" />
          <Picker.Item label=" 2" value="2" />
          <Picker.Item label=" 3" value="3" />
        </Picker>
        <Text style={styles.title}>pilih nama item Pekerjaan</Text>
        <Picker
          selectedValue={selectedItem2}
          onValueChange={handleSelectedItemChange1}>
          <Picker.Item label=" 1" value="1" />
          <Picker.Item label=" 2" value="2" />
          <Picker.Item label=" 3" value="3" />
        </Picker>
        <Text style={styles.title}>pilih nama item Pekerjaan</Text>
        <TextInput
          style={styles.input}
          placeholder="Peruntukan"
          value={peruntukan}
          onChangeText={text => setperuntukan(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Panjang Pekerjaan (m)"
          value={panjangPekerjaan}
          onChangeText={text => setpanjangPekerjaan(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Pengukuran Panjang"
          value={pengukuranPanjang}
          onChangeText={text => setpengukuranPanjang(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Dokumentasi"
          value={dokumentasiPanjang}
          onChangeText={text => setdokumentasiPanjang(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="GPS Dokumentasi"
          value={gpsDokumentasiPanjang}
          onChangeText={text => setgpsDokumentasiPanjang(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Waktu Dokumentasi"
          value={waktuDokumentasiPanjang}
          onChangeText={text => setwaktuDokumentasiPanjang(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Lebar Pekerjaan (m)"
          value={lebarPekerjaan}
          onChangeText={text => setlebarPekerjaan(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Pengukuran Lebar"
          value={pengukuranLebar}
          onChangeText={text => setpengukuranLebar(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Dokumentasi"
          value={dokumentasiLebar}
          onChangeText={text => setdokumentasiLebar(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="GPS Dokumentasi"
          value={gpsDokumentasiLebar}
          onChangeText={text => setgpsDokumentasiLebar(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Waktu Dokumentasi"
          value={waktuDokumentasiLebar}
          onChangeText={text => setwaktuDokumentasiLebar(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Tebal Pekerjaan (m)"
          value={tebalPekerjaan}
          onChangeText={text => settebalPekerjaan(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Pengukuran Tebal"
          value={pengukuranTebal}
          onChangeText={text => setpengukuranTebal(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Dokumentasi"
          value={dokumentasiTebal}
          onChangeText={text => setdokumentasiTebal(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="GPS Dokumentasi"
          value={gpsDokumentasiTebal}
          onChangeText={text => setgpsDokumentasiTebal(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Waktu Dokumentasi"
          value={waktuDokumentasiTebal}
          onChangeText={text => setwaktuDokumentasitebal(text)}
        />

        <TouchableOpacity style={styles.button} onPress={handleSimpan}>
          <Text style={styles.buttonText}>Simpan</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleBackToHome}>
          <Text style={styles.buttonText}>bac</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  ScrollView: {
    flexGrow: 1,
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

export default DimensiKerjaan;
