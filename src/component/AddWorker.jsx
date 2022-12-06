import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

const AddWorker = ({ pushWorker, isIdExsist }) => {
  // state responsible on the button 'addWorke' .
  const [ableButton, setAbleButton] = useState(true);

  // state responsible on the input.
  const [worker, setWorker] = useState({
    name: "",
    ID: "",
    age: "",
  });

  // chenge inputin the object
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

  // Alerts if the ID exists
  const warningIdExists = () => {
    isIdExsist(worker.ID) && alert("The ID already exists");
  };

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
        // defaultValue="foo"
      />
      <TextField
        id="outlined-uncontrolled"
        label="ID"
        value={worker.ID}
        onChange={(event) => handleChange(event, "ID")}
        onBlur={warningIdExists}
      />
      <Button
        onClick={(e) => {
          //       e.preventDefault();
          pushWorker(worker);
          removeValue();
        }}
        variant="contained"
        endIcon={<SendIcon />}
        color="success"
      >
        Send
      </Button>
    </Box>
  );
};

export default AddWorker;
