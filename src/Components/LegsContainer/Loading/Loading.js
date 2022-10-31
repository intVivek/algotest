import "./Loading.scss";
import React from "react";
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

const Loading = () => {
  return (
    <Stack spacing={3}>
        <div className='loadingContainer'>
          <div className='top'>
              <Skeleton variant="rounded" width={110} height={30} />
              <Skeleton variant="rounded" width={120} height={30} />
              <Skeleton variant="rounded" width={120} height={30} />            
          </div>
          <div className='middle'>
            <Skeleton variant="rounded" width={100} height={30} />
              <Skeleton variant="rounded" width={110} height={30} />
              <Skeleton variant="rounded" width={120} height={30} />
              <Skeleton variant="rounded" width={150} height={30} />
              <Skeleton variant="rounded" width={100} height={30} />
              <Skeleton variant="rounded" width={150} height={30} />
              <Skeleton variant="rounded" width={100} height={30} />
          </div>
          <div className='bottom'>
            <Skeleton variant="rounded" width={120} height={30} />  
            <Skeleton variant="rounded" width={120} height={30} />  
          </div>
        </div>
        <div className='loadingContainer'>
          <div className='top'>
              <Skeleton variant="rounded" width={110} height={30} />
              <Skeleton variant="rounded" width={120} height={30} />
              <Skeleton variant="rounded" width={120} height={30} />            
          </div>
          <div className='middle'>
            <Skeleton variant="rounded" width={100} height={30} />
              <Skeleton variant="rounded" width={110} height={30} />
              <Skeleton variant="rounded" width={120} height={30} />
              <Skeleton variant="rounded" width={150} height={30} />
              <Skeleton variant="rounded" width={100} height={30} />
          </div>
          <div className='bottom'>
            <Skeleton variant="rounded" width={120} height={30} />  
            <Skeleton variant="rounded" width={120} height={30} />  
          </div>
        </div>
    </Stack>
  )
};

export default Loading;
