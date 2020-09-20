import React from 'react';

// import { useTheme } from 'utils/Theme';
import { ForgotPasswordGeneratedProps } from './ForgotPassword.props';
import { Container } from './ForgotPassword.style';

const ForgotPasswordView = (props: ForgotPasswordGeneratedProps) => {
  // const theme = useTheme();
  return (
    <Container>
      <h1>ForgotPassword Screen</h1>
    </Container>
  );
};

export default ForgotPasswordView;