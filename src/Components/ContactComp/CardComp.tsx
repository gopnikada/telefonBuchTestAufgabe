import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Highlighted from "../misc/Highlighted";


const CardComp = (props:any) => {
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography variant="h5" component="div">
                    <Highlighted text={props.name} highlight={props.query}></Highlighted>
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {props.phone}
                </Typography>
            </CardContent>
        </Card>

    );
};

export default CardComp;