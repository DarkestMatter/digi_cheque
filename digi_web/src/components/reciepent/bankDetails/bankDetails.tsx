import { Grid, Paper, Avatar, Typography, TextField, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Checkbox, Button } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { handleBankDetailsRequest } from '../../../slices/reciepent';
import { RootState } from '../../../store';

const BankDetails = () => {
    const dispatch = useDispatch();
    const paperStyle = { "border-radius": "10px", padding: 50, width: 400, margin: "0 auto",height: 470, "box-shadow": "0px 0px 20px 0px #808c98" }
    const headerStyle = { margin: '20px 100px'}
    const avatarStyle = { backgroundColor: '#1bbd7e', margin: '0px 160px', height: 70, width: 70,}
    const btnstyle={width: 100, margin:'50px 150px'}
    const { userName,phoneNumber,accountNumber,IFSCCode } = useSelector(
        (state: RootState) => state.reciepent.bankDetails
    );
    return (
        <Grid>
        <Paper style={paperStyle}>
            <Grid alignItems={'center'}>
                <Avatar style={avatarStyle}>
                    {/* <AddCircleOutlineOutlinedIcon /> */}
                </Avatar>
                <h2 style={headerStyle}>Account Number</h2>
            </Grid>
            <form>
                <TextField fullWidth autoFocus variant="standard" required label='Name' placeholder="Enter your name" margin="dense" value={userName} />
                <TextField fullWidth autoFocus variant="standard" required label='Phone Number' placeholder="Enter your phone number" margin="dense" value={phoneNumber}/>
                <TextField fullWidth autoFocus variant="standard" required label='Account Number' placeholder="Enter your Account number" margin="dense" value={accountNumber}/>
                <TextField fullWidth autoFocus variant="standard" required label='IFSC Code' placeholder="Enter your IFSC Code" margin="dense" value={IFSCCode}/>
            </form>
            <Button  type='submit' variant='contained' color='primary' centerRipple style={btnstyle} onClick={() => dispatch(handleBankDetailsRequest())}>Submit</Button>
            </Paper>
        </Grid>
    )
}

export default BankDetails;