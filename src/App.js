
import { Divider, Grid, Box, Typography, Button, List, ListItem, ListItemIcon, ListItemText } from "@mui/material"
import ClearIcon from '@mui/icons-material/Clear';
import DoneIcon from '@mui/icons-material/Done';
function App() {
  return (
    <Grid container spacing={2} sx={{ padding: "20px", display: "flex", justifyContent: "center" }}>
      <Grid item sx={{ border: 1, borderRadius: 5, margin: 5, height:580, transition:1 ,'&:hover': {zoom:1.01} }}>
        <Box component={Typography} sx={{display: "flex", justifyContent: "center",fontSize:24}}>    Free  </Box>
        <Box sx={{display: "flex", justifyContent: "center"}}>
          <Typography sx={{fontSize:34}}>$0</Typography><Typography sx={{alignSelf:"end",fontSize:24}}>/month</Typography>
        </Box>
      
        

        <Divider variant="middle" />
        <Box>
          <List>
            <ListItem>
              <ListItemIcon>
                <DoneIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="Single User" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <DoneIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="5GB Storage" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <DoneIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="Unlimited Public Projects" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <DoneIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="Community Access" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ClearIcon />
              </ListItemIcon>
              <ListItemText secondary="Unlimited Private Projects" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ClearIcon />
              </ListItemIcon>
              <ListItemText secondary="Dedicated Phone Support" />
            </ListItem><ListItem>
              <ListItemIcon>
                <ClearIcon />
              </ListItemIcon>
              <ListItemText secondary="Free Subdomain" />
            </ListItem><ListItem>
              <ListItemIcon>
                <ClearIcon />
              </ListItemIcon>
              <ListItemText secondary="Monthly Status Reports" />
            </ListItem>
          </List>
          <Box sx={{ display: "flex", justifyContent: "center", alignSelf:"end",bottom:0}}>
            <Button variant="contained" >Button</Button>
          </Box>
        </Box>
      </Grid>
      <Grid item sx={{ border: 1, borderRadius: 5, margin: 5,height:580 , transition:1 ,'&:hover': {zoom:1.01} }}>
      <Box component={Typography} sx={{display: "flex", justifyContent: "center",fontSize:24}}>  PLUS  </Box>
        <Box sx={{display: "flex", justifyContent: "center"}}>
          <Typography sx={{fontSize:34}}>$9</Typography><Typography sx={{alignSelf:"end",fontSize:24}}>/month</Typography>
        </Box>
        <Divider variant="middle" />
        <Box>
          <List>
            <ListItem>
              <ListItemIcon>
                <DoneIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="5 Users" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <DoneIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="50GB Storage" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <DoneIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="Unlimited Public Projects" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <DoneIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="Community Access" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <DoneIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="Unlimited Private Projects" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <DoneIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="Dedicated Phone Support" />
            </ListItem><ListItem>
              <ListItemIcon>
                <DoneIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="Free Subdomain" />
            </ListItem><ListItem>
              <ListItemIcon>
                <ClearIcon />
              </ListItemIcon>
              <ListItemText secondary="Monthly Status Reports" />
            </ListItem>
          </List>

          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button variant="contained">Button</Button>
          </Box>
        </Box>
      </Grid>
      <Grid item sx={{ border: 1, borderRadius: 5, margin: 5,height:580  , transition:1 ,'&:hover': {zoom:1.01}  }}>
      <Box component={Typography} sx={{display: "flex", justifyContent: "center",fontSize:24}}>    PRO </Box>
        <Box sx={{display: "flex", justifyContent: "center"}}>
          <Typography sx={{fontSize:34}}>$49</Typography><Typography sx={{alignSelf:"end",fontSize:24}}>/month</Typography>
        </Box>
        <Divider variant="middle" />
        <Box>
          <List>
            <ListItem>
              <ListItemIcon>
                <DoneIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="Unlimited Users" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <DoneIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="150GB Storage" />
            </ListItem>
            <ListItem>
              <ListItemIcon  >
                <DoneIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="Unlimited Public Projects" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <DoneIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="Community Access" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <DoneIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="Unlimited Private Projects" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <DoneIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="Dedicated Phone Support" />
            </ListItem><ListItem>
              <ListItemIcon>
                <DoneIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="Free Subdomain" />
            </ListItem><ListItem>
              <ListItemIcon>
                <DoneIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="Monthly Status Reports" />
            </ListItem>
          </List>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button variant="contained">Button</Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

export default App;
