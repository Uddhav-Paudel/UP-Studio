import React, {Suspense} from 'react';
import FallbackUI from './FallbackUI';
const fetchData = async () => {
  try {
    const response = await fetch(
      'https://api.github.com/users/uddhav-paudel/repos',
    );
    const result = await response.json();
    return result;
  } catch (error) {
    //console.error('Error fetching data:', error);
  } finally {
    //console.log('Data fetched successfully');
  }
};

const PlaceholderComponent = React.lazy(async () => {
  let data = await fetchData();

  let PlaceholderComponent = await import('./RepoListComponent');

  return {
    default: (props: any) => (
      <PlaceholderComponent.default {...props} repos={data} />
    ),
  };
});

const LazyLoadingExample = (): React.JSX.Element => {
  return (
    <>
      <Suspense fallback={FallbackUI()}>
        <PlaceholderComponent />
      </Suspense>
    </>
  );
};

export default LazyLoadingExample;
