import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const Register = ({navigation}) => {
  const handleRegister = () => {
    // Lakukan proses pendaftaran disini
    // Misalnya, validasi input dan simpan ke database
    // Setelah berhasil mendaftar, Anda dapat mengarahkan pengguna ke halaman lain, seperti halaman login
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registrasi</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nama"
          placeholderTextColor="#808080"
        />
        <TextInput
          style={styles.input}
          placeholder="Jabatan"
          placeholderTextColor="#808080"
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#808080"
          secureTextEntry={true}
        />
        <TouchableOpacity
          style={styles.registerButton}
          onPress={handleRegister}>
          <Text style={styles.buttonText}>Daftar</Text>
        </TouchableOpacity>
        <Text style={styles.registerText}>
          sudah punya Akun ? silahkan Login{' '}
          <Text style={styles.linkText} onPress={handleRegister}>
            disini
          </Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 24,
    marginBottom: 30,
  },
  inputContainer: {
    width: '80%',
  },
  input: {
    height: 50,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  registerButton: {
    height: 50,
    backgroundColor: '#007bff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
  },
  registerText: {
    fontSize: 16,
    textAlign: 'center',
  },
  linkText: {
    color: '#007bff',
    textDecorationLine: 'underline',
  },
});

export default Register;
