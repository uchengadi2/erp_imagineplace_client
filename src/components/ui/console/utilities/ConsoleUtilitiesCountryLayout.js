import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";

import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Toolbar } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import history from "../../../../history";

import CountryFormContainer from "../../../console/utilities/countries/CountryFormContainer";
import CountryList from "../../../console/utilities/countries/CountryList";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "-80px",
    width: 1100,
  },
  headerContainer: {
    height: 20,
    marginTop: 10,
    height: 40,
  },
  secondContainer: {
    // backgroundColor: "red",
    marginTop: 30,
    padding: 10,
    display: "none",
  },
  contentContainer: {
    // backgroundColor: "#ccab",
    height: "auto",
    marginTop: 60,
    width: 1100,
  },
  addButton: {
    borderRadius: 10,
    height: 30,
    width: 140,
    marginLeft: 10,
    marginTop: 50,
    marginBottom: 10,
    fontSize: "0.75rem",
    backgroundColor: theme.palette.common.orange,
    color: "white",
    "&:hover": {
      backgroundColor: theme.palette.common.grey,
    },
    [theme.breakpoints.down("sm")]: {
      height: 40,
      width: 225,
    },
  },
  toolbar: {
    padding: 5,
    margin: -10,
  },
}));

function ConsoleUtilitiesCountryLayout(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [selectedSourceCountry, setSelectedSourceCountry] = useState("all");
  const [selectedDestinationCountry, setSelectedDestinationCountry] =
    useState("all");
  const [sourceCountryList, setSourceCountryList] = useState([
    { id: "", name: "" },
  ]);
  const [destinationCountryList, setDestinationCountryList] = useState([
    { id: "", name: "" },
  ]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [categoryList, setCategoryList] = useState([{ id: "", name: "" }]);
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  //   useEffect(() => {
  //     const fetchSourceCountryData = async () => {
  //       let allData = [{ id: "all", name: "All" }];
  //       data.defaults.headers.common["Authorization"] = `Bearer ${props.token}`;
  //       const response = await data.get("/countries");
  //       const workingData = response.data.data.data;
  //       workingData.map((country) => {
  //         allData.push({ id: country._id, name: country.name });
  //       });
  //       setSourceCountryList(allData);
  //     };

  //     //call the function

  //     fetchSourceCountryData().catch(console.error);
  //   }, []);

  //   useEffect(() => {
  //     const fetchDestinationCountryData = async () => {
  //       let allData = [{ id: "all", name: "All" }];
  //       data.defaults.headers.common["Authorization"] = `Bearer ${props.token}`;
  //       const response = await data.get("/countries");
  //       const workingData = response.data.data.data;
  //       workingData.map((country) => {
  //         allData.push({ id: country._id, name: country.name });
  //       });
  //       setDestinationCountryList(allData);
  //     };

  //     //call the function

  //     fetchDestinationCountryData().catch(console.error);
  //   }, []);

  //   useEffect(() => {
  //     const fetchCategoryData = async () => {
  //       let allData = [{ id: "all", name: "All" }];
  //       data.defaults.headers.common["Authorization"] = `Bearer ${props.token}`;
  //       const response = await data.get("/categories");
  //       const workingData = response.data.data.data;
  //       workingData.map((category) => {
  //         allData.push({ id: category._id, name: category.name });
  //       });
  //       setCategoryList(allData);
  //     };

  //     //call the function

  //     fetchCategoryData().catch(console.error);
  //   }, []);

  const handleDialogOpenStatus = () => {
    // history.push("/categories/new");
    setOpen(false);
  };

  const handleSourceCountryChange = (value) => {
    setSelectedSourceCountry(value);
  };

  const handleDestinationCountryChange = (value) => {
    setSelectedDestinationCountry(value);
  };

  const handleCategoryChange = (value) => {
    setSelectedCategory(value);
  };

  const status = "pending";

  //   const renderDataList = () => {
  //     if (
  //       selectedSourceCountry === "all" &&
  //       selectedDestinationCountry === "all" &&
  //       selectedCategory === "all"
  //     ) {
  //       return <OrdersList token={props.token} status={status} />;
  //     } else if (
  //       selectedSourceCountry === "all" &&
  //       selectedDestinationCountry === "all" &&
  //       selectedCategory !== "all"
  //     ) {
  //       return (
  //         <OrderByCategoryList
  //           token={props.token}
  //           selectedCategory={selectedCategory}
  //           status={status}
  //         />
  //       );
  //     } else if (
  //       selectedSourceCountry === "all" &&
  //       selectedDestinationCountry !== "all" &&
  //       selectedCategory !== "all"
  //     ) {
  //       return (
  //         // <OrderByCategoryAndDestinationCountryList
  //         //   token={props.token}
  //         //   selectedCategory={selectedCategory}
  //         //   selectedDestinationCountry={selectedDestinationCountry}
  //         //   status={status}
  //         // />
  //       );
  //     } else if (
  //       selectedSourceCountry !== "all" &&
  //       selectedDestinationCountry !== "all" &&
  //       selectedCategory !== "all"
  //     ) {
  //       return (
  //         // <OrderByCategorySourceAndDestinationCountryList
  //         //   token={props.token}
  //         //   selectedCategory={selectedCategory}
  //         //   selectedDestinationCountry={selectedDestinationCountry}
  //         //   selectedSourceCountry={selectedSourceCountry}
  //         //   status={status}
  //         // />
  //       );
  //     } else if (
  //       selectedSourceCountry !== "all" &&
  //       selectedDestinationCountry !== "all" &&
  //       selectedCategory === "all"
  //     ) {
  //       return (
  //         // <OrderBySourceAndDestinationCountryList
  //         //   token={props.token}
  //         //   selectedDestinationCountry={selectedDestinationCountry}
  //         //   selectedSourceCountry={selectedSourceCountry}
  //         //   status={status}
  //         // />
  //       );
  //     } else if (
  //       selectedSourceCountry !== "all" &&
  //       selectedDestinationCountry === "all" &&
  //       selectedCategory === "all"
  //     ) {
  //       return (
  //         // <OrderBySourceCountryList
  //         //   token={props.token}
  //         //   selectedSourceCountry={selectedSourceCountry}
  //         //   status={status}
  //         // />
  //       );
  //     } else if (
  //       selectedSourceCountry === "all" &&
  //       selectedDestinationCountry !== "all" &&
  //       selectedCategory === "all"
  //     ) {
  //       return (
  //         // <OrderByDestinationCountryList
  //         //   token={props.token}
  //         //   selectedDestinationCountry={selectedDestinationCountry}
  //         //   status={status}
  //         // />
  //       );
  //     } else if (
  //       selectedSourceCountry !== "all" &&
  //       selectedDestinationCountry === "all" &&
  //       selectedCategory !== "all"
  //     ) {
  //       return (
  //         // <OrderByCategoryAndSourceCountryList
  //         //   token={props.token}
  //         //   selectedCategory={selectedCategory}
  //         //   selectedSourceCountry={selectedSourceCountry}
  //         //   status={status}
  //         // />
  //       );
  //     } else {
  //       return null;
  //     }
  //   };

  const width = 12;

  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      className={classes.root}
      spacing={2}
    >
      <Grid item container direction="column" sm={width}>
        <Grid item className={classes.selectField}>
          {/* <SchemeTypeFilter
          // token={props.token}
          // sourceCountryList={sourceCountryList}
          // destinationCountryList={destinationCountryList}
          // selectedSourceCountry={selectedSourceCountry}
          // selectedDestinationCountry={selectedDestinationCountry}
          // handleSourceCountryChange={handleSourceCountryChange}
          // handleDestinationCountryChange={handleDestinationCountryChange}
          // categoryList={categoryList}
          // selectedCategory={selectedCategory}
          // handleCategoryChange={handleCategoryChange}
          /> */}
        </Grid>
        <Grid
          item
          container
          direction="row"
          className={classes.headerContainer}
        >
          <Toolbar disableGutters className={classes.toolbar}>
            <Grid item>
              <Button
                variant="contained"
                className={classes.addButton}
                onClick={() => [
                  setOpen(true),
                  history.push("/systems/utilities/countries/new"),
                ]}
              >
                Add Country
              </Button>
            </Grid>
            <Grid item></Grid>
          </Toolbar>
        </Grid>
        <Grid item className={classes.contentContainer}>
          <CountryList token={props.token} />
          {/* {renderDataList()} */}
          {/* <DataGridText /> */}
        </Grid>
      </Grid>
      <Dialog
        //style={{ zIndex: 1302 }}
        fullScreen={matchesXS}
        open={open}
        onClose={() => [
          setOpen(false),
          history.push("/systems/utilities/countries"),
        ]}
      >
        <DialogContent>
          <CountryFormContainer
            token={props.token}
            handleDialogOpenStatus={handleDialogOpenStatus}
          />
        </DialogContent>
      </Dialog>
      <Grid
        item
        container
        // sm={12 - width}
        direction="column"
        className={classes.secondContainer}
        justifyContent="center"
      >
        <Grid item>
          <Typography>This is the secong Inner Container</Typography>
        </Grid>
        <Grid item>
          <Typography>This is the third Inner Container</Typography>
        </Grid>
        <Grid item>
          <Typography>This is the fourth Inner Container</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default ConsoleUtilitiesCountryLayout;
