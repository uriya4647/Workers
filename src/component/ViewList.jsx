
import React from "react";
import SortsButton from "./SortsButton";
import Worker from "./Worker"
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import Grid from "@mui/material/Unstable_Grid2";
import  PropTypes  from "prop-types";

const ViewList = ({workers , setWorkers ,removeWorker}) => {
return(
  <>
  <SortsButton workers={workers} setWorkers= {setWorkers}/>
    <Grid
    display="flex"
    justifyContent="center"
    alignItems="center"
    xs={12}
    md={12}
  >
    <List
      sx={{
        width: "100%",
        maxWidth: 400,
        bgcolor: "background.paper",
        position: "relative",
        overflow: "auto",
        maxHeight: 600,
        "& ul": { padding: 0 },
        borderRadius: 2,
      }}
    >
      {workers.map(( worker ) => {
        return (
            <Worker key={worker.ID}
              worker={worker}
              removeWorker={removeWorker}
            />
        );
      })}
    </List>
  </Grid>
  </>
)
}

export default ViewList

ViewList.propTypes = {
   workers : PropTypes.array,
   setWorkers: PropTypes.func,
   removeWorker: PropTypes.func

}