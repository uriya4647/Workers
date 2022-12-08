import React from "react";
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Divider from '@mui/material/Divider';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import  PropTypes  from "prop-types";






const Worker = (props) => {
  // props belong HomePage.
  const { ID, name, age } = props.worker;

  // function that returns the capial letter of the first name and the capital letter the last name.
  const avatrLetters = () => {
    let avaterName =    name.indexOf(' ') < 0 ?  
    name.charAt(0).toUpperCase() :
    name.charAt(0).toUpperCase() +
    name.charAt( name.indexOf(' ') +1).toUpperCase() 
 
    return avaterName
  }
    

  
  return (

<div>

<List
      sx={{
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper',
      }}
    >
      <ListItem>
        <ListItemAvatar>
          <Avatar>
        
       <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
           
             {avatrLetters()}
            </Avatar>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={name} secondary= "Name" />
           <IconButton aria-label="delete" size="large"  onClick={() => props.removeWorker(ID)}>
        <DeleteIcon />
      </IconButton>
      </ListItem>
      <ListItem>
        <ListItemText  primary={age} secondary= "Age"/>
      </ListItem>
      <Divider component="li" />
      <li>
        <Typography
          sx={{ mt: 0.5, ml: 2 }}
          color="text.secondary"
          display="block"
          variant="caption"
        >
       
        </Typography>
      </li>
      <ListItem>
        <ListItemText primary={ID} secondary= "ID"/>
      </ListItem>
      <Divider component="li" variant="inset" />
  
      
    </List>

</div>
    
  );
};

export default Worker;


Worker.prototype = {
  removeWorker: PropTypes.func,
  ID : PropTypes.string,
  name: PropTypes.string,
  age: PropTypes.string

}