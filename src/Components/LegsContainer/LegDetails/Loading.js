import React from "react";
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

const Loading = () => {
  return (
    <Stack spacing={3}>
        <Skeleton variant="rounded" width={"100%"} height={250} />
        <Skeleton variant="rounded" width={"100%"} height={250} />
    </Stack>
  )
};

export default Loading;
