import React, { useState } from "react";
import AddWorker from "./AddWorker";
import Header from "./Header";
import Footer from "./Footer";
import ViewList from "./ViewList";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";

const HomePage = () => {
  //state responsible for all data workers and initialize by session storage at refresh
  const [workers, setWorkers] = useState(initializeWorkers);

  // update session storage immediately
  sessionStorage.setItem("workers", JSON.stringify(workers));

  // function that check if session storage alredy initialized or is empty.
  function initializeWorkers() {
    return  sessionStorage.getItem("workers")
      ? JSON.parse(sessionStorage.getItem("workers"))
      : [];

  }

  // push new object worker to workers array and update session storage
  const pushWorker = (worker) => setWorkers([...workers, worker]);

  // remove specific worker by comparing ID
  const removeWorker = (id) => {
    let index = workers.findIndex((object) => {
      return object.ID === id;
    });
    let tempWorker = [...workers];
    tempWorker.splice(index, 1);
    setWorkers(tempWorker);
  };

  // checking if ID already exist and return boolean
  const isIdExist = (id) => {
    let index = workers.findIndex((object) => {
      return object.ID === id;
    });
    return index >= 0;
  };

  return (
    <div className="App">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{ flexGrow: 1 }}
      >
        <Grid container spacing={2}>
          <Header />

          <AddWorker pushWorker={pushWorker} isIdExist={isIdExist} />

          <ViewList
            workers={workers}
            setWorkers={setWorkers}
            removeWorker={removeWorker}
          />

          <Footer />
       
        </Grid>
      </Box>
    </div>
  );
};

export default HomePage;
