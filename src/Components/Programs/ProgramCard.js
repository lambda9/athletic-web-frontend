import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import bgImg from "../../Images/im9.jpg";
import "./ProgramCard.css";

export default function ProgramCard() {
  return (
      
    <Card className="program-card">
      <CardHeader
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
    <img className="image" 
   ></img>
      <CardContent className="text">
        
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.

      </CardContent>
      <CardActions disableSpacing>
      </CardActions>
      
    </Card>
  );
}
