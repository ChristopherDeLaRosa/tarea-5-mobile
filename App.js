import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

// Screens
import HomeScreen from './screens/HomeScreen';
import CharactersScreen from './screens/CharactersScreen';
import CharacterDetailScreen from './screens/CharacterDetailScreen';
import MomentsScreen from './screens/MomentsScreen';
import MomentDetailScreen from './screens/MomentDetailScreen';
import AboutScreen from './screens/AboutScreen';
import MyStoryScreen from './screens/MyStoryScreen';
import ContactScreen from './screens/ContactScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#2c3e50',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'Rescatando al Soldado Ryan' }}
        />
        <Stack.Screen 
          name="Characters" 
          component={CharactersScreen} 
          options={{ title: 'Personajes' }}
        />
        <Stack.Screen 
          name="CharacterDetail" 
          component={CharacterDetailScreen} 
          options={{ title: 'Detalle del Personaje' }}
        />
        <Stack.Screen 
          name="Moments" 
          component={MomentsScreen} 
          options={{ title: 'Momentos Épicos' }}
        />
        <Stack.Screen 
          name="MomentDetail" 
          component={MomentDetailScreen} 
          options={{ title: 'Momento Épico' }}
        />
        <Stack.Screen 
          name="About" 
          component={AboutScreen} 
          options={{ title: 'Acerca de' }}
        />
        <Stack.Screen 
          name="MyStory" 
          component={MyStoryScreen} 
          options={{ title: 'Mi Historia' }}
        />
        <Stack.Screen 
          name="Contact" 
          component={ContactScreen} 
          options={{ title: 'Contrátame' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}