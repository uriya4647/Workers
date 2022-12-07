import { sortByAge, sortByName, sortRevers } from './utils/sorts'
import Grid from "@mui/material/Unstable_Grid2";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { useState } from 'react';
const SortsButton = ({ workers, setWorkers }) => {

    const [orderDirect, setOrderDirect] = useState('')
    // const {workers, setWorkers} = props;
    // console.log("f:", workers, setWorkers);

    return (


        <Grid xs={12} md={12}>
            <ButtonGroup
                disableElevation
                variant="contained"
                aria-label="Disabled elevation buttons"
            >
                <Button
                    onClick={() => {
                  
                        // console.log(orderDirect);
                        // orderDirect === 'ASC' 
                        // ? setOrderDirect('DESC')
                        //  : setOrderDirect('ASC');
                        //  console.log(orderDirect);
                        // orderDirect === 'ASC'
                        // ? setWorkers(sortByName([...workers])) 
                        // : setWorkers(sortRevers([...workers]));
                        // console.log(orderDirect);

                        setWorkers(sortByName([...workers]));
                        // if ( orderDirect === 'ASC' || orderDirect ==='')
                        // {
                        //     setWorkers(sortByName([...workers])) 
                        //     orderDirect ===''? setOrderDirect('ASC') : setOrderDirect('DESC')
                        // }

                        // else
                        // {
                        //     setWorkers(sortRevers([...workers]));
                        //     setOrderDirect('ASC');

                        // }



                    }}
                >
                    Sort By Name  {orderDirect === 'ASC' && <ArrowDropDownIcon />}  {orderDirect === 'DESC' && <ArrowDropUpIcon />}
                </Button>
                <Button
                    onClick={() => {
                        setWorkers(sortByAge([...workers]));
                    }}
                >
                    Sort By Age
                </Button>
                <Button
                    onClick={() => {
                        setWorkers(sortRevers([...workers]));
                    }}
                >
                    Sort Revers
                </Button>
            </ButtonGroup>
        </Grid>



    )
}

export default SortsButton