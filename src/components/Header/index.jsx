import React from 'react'
import { Box, Typography } from '@material-ui/core'

import useStyles from '../../styles'

export default function Header(props) {
  const classes = useStyles()

  return (

    <Box className={classes.header}>
      <Box>
        <Typography variant="h2">React Blog</Typography>
      </Box>
    </Box>

  )
}
