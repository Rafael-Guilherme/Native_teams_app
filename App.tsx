import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import Groups from '@screens/groups';

export default function App() {
  return (
    <View >
      <Groups />
      <StatusBar style="auto" />
    </View>
  );
}
