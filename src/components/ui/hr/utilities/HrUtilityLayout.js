import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Link } from "react-router-dom";
import history from "../../../../history";

import HrUtilityAppraisalSeasonsLayout from "./HrUtilityAppraisalSeasonsLayout";
import HrUtilityDepartmentLayout from "./HrUtilityDepartmentLayout";
import HrUtilityDesignationsLayout from "./HrUtilityDesignationsLayout";
import HrUtilityDivisionsLayout from "./HrUtilityDivisionsLayout";
import HrUtilityGroupsLayout from "./HrUtilityGroupsLayout";
import HrUtilityKpiSectionsLayout from "./HrUtilityKpiSectionsLayout";
import HrUtilityUnitLayout from "./HrUtilityUnitLayout";

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

function HrUtilityLayout({ token }) {
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
          label="Units"
          {...a11yProps(0)}
          onClick={(event) => {
            event.preventDefault();
            history.push(`/hr/utilities/units`);
          }}
        />
        <Tab
          label="Departments"
          {...a11yProps(0)}
          onClick={(event) => {
            event.preventDefault();
            history.push(`/hr/utilities/departments`);
          }}
        />
        <Tab
          label="Groups"
          {...a11yProps(0)}
          onClick={(event) => {
            event.preventDefault();
            history.push(`/hr/utilities/groups`);
          }}
        />
        <Tab
          label="Divisions"
          {...a11yProps(0)}
          onClick={(event) => {
            event.preventDefault();
            history.push(`/hr/utilities/divisions`);
          }}
        />
        <Tab
          label="Designations"
          {...a11yProps(0)}
          onClick={(event) => {
            event.preventDefault();
            history.push(`/hr/utilities/designations`);
          }}
        />
        <Tab
          label="KPI Sessions"
          {...a11yProps(0)}
          onClick={(event) => {
            event.preventDefault();
            history.push(`/hr/utilities/kpisessions`);
          }}
        />
        <Tab
          label="Appraisal Seasons"
          {...a11yProps(0)}
          onClick={(event) => {
            event.preventDefault();
            history.push(`/hr/utilities/appraisalseasons`);
          }}
        />
      </Tabs>

      <TabPanel value={value} index={0}>
        <HrUtilityUnitLayout token={token} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <HrUtilityDepartmentLayout token={token} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <HrUtilityGroupsLayout token={token} />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <HrUtilityDivisionsLayout token={token} />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <HrUtilityDesignationsLayout token={token} />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <HrUtilityKpiSectionsLayout token={token} />
      </TabPanel>
      <TabPanel value={value} index={6}>
        <HrUtilityAppraisalSeasonsLayout token={token} />
      </TabPanel>
    </div>
  );
}

export default HrUtilityLayout;
