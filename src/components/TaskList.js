import React, { useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';


export default function TaskList() {

    var [counter, setCounter] = useState(0);


    const tasks = [
        {
            id: '1',
            description: 'test user',
            date: '12/12/2023',
            state: 'true'
        },
        {
            id: '2',
            description: 'test user',
            date: '12/12/2023',
            state: 'false'
        },
        {
            id: '3',
            description: 'test user',
            date: '12/12/2023',
            state: 'true'
        },
        {
            id: '4',
            description: 'test user',
            date: '12/12/2023',
            state: 'true'
        },
        {
            id: '5',
            description: 'test user',
            date: '12/12/2023',
            state: 'true'
        }
    ];
    
    const url = 'http://localhost:8080/tasks';
    const dataForMapping = '';

    const config = {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`
        }
    }

    axios.get(url,config).then((response) => {
        dataForMapping = response.data;
    }).catch((error) => {
        console.log("err");
    })



    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell align="right">Description</TableCell>
                            <TableCell align="right">Date</TableCell>
                            <TableCell align="right">State</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {tasks.map((task) => (
                            <TableRow
                                key={task.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {task.id}
                                </TableCell>
                                <TableCell align="right">{task.description}</TableCell>
                                <TableCell align="right">{task.date}</TableCell>
                                <TableCell align="right">{task.state}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}