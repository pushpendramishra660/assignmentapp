import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import AppNavigator from './src/navigations';
import {ThemeProvider} from 'styled-components/native';
import theme from './src/theme';
import {checkAndRequestLocationPermission} from './src/helper';

const App: React.FC = () => {
  useEffect(() => {
    checkAndRequestLocationPermission();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <AppNavigator />
    </ThemeProvider>
  );
};

export default App;
