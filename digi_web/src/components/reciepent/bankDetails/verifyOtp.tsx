import { Grid, Paper, Avatar, Typography, TextField, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Checkbox, Button } from '@mui/material'
import React from 'react'
import Image from '../../../assets/bg_vp.jpg'
import { RootState } from '../../../store';
import { ChangeEvent } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { handleVerifyOtpRequest, updateOtpData } from '../../../slices/reciepent';
const VerifyOtp = () => {
    const dispatch = useDispatch();
    const paperStyle = { "border-radius": "10px", padding: 30, width: 400, margin: "100px 0px 0px 380px", height: 300, "box-shadow": "0px 0px 20px 0px #808c98" }
    const headerStyle = { margin: '20px 130px' }
    const btnstyle = { width: 100, margin: '40px 150px' }
    const logo = { height: "59px", width: "73px", "margin-left": "160px" }
    const { otp } = useSelector(
        (state: RootState) => state.reciepent.otpVerification
    );
    const handleUpdate = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      ) => {
        dispatch(
            updateOtpData({ name: e.target.name, value: e.target.value })
        );
      };
    return (
        <Grid>
            <Paper style={paperStyle}>
                <Grid alignItems={'center'}>
                    <img
                        src="./src/assets/otp.png"
                        style={logo}
                    />
                    <h2 style={headerStyle}>Verify OTP</h2>
                </Grid>
                <form>
                    <TextField fullWidth autoFocus variant="standard" required label='OTP' placeholder="Enter your OTP" margin="dense" onChange={(e) => handleUpdate(e)} name="otp" type="number" value={otp}/>
                </form>
                <Button >
                    resend
                </Button>
                <Button type='submit' variant='contained' color='primary' centerRipple style={btnstyle} onClick={() => dispatch(handleVerifyOtpRequest())}>Submit</Button>
            </Paper>
        </Grid>
    )
}

export default VerifyOtp;