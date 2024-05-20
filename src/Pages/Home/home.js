import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();

  const handlePress = screen => {
    navigation.navigate(screen);
  };

  return (
    <View style={styles.container}>
      <View style={[styles.buttonsContainer, styles.topButtonsContainer]}>
        <TouchableOpacity
          style={[styles.buttonContainer, styles.primaryButton]}
          onPress={() => handlePress('InformasiProyek')}>
          <Text style={styles.buttonText}>Form Informasi Proyek</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.buttonContainer, styles.primaryButton]}
          onPress={() => handlePress('DimensiKerjaan')}>
          <Text style={styles.buttonText}>Dimensi kerjaan</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.buttonContainer, styles.primaryButton]}
          onPress={() => handlePress('KesiapanLahan')}>
          <Text style={styles.buttonText}>Kesiapan Lahan</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={[styles.buttonContainer, styles.secondaryButton]}
          onPress={() => handlePress('InfoProyek')}>
          <Text style={styles.buttonText}>Info Proyek</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.buttonContainer, styles.secondaryButton]}
          onPress={() => handlePress('DimensiPekerjaan')}>
          <Text style={styles.buttonText}>Dimensi Pekerjaan</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.buttonContainer, styles.secondaryButton]}
          onPress={() => handlePress('KesiapanLebasPekerjaan')}>
          <Text style={styles.buttonText}>Kesiapan Labas Pekerjaan</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={[styles.bottomButton]}
        onPress={() => handlePress('Login')}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
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
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 5,
  },
  topButtonsContainer: {
    marginBottom: 50, // Tambahkan margin vertikal di sini
  },
  buttonContainer: {
    width: 150,
    height: 100,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOpacity: 0.2, // Shadow for iOS
    shadowOffset: {width: 0, height: 2}, // Shadow for iOS
  },
  primaryButton: {
    backgroundColor: '#007bff',
    margin: 10,
  },
  secondaryButton: {
    backgroundColor: '#00ccff',
    margin: 10,
  },
  bottomButton: {
    position: 'absolute',
    bottom: 20,
    backgroundColor: '#ff3300',
    width: 100,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
  },
});

export default Home;
