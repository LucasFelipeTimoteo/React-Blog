import { AppBar, Toolbar, Typography } from '@material-ui/core'
import React from 'react'
import useStyles from '../../styles'

export default function NavBar(props) {
  const classes = useStyles()

  return (
    <AppBar className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6" color="primary">
          Blog
        </Typography>
      </Toolbar>
    </AppBar>
  )
}
