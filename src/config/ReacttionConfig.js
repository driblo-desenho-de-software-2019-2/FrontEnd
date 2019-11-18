import Reactotron from 'reactotron-react-native';

// eslint-disable-next-line no-undef
if (__DEV__) {
  const tron = Reactotron.configure()
    .useReactNative()
    .connect();

  tron.clear();

  // eslint-disable-next-line no-console
  console.tron = tron;
}
