import Head from 'next/head';
import { Box, Container } from '@mui/material';
import { JobListToolbar } from '../components/joblist/joblits-list-toolbar';
import { JobListResults } from '../components/joblist/joblist-list-results';
import { DashboardLayout } from '../components/dashboard-layout';
import { customers } from '../__mocks__/customers';
import JobTable from '../components/joblist/joblist-table';

const Page = () => (
  <>
    <Head>
      <title>
        Admin job list
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
        <JobListToolbar />
        <Box sx={{ mt: 3 }}>
          {/* <JobListResults customers={customers} /> */}
          <JobTable/>
        </Box>
      </Container>
    </Box>
  </>
);

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
