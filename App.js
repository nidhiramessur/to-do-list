import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TodoListScreen from './components/screens/TodoListScreen';
import ProfileScreen from './components/screens/ProfileScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="TodoList">
          <Stack.Screen name="TodoList" component={TodoListScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;
