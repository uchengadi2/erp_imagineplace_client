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
    marginRight: 50,
    marginTop: 20,
    marginBottom: 5,
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
      helperText="Enter Sub Ledger Owner Name"
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
      helperText="Enter Sub Ledger Title"
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

const renderCreditLimitAmountField = ({
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
      helperText="Enter Cr Limit Amount"
      label={label}
      id={input.name}
      name={input.name}
      defaultValue={input.value}
      fullWidth
      type={type}
      style={{ marginTop: 20 }}
      {...custom}
      // {...input}
      onChange={input.onChange}
    />
  );
};

const renderDebitLimitAmountField = ({
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
      helperText="Enter Dr Limit Amount"
      label={label}
      id={input.name}
      name={input.name}
      defaultValue={input.value}
      fullWidth
      type={type}
      style={{ marginTop: 20 }}
      {...custom}
      // {...input}
      onChange={input.onChange}
    />
  );
};

const renderAccountOwnershipTypeField = ({
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
      helperText="Account Ownership Type"
      label={label}
      id={input.name}
      name={input.name}
      //defaultValue={accountOwnershipType}
      defaultValue={"customer"}
      fullWidth
      type={type}
      style={{ marginTop: 20 }}
      {...custom}
      // {...input}
      onChange={input.onChange}
      disabled
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
      helperText="Describe the Account"
      label={label}
      id={input.name}
      name={input.name}
      defaultValue={input.value}
      fullWidth
      type={type}
      style={{ marginTop: 10 }}
      multiline={true}
      minRows={1}
      {...custom}
      // {...input}
      onChange={input.onChange}
    />
  );
};

const renderMemoField = ({
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
      helperText="Memo"
      label={label}
      id={input.name}
      name={input.name}
      defaultValue={input.value}
      fullWidth
      type={type}
      style={{ marginTop: 10 }}
      multiline={true}
      minRows={1}
      {...custom}
      // {...input}
      onChange={input.onChange}
    />
  );
};

function AccountsLedgerCustomerSubLedgerForm(props) {
  const classes = useStyles();
  const [name, setName] = useState();
  const [assetType, setAssetType] = useState();
  const [description, setDescription] = useState();
  const [glHeadCode, setGlHeadCode] = useState();
  const [currency, setCurrency] = useState();
  const [serviceOutlet, setServiceOutlet] = useState();

  useEffect(() => {}, []);

  const handleSchemeTypeChange = (event) => {
    //setSchemeCode(event.target.value);
    //     props.handleCountryChange(event.target.value);
  };

  const handleAssetTypeChange = (event) => {
    setAssetType(event.target.value);
    //     props.handleCountryChange(event.target.value);
  };

  const handleOnDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const renderSubGlHeadCodeField = ({
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
            style={{ width: 200, marginTop: 10, height: 50 }}
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
            Select Sub GL Head Code
          </FormHelperText>
        </FormControl>
      </Box>
    );
  };

  const renderUserTypeField = ({
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
            labelId="userType"
            id="userType"
            //defaultValue={schemeType}
            value={assetType}
            // onChange={props.handleCountryChange}
            onChange={handleAssetTypeChange}
            label="User Type"
            style={{ width: 190, marginLeft: 20, marginTop: 10, height: 50 }}
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
            Select User Type
          </FormHelperText>
        </FormControl>
      </Box>
    );
  };

  const renderCustomerField = ({
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
            labelId="customer"
            id="customer"
            //defaultValue={schemeType}
            value={assetType}
            // onChange={props.handleCountryChange}
            onChange={handleAssetTypeChange}
            label="Customer User"
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
            Select Customer
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

  const renderAccountManagerField = ({
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
            labelId="accountManager"
            id="accountManager"
            //defaultValue={schemeType}
            value={assetType}
            // onChange={props.handleCountryChange}
            onChange={handleAssetTypeChange}
            label="Account Manager"
            style={{ width: 200, marginTop: 10, height: 50 }}
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
            Select Account Manager
          </FormHelperText>
        </FormControl>
      </Box>
    );
  };

  const renderAccountCategoryField = ({
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
            labelId="accountCategory"
            id="accountCategory"
            //defaultValue={schemeType}
            value={serviceOutlet}
            // onChange={props.handleCountryChange}
            onChange={handleSchemeTypeChange}
            label="Account Category"
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
            Select Account Category
          </FormHelperText>
        </FormControl>
      </Box>
    );
  };

  const renderAccountStatusField = ({
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
            labelId="accountStatus"
            id="accountStatus"
            //defaultValue={schemeType}
            value={serviceOutlet}
            // onChange={props.handleCountryChange}
            onChange={handleSchemeTypeChange}
            label="Account Status"
            style={{ width: 190, marginLeft: 20, marginTop: 10, height: 50 }}
            {...input}
          >
            <MenuItem value="commodities">Commodities</MenuItem>
            <MenuItem value="charcoal">Charcoal</MenuItem>
            <MenuItem value="seafood">Sea Foods</MenuItem>
            <MenuItem value="processedfoods">Processed Foods</MenuItem>

            {/* {renderItemList()} */}
          </Select>
          <FormHelperText style={{ marginLeft: 20 }}>
            Select Account Status
          </FormHelperText>
        </FormControl>
      </Box>
    );
  };

  const renderUserInfoFileField = ({
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
            labelId="uif"
            id="uif"
            //defaultValue={schemeType}
            value={glHeadCode}
            // onChange={props.handleCountryChange}
            onChange={handleSchemeTypeChange}
            label="Asset Set"
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
            Select User Information File (UIF)
          </FormHelperText>
        </FormControl>
      </Box>
    );
  };

  const renderAssetSetBatchField = ({
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
            labelId="assetSetBatch"
            id="assetSetBatch"
            //defaultValue={schemeType}
            value={assetType}
            // onChange={props.handleCountryChange}
            onChange={handleAssetTypeChange}
            label="Stock Set Batch"
            style={{ width: 190, marginLeft: 20, marginTop: 10, height: 50 }}
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
            Select Set Batch
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
    <form id="accountLedgerVendorSubLedgerForm">
      <Grid container direction="column">
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
              Create Customer Subsidiary Ledger Account
            </Typography>
          </FormLabel>
        </Grid>
        <Grid item container direction="row" style={{ width: "100%" }}>
          <Grid item container style={{ width: "50%" }}>
            <Box
              // component="form"
              // id="categoryForm"
              // onSubmit={onSubmit}
              sx={{
                width: 400,
                height: 380,
              }}
              noValidate
              autoComplete="off"
            >
              <Grid container direction="row">
                <Grid item style={{ width: "45%" }}>
                  <Field
                    label=""
                    id="serviceOutlet"
                    name="serviceOutlet"
                    type="text"
                    component={renderServiceOutletField}
                    style={{ marginTop: 10 }}
                  />
                </Grid>
                <Grid item style={{ width: "52%", marginLeft: 10 }}>
                  <Field
                    label=""
                    id="currency"
                    name="currency"
                    type="text"
                    component={renderCurrencyField}
                    style={{ marginTop: 10 }}
                  />
                </Grid>
              </Grid>
              <Grid container direction="row">
                <Grid item style={{ width: "45%" }}>
                  <Field
                    label=""
                    id="subGlHeadCode"
                    name="subGlHeadCode"
                    type="text"
                    component={renderSubGlHeadCodeField}
                    style={{ marginTop: 10 }}
                  />
                </Grid>
                <Grid item style={{ width: "52%", marginLeft: 10 }}>
                  <Field
                    label=""
                    id="userType"
                    name="userType"
                    type="text"
                    component={renderUserTypeField}
                    style={{ marginTop: 10 }}
                  />
                </Grid>
              </Grid>
              <Grid container direction="row">
                <Grid item style={{ width: "100%" }}>
                  <Field
                    label=""
                    id="uif"
                    name="uif"
                    type="text"
                    component={renderUserInfoFileField}
                    style={{ marginTop: 10 }}
                  />
                </Grid>
                {/* <Grid item style={{ width: "52%", marginLeft: 10 }}>
                  <Field
                    label=""
                    id="setBatch"
                    name="setBatch"
                    type="text"
                    component={renderAssetSetBatchField}
                    style={{ marginTop: 10 }}
                  />
                </Grid> */}
              </Grid>
              <Grid item>
                <Field
                  label=""
                  id="customer"
                  name="customer"
                  type="text"
                  component={renderCustomerField}
                />
              </Grid>
              <Grid container direction="row">
                <Grid item style={{ width: "45%" }}>
                  <Field
                    label=""
                    id="code"
                    name="code"
                    type="text"
                    component={renderSubHeadCodeField}
                    style={{ marginTop: 10 }}
                  />
                </Grid>
                <Grid item style={{ width: "52%", marginLeft: 10 }}>
                  <Field
                    label=""
                    id="name"
                    name="name"
                    type="text"
                    component={renderNameField}
                    style={{ marginTop: 10 }}
                  />
                </Grid>
              </Grid>

              {/* <Field
                label=""
                id="description"
                name="description"
                type="text"
                component={renderDescriptionField}
              /> */}

              {/* <Button
          variant="contained"
          className={classes.submitButton}
          onClick={props.handleSubmit(onSubmit)}
        >
          Submit
        </Button> */}
            </Box>
          </Grid>
          <Grid item container style={{ width: "47%", marginLeft: 0 }}>
            <Box
              // component="form"
              // id="categoryForm"
              // onSubmit={onSubmit}
              sx={{
                width: 400,
                height: 380,
              }}
              noValidate
              autoComplete="off"
            >
              <Grid container direction="row">
                <Grid item style={{ width: "45%" }}>
                  <Field
                    label=""
                    id="accountManager"
                    name="accountManager"
                    type="text"
                    component={renderAccountManagerField}
                    style={{ marginTop: 10 }}
                  />
                </Grid>
                <Grid item style={{ width: "52%", marginLeft: 10 }}>
                  <Field
                    label=""
                    id="accountStatus"
                    name="accountStatus"
                    type="text"
                    component={renderAccountStatusField}
                    style={{ marginTop: 10 }}
                  />
                </Grid>
              </Grid>

              <Grid container direction="row">
                <Grid item style={{ width: "100%" }}>
                  <Field
                    label=""
                    id="accountOwnershipType"
                    name="accountOwnershipType"
                    type="text"
                    component={renderAccountOwnershipTypeField}
                    style={{ marginTop: 10 }}
                  />
                </Grid>
                {/* <Grid item style={{ width: "52%", marginLeft: 10 }}>
                  <Field
                    label=""
                    id="accountClass"
                    name="accountClass"
                    type="text"
                    component={renderAccountClassField}
                    style={{ marginTop: 10 }}
                  />
                </Grid> */}
              </Grid>
              <Grid container direction="row">
                <Grid item style={{ width: "45%" }}>
                  <Field
                    label=""
                    id="drLimitAmount"
                    name="drLimitAmount"
                    type="number"
                    component={renderDebitLimitAmountField}
                    style={{ marginTop: 10 }}
                  />
                </Grid>
                <Grid item style={{ width: "52%", marginLeft: 10 }}>
                  <Field
                    label=""
                    id="crLimitAmount"
                    name="crLimitAmount"
                    type="number"
                    component={renderCreditLimitAmountField}
                    style={{ marginTop: 10 }}
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
              <Field
                label=""
                id="memo"
                name="memo"
                type="text"
                component={renderMemoField}
              />

              {/* <Button
          variant="contained"
          className={classes.submitButton}
          onClick={props.handleSubmit(onSubmit)}
        >
          Submit
        </Button> */}
            </Box>
          </Grid>
        </Grid>
        <Grid
          item
          container
          style={{ marginTop: 6, marginBottom: 3 }}
          justifyContent="flex-end"
        >
          <Grid item>
            <Button
              variant="contained"
              className={classes.submitButton}
              onClick={props.handleSubmit(onSubmit)}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
}

export default reduxForm({
  form: "accountsLedgerCustomerSubLedgerForm",
})(AccountsLedgerCustomerSubLedgerForm);
