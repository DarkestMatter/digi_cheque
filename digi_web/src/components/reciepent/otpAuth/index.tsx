import { Grid, Paper, Avatar, Typography, TextField, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Checkbox, Button } from '@mui/material'
import React from 'react'

const OtpAuth = () => {
    const paperStyle = { padding: 50, width: 400, margin: "0 auto" }
    const headerStyle = { margin: '10px 100px'}
    const avatarStyle = { backgroundColor: '#1bbd7e', margin: '0px 150px' }
    const marginTop = { marginTop: 5 }
    const btnstyle={width: 100, margin:'10px 150px'}
    return (
        <Grid>
        <Paper style={paperStyle}>
            <Grid alignItems={'center'}>
                <Avatar style={avatarStyle}>
                    {/* <AddCircleOutlineOutlinedIcon /> */}
                </Avatar>
                <h2 style={headerStyle}>Account number</h2>
            </Grid>
            <form>
                <TextField fullWidth label='IFSC Code' placeholder="Enter your IFSC Code" margin="normal" />
            </form>
            <Button onClick={() => {}}  type='submit' variant='contained' color='primary' centerRipple style={btnstyle}>Submit</Button>
            </Paper>
        </Grid>
    )
}

export default OtpAuth;