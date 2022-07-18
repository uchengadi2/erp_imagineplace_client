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
    marginBottom: 20,
    color: "white",
    backgroundColor: theme.palette.common.blue,
    "&:hover": {
      backgroundColor: theme.palette.common.blue,
    },
  },
}));

const renderTransactionTypeNameField = ({
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
      helperText="Enter Transaction Type Name"
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

const renderTransactionTypeCodeField = ({
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
      helperText="Enter the Transaction Type Code"
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

const renderTransactionTypeDescriptionField = ({
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
      helperText="Describe Transaction Type"
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

function AccountUtilityTransactionTypesForm(props) {
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
            <Typography variant="subtitle1"> Add Transaction Type</Typography>
          </FormLabel>
        </Grid>
        <Field
          label=""
          id="name"
          name="name"
          type="text"
          component={renderTransactionTypeNameField}
        />
        <Field
          label=""
          id="transTypeCode"
          name="transTypeCode"
          type="text"
          component={renderTransactionTypeCodeField}
          style={{ marginTop: 10 }}
        />

        <Field
          label=""
          id="description"
          name="description"
          type="text"
          component={renderTransactionTypeDescriptionField}
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
  form: "accountUtilityTransactionTypesForm",
})(AccountUtilityTransactionTypesForm);
