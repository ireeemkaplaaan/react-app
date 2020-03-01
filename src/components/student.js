import React, {useState,useEffect} from "react";
import {conect, connect} from "react-redux";
import * as actions from "../action/student";
import {Grid,PaperProps,TableContainer, Table, TableHead, TableRow, TableCell, TableBody, withStyles, ButtonGroup, Button,Paper } from "@material-ui/core";
import StudentForm from "./StudentForm";



const styles = theme => ({
    root: {
        "& .MuiTableCell-head": {
            fontSize: "1.25rem"
        }
    },
    paper: {
        margin: theme.spacing(2),
        padding: theme.spacing(2)
    }
})

const Student = ({classes,...props}) => {
   useEffect(()=>{
       props.fetchAllStuudent()
   },[])

   

   return(
    <Paper className={classes.paper} elevation={3}>
        <Grid container>
            <Grid item xs={6}>
            <StudentForm/>
            </Grid>
            <Grid item xs={6}>
            <TableContainer>
                        <Table>
                            <TableHead className={classes.root}>
                                <TableRow>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Mobile</TableCell>
                                    <TableCell>Blood Group</TableCell>                             
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    props.studentlist.map((record,index)=>{
                                        return (<TableRow key={index} hover>
                                            <TableCell>{record.fullName}</TableCell>
                                            <TableCell>{record.fullName}</TableCell>
                                            <TableCell>{record.fullName}</TableCell>
                                        </TableRow>)
                                    })
                                }
                            </TableBody>
                        </Table>
            </TableContainer>
            </Grid>
        </Grid>
    </Paper>
   );
}

const mapStateToProps = state=> ({
        studentlist:state.student.list
})
const mapActionTopProps = state=> ({
    fetchAllStuudent: actions.fetchall
})




export default connect(mapStateToProps,mapActionTopProps) (withStyles(styles)(Student));