import React, { useState, useEffect } from "react";
import { Field, reduxForm } from "redux-form";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { TextField } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import { Typography } from "@mui/material";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import data from "../../../apis/local";
import { SettingsSystemDaydreamTwoTone } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 20,
  },
  formStyles: {
    width: 550,
  },
  formControl: {
    //margin: theme.spacing(1),
    minWidth: 150,
    marginTop: 20,
  },

  submitButton: {
    borderRadius: 10,
    height: 40,
    width: 50,
    marginLeft: 15,
    marginTop: 30,
    // marginBottom: 20,
    color: "white",
    backgroundColor: theme.palette.common.blue,
    "&:hover": {
      backgroundColor: theme.palette.common.blue,
    },
    accountType: {
      minWidth: 150,
      marginTop: 30,
    },
    formSectionHeader: {
      color: theme.palette.common.blue,
    },
  },
}));

function LocationAssetTypesMaintenanceTypesFilter(props) {
  const classes = useStyles();
  const [value, setValue] = useState();

  //   useEffect(() => {
  //     setValue(props.selectedCountry);
  //     props.handleCountryChange(props.selectedCountry);
  //   }, [props]);

  const handleChange = (event) => {
    setValue(event.target.value);
    //     props.handleCountryChange(event.target.value);
  };

  const renderItemList = () => {
    return props.selectList.map((item) => {
      return (
        <MenuItem key={item.id} value={item.id}>
          {item.name}
        </MenuItem>
      );
    });
  };

  const renderInventoryLocationsField = ({
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
            value={props.selectedCountry}
            // onChange={props.handleCountryChange}
            onChange={handleChange}
            label="Country"
            style={{ width: 300, marginLeft: 10, marginTop: 30, height: 40 }}
          >
            <MenuItem value="">
              <em>All</em>
            </MenuItem>
            <MenuItem value="naira">Naira</MenuItem>
            <MenuItem value="usdollars">US Dollars</MenuItem>
            <MenuItem value="pounds">Pounds Sterling</MenuItem>
            {/* {renderItemList()} */}
          </Select>
          <FormHelperText style={{ marginLeft: 20 }}>
            Select Inventory Location
          </FormHelperText>
        </FormControl>
      </Box>
    );
  };

  const renderAssetTypesField = ({
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
            value={props.selectedCountry}
            // onChange={props.handleCountryChange}
            onChange={handleChange}
            label="Country"
            style={{ width: 300, marginLeft: 10, marginTop: 30, height: 40 }}
          >
            <MenuItem value="">
              <em>All</em>
            </MenuItem>
            <MenuItem value="naira">Naira</MenuItem>
            <MenuItem value="usdollars">US Dollars</MenuItem>
            <MenuItem value="pounds">Pounds Sterling</MenuItem>
            {/* {renderItemList()} */}
          </Select>
          <FormHelperText style={{ marginLeft: 20 }}>
            Select Asset Type
          </FormHelperText>
        </FormControl>
      </Box>
    );
  };

  const renderMaintenanceTypesField = ({
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
            value={props.selectedCountry}
            // onChange={props.handleCountryChange}
            onChange={handleChange}
            label="Country"
            style={{ width: 300, marginLeft: 10, marginTop: 30, height: 40 }}
          >
            <MenuItem value="">
              <em>All</em>
            </MenuItem>
            <MenuItem value="naira">Naira</MenuItem>
            <MenuItem value="usdollars">US Dollars</MenuItem>
            <MenuItem value="pounds">Pounds Sterling</MenuItem>
            {/* {renderItemList()} */}
          </Select>
          <FormHelperText style={{ marginLeft: 20 }}>
            Select Maintenance Type
          </FormHelperText>
        </FormControl>
      </Box>
    );
  };

  const onSubmit = (formValues) => {
    props.onSubmit(formValues);
  };

  return (
    <div className={classes.root}>
      <form id="selectForm" className={classes.formStyles}>
        <Box
          sx={{
            width: 1000,
            height: 50,
          }}
          noValidate
          autoComplete="off"
        >
          <Grid
            container
            direction="row"
            //style={{ marginTop: 20 }}
            //justifyContent="center"
            //style={{ width: 1000 }}
          >
            <Grid item>
              <Field
                label=""
                id="inventoryLocation"
                name="inventoryLocation"
                type="text"
                component={renderInventoryLocationsField}
                autoComplete="off"
                //style={{ marginTop: 20 }}
              />
            </Grid>
            <Grid item>
              <Field
                label=""
                id="assetType"
                name="assetType"
                type="text"
                component={renderAssetTypesField}
                autoComplete="off"
                //style={{ marginTop: 20 }}
              />
            </Grid>
            <Grid item>
              <Field
                label=""
                id="maintenanceType"
                name="maintenanceType"
                type="text"
                component={renderMaintenanceTypesField}
                autoComplete="off"
                //style={{ marginTop: 20 }}
              />
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                className={classes.submitButton}
                onClick={props.handleSubmit(onSubmit)}
              >
                Go
              </Button>
            </Grid>
          </Grid>
        </Box>
      </form>
    </div>
  );
}

export default reduxForm({
  form: "selectForm",
})(LocationAssetTypesMaintenanceTypesFilter);
