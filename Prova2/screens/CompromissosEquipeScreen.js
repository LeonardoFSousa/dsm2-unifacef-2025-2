// screens/CompromissosEquipeScreen.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, SectionList } from 'react-native';

const meusCompromissos = [
  { id: '1', horario: '09h30', descricao: 'Reunião "Daily"' },
  { id: '2', horario: '14h00', descricao: 'Reunião com cliente Carros & Carros' },
  { id: '3', horario: '16h30', descricao: 'Prazo final Projeto X' },
];

const compromissosEquipe = [
  {
    title: 'Jurema (chefe)',
    data: [
      { id: '4', horario: '09h30', descricao: 'Reunião "Daily"' },
      { id: '5', horario: '12h00', descricao: 'Almoço com a diretoria' },
      { id: '6', horario: '15h00', descricao: 'Saída viagem' },
    ],
  },
  {
    title: 'Aderbal',
    data: [
      { id: '7', horario: '09h30', descricao: 'Reunião "Daily"' },
      { id: '8', horario: '13h30', descricao: 'Visita técnica Uni-FACEF' },
      { id: '9', horario: '16h30', descricao: 'Prazo final Projeto X' },
    ],
  },
];

export default function CompromissosEquipeScreen({ navigation }) {
  function handleBack() {
    navigation.goBack();
  }

  function renderMeuItem({ item }) {
    return (
      <Text style={styles.itemText}>
        {item.horario}: {item.descricao}
      </Text>
    );
  }

  function renderEquipeItem({ item }) {
    return (
      <Text style={styles.itemText}>
        {item.horario}: {item.descricao}
      </Text>
    );
  }

  function renderSectionHeader({ section }) {
    return <Text style={styles.sectionHeader}>{section.title}</Text>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <TouchableOpacity onPress={handleBack}>
          <Text style={styles.backArrow}>{'<'}</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Compromissos de equipe</Text>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.name}>Leonardo Ferreira de Sousa</Text>
        <Text style={styles.className}>Engenharia de Software 2023</Text>
        <Text style={styles.euLabel}>(Eu)</Text>
      </View>

      <FlatList
        data={meusCompromissos}
        keyExtractor={(item) => item.id}
        renderItem={renderMeuItem}
        contentContainerStyle={styles.myListContent}
      />

      <SectionList
        sections={compromissosEquipe}
        keyExtractor={(item) => item.id}
        renderItem={renderEquipeItem}
        renderSectionHeader={renderSectionHeader}
        contentContainerStyle={styles.teamListContent}
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
    marginBottom: 16,
  },
  name: {
    fontSize: 14,
    marginBottom: 2,
  },
  className: {
    fontSize: 14,
    marginBottom: 4,
  },
  euLabel: {
    fontSize: 18,
    fontWeight: '600',
  },
  myListContent: {
    paddingTop: 4,
  },
  teamListContent: {
    paddingTop: 4,
  },
  itemText: {
    fontSize: 14,
    marginBottom: 4,
  },
  sectionHeader: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 8,
    marginBottom: 4,
    textAlign: 'center',
  },
});
