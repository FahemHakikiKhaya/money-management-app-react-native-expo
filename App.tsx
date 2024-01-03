import React from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback, useEffect } from 'react';

import {
  ApplicationProvider,
  IconRegistry,
} from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import { useFonts } from 'expo-font';
import Navigation from './src/navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ApiClientProvider } from './src/provider/ApiClientProvider';
import LoginScreen from './src/screens/LoginScreen';
import { AuthProvider } from './src/provider/AuthProvider';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

SplashScreen.preventAutoHideAsync();

const queryClient = new QueryClient();

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
    <React.Fragment>
      <QueryClientProvider client={queryClient}>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider {...eva} theme={eva.light}>
          <AuthProvider>
            <ApiClientProvider>
              <SafeAreaProvider>
                <Navigation />
              </SafeAreaProvider>
            </ApiClientProvider>
          </AuthProvider>
        </ApplicationProvider>
      </QueryClientProvider>
    </React.Fragment>
  );
}
