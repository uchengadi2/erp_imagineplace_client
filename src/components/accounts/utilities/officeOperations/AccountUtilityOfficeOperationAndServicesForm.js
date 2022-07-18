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
      helperText="Enter the Office Operation & Service Name"
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
      helperText="Enter the Office Operation & Service Code"
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
      helperText="Describe the Office Operation & Service"
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

function AccountUtilityOfficeOperationAndServicesForm(props) {
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
    <form id="accountUtilityOfficeOperationAndServicesForm">
      <Box
        // component="form"
        // id="categoryForm"
        // onSubmit={onSubmit}
        sx={{
          width: 400,
          height: 440,
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
              Add Office Operation & Service
            </Typography>
          </FormLabel>
        </Grid>
        <Field
          label=""
          id="name"
          name="name"
          type="text"
          component={renderNameField}
        />
        <Field
          label=""
          id="code"
          name="code"
          type="text"
          component={renderCodeField}
        />

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
  form: "accountUtilityOfficeOperationAndServicesForm",
})(AccountUtilityOfficeOperationAndServicesForm);
