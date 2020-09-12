import React from 'react';

import { storiesOf } from '@storybook/react';

import Typography from '../../../src/components/base/Typography';
import Container from '../../components/Container';

storiesOf('base/Typography', module).add('Summary', () => (
  <Container>
    <Typography />
  </Container>
));
