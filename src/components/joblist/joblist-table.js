import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import ListCard from './list-card';
import { Modal, SwipeableDrawer, Typography } from '@mui/material';
import Link from 'next/link';
import { Button, CardActionArea, CardActions } from '@mui/material';

import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';

import FolderIcon from '@mui/icons-material/Folder';

const data = [
  {
    id: 1,
    fileName: "A file ",
    color: 'green',

  },
  {
    id: 2,
    fileName: "B file ",
    color: 'gray',
    
  },
  {
    id: 3,
    fileName: "C file ",
    color: 'green',
    
  },
  {
    id: 4,
    fileName: "D file ",
    color: '',
    
  },
  {
    id: 5,
    fileName: "F file ",
    color: '',
    
  }
]


const JobTable = () => {
  const [value, setValue] = React.useState('1');
  const [action, setAction] = React.useState(false)
  const openModal = () => { setAction(true)}
  const closeModal = () => { setAction(false)}
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <TabContext value={value}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <TabList onChange={handleChange} aria-label="lab API tabs example">
          <Tab label="Бүх файл" value="1" />
          <Tab label="Дууссан файл" value="2" />
          <Tab label="Ажиллагаанд байгаа файл" value="3" />
        </TabList>
      </Box>
      <TabPanel value="1">
        {data.map((data, id) => {
          return (
            <Box key={data.id}
                sx={{width: '100%', height: 70,
                backgroundColor: 'primary',
                  '&:hover': {
                    backgroundColor: 'gray',
                    opacity: [0.9, 0.8, 0.7],
                  },
                  display: 'flex', 
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  borderRadius: '10px',
              }}>
                <Box sx={{ display: 'flex', borderRadius: 1, justifyContent: 'center', alignItems: 'center' }}>
                  <Avatar sx={{ m: 2}}>
                    <FolderIcon />
                  </Avatar>
                  <Typography sx={{ m: 1, p: 1}}>{data.fileName}</Typography>
                </Box>
                <Box>
                  <Link href='/dropzone'>
                    <Button>More Button</Button> 
                  </Link>
                </Box>
              </Box>
          )
        })}
      </TabPanel>
      <TabPanel value="2">Item Two</TabPanel>
      <TabPanel value="3">Item Three</TabPanel>
      
</TabContext>
  )
}

export default JobTable;


