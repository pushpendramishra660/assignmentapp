import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import AppNavigator from './src/navigations';
import {ThemeProvider} from 'styled-components/native';
import theme from './src/theme';
import {checkAndRequestLocationPermission,checkAndRequestNotificationPermission} from './src/helper';
import {SegmentAnalytics} from './src/config/index';
import Config from 'react-native-config';

const App: React.FC = () => {
  useEffect(() => {
    checkAndRequestLocationPermission();
    checkAndRequestNotificationPermission();
  }, []);


//   useEffect(() => {
//     // Initialize analytics with your write key
//     SegmentAnalytics.initialize(Config.APP_KEY);

//     // Example: Track a product viewed event
//     SegmentAnalytics.trackEvent('Login', 'Login Success');
// }, []);

  return (
    <ThemeProvider theme={theme}>
      <AppNavigator />
    </ThemeProvider>
  );
};

export default App;
