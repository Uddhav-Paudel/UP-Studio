import React from 'react';
import {View, Text, Linking, Pressable} from 'react-native';
import FontAwesome6 from '@react-native-vector-icons/fontawesome6';
interface RepoItemProps {
  repo: {
    id: number;
    name: string;
    html_url: string;
    description: string;
    topics: string[];
  };
}

const RepoItem = React.memo(
  ({repo}: RepoItemProps): React.JSX.Element => {
    return (
      <View className="mb-4 bg-gray-200 rounded shadow-xl">
        <View className="space-between items-center flex-row p-2 bg-gray-200 border-b-2">
          <Text className="text-black flex-1 font-extrabold capitalize font-manrope">
            {repo.name}
          </Text>
          <Pressable onPress={() => Linking.openURL(repo.html_url)}>
            <FontAwesome6
              name="github"
              size={30}
              iconStyle="brand"></FontAwesome6>
          </Pressable>
        </View>

        <View className="p-4 ">
          <Text className="text-green-950 font-manrope text-base">
            {repo.description}
          </Text>
          <View className="bg-gray-300 p-0.5 my-2"></View>
          <View className="flex-row justify-end flex-wrap">
            {repo.topics.map((topic, index) => {
              return (
                <View key={index} className="bg-green-950 p-1.5 m-1 rounded">
                  <Text className="text-white font-manrope text-base">
                    {topic}
                  </Text>
                </View>
              );
            })}
          </View>
        </View>
      </View>
    );
  },
  (prevProps, nextProps) => {
    return (
      prevProps.repo.id === nextProps.repo.id &&
      prevProps.repo.name === nextProps.repo.name &&
      prevProps.repo.html_url === nextProps.repo.html_url &&
      prevProps.repo.description === nextProps.repo.description
    );
  },
);

export default RepoItem;
