import React from 'react';

// import { useTheme } from 'utils/Theme';
import { ButtonProps } from './Button.props';
import { Container } from './Button.style';

const Button = (props: ButtonProps): JSX.Element => {
  // const theme = useTheme();
  return <Container />;
};

export default React.memo(Button);
