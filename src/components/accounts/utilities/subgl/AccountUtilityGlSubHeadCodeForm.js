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
      helperText="Enter GL SubHead Code name"
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

const renderSubHeadCodeField = ({
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
      helperText="Enter GL SubHead Code"
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
      helperText="Describe the GL SubHead Code"
      label={label}
      id={input.name}
      name={input.name}
      defaultValue={input.value}
      fullWidth
      type={type}
      style={{ marginTop: 20 }}
      multiline={true}
      minRows={3}
      {...custom}
      // {...input}
      onChange={input.onChange}
    />
  );
};

function AccountUtilityGlSubHeadCodeForm(props) {
  const classes = useStyles();
  const [name, setName] = useState();
  const [schemeCode, setSchemeCode] = useState();
  const [description, setDescription] = useState();
  const [glHeadCode, setGlHeadCode] = useState();
  const [currency, setCurrency] = useState();
  const [serviceOutlet, setServiceOutlet] = useState();

  useEffect(() => {}, []);

  const handleSchemeTypeChange = (event) => {
    setSchemeCode(event.target.value);
    //     props.handleCountryChange(event.target.value);
  };

  const handleOnDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const renderGlHeadCodeField = ({
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
            value={glHeadCode}
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
            Select GL Head Code
          </FormHelperText>
        </FormControl>
      </Box>
    );
  };

  const renderServiceOutletField = ({
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
            value={serviceOutlet}
            // onChange={props.handleCountryChange}
            onChange={handleSchemeTypeChange}
            label="Service Outlet"
            style={{ width: 200, marginTop: 10, height: 50 }}
            {...input}
          >
            <MenuItem value="commodities">Commodities</MenuItem>
            <MenuItem value="charcoal">Charcoal</MenuItem>
            <MenuItem value="seafood">Sea Foods</MenuItem>
            <MenuItem value="processedfoods">Processed Foods</MenuItem>

            {/* {renderItemList()} */}
          </Select>
          <FormHelperText style={{ marginLeft: 20 }}>
            Select Service Outlet
          </FormHelperText>
        </FormControl>
      </Box>
    );
  };

  const renderCurrencyField = ({
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
            value={currency}
            // onChange={props.handleCountryChange}
            onChange={handleSchemeTypeChange}
            label="Currency"
            style={{ width: 190, marginLeft: 20, marginTop: 10, height: 50 }}
            {...input}
          >
            <MenuItem value="commodities">Commodities</MenuItem>
            <MenuItem value="charcoal">Charcoal</MenuItem>
            <MenuItem value="seafood">Sea Foods</MenuItem>
            <MenuItem value="processedfoods">Processed Foods</MenuItem>
            <MenuItem value="plantation">Plantation</MenuItem>

            {/* {renderItemList()} */}
          </Select>
          <FormHelperText style={{ marginLeft: 20 }}>
            Select Currency
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
    <form id="accountUtilityGlSubHeadCodeForm">
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
              Create A New Gl SubHead Code
            </Typography>
          </FormLabel>
        </Grid>
        <Field
          label=""
          id="glHeadCode"
          name="glHeadCode"
          type="text"
          component={renderGlHeadCodeField}
        />
        <Grid container direction="row">
          <Grid item style={{ width: "45%" }}>
            <Field
              label=""
              id="serviceOutlet"
              name="serviceOutlet"
              type="text"
              component={renderServiceOutletField}
              style={{ marginTop: 20 }}
            />
          </Grid>
          <Grid item style={{ width: "52%", marginLeft: 10 }}>
            <Field
              label=""
              id="currency"
              name="currency"
              type="text"
              component={renderCurrencyField}
              style={{ marginTop: 20 }}
            />
          </Grid>
        </Grid>
        <Grid container direction="row">
          <Grid item style={{ width: "45%" }}>
            <Field
              label=""
              id="code"
              name="code"
              type="text"
              component={renderSubHeadCodeField}
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
  form: "accountUtilityGlSubHeadCodeForm",
})(AccountUtilityGlSubHeadCodeForm);
