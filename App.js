import { StatusBar } from 'expo-status-bar';
import { useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';
import * as SplashScreen from 'expo-splash-screen'
import { FontAwesome5 } from '@expo/vector-icons';

SplashScreen.preventAutoHideAsync();

export default function App() {

  const [fontsLoaded] = useFonts({
    'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.ttf')
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <LinearGradient
        colors={['#F3EFEB', '#6CB8A6']}
        style={styles.linearGradient}
      >
        <FontAwesome5 name="users" size={24} color="black" />
        <Text style={styles.h1}>KONTAKTER</Text>
      </LinearGradient>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  h1: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 20,
  },

  linearGradient: {
    flex: 1,
    flexDirection: 'row',
    columnGap: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
});
