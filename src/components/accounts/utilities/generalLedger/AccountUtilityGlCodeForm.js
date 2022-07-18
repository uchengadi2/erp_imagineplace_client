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
      helperText="Enter the new GL Head Code name"
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
      helperText="Enter the new GL Head Code"
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
  delete input.value;
  return (
    <TextField
      key={id}
      error={touched && invalid}
      //placeholder="enter your description "
      variant="outlined"
      helperText="Describe the GL Head Code"
      label={label}
      id={input.name}
      name={input.name}
      defaultValue={input.value}
      fullWidth
      type={type}
      style={{ marginTop: 20 }}
      multiline={true}
      minRows={4}
      {...custom}
      // {...input}
      onChange={input.onChange}
    />
  );
};

function AccountUtilityGlCodeForm(props) {
  const [name, setName] = useState();
  const [schemeCode, setSchemeCode] = useState();
  const [description, setDescription] = useState();
  const [code, setCode] = useState();
  const [accountClass, setAccountClass] = useState();

  const handleAccountClassChange = (event) => {
    setAccountClass(event.target.value);
  };
  const classes = useStyles();

  useEffect(() => {}, []);

  const handleSchemeTypeChange = (event) => {
    setSchemeCode(event.target.value);
    //     props.handleCountryChange(event.target.value);
  };

  const handleChange = (target) => {
    setDescription(target.value);
  };

  const renderSchemeCodeField = ({
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
            value={schemeCode}
            // onChange={props.handleCountryChange}
            onChange={handleSchemeTypeChange}
            label="Scheme Type"
            style={{ width: 400, marginTop: 10, height: 50 }}
            {...input}
          >
            <MenuItem value="commodities">Commodities</MenuItem>
            <MenuItem value="charcoal">Charcoal</MenuItem>
            <MenuItem value="seafood">Sea Foods</MenuItem>
            <MenuItem value="processedfoods">Processed Foods</MenuItem>
            <MenuItem value="plantation">Plantation</MenuItem>
            <MenuItem value="livestock">Livestock</MenuItem>
            <MenuItem value="minerals">Minerals</MenuItem>
            <MenuItem value="headofficeaccounts">Head Office Accounts</MenuItem>
            <MenuItem value="officeaccountbasic">Office Account Basic</MenuItem>
            <MenuItem value="loans">Loans</MenuItem>
            <MenuItem value="ranch">Ranch</MenuItem>
            <MenuItem value="farmlands">Farmlands</MenuItem>
            <MenuItem value="realestate">Real Estates</MenuItem>
            {/* {renderItemList()} */}
          </Select>
          <FormHelperText style={{ marginLeft: 20 }}>
            Select Scheme Code
          </FormHelperText>
        </FormControl>
      </Box>
    );
  };

  const renderAccountClassField = ({
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
            labelId="accountClass"
            id="accountClass"
            //defaultValue={schemeType}
            value={accountClass}
            // onChange={props.handleCountryChange}
            onChange={handleAccountClassChange}
            label="Account Class"
            style={{ width: 400, marginTop: 10, height: 50 }}
            {...input}
          >
            <MenuItem value="assets">Assets</MenuItem>
            <MenuItem value="liabilities">Liabilities</MenuItem>
            <MenuItem value="equity">Equity</MenuItem>
            <MenuItem value="revenue">Revenue</MenuItem>
            <MenuItem value="expense">Expense</MenuItem>

            {/* {renderItemList()} */}
          </Select>
          <FormHelperText style={{ marginLeft: 20 }}>
            Select Account Class
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
    <form id="accountUtilityGlCodeForm">
      <Box
        // component="form"
        // id="categoryForm"
        // onSubmit={onSubmit}
        sx={{
          width: 400,
          height: 500,
        }}
        noValidate
        autoComplete="off"
      >
        <Grid
          item
          container
          style={{ marginTop: 10, marginBottom: 5 }}
          justifyContent="center"
        >
          <FormLabel
            style={{ color: "blue", fontSize: "1.5em" }}
            component="legend"
          >
            <Typography variant="subtitle1">
              Create A New Gl Code Head
            </Typography>
          </FormLabel>
        </Grid>
        <Field
          label=""
          id="schemeCode"
          name="schemeCode"
          type="text"
          component={renderSchemeCodeField}
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
          id="accountClass"
          name="accountClass"
          type="text"
          component={renderAccountClassField}
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
  form: "accountUtilityGlCodeForm",
})(AccountUtilityGlCodeForm);
