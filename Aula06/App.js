import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import BasicExemple from './screens/BasicExemple';
import FormValidation from './screens/FormValidation';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Início" component={HomeScreen} />
        <Stack.Screen name="Exemplo Básico" component={BasicExemple} />
        <Stack.Screen name="Validação de Formulário" component={FormValidation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}