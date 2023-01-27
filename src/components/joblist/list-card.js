import * as React from 'react';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';
import { Box } from '@mui/system';

export default function ListCard() {
  return (
    <Card >
      <CardActionArea sx={{ display: 'flex', justifyContent: 'space-between' }} >
        <Box sx={{ display: 'flex', borderRadius: 1, justifyContent: 'center', alignItems: 'center' }} >
          <Avatar sx={{ m: 2}}>
            <FolderIcon />
          </Avatar>
          <Typography sx={{ m: 1, p: 1}}>File name</Typography>
        </Box>
        <Box>
          <Button>
            More button
          </Button>
        </Box>
      </CardActionArea>
    </Card>
  );
}