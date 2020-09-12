import React from 'react';

import { storiesOf } from '@storybook/react';

import Modal from '../../../src/components/module/Modal';
import Container from '../../components/Container';

storiesOf('module/Modal', module).add('Summary', () => (
  <Container>
    <Modal />
  </Container>
));
