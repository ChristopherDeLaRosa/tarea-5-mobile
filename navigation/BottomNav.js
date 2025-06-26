// src/navigation/BottomNav.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

/**
 * Barra inferior reutilizable.
 * Recibe la vista actual y el callback para navegar (“onNavigate”).
 */
const BottomNav = ({ currentView, onNavigate }) => {
  return (
    <View style={styles.bar}>
      <NavItem
        label="Personajes"
        icon={<Ionicons name="person" size={24} color="white" />}
        active={currentView === 'characters'}
        onPress={() => onNavigate('characters')}
      />
      <NavItem
        label="Momentos"
        icon={<FontAwesome name="film" size={24} color="white" />}
        active={currentView === 'moments'}
        onPress={() => onNavigate('moments')}
      />
      <NavItem
        label="Acerca de"
        icon={<MaterialIcon name="info" size={24} color="white" />}
        active={currentView === 'about'}
        onPress={() => onNavigate('about')}
      />
      <NavItem
        label="En mi vida"
        icon={<FontAwesome name="heart" size={24} color="white" />}
        active={currentView === 'mylife'}
        onPress={() => onNavigate('mylife')}
      />
      <NavItem
        label="Contrátame"
        icon={<MaterialIcon name="mail" size={24} color="white" />}
        active={currentView === 'contact'}
        onPress={() => onNavigate('contact')}
      />
    </View>
  );
};

// Un ítem de la barra – se mantiene muy simple
const NavItem = ({ label, icon, onPress, active }) => (
  <TouchableOpacity style={styles.item} onPress={onPress}>
    {icon}
    <Text style={[styles.text, active && styles.active]}>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  bar: {
    flexDirection: 'row',
    backgroundColor: 'rgba(0,0,0,0.9)',
    paddingVertical: 16,
  },
  item: { flex: 1, alignItems: 'center' },
  text: { color: 'white', fontSize: 10, marginTop: 4 },
  active: { color: '#ef4444', fontWeight: '600' },
});

export default BottomNav;
