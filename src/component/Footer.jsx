import Grid from "@mui/material/Unstable_Grid2";
const Footer = () => {
    return(
        <Grid
        display="flex"
        justifyContent="center"
        alignItems="center"
        xs={12}
        md={12}
      >
        <div style={{width: '40%' ,color: 'white', backgroundColor: 'black', borderRadius: '30px'}}>
            <h1> Developed by Uri Yaffe</h1>
        </div>
        </Grid>
    )
}
export default Footer