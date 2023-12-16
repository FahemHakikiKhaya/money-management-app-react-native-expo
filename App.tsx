import React from 'react';
import { Text, View } from 'react-native';
import LoginScreen from './src/screens/LoginScreen';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback, useEffect } from 'react';

import { ApplicationProvider } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import { useFonts } from 'expo-font';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    inter: require('./assets/fonts/Inter-Black.ttf'),
    'inter-semibold': require('./assets/fonts/Inter-SemiBold.ttf'),
    'inter-bold': require('./assets/fonts/Inter-Bold.ttf'),
    'inter-thin': require('./assets/fonts/Inter-Thin.ttf'),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View onLayout={onLayoutRootView}>
      <ApplicationProvider {...eva} theme={eva.light}>
        <LoginScreen />
      </ApplicationProvider>
    </View>
  );
}
