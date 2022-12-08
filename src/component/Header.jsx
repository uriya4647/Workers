import Grid from "@mui/material/Unstable_Grid2";

const Header = () => {
    return(
        <Grid
        display="flex"
        justifyContent="center"
        alignItems="center"
        xs={12}
        md={12}
      >
        <div style={{width: '70%' ,color: 'white', backgroundColor: 'black', borderRadius: '30px'}}>
            <h1> Welcome Workers App</h1>
        </div>
        </Grid>
    )
}
export default Header