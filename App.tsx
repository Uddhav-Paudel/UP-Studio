import {Text, View, Pressable, Linking, LogBox, Image} from 'react-native';
import FontAwesome6 from '@react-native-vector-icons/fontawesome6';

import React from 'react';
import LazyLoadingExample from './components/LazyLoadingExample';
import './global.css';
import {SafeAreaView} from 'react-native-safe-area-context';

LogBox.ignoreLogs(['Downloading']);

const App = (): React.JSX.Element => {
  const openURL = (url: string) => {
    Linking.openURL(url).catch(err =>
      console.error('Failed to open URL:', err),
    );
  };

  return (
    <>
      <SafeAreaView>
        <Pressable className="bg-green-950 p-4 flex-row justify-between items-center">
          <View className="flex-row items-center">
            <View>
              <Image
                className="me-2"
                style={{width: 48, height: 30, resizeMode: 'contain'}}
                source={require('./assets/images/logo_black.png')}
              />
            </View>

            <Text className="text-white font-extrabold">Uddhav Paudel</Text>
          </View>

          <View className="flex-row gap-x-4">
            <Pressable
              onPress={() => openURL('https://portfolio.uddhavpaudel.com.np')}>
              <FontAwesome6
                name="globe"
                size={30}
                color="#61DAFB"
                iconStyle="solid"
              />
            </Pressable>
            <Pressable
              onPress={() => openURL('https://linkedin.com/in/paudel-uddhav')}>
              <FontAwesome6
                name="linkedin"
                size={30}
                color="#61DAFB"
                iconStyle="brand"
              />
            </Pressable>
          </View>
        </Pressable>
      </SafeAreaView>
      <LazyLoadingExample />
    </>
  );
};

export default App;
