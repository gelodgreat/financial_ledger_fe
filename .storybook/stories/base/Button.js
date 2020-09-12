import React from 'react';

import { storiesOf } from '@storybook/react';

import Button from '../../../src/components/base/Button';
import Container from '../../components/Container';

storiesOf('base/Button', module).add('Summary', () => (
  <Container>
    <Button />
  </Container>
));
