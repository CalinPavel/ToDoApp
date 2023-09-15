import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import axios from 'axios';

export default function AddTask() {


    const url = 'http://localhost:8080/addTask/smth';

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        axios.post(url, {
            email: null,
            name: null,
            username: data.get('email'),
            password: data.get('password')
        }).then((response) => {
            console.log(response.data);
            localStorage.setItem("jwt" , response.data);
        })

    };

    return (
        <>
            <Card>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Add Task
                    </Typography>
                    <TextField id="outlined-basic" label="Description" variant="outlined" />
                </CardContent>
                <CardActions>
                    <Button size="small">Save task</Button>
                </CardActions>
            </Card>
        </>
    )
}