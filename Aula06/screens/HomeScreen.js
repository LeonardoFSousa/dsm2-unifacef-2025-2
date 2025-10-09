import { View, Text, Button, StyleSheet } from 'react-native';
export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Tela Inicial</Text>
            <Button
                title="Ir para Exemplo Básico"
                onPress={() => navigation.navigate('Exemplo Básico')}
            />
            <Button
                title="Ir para Validação de Formulário"
                onPress={() => navigation.navigate('Validação de Formulário')}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', gap: 10 },
    titulo: { fontSize: 24, fontWeight: 'bold' }
});