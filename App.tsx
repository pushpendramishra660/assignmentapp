import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import AppNavigator from './src/navigations';
import {ThemeProvider} from 'styled-components/native';
import theme from './src/theme';
import {checkAndRequestLocationPermission,checkAndRequestNotificationPermission} from './src/helper';

const App: React.FC = () => {
  useEffect(() => {
    checkAndRequestLocationPermission();
    checkAndRequestNotificationPermission();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <AppNavigator />
    </ThemeProvider>
  );
};

export default App;
