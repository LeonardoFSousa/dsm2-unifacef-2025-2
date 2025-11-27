import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function InicioScreen({ navigation }) {
  function handleMeusCompromissos() {
    navigation.navigate('MeusCompromissos');
  }

  function handleCompromissosEquipe() {
    navigation.navigate('CompromissosEquipe');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Início</Text>

      <View style={styles.content}>
        <Text style={styles.agendaTitle}>Agenda do dia</Text>
        <Text style={styles.name}>Leonardo Ferreira de Sousa</Text>
        <Text style={styles.className}>Engenharia de Software 2023</Text>
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={handleMeusCompromissos}
        >
          <Text style={styles.buttonText}>Meus compromissos</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={handleCompromissosEquipe}
        >
          <Text style={styles.buttonText}>Compromissos de equipe</Text>
        </TouchableOpacity>
      </View>
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
  title: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 32,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  agendaTitle: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 8,
  },
  name: {
    fontSize: 16,
    marginBottom: 4,
  },
  className: {
    fontSize: 16,
  },
  buttonsContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  button: {
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 24,
    marginBottom: 12,
  },
  buttonText: {
    fontSize: 16,
  },
});
