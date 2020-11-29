import React from 'react'

import { Container, Grid, Typography } from '@material-ui/core'

import useStyles from '../../styles'

import Sectioncard from './SectionCard'
import sectionCardData from '../../data/posts/sectionCardData'

export default function Articles(props) {
  const classes = useStyles()

  return (
    <Container
      maxWidth="lg"
      className={classes.articlesContainer}
    >
      <Typography
        variant="h4"
        className={classes.articlesTitle}
      >
        Articles
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <Sectioncard data={sectionCardData.post1} />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Sectioncard data={sectionCardData.post2} />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Sectioncard data={sectionCardData.post3} />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Sectioncard data={sectionCardData.post4} />
        </Grid>
      </Grid>
    </Container>
  )
}
