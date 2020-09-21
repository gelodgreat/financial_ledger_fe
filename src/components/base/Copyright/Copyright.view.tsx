import React from 'react';

import { Typography } from '@material-ui/core';
import Link from '@material-ui/core/Link';

// import { useTheme } from 'utils/Theme';
import { CopyrightProps } from './Copyright.props';
import { Container } from './Copyright.style';

const Copyright = (props: CopyrightProps): JSX.Element => {
  // const theme = useTheme();
  return (
    <Container>
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    </Container>
  );
};

export default React.memo(Copyright);
