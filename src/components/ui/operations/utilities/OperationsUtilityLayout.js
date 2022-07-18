import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Link } from "react-router-dom";
import history from "./../../../../history";

import OperationsUtilityFinisihingTypesLayout from "./OperationsUtilityFinisihingTypesLayout";
import OperationsUtilityMaintenanceTypesLayout from "./OperationsUtilityMaintenanceTypesLayout";
import OperationsUtilityQualityAssurancePhaseEventsLayout from "./OperationsUtilityQualityAssurancePhaseEventsLayout";
import OperationsUtilityQualityAssurancePhasesLayout from "./OperationsUtilityQualityAssurancePhasesLayout";
import OperationsUtilityQualityAssuranceTypesLayoutt from "./OperationsUtilityQualityAssuranceTypesLayoutt";
import OperationsUtilityTransformationPhaseEventsLayout from "./OperationsUtilityTransformationPhaseEventsLayout";
import OperationsUtilityTransformationPhasesLayout from "./OperationsUtilityTransformationPhasesLayout";
import OperationsUtilityTransformationTypesLayout from "./OperationsUtilityTransformationTypesLayout";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component={Link}
      //to={route.link}
      //label={route.name}
      onClick={(event) => {
        event.preventDefault();
        history.push(`/crm`);
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    //height: 180,
    marginTop: "-20px",
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  tab: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

function OperationsUtilityLayout({ token }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        //variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab
          label="Transformation Types"
          {...a11yProps(0)}
          onClick={(event) => {
            event.preventDefault();
            history.push(`/operations/utilities/transformationtypes`);
          }}
        />
        <Tab
          label="Transformation Phases"
          {...a11yProps(0)}
          onClick={(event) => {
            event.preventDefault();
            history.push(`/operations/utilities/transformationphases`);
          }}
        />
        <Tab
          label="Transformation Phase Events"
          {...a11yProps(0)}
          onClick={(event) => {
            event.preventDefault();
            history.push(`/operations/utilities/transformationphaseevents`);
          }}
        />
        <Tab
          label="Finishing Types"
          {...a11yProps(0)}
          onClick={(event) => {
            event.preventDefault();
            history.push(`/operations/utilities/finishings`);
          }}
        />
        <Tab
          label="Quality Assurance Types"
          {...a11yProps(0)}
          onClick={(event) => {
            event.preventDefault();
            history.push(`/operations/utilities/qualityassurancetypes`);
          }}
        />
        <Tab
          label="Quality Assurance Phases"
          {...a11yProps(0)}
          onClick={(event) => {
            event.preventDefault();
            history.push(`/operations/utilities/qualityassurancephases`);
          }}
        />
        <Tab
          label="Quality Assurance Phase Events"
          {...a11yProps(0)}
          onClick={(event) => {
            event.preventDefault();
            history.push(`/operations/utilities/qualityassurancephaseevents`);
          }}
        />
        <Tab
          label="Maintenance Types"
          {...a11yProps(0)}
          onClick={(event) => {
            event.preventDefault();
            history.push(`/operations/utilities/maintenancetypes`);
          }}
        />
      </Tabs>

      <TabPanel value={value} index={0}>
        <OperationsUtilityTransformationTypesLayout token={token} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <OperationsUtilityTransformationPhasesLayout token={token} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <OperationsUtilityTransformationPhaseEventsLayout token={token} />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <OperationsUtilityFinisihingTypesLayout token={token} />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <OperationsUtilityQualityAssuranceTypesLayoutt token={token} />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <OperationsUtilityQualityAssurancePhasesLayout token={token} />
      </TabPanel>
      <TabPanel value={value} index={6}>
        <OperationsUtilityQualityAssurancePhaseEventsLayout token={token} />
      </TabPanel>
      <TabPanel value={value} index={7}>
        <OperationsUtilityMaintenanceTypesLayout token={token} />
      </TabPanel>
    </div>
  );
}

export default OperationsUtilityLayout;
