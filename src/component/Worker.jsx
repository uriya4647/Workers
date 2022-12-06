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






const Worker = (props) => {
  //
  const { ID, name, age } = props.worker;

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
             {name.charAt(0).toUpperCase()}
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
