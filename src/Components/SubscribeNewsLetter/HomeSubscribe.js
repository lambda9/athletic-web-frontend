import React from 'react'
import './HomeSubscribe.css'
import {Link} from 'react-router-dom'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const PRIME_COLOR = '#459fb6'
const CssTextField = withStyles({
    root: {
        width: '40%',
        "& .MuiOutlinedInput-root": {
        "& fieldset": {
        borderRadius: "3px 0 0 3px",
        borderColor: "white",
        padding: "4px"
        },
        "&:hover fieldset": {
        color: PRIME_COLOR,
        borderColor: PRIME_COLOR,
        },
        "&.Mui-focused fieldset": {
          borderColor: PRIME_COLOR,
        },
      },
    },
  })(TextField);
function HomeSubscribe() {



    return (
        <div className='subs-main-div'>
        <div>
        <h2>Subscribe to your news letter</h2>
        <h3>Get latest updates</h3>
        </div>
        <div className='subs-home-field-cont'>
        <CssTextField id="outlined-basic" label="Outlined" variant="outlined" />
        <Link to='/' className='button-primary subs-home-btn' >Subscribe</Link>
        </div>
        </div>
    )
}

export default HomeSubscribe
