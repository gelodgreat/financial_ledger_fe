import React from 'react';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';

import { DashboardGeneratedProps } from './Dashboard.props';
import { useStyles } from './Dashboard.style';

const DashboardView = (props: DashboardGeneratedProps) => {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <Container maxWidth="lg" className={classes.container}>
      <Grid container spacing={3}>
        {/* Chart */}
        <Grid item xs={12} md={8} lg={9}>
          <Paper className={fixedHeightPaper}></Paper>
        </Grid>
        {/* Recent Deposits */}
        <Grid item xs={12} md={4} lg={3}>
          <Paper className={fixedHeightPaper}></Paper>
        </Grid>
        {/* Recent Orders */}
        <Grid item xs={12}>
          <Paper className={classes.paper}></Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default DashboardView;
