import Head from 'next/head';
import { Box, Container } from '@mui/material';
import { DashboardLayout } from '../components/dashboard-layout';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import { useState } from 'react';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import { Dropzone, FileItem } from "@dropzone-ui/react";

const Page = () => {
  const [open, setOpen] = useState(true)
  const [files, setFiles] = useState([]);
  const updateFiles = (incommingFiles) => {
    setFiles(incommingFiles);
  };
  const handleClick = () => {
    setOpen(!open);
  };
  return(
    <>
    <Head>
      <title>
        Customers | Material Kit
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth={false}>
      <List
      sx={{ width: '100%', bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          File name
        </ListSubheader>
      }
    >
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Inbox" />
        <Chip label="status" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <Box sx={{width: '100%', height: "250px", display: 'flex' }}>
              <Box sx={{width: '50%', background: 'red', height: "250px" }}>
                <Dropzone onChange={updateFiles} value={files}>
                  {/* {files.map((file) => (
                    <FileItem {...file} preview />
                  ))} */}
                </Dropzone>
              </Box>
              <Box sx={{width: '50%', height: "250px" }}>
                <Typography variant="h6" sx={{m:3}}>
                  Node
                </Typography>
                <Typography variant="body1" sx={{m:3}}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                  blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                  neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                  quasi quidem quibusdam.
                </Typography>
              </Box>
            </Box>
          </ListItemButton>
        </List>
      </Collapse>
    </List>
      </Container>
    </Box>
  </>
  )
}

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
