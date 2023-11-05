import {useEffect, useCallback} from 'react';
import {Linking} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const useDeepLinking = () => {
  const navigation = useNavigation();

  const handleDeepLink = useCallback(
    (url: string | null) => {
      if (url) {
        const regex = /assignmentapp:\/\/(.+)/;
        const match = url.match(regex);

        if (match && match[1]) {
          const path = match[1];
          const webViewUrl = `https://www.treebo.com/${path}`;
          navigation.navigate('DETAIL', {url: webViewUrl});
        }
      }
    },
    [navigation],
  );

  useEffect(() => {
    const handleInitialURL = async () => {
      const initialUrl = await Linking.getInitialURL();
      handleDeepLink(initialUrl);
    };

    const handleURLChange = (event: {url: string} | null) => {
      if (event && event.url) {
        handleDeepLink(event.url);
      }
    };

    handleInitialURL();

    const listener = Linking.addEventListener('url', handleURLChange);

    return () => {
      listener.remove();
    };
  }, [handleDeepLink]);
};

export default useDeepLinking;
