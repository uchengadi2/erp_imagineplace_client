import React, { useState } from "react";
import { Field, reduxForm } from "redux-form";
import Grid from "@material-ui/core/Grid";
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

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 10,
  },
  formStyles: {
    width: 600,
  },
  submitButton: {
    borderRadius: 10,
    height: 40,
    width: 100,
    marginLeft: 200,
    marginTop: 60,
    marginBottom: 20,
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
      helperText="Enter the name of the user"
      variant="outlined"
      label={label}
      id={input.name}
      defaultValue={input.value}
      fullWidth
      //required
      type={type}
      {...custom}
      style={{ marginTop: 15 }}
      onChange={input.onChange}

      //onChange={handleInput}
    />
  );
};

const renderEmailField = ({
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
      helperText="Enter user email address"
      variant="outlined"
      label={label}
      id={input.name}
      defaultValue={input.value}
      fullWidth
      //required
      type={type}
      {...custom}
      style={{ marginTop: 15 }}
      onChange={input.onChange}

      //onChange={handleInput}
    />
  );
};

const renderPasswordField = ({
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
      helperText="Enter user password"
      variant="outlined"
      label={label}
      id={input.name}
      defaultValue={input.value}
      fullWidth
      //required
      type={type}
      {...custom}
      style={{ marginTop: 15 }}
      onChange={input.onChange}

      //onChange={handleInput}
    />
  );
};

const renderConfirmPasswordField = ({
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
      helperText="Re-enter password for confirmation"
      variant="outlined"
      label={label}
      id={input.name}
      defaultValue={input.value}
      fullWidth
      //required
      type={type}
      {...custom}
      onChange={input.onChange}
      style={{ marginTop: 15 }}

      //onChange={handleInput}
    />
  );
};

function StaffForm(props) {
  const classes = useStyles();
  const [role, setRole] = useState("");
  const [type, setType] = useState("staff");
  const [value, setValue] = useState();
  const [selectedRole, setSelectedRole] = useState();

  const handleUserRoleChange = (event) => {
    setRole(event.target.value);
    setSelectedRole(event.target.value);
  };

  const handleTypeChange = (event) => {
    setValue(event.target.value);
  };

  const renderUserRoleField = ({
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
            labelId="role"
            id="role"
            value={role ? role : selectedRole}
            onChange={handleUserRoleChange}
            label="Role"
            style={{ marginTop: 15, width: 240 }}
            {...input}
          >
            <MenuItem value={"admin"}>Admin</MenuItem>
            <MenuItem value={"user"}>User</MenuItem>
            <MenuItem value={"partner_user"}>Partner User</MenuItem>
            <MenuItem value={"partner_admin"}>Partner Admin</MenuItem>
            <MenuItem value={"customer"}>Customer</MenuItem>
          </Select>
          <FormHelperText>Select User Role</FormHelperText>
        </FormControl>
      </Box>
    );
  };

  const renderTypeRadioField = ({
    input,
    label,
    meta: { touched, error, invalid },
    type,
    id,
    ...custom
  }) => {
    return (
      <Box style={{ marginTop: 15 }}>
        <FormControl component="fieldset">
          <FormLabel style={{ color: "blue" }} component="legend">
            User Type
          </FormLabel>
          <RadioGroup
            aria-label="type"
            name="type"
            value={value}
            onChange={handleTypeChange}
            {...input}
          >
            <Grid item container direction="row">
              <Grid item>
                <FormControlLabel
                  value="staff"
                  control={<Radio />}
                  label="Staff"
                />
              </Grid>

              <Grid item>
                <FormControlLabel
                  value="partner"
                  control={<Radio />}
                  label="Partner"
                />
              </Grid>
              <Grid item>
                <FormControlLabel
                  value="customer"
                  control={<Radio />}
                  label="Customer"
                />
              </Grid>
            </Grid>
          </RadioGroup>
        </FormControl>
      </Box>
    );
  };
  const onSubmit = (formValues) => {
    console.log("this is the formvakues:", formValues);
    const data = {
      name: formValues.name,
      email: formValues.email,
      role: formValues.role,
      password: formValues.password,
      passwordConfirm: formValues.passwordConfirm,
      type: formValues.type,
    };

    console.log("this is the data:", data);
    props.onSubmit(data);
  };

  return (
    <div className={classes.root}>
      {/* <Grid item container justifyContent="center">
        <FormLabel
          style={{ color: "blue", fontSize: "1.5em" }}
          component="legend"
        >
          <Typography variant="subtitle1">Create Staff User</Typography>
        </FormLabel>
      </Grid> */}
      <Grid item container justifyContent="center">
        <FormLabel
          style={{ color: "blue", fontSize: "1.5em" }}
          component="legend"
        >
          <Typography variant="subtitle1" style={{ fontSize: "1.0em" }}>
            Create Staff User
          </Typography>
        </FormLabel>
      </Grid>
      <Box
        component="form"
        id="userForm"
        // onSubmit={onSubmit}
        sx={{
          width: 500,
          height: 420,
        }}
        noValidate
        autoComplete="off"
        style={{ marginTop: 20 }}
      >
        <Field
          label=""
          id="email"
          name="email"
          type="email"
          component={renderEmailField}
        />
        <Grid container direction="row">
          <Grid item style={{ width: "50%", marginTop: 10 }}>
            <Field
              label=""
              id="password"
              name="password"
              type="password"
              component={renderPasswordField}
            />
          </Grid>
          <Grid item style={{ width: "48%", marginTop: 10, marginLeft: 10 }}>
            <Field
              label=""
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              component={renderConfirmPasswordField}
            />
          </Grid>
        </Grid>

        <Grid container direction="row">
          <Grid item style={{ width: "50%", marginTop: 10 }}>
            <Field
              label=""
              id="name"
              name="name"
              type="text"
              component={renderNameField}
            />
          </Grid>
          <Grid item style={{ width: "48%", marginLeft: 10, marginTop: 10 }}>
            <Field
              label=""
              id="role"
              name="role"
              type="text"
              component={renderUserRoleField}
            />
          </Grid>
        </Grid>

        <Button
          variant="contained"
          className={classes.submitButton}
          onClick={props.handleSubmit(onSubmit)}
        >
          Submit
        </Button>
      </Box>
      {/* </form> */}
    </div>
  );
}

export default reduxForm({
  form: "userForm",
})(StaffForm);
