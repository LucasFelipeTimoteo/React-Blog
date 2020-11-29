import React from 'react'

import { Box } from '@material-ui/core'
import { Pagination as MUILabPagination } from '@material-ui/lab'

import useStyles from '../../styles'

export default function Pagination() {
  const classes = useStyles()

  return (
    <Box my={4} className={classes.paginationContainer}>
      <MUILabPagination count={10} />
    </Box>
  )
}
