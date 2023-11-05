import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';

export type AppStackParamList = {
  HOME: undefined;
  DETAIL: {url: string};
};

type HomeScreenNavigationProp = StackNavigationProp<AppStackParamList, 'HOME'>;
type DetailScreenRouteProp = RouteProp<AppStackParamList, 'DETAIL'>;

export type HomeScreenProps = {
  navigation: HomeScreenNavigationProp;
};
export type DetailScreenProps = {
  route: DetailScreenRouteProp;
};
