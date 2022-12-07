import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import  PropTypes  from "prop-types";
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';




const AddWorker = ( { pushWorker, isIdExsist }) => {

  // state that responsible on the button 'addWorke' .
  const [ableButton, setAbleButton] = useState(true);
   
  // state that responsible on the Checkbox .
  const [checked, setChecked] = useState(false);
  console.log(checked);

  // state responsible on the input.
  const [worker, setWorker] = useState({
    name: "",
    ID: "",
    age: "",
  });

  // change input in the object
  const handleChange = (event, prop) => {
    setWorker({ ...worker, [prop]: event.target.value });
  };

  // listening to inputs that enable the button 'addWork'.
  useEffect(() => {
    worker.name && worker.ID && worker.age && !isIdExsist(worker.ID)
      ? setAbleButton(false)
      : setAbleButton(true);
  }, [worker.name, worker.ID, worker.age]);

  // remove value after add new worker
  const removeValue = () => {
    setWorker({
      name: "",
      ID: "",
      age: "",
    });
  };

  //call Alerts if the alredy ID exists.
  const warningIdExists = () => {
    isIdExsist(worker.ID) && alert("The ID already exists");
  };

  // function that generat auto ID and check that the ID doesn't exist.
  const autoId = () => {
   if (!checked){
    let randomId = Date.now().toString(36);
    
    while(isIdExsist(randomId)){
      randomId = Date.now().toString();
    }
    setWorker({ ...worker, ID: randomId })
  } else
  setWorker({ ...worker, ID: '' })
  }

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "20ch" },
        width: "100%",
        maxWidth: 500,
        bgcolor: "background.paper",
        
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-name"
        label="Name"
        value={worker.name}
        onChange={(event) => handleChange(event, "name")}
      />
      <TextField
        id="outlined-uncontrolled"
        label="Age"
        value={worker.age}
        onChange={(event) => handleChange(event, "age")}
     
      />
      <TextField
        id="outlined-uncontrolled"
        label="ID"
        value={worker.ID}
        onChange={(event) => handleChange(event, "ID")}
        onBlur={warningIdExists}
      />
      <FormControlLabel
            control={
              <Checkbox checked={checked} onClick={()=> {setChecked(!checked) ; autoId() }} />
            }
            label="Auto ID"
          />
      <Button
        onClick={(e) => {
        
          pushWorker(worker);
          removeValue();
        }}
        variant="contained"
        endIcon={<SendIcon />}
        color="success"
        disabled={ableButton } 
      >
        Send
      </Button>
    </Box>
  );
};

export default AddWorker;


AddWorker.propTypes = {
  pushWorker: PropTypes.func,
  isIdExsist: PropTypes.func
}