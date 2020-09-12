import React from 'react';

// import { useTheme } from 'utils/Theme';
import { ModalProps } from './Modal.props';
import { Container } from './Modal.style';

const Modal = (props: ModalProps): JSX.Element => {
  // const theme = useTheme();
  return <Container />;
};

export default React.memo(Modal);
