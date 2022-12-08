import { sortByAge, sortByName, sortRevers } from "./utils/sorts";
import Grid from "@mui/material/Unstable_Grid2";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { useState } from "react";
const SortsButton = ({ workers, setWorkers }) => {
    
    //stat that check if button sort  ASC or DESC
    const [orderDirect, setOrderDirect] = useState(false);

  //state that check which button pressed
  const [tapButton, setTapButton] = useState({
    buttonName: false,
    buttonAge: false,
  });



  return (
    <Grid xs={12} md={12}>
      <ButtonGroup
        disableElevation
        variant="contained"
        aria-label="Disabled elevation buttons"
      >
        <Button
          variant={tapButton.buttonName ? "outlined" : "contained"}
          onClick={() => {
            setTapButton({ buttonName: true, buttonAge: false });
            setWorkers(sortByName([...workers]));
            setOrderDirect(false);
          }}
        >
          Sort By Name
        </Button>

        <Button
          variant={orderDirect ? "outlined" : "contained"}
          onClick={() => {
            setOrderDirect(!orderDirect);
            setWorkers(sortRevers([...workers]));
          }}
        >
          {orderDirect ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
       
        </Button>
        <Button
          variant={tapButton.buttonAge ? "outlined" : "contained"}
          onClick={() => {
            setTapButton({ buttonName: false, buttonAge: true });
            setWorkers(sortByAge([...workers]));
            setOrderDirect(false);
          }}
        >
          Sort By Age
        </Button>
      </ButtonGroup>
    </Grid>
  );
};

export default SortsButton;
