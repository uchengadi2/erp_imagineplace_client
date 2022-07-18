import React, { useState } from "react";
import { Field, reduxForm } from "redux-form";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import { TextField } from "@material-ui/core";
//import background from "./../../logistic_assets/cover_image_1.png";
import background from "./../../background/cover5.png";
import { padding } from "@mui/system";

const useStyles = makeStyles((theme) => ({
  sendButton: {
    ...theme.typography.estimate,
    borderRadius: 10,
    height: 40,
    width: 100,
    marginLeft: 170,
    marginBottom: 10,
    marginTop: 30,
    fontSize: "1.15rem",
    backgroundColor: "#FFBA60",
    color: "white",
    "&:hover": {
      backgroundColor: "#0B72B9",
    },
    [theme.breakpoints.down("sm")]: {
      height: 40,
      width: 225,
    },
  },
  root: {
    maxWidth: 500,
  },
  background: {
    backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    //backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      // backgroundImage: `url(${mobileBackground})`,
      backgroundAttachment: "inherit",
    },
    inputText: {
      marginLeft: 400,
      width: "100%",
      color: "white",
    },
  },
  boxContainer: {
    backgroundColor: "white",
    marginLeft: 400,
    width: "100%",
    margin: 40,
    padding: 30,
    borderRadius: 80,
  },
}));

const renderTextField = ({
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
      helperText={touched && error}
      variant="outlined"
      label={label}
      id={input.name}
      defaultValue={input.value}
      fullWidth
      type={type}
      {...custom}
      onChange={input.onChange}
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
      error={touched && invalid}
      helperText={touched && error}
      variant="outlined"
      defaultValue={input.value}
      label={label}
      id={input.name}
      fullWidth
      type={type}
      style={{ marginTop: "1em" }}
      {...custom}
      onChange={input.onChange}
    />
  );
};

const LoginForm = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const [email, setEmail] = useState("");
  const [emailHelper, setEmailHelper] = useState("");
  const [password, setPassword] = useState("");
  const [passwordHelper, setPasswordHelper] = useState("");
  const [islogged, setIsLogged] = useState(false);
  const [loginParams, setLoginparams] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const buttonContent = () => {
    return <React.Fragment>Login</React.Fragment>;
  };

  const onSubmit = (formValues) => {
    setLoading(false);
    props.onSubmit(formValues);
    setLoading(true);
  };

  return (
    <form id="loginForm" className={classes.background}>
      <Box
        sx={{
          width: 500,
          //height: 420,
        }}
        noValidate
        autoComplete="off"
        style={{ marginTop: 20 }}
      >
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          direction="column"
          style={{ minHeight: "100vh" }}
        >
          <Box className={classes.boxContainer}>
            <Grid
              item
              className={classes.inputText}
              style={{ width: "100%", marginTop: 20 }}
            >
              <Field
                name="email"
                label="Email"
                type="email"
                component={renderTextField}
              />
            </Grid>
            <Grid
              item
              className={classes.inputText}
              style={{ width: "100%", marginTop: 20 }}
            >
              <Field
                name="password"
                label="Password"
                type="password"
                component={renderTextField}
              />
            </Grid>
            <Grid item style={{ marginTop: "2em" }}>
              <Button
                variant="contained"
                className={classes.sendButton}
                onClick={props.handleSubmit(onSubmit)}
              >
                {loading ? (
                  <CircularProgress size={30} color="inherit" />
                ) : (
                  buttonContent()
                )}
              </Button>
            </Grid>
          </Box>
        </Grid>
      </Box>
    </form>
  );
};

const validate = (formValues) => {
  const errors = {};
  let valid;

  if (!formValues.email) {
    errors.email = "Invalid email";
  } else if (
    !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(formValues.email)
  ) {
    errors.email = "Invalid email";
  }

  if (!formValues.password) {
    errors.password = "Please enter your password";
  }

  return errors;
};

export default reduxForm({
  form: "loginForm",
  // validate: validate,
})(LoginForm);
