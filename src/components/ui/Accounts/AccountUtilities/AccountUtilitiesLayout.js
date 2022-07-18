import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Link } from "react-router-dom";
import history from "./../../../../history";
import AccountUtilitySchemeCodesLayout from "./AccountUtilitySchemeCodesLayout";
import AccountUtilityCurrencyTypeLayout from "./AccountUtilityCurrencyTypeLayout";
import AccountUtilityGeneralLedgerLayout from "./AccountUtilityGeneralLedgerHeadCodeLayout";
import AccountUtilityGlSubHeadLedgerCodeLayout from "./AccountUtilityGlSubHeadLedgerCodeLayout";
import AccountUtilityTransactionTypeLayout from "./AccountUtilityTransactionTypeLayout";
import AccountUtilityRatesLayout from "./AccountUtilityRatesLayout";
import AccountUtilityEquityFundingLayout from "./AccountUtilityEquityFundingLayout";
import AccountUtilityCashAccountLayout from "./AccountUtilityCashAccountLayout";
import AccountUtilityStaffAccountFundingLayout from "./AccountUtilityStaffAccountFundingLayout";
import AccountUtilitySubsidiaryLedger from "./AccountUtilitySubsidiaryLedger";
import AccountUtilityOfficeOperationsAndServicesLayout from "./AccountUtilityOfficeOperationsAndServicesLayout";

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

function AccountUtilitiesLayout({ token }) {
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
          label="Scheme Codes"
          {...a11yProps(0)}
          onClick={(event) => {
            event.preventDefault();
            history.push(`/accounts/utilities/schemecodes`);
          }}
        />
        <Tab
          label="Currency Types"
          {...a11yProps(1)}
          onClick={(event) => {
            event.preventDefault();
            history.push(`/accounts/utilities/currencytypes`);
          }}
        />
        <Tab
          label="General Ledger Codes"
          {...a11yProps(2)}
          onClick={(event) => {
            event.preventDefault();
            history.push(`/accounts/utilities/glcodes`);
          }}
        />
        <Tab
          label="General Subsidiary Ledger Codes"
          {...a11yProps(3)}
          onClick={(event) => {
            event.preventDefault();
            history.push(`/accounts/utilities/subglcodes`);
          }}
        />
        {/* <Tab
          label="Subsidiary Ledger"
          {...a11yProps(4)}
          onClick={(event) => {
            event.preventDefault();
            history.push(`/accounts/utilities/subledgers`);
          }}
        /> */}
        <Tab
          label="Transaction Types"
          {...a11yProps(4)}
          onClick={(event) => {
            event.preventDefault();
            history.push(`/accounts/utilities/transactiontypes`);
          }}
        />

        <Tab
          label="Office Operations & Servics"
          {...a11yProps(5)}
          onClick={(event) => {
            event.preventDefault();
            history.push(`/accounts/utilities/officeoperations`);
          }}
        />
        <Tab
          label=""
          {...a11yProps(0)}
          disabled
          //   onClick={(event) => {
          //     event.preventDefault();
          //     history.push(`/accounts/utilities/subgls`);
          //   }}
        />
        <Tab
          label="====== FUNDING ======"
          {...a11yProps(0)}
          disabled
          //   onClick={(event) => {
          //     event.preventDefault();
          //     history.push(`/accounts/utilities/subgls`);
          //   }}
        />
        <Tab
          label="Equity Account Funding"
          {...a11yProps(8)}
          onClick={(event) => {
            event.preventDefault();
            history.push(`/accounts/utilities/equityfunding`);
          }}
        />
        <Tab
          label="Cash Accounts Funding"
          {...a11yProps(9)}
          onClick={(event) => {
            event.preventDefault();
            history.push(`/accounts/utilities/cashaccounts`);
          }}
        />
        <Tab
          label="Staff Accounts Funding"
          {...a11yProps(10)}
          onClick={(event) => {
            event.preventDefault();
            history.push(`/accounts/utilities/staffaccounts`);
          }}
        />
      </Tabs>

      <TabPanel value={value} index={0}>
        <AccountUtilitySchemeCodesLayout token={token} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <AccountUtilityCurrencyTypeLayout token={token} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <AccountUtilityGeneralLedgerLayout token={token} />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <AccountUtilityGlSubHeadLedgerCodeLayout token={token} />
      </TabPanel>
      {/* <TabPanel value={value} index={4}>
        <AccountUtilitySubsidiaryLedger token={token} />
      </TabPanel> */}
      <TabPanel value={value} index={4}>
        <AccountUtilityTransactionTypeLayout token={token} />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <AccountUtilityOfficeOperationsAndServicesLayout token={token} />
      </TabPanel>
      <TabPanel value={value} index={8}>
        <AccountUtilityEquityFundingLayout token={token} />
      </TabPanel>
      <TabPanel value={value} index={9}>
        <AccountUtilityCashAccountLayout token={token} />
      </TabPanel>
      <TabPanel value={value} index={10}>
        <AccountUtilityStaffAccountFundingLayout token={token} />
      </TabPanel>
    </div>
  );
}

export default AccountUtilitiesLayout;
