import React, { useState } from "react";
// import "./App.css";
import AddWorker from "./AddWorker";
import Worker from "./Worker";
import Header from "./Header";
import Footer from "./Footer";
import { sortByAge, sortByName , sortRevers} from "./utils/sorts";
// import SortsButtom from "./component/SortsButton";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";

const HomePage = () => {
  //state for all data workers
  const [workers, setWorkers] = useState([]);


  // push new object worker to workers araay
  const pushWorker = (worker) => setWorkers([...workers, worker]);

  // remove spsific worker by comparing ID
  const removeWorker = (id) => {
    let index = workers.findIndex((object) => {
      return object.ID === id;
    });
    let tempWorker = [...workers];
    tempWorker.splice(index, 1);
    setWorkers(tempWorker);
  };

  // checking if ID alredy exisit and return boolean
  const isIdExsist = (id) => {
    let index = workers.findIndex((object) => {
      return object.ID === id;
    });
    return index >= 0;
  };

  return (
    <div className="App">
      <Box
        xs
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{ flexGrow: 1 }}
      >
        <Grid container spacing={2}>
          <Grid
            display="flex"
            justifyContent="center"
            alignItems="center"
            xs={12}
            md={12}
          >
            <Header />
          </Grid>
          <Grid
            display="flex"
            justifyContent="center"
            alignItems="center"
            xs={12}
            md={12}
          >
            <AddWorker pushWorker={pushWorker} isIdExsist={isIdExsist} />
          </Grid>
          <Grid xs={12} md={12}>
            <ButtonGroup
              disableElevation
              variant="contained"
              aria-label="Disabled elevation buttons"
            >
              <Button
                onClick={() => {
                  setWorkers(sortByName([...workers]));
                }}
              >
                Sort By Name
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
              {workers.map((worker, index) => {
                return (
                  <React.Fragment key={worker.ID}>
                    <Worker
                    
                      worker={worker}
                      removeWorker={removeWorker}
                    />
                    <Divider
                      // key={index}
                      variant="inset"
                      component="li"
                    />
                  </React.Fragment>
                );
              })}
            </List>
          </Grid>
          <Grid
            display="flex"
            justifyContent="center"
            alignItems="center"
            xs={12}
            md={12}
          >
            <Footer />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default HomePage;