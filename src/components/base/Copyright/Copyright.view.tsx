import React from 'react';

// import { useTheme } from 'utils/Theme';
import { CopyrightProps } from './Copyright.props';
import { Container } from './Copyright.style';

const Copyright = (props: CopyrightProps): JSX.Element => {
  // const theme = useTheme();
  return <Container />;
};

export default React.memo(Copyright);
