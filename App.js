import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ListaTarefas from './screens/listaTarefas';
import CadastroTarefas from './screens/cadastroTarefas';
import { openDatabase } from './database/database';

const Stack = createStackNavigator();

const App = () => {
    useEffect(() => {
        openDatabase();
    }, []);

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="To Do List">
                <Stack.Screen name="To Do List" component={ListaTarefas} />
                <Stack.Screen name="Cadastrar atividade" component={CadastroTarefas} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;