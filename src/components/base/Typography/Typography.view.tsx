import React from 'react';

// import { useTheme } from 'utils/Theme';
import { TypographyProps } from './Typography.props';
import { Container } from './Typography.style';

const Typography = (props: TypographyProps): JSX.Element => {
  // const theme = useTheme();
  return <Container />;
};

export default React.memo(Typography);
