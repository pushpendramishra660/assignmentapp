import React from 'react';
import {WebView} from 'react-native-webview';
import {DetailScreenProps} from '../types';

const Detail: React.FC<DetailScreenProps> = ({route}) => {
  const {url} = route.params;
  return <WebView source={{uri: url}} />;
};

export default Detail;
