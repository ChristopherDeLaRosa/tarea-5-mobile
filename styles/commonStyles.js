// src/styles/commonStyles.js
import { StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

// Sólo lo esencial; puedes seguir moviendo aquí todo el StyleSheet
export default StyleSheet.create({
  container: { flex: 1, backgroundColor: 'black' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'black',
  },
  headerTitle: { fontSize: 24, fontWeight: 'bold', color: 'white' },
  backButton: { marginRight: 16 },
  video: {
    width: width - 32,
    height: 256,
    borderRadius: 12,
    marginBottom: 16,
    backgroundColor: '#374151',
  },
});
