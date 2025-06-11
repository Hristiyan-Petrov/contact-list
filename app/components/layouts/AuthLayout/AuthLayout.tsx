import { Paper, Box } from '@mantine/core';
import { Outlet } from '@remix-run/react';
import classes from './AuthLayout.module.css';

export default function AuthLayout() {
  return (
    <div className={classes.wrapper}>
      <Paper className={classes.form} radius={0} p={30} withBorder={false}>
        <Outlet />
      </Paper>
      <Box className={classes.image} />
    </div>
  );
}