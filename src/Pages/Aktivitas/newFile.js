import {Text, View} from 'react-native';
import React from 'react';
import {styles} from './DimensiPekerjaan';

return (
  <View style={styles.container}>
    <Text style={styles.title}>Informasi Proyek</Text>
    <View style={styles.table}>
      {/* Render judul kolom */}
      <View style={styles.row}>
        <Text style={styles.header}>No</Text>
        <Text style={styles.header}>Nomor Kontrak</Text>
        <Text style={styles.header}>Nama Paket</Text>
        <Text style={styles.header}>Nama SATKER</Text>
        <Text style={styles.header}>Nama PPK</Text>
        <Text style={styles.header}>Nama Kontrak</Text>
        <Text style={styles.header}>Lokasi Pekerjaan</Text>
        <Text style={styles.header}>Tanggal Kontrak</Text>
        <Text style={styles.header}>Masa pelaksanaan</Text>
        <Text style={styles.header}>Tanggal PHO</Text>
        {/* Tambahkan judul kolom untuk data proyek lainnya */}
      </View>
      <View style={styles.row}>
        <Text style={styles.cell}>id</Text>
        <Text style={styles.cell}>NomorKontrak</Text>
        <Text style={styles.cell}>NamaPaket</Text>
        <Text style={styles.cell}>NamaSATKER</Text>
        <Text style={styles.cell}>NamaPPK</Text>
        <Text style={styles.cell}>NilaiKontrak</Text>
        <Text style={styles.cell}>LokasiPekerjaan</Text>
        <Text style={styles.cell}>TanggalKontrak</Text>
        <Text style={styles.cell}>MasaPelaksanaan</Text>
        <Text style={styles.cell}>TanggalPHO</Text>
        {/* Tambahkan cell untuk data proyek lainnya */}
      </View>
    </View>
    {/* Tambahkan TextInput untuk data proyek lainnya */}
    {/* <TouchableOpacity style={styles.button} onPress={handleSimpan}>
          <Text style={styles.buttonText}>Simpan</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleBackToHome}>
          <Text style={styles.buttonText}>Kembali</Text>
        </TouchableOpacity> */}
  </View>
);
