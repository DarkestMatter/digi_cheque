import { Grid, Paper, Avatar, Typography, TextField, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Checkbox, Button } from '@mui/material'
import React from 'react'
import Image from '../../../assets/bg_vp.jpg'





const VerifyOtp = () => {
    const paperStyle = { "border-radius": "10px", padding: 30, width: 400, margin: "100px 0px 0px 380px", height: 300, "box-shadow": "0px 0px 20px 0px #808c98" }
    const headerStyle = { margin: '20px 130px' }
    const avatarStyle = { backgroundColor: '#1bbd7e', margin: '0px 160px', height: 70, width: 70, }
    const marginTop = { marginTop: 5 }

    const btnstyle = { width: 100, margin: '40px 150px' }
    const successStyle = { width: 100, margin: '40px 150px' }


    const bgstyles = {
        paperContainer: {
            backgroundImage: `url(${Image})`,
            height: 569,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: `calc(100vw + -32px)`,
            margin: -24,
            padding: 24,
        }
    };

    const inputTextBox = { height: 15 }

    const logo = { height: "59px", width: "73px", "margin-left": "160px" }
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
                    <TextField fullWidth autoFocus variant="standard" required label='OTP' placeholder="Enter your OTP" margin="dense" />
                </form>
                <Button >
                    resend
                </Button>
                <Button type='submit' variant='contained' color='primary' centerRipple style={btnstyle}>Submit</Button>
            </Paper>
        </Grid>
    )
}

export default VerifyOtp;