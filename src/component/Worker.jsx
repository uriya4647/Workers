import React from "react";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Divider from "@mui/material/Divider";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import PropTypes from "prop-types";
import Avatars from "./Avatars";

const Worker = (props) => {
  // props belong HomePage.
  const { ID, name, age } = props.worker;

  return (
    <div>
      <List
        sx={{
          width: "100%",
          maxWidth: 360,
          bgcolor: "background.paper",
        }}
      >
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <Avatars name={name} />
              {/* <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe" >
           
             {avatarLetters()}
            </Avatar> */}
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={name} secondary="Name" />
          <IconButton
            aria-label="delete"
            size="large"
            onClick={() => props.removeWorker(ID)}
          >
            <DeleteIcon />
          </IconButton>
        </ListItem>
        <ListItem>
          <ListItemText primary={age} secondary="Age" />
        </ListItem>
        <Divider component="li" />
        <ListItem>
          <ListItemText primary={ID} secondary="ID" />
        </ListItem>
        <Divider component="li" variant="inset" />
      </List>
    </div>
  );
};

export default Worker;

Worker.prototype = {
  removeWorker: PropTypes.func,
  ID: PropTypes.string,
  name: PropTypes.string,
  age: PropTypes.string,
};
