import React from 'react';
import {FlatList} from 'react-native';
import RepoItem from './RepoItem';

interface PlaceholderComponentProps {
  repos: {
    id: number;
    name: string;
    description: string;
    html_url: string;
    topics: string[];
  }[];
}

const PlaceholderComponent = ({
  repos,
}: PlaceholderComponentProps): React.JSX.Element => {
  return (
    <>
      <FlatList
        horizontal={false}
        className="p-4 mb-4"
        data={repos}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => {
          return (
            <RepoItem
              repo={{
                id: item.id,
                name: item.name,
                description: item.description,
                html_url: item.html_url,
                topics: item.topics,
              }}
            />
          );
        }}></FlatList>
    </>
  );
};

export default PlaceholderComponent;
