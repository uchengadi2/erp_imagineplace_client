import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Link } from "react-router-dom";
import history from "./../../../../history";

import AssetInventoryUnapprovedStockLayout from "./AssetInventoryUnapprovedStocksLayout";
import AssetInventoryAllStocksLayout from "./AssetInventoryAllStocksLayout";
import AssetInventoryApprovedRequisitionsLayout from "./AssetInventoryApprovedRequisitionsLayout";
import AssetInventoryUnapprovedRetirementLayout from "./AssetInventoryUnapprovedRetirementLayout";
import AssetInventoryApprovedRetirementLayout from "./AssetInventoryApprovedRetirementsLayout";
import AssetInventoryUnapprovedDisposalLayout from "./AssetInventoryUnapprovedDisposalLayout";
import AssetInventoryApprovedDisposalLayout from "./AssetInventoryApprovedDisposalLayout";
import AssetInventoryUnapprovedTransferLayout from "./AssetInventoryUnapprovedTransferLayout";
import AssetInventoryApprovedTransferLayout from "./AssetInventoryApprovedTransferLayout";

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
        history.push(`/assets/inventory`);
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

function AssetInventoryLayout({ token }) {
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
          label="All Stocks"
          {...a11yProps(0)}
          onClick={(event) => {
            event.preventDefault();
            history.push(`/assets/inventories/allstocks`);
          }}
        />
        <Tab
          label="Unapproved Stock Requisition Request"
          {...a11yProps(0)}
          onClick={(event) => {
            event.preventDefault();
            history.push(`/assets/inventories/unapprovedrequisitions`);
          }}
        />
        <Tab
          label="Approved Stock Requisition Request"
          {...a11yProps(0)}
          onClick={(event) => {
            event.preventDefault();
            history.push(`/assets/inventories/approvedrequisitions`);
          }}
        />
        <Tab
          label="Unapproved Stock Retirement Request"
          {...a11yProps(0)}
          onClick={(event) => {
            event.preventDefault();
            history.push(`/assets/inventories/unapprovedretirement`);
          }}
        />
        <Tab
          label="Approved Stock Retirement Request"
          {...a11yProps(0)}
          onClick={(event) => {
            event.preventDefault();
            history.push(`/assets/inventories/approvedretirement`);
          }}
        />
        <Tab
          label="Unapproved Stock Disposal Request"
          {...a11yProps(0)}
          onClick={(event) => {
            event.preventDefault();
            history.push(`/assets/inventories/unapproveddisposals`);
          }}
        />
        <Tab
          label="Approved Stock Disposal Request"
          {...a11yProps(0)}
          onClick={(event) => {
            event.preventDefault();
            history.push(`/assets/inventories/approveddisposals`);
          }}
        />
        <Tab
          label="Unapproved Stock Transfer or Lease Request"
          {...a11yProps(0)}
          onClick={(event) => {
            event.preventDefault();
            history.push(`/assets/inventories/unapprovetransfers`);
          }}
        />
        <Tab
          label="Approved Stock Transfer or Lease Request"
          {...a11yProps(0)}
          onClick={(event) => {
            event.preventDefault();
            history.push(`/assets/inventories/approvetransfer`);
          }}
        />
      </Tabs>

      <TabPanel value={value} index={0}>
        <AssetInventoryAllStocksLayout token={token} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <AssetInventoryUnapprovedStockLayout token={token} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <AssetInventoryApprovedRequisitionsLayout token={token} />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <AssetInventoryUnapprovedRetirementLayout token={token} />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <AssetInventoryApprovedRetirementLayout token={token} />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <AssetInventoryUnapprovedDisposalLayout token={token} />
      </TabPanel>
      <TabPanel value={value} index={6}>
        <AssetInventoryApprovedDisposalLayout token={token} />
      </TabPanel>
      <TabPanel value={value} index={7}>
        <AssetInventoryUnapprovedTransferLayout token={token} />
      </TabPanel>
      <TabPanel value={value} index={8}>
        <AssetInventoryApprovedTransferLayout token={token} />
      </TabPanel>
    </div>
  );
}

export default AssetInventoryLayout;
