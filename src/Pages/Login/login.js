import React, {useContext, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';

const Login = ({navigation}) => {
  const [Username, setUsername] = useState(null);
  const [Password, setPassword] = useState(null);
  // const val = useContext(AuthConText)
  const handleLogin = () => {
    // Lakukan proses autentikasi disini
    // Jika autentikasi berhasil, navigasikan ke halaman Home
    navigation.navigate('Home');
  };
  const handleRegister = () => {
    // Navigasikan pengguna ke halaman pendaftaran
    navigation.navigate('Register');
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../img/kontraktor.png')} style={styles.logo} />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={Username}
          placeholder="Username"
          placeholderTextColor="#808080"
          onChangeText={text => setUsername(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={Password}
          placeholderTextColor="#808080"
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}
        />
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.registerText}>
          Belum punya Akun ? silahkan Registrasi{' '}
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
    backgroundColor: '#aeceef',
  },
  logo: {
    width: 150,
    height: 150,
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
  loginButton: {
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

export default Login;
