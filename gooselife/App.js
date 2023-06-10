import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import FYGScreen from './screens/FYGScreen';
import GooseScreen from './screens/GooseScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <GooseScreen></GooseScreen>
      {/* <FYGScreen></FYGScreen> */}
      {/* <HomeScreen/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
