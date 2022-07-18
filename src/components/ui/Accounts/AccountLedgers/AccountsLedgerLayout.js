import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Link } from "react-router-dom";
import history from "./../../../../history";

import AccountsAssetSubLedgerLayout from "./AccountsAssetSubLedgerLayout";
import AccountsStocksSubLedgerLayout from "./AccountsStocksSubLedgerLayout";
import AccountsLedgerStaffSubLedgerLayout from "./AccountsLedgerStaffSubLedgerLayout";
import AccountsLedgerPartnersSubledgerLayout from "./AccountsLedgerPartnersSubLedgerLayout";
import AccountsLedgerVendorSubLedgerLayout from "./AccountsLedgerVendorSubLedgerLayout";
import AccountsLedgerCustomersSubLayout from "./AccountsLedgerCustomersSubLayout";
import AccountsLedgerSuppliersSubLedgersLayout from "./AccountsLedgerSuppliersSubLedgersLayout";
import AccountsLedgerOfficeSubLedgersLayout from "./AccountsLedgerOfficeSubLedgersLayout";
import AccountsLedgerProductsSubLedgerLayout from "./AccountsLedgerProductsSubLedgerLayout";

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
        history.push(`/orders`);
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

function AccountsLedgerLayout({ token }) {
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
        {/* <Tab
          label="General Ledger"
          {...a11yProps(0)}
          onClick={(event) => {
            event.preventDefault();
            history.push(`/accounts/ledgers/gls`);
          }}
        /> */}
        <Tab
          label="Assets Sub Ledgers"
          {...a11yProps(0)}
          onClick={(event) => {
            event.preventDefault();
            history.push(`/accounts/ledgers/assetssubledgers`);
          }}
        />
        <Tab
          label="Stocks Sub Ledgers"
          {...a11yProps(0)}
          onClick={(event) => {
            event.preventDefault();
            history.push(`/accounts/ledgers/stockssubledgers`);
          }}
        />
        <Tab
          label="Staff Sub Ledgers"
          {...a11yProps(0)}
          onClick={(event) => {
            event.preventDefault();
            history.push(`/accounts/ledgers/staffsubledgers`);
          }}
        />
        <Tab
          label="Partners Sub Ledgers"
          {...a11yProps(0)}
          onClick={(event) => {
            event.preventDefault();
            history.push(`/accounts/ledgers/partnersubledgers`);
          }}
        />
        <Tab
          label="Vendors Sub Ledgers"
          {...a11yProps(0)}
          onClick={(event) => {
            event.preventDefault();
            history.push(`/accounts/ledgers/partnerssubledgers`);
          }}
        />
        <Tab
          label="Customers Sub Ledgers"
          {...a11yProps(0)}
          onClick={(event) => {
            event.preventDefault();
            history.push(`/accounts/ledgers/customerssubledgers`);
          }}
        />
        <Tab
          label="Suppliers Sub Ledgers"
          {...a11yProps(0)}
          onClick={(event) => {
            event.preventDefault();
            history.push(`/accounts/ledgers/supplierssubledgers`);
          }}
        />
        <Tab
          label="Office Sub Ledgers"
          {...a11yProps(0)}
          onClick={(event) => {
            event.preventDefault();
            history.push(`/accounts/ledgers/officesubledgers`);
          }}
        />
        <Tab
          label="Product Sub Ledgers"
          {...a11yProps(0)}
          onClick={(event) => {
            event.preventDefault();
            history.push(`/accounts/ledgers/products`);
          }}
        />
      </Tabs>

      <TabPanel value={value} index={0}>
        <AccountsAssetSubLedgerLayout token={token} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <AccountsStocksSubLedgerLayout token={token} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <AccountsLedgerStaffSubLedgerLayout token={token} />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <AccountsLedgerPartnersSubledgerLayout token={token} />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <AccountsLedgerVendorSubLedgerLayout token={token} />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <AccountsLedgerCustomersSubLayout token={token} />
      </TabPanel>
      <TabPanel value={value} index={6}>
        <AccountsLedgerSuppliersSubLedgersLayout token={token} />
      </TabPanel>
      <TabPanel value={value} index={7}>
        <AccountsLedgerOfficeSubLedgersLayout token={token} />
      </TabPanel>
      <TabPanel value={value} index={8}>
        <AccountsLedgerProductsSubLedgerLayout token={token} />
      </TabPanel>
    </div>
  );
}

export default AccountsLedgerLayout;
