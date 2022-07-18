import React, { useState, useEffect } from "react";
import { Field, reduxForm } from "redux-form";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { TextField, Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 600,
  },
  formStyles: {
    width: 600,
  },
  submitButton: {
    borderRadius: 10,
    height: 40,
    width: 100,
    marginLeft: 150,
    marginTop: 20,
    marginBottom: 10,
    color: "white",
    backgroundColor: theme.palette.common.blue,
    "&:hover": {
      backgroundColor: theme.palette.common.blue,
    },
  },
}));

const renderNameField = ({
  input,
  label,
  meta: { touched, error, invalid },
  type,
  id,
  ...custom
}) => {
  return (
    <TextField
      //error={touched && invalid}
      helperText="Enter the new Scheme Code name"
      variant="outlined"
      label={label}
      id={input.name}
      defaultValue={input.value}
      fullWidth
      //required
      type={type}
      {...custom}
      // {...input}
      onChange={input.onChange}
    />
  );
};

const renderCodeField = ({
  input,
  label,
  meta: { touched, error, invalid },
  type,
  id,
  ...custom
}) => {
  return (
    <TextField
      //error={touched && invalid}
      helperText="Enter the new Scheme Code"
      variant="outlined"
      label={label}
      id={input.name}
      defaultValue={input.value}
      //value={input.value}
      fullWidth
      //required
      type={type}
      {...custom}
      // {...input}
      onChange={input.onChange}
    />
  );
};

const renderDescriptionField = ({
  input,
  label,
  meta: { touched, error, invalid },
  type,
  id,
  ...custom
}) => {
  return (
    <TextField
      error={touched && invalid}
      //placeholder="category description"
      variant="outlined"
      helperText="Describe the Scheme Code"
      label={label}
      id={input.name}
      name={input.name}
      defaultValue={input.value}
      fullWidth
      type={type}
      style={{ marginTop: 20 }}
      multiline={true}
      minRows={6}
      {...custom}
      // {...input}
      onChange={input.onChange}
    />
  );
};

function SchemeCodeForm(props) {
  const classes = useStyles();
  const [name, setName] = useState();
  const [schemeType, setSchemeType] = useState();
  const [description, setDescription] = useState();
  const [code, setCode] = useState();

  useEffect(() => {}, []);

  const handleSchemeTypeChange = (event) => {
    setSchemeType(event.target.value);
    //     props.handleCountryChange(event.target.value);
  };

  const handleOnDescriptionChange = (event) => {
    console.log("the vakues:", event.target.value);
    setDescription(event.target.value);
  };

  const renderSchemeTypeField = ({
    input,
    label,
    meta: { touched, error, invalid },
    type,
    id,
    ...custom
  }) => {
    return (
      <Box>
        <FormControl variant="outlined">
          {/* <InputLabel id="vendor_city">City</InputLabel> */}

          <Select
            labelId="value"
            id="value"
            //defaultValue={schemeType}
            value={schemeType}
            // onChange={props.handleCountryChange}
            onChange={handleSchemeTypeChange}
            label="Scheme Type"
            style={{ width: 400, marginTop: 10, height: 50 }}
            {...input}
          >
            <MenuItem value="oad">Outdoor Advertising</MenuItem>
            <MenuItem value="dad">Online Advertising</MenuItem>
            <MenuItem value="iad">Indoor Advertising</MenuItem>
            <MenuItem value="hoa">Head Office Accounts</MenuItem>
            <MenuItem value="oab">Office Account Basic</MenuItem>
            <MenuItem value="lon">Loans</MenuItem>
            <MenuItem value="emp">Employees</MenuItem>
            <MenuItem value="ass">Assets & Stocks</MenuItem>
            <MenuItem value="rle">Real Estates</MenuItem>
            {/* {renderItemList()} */}
          </Select>
          <FormHelperText style={{ marginLeft: 20 }}>
            Select Scheme Type
          </FormHelperText>
        </FormControl>
      </Box>
    );
  };

  const onSubmit = (formValues) => {
    const form = new FormData();
    form.append("name", formValues.name);
    form.append("description", formValues.description);
    form.append("createdBy", props.userId);
    if (formValues.image) {
      form.append("image", formValues.image[0]);
    }

    console.log("this is the form values:", formValues);
    //props.onSubmit(form);
  };

  return (
    <form id="schemeForm">
      <Box
        // component="form"
        // id="categoryForm"
        // onSubmit={onSubmit}
        sx={{
          width: 400,
          height: 460,
        }}
        noValidate
        autoComplete="off"
      >
        <Grid
          item
          container
          style={{ marginTop: 10, marginBottom: 10 }}
          justifyContent="center"
        >
          <FormLabel
            style={{ color: "blue", fontSize: "1.5em" }}
            component="legend"
          >
            <Typography variant="subtitle1">
              {" "}
              Create A New Scheme Code
            </Typography>
          </FormLabel>
        </Grid>
        <Field
          label=""
          id="schemeType"
          name="schemeType"
          type="text"
          component={renderSchemeTypeField}
        />
        <Grid container="row">
          <Grid item style={{ width: "45%" }}>
            <Field
              label=""
              id="code"
              name="code"
              type="text"
              component={renderCodeField}
              style={{ marginTop: 20 }}
            />
          </Grid>
          <Grid item style={{ width: "52%", marginLeft: 10 }}>
            <Field
              label=""
              id="name"
              name="name"
              type="text"
              component={renderNameField}
              style={{ marginTop: 20 }}
            />
          </Grid>
        </Grid>

        <Field
          label=""
          id="description"
          name="description"
          type="text"
          component={renderDescriptionField}
        />

        <Button
          variant="contained"
          className={classes.submitButton}
          onClick={props.handleSubmit(onSubmit)}
        >
          Submit
        </Button>
      </Box>
    </form>
  );
}

export default reduxForm({
  form: "schemeCodeForm",
})(SchemeCodeForm);
