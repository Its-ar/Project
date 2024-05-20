import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';

const KesiapanLahan = () => {
  const navigation = useNavigation();
  const [selectedItem, setSelectedItem] = useState('');
  const [selectedItem2, setSelectedItem2] = useState('');
  const [keterangan, setKeterangan] = useState('');
  const [kondisiCuaca, setkondisiCuaca] = useState('');
  const [dokumentasiCuacaDiAmp, setDokumentasiCuacaDiAmp] = useState('');
  const [gpsDokumentasiCuacaDiAmp, setGpsDokumentasiCuacaDiAmp] = useState('');
  const [waktuDokumentasiCuacaDiAmp, setWaktuDokumentasiCuacaDiAmp] =
    useState('');
  const [kondisiCuaca2, setkondisiCuaca2] = useState('');
  const [
    dokumentasiCuacaDiLahanPenghamparan,
    setDokumentasiCuacaDiLahanPenghamparan,
  ] = useState('');
  const [
    gpsDokumentasiCuacaDiLahanPenghamparan,
    setGpsDokumentasiCuacaDiLahanPenghamparan,
  ] = useState('');
  const [
    waktuDokumentasiCuacaDiLahanPenghamparan,
    setWaktuDokumentasiCuacaDiLahanPenghamparan,
  ] = useState('');
  const [kondisiCuaca3, setkondisiCuaca3] = useState('');
  const [dokumentasiKondisiLahan, setDokumentasiKondisiLahan] = useState('');
  const [gpsDokumentasiPengukuranTebal, setGpsDokumentasiPengukuranTebal] =
    useState('');
  const [waktuDokumentasiPengukuranTebal, setWaktuDokumentasiPengukuranTebal] =
    useState('');

  const handleSimpan = async () => {
    const data = {
      selectedItem: selectedItem,
      selectedItem2: selectedItem2,
      keterangan: keterangan,
      kondisiCuaca: kondisiCuaca,
      dokumentasiCuacaDiAmp: dokumentasiCuacaDiAmp,
      gpsDokumentasiCuacaDiAmp: gpsDokumentasiCuacaDiAmp,
      waktuDokumentasiCuacaDiAmp: waktuDokumentasiCuacaDiAmp,
      kondisiCuaca2: kondisiCuaca2,
      dokumentasiCuacaDiLahanPenghamparan: dokumentasiCuacaDiLahanPenghamparan,
      gpsDokumentasicuacaDiLahanPenghamparan:
        gpsDokumentasiCuacaDiLahanPenghamparan,
      waktuDokumentasiCuacaDiLahanPenghamparan:
        waktuDokumentasiCuacaDiLahanPenghamparan,
      kondisiCuaca3: kondisiCuaca3,
      DokumentasiKondisiLahan: dokumentasiKondisiLahan,
      gpsDokumentasiPengukuranTebal: gpsDokumentasiPengukuranTebal,
      waktuDokumentasiPengukurantebal: waktuDokumentasiPengukuranTebal,
    };
    console.log('data =', data);
    await axios
      .post('http://192.168.1.12:5000/kesiapanLahan', data)
      .then(response => {
        console.log('res =', response.data);
        navigation.navigate('Home');
      })
      .catch(err => {
        console.log('error =', err.message);
      });
  };

  const handleBackToHome = () => navigation.navigate('Home');

  const handleSelectedItemChange = itemValue => {
    setSelectedItem(itemValue);
  };
  const handleSelectedItemChange1 = itemValue => {
    setSelectedItem2(itemValue);
  };
  const handleSelectedItemChange2 = itemValue => {
    setkondisiCuaca(itemValue);
  };
  const handleSelectedItemChange3 = itemValue => {
    setkondisiCuaca2(itemValue);
  };
  const handleSelectedItemChange4 = itemValue => {
    setkondisiCuaca3(itemValue);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.container}>
        <Text style={styles.title}>Kesiapan lahan</Text>
        <Text style={styles.title}>Pilih Nomor Item Pekerjaan</Text>
        <Picker
          selectedValue={selectedItem}
          onValueChange={handleSelectedItemChange}>
          <Picker.Item label=" 1" value="1" />
          <Picker.Item label=" 2" value="2" />
          <Picker.Item label=" 3" value="3" />
        </Picker>
        <Text style={styles.title}>Pilih Nama Item Pekerjaan</Text>
        <Picker
          selectedValue={selectedItem2}
          onValueChange={handleSelectedItemChange1}>
          <Picker.Item label=" 1" value="1" />
          <Picker.Item label=" 2" value="2" />
          <Picker.Item label=" 3" value="3" />
        </Picker>
        <Text style={styles.title}>Pilih Keterangan</Text>
        <TextInput
          style={styles.input}
          placeholder="Keterangan"
          value={keterangan}
          onChangeText={text => setKeterangan(text)}
        />
        <Text style={styles.title}>Pilih Kondisi Cuaca</Text>
        <Picker
          selectedValue={kondisiCuaca}
          onValueChange={handleSelectedItemChange2}>
          <Picker.Item label=" 1" value="1" />
          <Picker.Item label=" 2" value="2" />
          <Picker.Item label=" 3" value="3" />
        </Picker>
        <TextInput
          style={styles.input}
          placeholder="Dokumentasi Cuaca Di AMP"
          value={dokumentasiCuacaDiAmp}
          onChangeText={text => setDokumentasiCuacaDiAmp(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="GPS Dokumentasi Cuaca Di AMP"
          value={gpsDokumentasiCuacaDiAmp}
          onChangeText={text => setGpsDokumentasiCuacaDiAmp(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Waktu Dokumentasi Cuaca Di Amp"
          value={waktuDokumentasiCuacaDiAmp}
          onChangeText={text => setWaktuDokumentasiCuacaDiAmp(text)}
        />
        <Text style={styles.title}>Pilih Kondisi Cuaca</Text>
        <Picker
          selectedValue={kondisiCuaca2}
          onValueChange={handleSelectedItemChange3}>
          <Picker.Item label=" 1" value="1" />
          <Picker.Item label=" 2" value="2" />
          <Picker.Item label=" 3" value="3" />
        </Picker>
        <TextInput
          style={styles.input}
          placeholder="Dokumentasi Cuaca Di Lahan Penghamparan"
          value={dokumentasiCuacaDiLahanPenghamparan}
          onChangeText={text => setDokumentasiCuacaDiLahanPenghamparan(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="GPS Dokumentasi cuaca Di Lahan penghamparan"
          value={gpsDokumentasiCuacaDiLahanPenghamparan}
          onChangeText={text => setGpsDokumentasiCuacaDiLahanPenghamparan(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Waktu Dokumentasi cuaca Di Lahan penghamparan"
          value={waktuDokumentasiCuacaDiLahanPenghamparan}
          onChangeText={text =>
            setWaktuDokumentasiCuacaDiLahanPenghamparan(text)
          }
        />
        <Text style={styles.title}>Pilih Kondisi Cuaca</Text>
        <Picker
          selectedValue={kondisiCuaca3}
          onValueChange={handleSelectedItemChange4}>
          <Picker.Item label=" 1" value="1" />
          <Picker.Item label=" 2" value="2" />
          <Picker.Item label=" 3" value="3" />
        </Picker>
        <TextInput
          style={styles.input}
          placeholder="Dokumentasi Kondisi Lahan"
          value={dokumentasiKondisiLahan}
          onChangeText={text => setDokumentasiKondisiLahan(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="GPS Dokumentasi Pengukuran Tebal"
          value={gpsDokumentasiPengukuranTebal}
          onChangeText={text => setGpsDokumentasiPengukuranTebal(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Waktu Dokumentasi Pengukuran Tebal"
          value={waktuDokumentasiPengukuranTebal}
          onChangeText={text => setWaktuDokumentasiPengukuranTebal(text)}
        />
        <TouchableOpacity style={styles.button} onPress={handleSimpan}>
          <Text style={styles.buttonText}>Simpan</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleBackToHome}>
          <Text style={styles.buttonText}>back</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default KesiapanLahan;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  scrollView: {
    flexGrow: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
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
