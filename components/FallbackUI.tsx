import React from 'react';
import {Text, View} from 'react-native';

const FallbackUI = (): React.JSX.Element => {
  return (
    <>
      <View className="m-4">
        <Text className="text-center"> Loading Content</Text>
      </View>
    </>
  );
};

export default FallbackUI;
