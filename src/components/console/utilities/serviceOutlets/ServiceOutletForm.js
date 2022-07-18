import React, { useState, useEffect } from "react";
import { Field, reduxForm } from "redux-form";
import Grid from "@material-ui/core/Grid";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { TextField, Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import data from "./../../../../apis/local";

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
    width: 170,
    marginLeft: 130,
    marginTop: 30,
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
      helperText="Enter Service Outlet Name"
      variant="outlined"
      //label={label}
      id={input.name}
      defaultValue={input.value}
      fullWidth
      //required
      type={type}
      {...custom}
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
      helperText="SOL Code"
      variant="outlined"
      //label={label}
      id={input.name}
      defaultValue={input.value}
      fullWidth
      //required
      type={type}
      {...custom}
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
      //error={touched && invalid}
      helperText="Describe Service Outlet"
      variant="outlined"
      //label={label}
      id={input.name}
      defaultValue={input.value}
      fullWidth
      //required
      type={type}
      {...custom}
      multiline={true}
      minRows={1}
      onChange={input.onChange}
    />
  );
};

const renderAddressField = ({
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
      helperText="Enter Address of Service Outlet"
      variant="outlined"
      //label={label}
      id={input.name}
      defaultValue={input.value}
      fullWidth
      //required
      type={type}
      {...custom}
      multiline={true}
      minRows={1}
      onChange={input.onChange}
    />
  );
};

function ServiceOutletForm(props) {
  const classes = useStyles();

  const [country, setCountry] = useState();
  const [region, setRegion] = useState();
  const [countryList, setCountryList] = useState([]);

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  const handleRegionChange = (event) => {
    setRegion(event.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      let allData = [];
      data.defaults.headers.common["Authorization"] = `Bearer ${props.token}`;
      const response = await data.get("/countries");
      const workingData = response.data.data.data;
      workingData.map((country) => {
        allData.push({ id: country._id, name: country.name });
      });
      setCountryList(allData);
    };

    //call the function

    fetchData().catch(console.error);
  }, []);

  //get the country list
  const renderCountryList = () => {
    return countryList.map((item) => {
      return (
        <MenuItem key={item.id} value={item.id}>
          {item.name}
        </MenuItem>
      );
    });
  };

  const renderLocationField = ({
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
            labelId="country"
            id="country"
            value={country}
            onChange={handleCountryChange}
            label="Country"
            style={{ width: 400 }}
            {...input}
          >
            {renderCountryList()}
          </Select>
          <FormHelperText>Select Location</FormHelperText>
        </FormControl>
      </Box>
    );
  };

  const renderCityField = ({
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
            labelId="city"
            id="city"
            value={region}
            onChange={handleRegionChange}
            label="City"
            style={{ width: 400, marginTop: 10 }}
            {...input}
          >
            <MenuItem value={"west"}>West</MenuItem>
            <MenuItem value={"east"}>East</MenuItem>
            <MenuItem value={"north"}>North</MenuItem>
            <MenuItem value={"south"}>South</MenuItem>
            <MenuItem value={"central"}>Central</MenuItem>
            <MenuItem value={"south-east"}>South East</MenuItem>
            <MenuItem value={"south-west"}>South West</MenuItem>
            <MenuItem value={"south-central"}>South Central</MenuItem>
            <MenuItem value={"south-south"}>South South</MenuItem>
            <MenuItem value={"north-east"}>North East</MenuItem>
            <MenuItem value={"north-west"}>North West</MenuItem>
            <MenuItem value={"north-central"}>North Central</MenuItem>
            <MenuItem value={"north-north"}>North North</MenuItem>
          </Select>
          <FormHelperText>Select City of the Address</FormHelperText>
        </FormControl>
      </Box>
    );
  };

  const onSubmit = (formValues) => {
    const data = {
      name: formValues.name,
      region: formValues.region,
      description: formValues.description,
      country: formValues.country,
      code: formValues.code,
      createdBy: props.userId,
    };

    props.onSubmit(data);
  };

  return (
    <>
      <Grid item container justifyContent="center">
        <FormLabel
          style={{ color: "blue", fontSize: "1.5em" }}
          component="legend"
        >
          <Typography variant="subtitle1">Create Service Outlet</Typography>
        </FormLabel>
      </Grid>
      <Box
        component="form"
        id="serviceOutletForm"
        // onSubmit={onSubmit}
        sx={{
          width: 400,
        }}
        noValidate
        autoComplete="off"
        style={{ marginTop: 10 }}
      >
        <Grid container direction="row" style={{ marginTop: 10 }}>
          <Grid item style={{ width: "69%" }}>
            <Field
              label=""
              id="name"
              name="name"
              type="text"
              component={renderNameField}
            />
          </Grid>
          <Grid item style={{ width: "28%", marginLeft: 10 }}>
            <Field
              label=""
              id="code"
              name="code"
              type="text"
              component={renderCodeField}
            />
          </Grid>
        </Grid>
        <Grid container direction="row" style={{ marginTop: 10 }}>
          <Grid item style={{ width: "100%" }}>
            <Field
              label=""
              id="location"
              name="location"
              type="text"
              component={renderLocationField}
            />
          </Grid>
        </Grid>
        <Field
          label=""
          id="address"
          name="address"
          type="text"
          component={renderAddressField}
          style={{ marginTop: 10 }}
        />
        <Field
          label=""
          id="city"
          name="city"
          type="text"
          component={renderCityField}
          style={{ marginTop: 10 }}
        />
        <Field
          label=""
          id="description"
          name="description"
          type="text"
          component={renderDescriptionField}
          style={{ marginTop: 10 }}
        />

        <Button
          variant="contained"
          className={classes.submitButton}
          onClick={props.handleSubmit(onSubmit)}
        >
          Add Service Outlet
        </Button>
      </Box>
      {/* </form> */}
    </>
  );
}

export default reduxForm({
  form: "serviceOutletForm",
})(ServiceOutletForm);
