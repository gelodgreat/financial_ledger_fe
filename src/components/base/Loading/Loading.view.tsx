import React from 'react';

// import { useTheme } from 'utils/Theme';
import loadingScreen from 'assets/loading.gif';

import { LoadingProps } from './Loading.props';
import { Container } from './Loading.style';

const Loading = (props: LoadingProps): JSX.Element => {
  // const theme = useTheme();
  return (
    <img
      style={{
        width: '100%',
        height: window.innerHeight,
        objectFit: 'cover',
      }}
      src={loadingScreen}
      alt="loading..."
    />
  );
};

export default React.memo(Loading);
