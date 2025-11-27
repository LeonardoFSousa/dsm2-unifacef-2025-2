import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

const compromissos = [
  { id: '1', horario: '09h30', descricao: 'Reunião "Daily"' },
  { id: '2', horario: '14h00', descricao: 'Reunião com cliente Carros & Carros' },
  { id: '3', horario: '16h30', descricao: 'Prazo final Projeto X' },
];

export default function MeusCompromissosScreen({ navigation }) {
  function handleBack() {
    navigation.goBack();
  }

  function renderItem({ item }) {
    return (
      <Text style={styles.itemText}>
        {item.horario}: {item.descricao}
      </Text>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <TouchableOpacity onPress={handleBack}>
          <Text style={styles.backArrow}>{'<'}</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Meus compromissos</Text>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.euLabel}>(Eu)</Text>
        <Text style={styles.name}>Leonardo Ferreira de Sousa</Text>
        <Text style={styles.className}>Engenharia de Software 2023</Text>
      </View>

      <FlatList
        data={compromissos}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
    paddingTop: 40,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  backArrow: {
    fontSize: 20,
    marginRight: 8,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  infoContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  euLabel: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
  },
  name: {
    fontSize: 14,
    marginBottom: 2,
  },
  className: {
    fontSize: 14,
  },
  listContent: {
    paddingTop: 8,
  },
  itemText: {
    fontSize: 14,
    marginBottom: 12,
  },
});
