import React from "react";
import TaskList from "./TaskList";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import AddTask from './AddTask'

export default function Dashboard() {

    return (
        <>
            <Box sx={{ flexGrow: 1 , m: 5}}>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <TaskList />
                    </Grid>
                    <Grid item xs={6}>
                        <AddTask />
                    </Grid>
                </Grid>
            </Box>
        </>
    )

}
