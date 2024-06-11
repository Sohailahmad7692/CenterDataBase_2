import React, { useState } from "react";
import {
  Grid,
  makeStyles,
  Card,
  CardContent,
  MenuItem,
  InputLabel,
  Select,
  CardActions,
  Button,
  CardHeader,
  FormControl
} from "@material-ui/core";

import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import TextField from "@mui/material/TextField";
import axios from 'axios';

const useStyle = makeStyles((theme) => ({
  padding: {
    padding: theme.spacing(3)
  },
  button: {
    margin: theme.spacing(1)
  }
}));

//Data
// const initialValues = {
//   firstName: "",
//   lastName: "",
//   batches: "",
//   number: "",
//   city: "",
//   country: "",
//   email: "",
//   password: ""
// };

const options = [
  { label: "6102", value: "6102" },
  { label: "121", value: "121" },
  { label: "325", value: "325" },
  { label: "421", value: "421" },
  { label: "532", value: "532" }
  // { label: "Computer Programmer", value: "Computer_programmer" },
  // { label: "Web Developer", value: "web_developer" },
  // { label: "User Experience Designer", value: "user_experience_designer" },
  // { label: "Systems Analyst", value: "systems_analyst" }
];

//password validation
const lowercaseRegEx = /(?=.*[a-z])/;
const uppercaseRegEx = /(?=.*[A-Z])/;
const numericRegEx = /(?=.*[0-9])/;
const lengthRegEx = /(?=.{6,})/;

//validation schema
let validationSchema = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .matches(
      lowercaseRegEx,
      "Must contain one lowercase alphabetical character!"
    )
    .matches(
      uppercaseRegEx,
      "Must contain one uppercase alphabetical character!"
    )
    .matches(numericRegEx, "Must contain one numeric character!")
    .matches(lengthRegEx, "Must contain 6 characters!")
    .required("Required!")
});

const UserForm = () => {
  const [initialValues, setInitialValue] = useState({
    firstName: "",
    lastName: "",
    batches: "",
    number: "",
    address: "",
    // country: "",
    // email: "",
    // password: ""
  })
  const classes = useStyle();

  const onSubmit = (values) => {

    console.log(values, initialValues);
    sendDataToDataBase();
  };
  const sendDataToDataBase = async () => {
    const userData = {
      firstName: initialValues.firstName,
      lastName: initialValues.lastName,
      batches: initialValues.batches,
      number: initialValues.number,
      address: initialValues.address,
    }
    try {
      const postData = await axios.post('http://localhost:8080/addStudentData', userData);
      // const response = await axios.get('http://localhost:8080/getAll');
      await console.log(postData);
    } catch (e) {
      console.log(e, 'error');
    }
  }
  const handleChange = (field, value) => {
    setInitialValue({ ...initialValues, [field]: value });
    // console.log(initialValues, { ...initialValues });
    // console.log(field, value, 'values')
  }

  return (
    <Grid container justify-content="center" spacing={1}>
      <Grid item md={6}>
        <Card className={classes.padding}>
          <CardHeader title="Add Student"></CardHeader>
          <Formik
            initialValues={initialValues}
            // validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({ dirty, isValid, values, handleBlur }) => {
              return (
                <Form>
                  <CardContent>
                    <Grid item container spacing={1} justify-content="center">
                      <Grid item xs={12} sm={6} md={6}>
                        <Field
                          label="First Name"
                          variant="outlined"
                          fullWidth
                          name="firstName"
                          value={initialValues.firstName}
                          onChange={(e) => { handleChange('firstName', e.target.value) }}
                          component={TextField}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6} md={6}>
                        <Field
                          label="Last Name"
                          variant="outlined"
                          fullWidth
                          name="lastName"
                          value={initialValues.lastName}
                          component={TextField}
                          onChange={(e) => { handleChange('lastName', e.target.value) }}
                        />
                      </Grid>

                      <Grid item xs={12} sm={12} md={12}>
                        <FormControl fullWidth variant="outlined">
                          <InputLabel id="demo-simple-select-outlined-label">
                            batches
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            label="batches"
                            onBlur={handleBlur}
                            value={initialValues.batches}
                            name="batches"
                            onChange={(e) => { handleChange('batches', e.target.value) }}
                          >
                            <MenuItem>None</MenuItem>
                            {options.map((item) => (
                              <MenuItem key={item.value} value={item.value}>
                                {item.label}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </Grid>
                      <Grid item xs={12} sm={12} md={12}>
                        <Field
                          label="number"
                          variant="outlined"
                          fullWidth
                          name="number"
                          value={initialValues.number}
                          component={TextField}
                          onChange={(e) => { handleChange('number', e.target.value) }}
                        />
                      </Grid>
                      <Grid item xs={12} sm={12} md={12}>
                        <Field
                          label="Address"
                          variant="outlined"
                          fullWidth
                          name="address"
                          value={initialValues.address}
                          component={TextField}
                          onChange={(e) => { handleChange('address', e.target.value) }}
                        />
                      </Grid>
                    </Grid>
                  </CardContent>
                  <CardActions>
                    <Button
                      variant="contained"
                      color="primary"
                      type="Submit"
                      className={classes.button}
                    >
                      ADD
                    </Button>
                  </CardActions>
                </Form>
              );
            }}
          </Formik>
        </Card>
      </Grid>
    </Grid>
  );
};

export default UserForm;
