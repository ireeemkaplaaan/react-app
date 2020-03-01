import React, { useState, useEffect } from "react";
import { Grid, TextField, withStyles, FormControl, InputLabel, Select, MenuItem, Button, FormHelperText } from "@material-ui/core";
import Student from './student';
import useForm from './useForm';


const styles = theme => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            minWidth: 230,
        }
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 230,
    },
    smMargin: {
        margin: theme.spacing(1)
    }
})

const initialFieldValues = {
    fullName: '',
    mobile: '',
    email: '',
    age: '',
    bloodGroup: '',
    address: ''
}


const StudentForm = ({classes},...props) => {
   
    const validate = (fieldValues = values) => {
        let temp = {  }
        
            temp.fullName = fieldValues.fullName ? "" : "This field is required."
       
            temp.mobile = fieldValues.mobile ? "" : "This field is required."
      
            temp.bloodGroup = fieldValues.bloodGroup ? "" : "This field is required."
        
            temp.email = (/^$|.+@.+..+/).test(fieldValues.email) ? "" : "Email is not valid."
        setErrors({
            ...temp
        })
        Object.values(temp).every(x=>x=="")
    }

    const {
            values,
            setValues,
            errors,
            setErrors,
            handleInputChange,
            resetForm
    }=useForm(initialFieldValues)

    const handleSubmit = e => {
        e.preventDefault()
        if (validate()) {
            const onSuccess = () => {
                resetForm()
                
            }
            if (props.currentId == 0)
                props.createDCandidate(values, onSuccess)
            else
                props.updateDCandidate(props.currentId, values, onSuccess)
        }
    }
    return(
        <form autoComplete="off" noValidate className={classes.root} onSubmit={handleSubmit}>
            <Grid container>
                <Grid item xs={6}>
                    <TextField
                        name="fullName"
                        variant="outlined"
                        label="Full Name"
                        value={values.fullName}
                        onChange={handleInputChange}
                        {...(errors.fullName && { error: true, helperText: errors.fullName })}
                    />
                      <TextField
                        name="email"
                        variant="outlined"
                        label="Email"
                        value={values.fullName}
                        onChange={handleInputChange}
                        {...(errors.email && { error: true, helperText: errors.email })}
                    />
                      <TextField
                        name="fullName"
                        variant="outlined"
                        label="Full Name"
                        value={values.fullName}
                        onChange={handleInputChange}
                    />
              </Grid>
                <Grid item xs={6}>
                <TextField
                        name="mobile"
                        variant="outlined"
                        label="Mobile"
                        value={values.fullName}
                        onChange={handleInputChange}
                    />
                      <TextField
                        name="age"
                        variant="outlined"
                        label="Age"
                        value={values.fullName}
                        onChange={handleInputChange}
                    />
                      <TextField
                        name="address"
                        variant="outlined"
                        label="Address"
                        value={values.fullName}
                        onChange={handleInputChange}
                    />
                    <div>
                        <Button 
                        variant="contained"
                        color= "primary"
                        type="submit"
                        className={classes.smMargin}  
                        >
                            Submit
                        </Button>
                        <Button 
                        variant="contained"
                        className={classes.smMargin}                       
                        >
                            Reset
                        </Button>
                    </div>
                </Grid>
                </Grid>
        </form>
    );
}

export default StudentForm;