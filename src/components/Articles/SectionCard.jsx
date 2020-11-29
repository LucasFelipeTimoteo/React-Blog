import React from 'react'
import {
  Avatar,
  Box,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography
} from '@material-ui/core'

import { BookmarkBorder as BookmarkBorderIcon } from '@material-ui/icons'

import useStyles from '../../styles'

export default function Sectioncard({ data }) {
  const classes = useStyles()

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={data.image}
          title={data.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {data.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {data.description}
          </Typography>
        </CardContent>
      </CardActionArea>

      <div className={classes.cardInfo}>
        <CardActions className={classes.cardActions}>
          <Box className={classes.author}>
            <Avatar src={data.avatar} />
            <Box ml={2}>
              <Typography variant="subtitle2" component="p">
                {data.authorName}
              </Typography>
              <Typography variant="subtitle2" color="textSecondary" component="p">
                {data.date}
              </Typography>
            </Box>
          </Box>
          <Box>
            <BookmarkBorderIcon />
          </Box>
        </CardActions>
      </div>
    </Card>
  )
}
