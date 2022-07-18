import React, { useState, useEffect } from "react";
import { AppBar, IconButton } from "@material-ui/core";
import { Toolbar } from "@material-ui/core";
import { useScrollTrigger } from "@material-ui/core";
//import Typography from "@mui/material/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
//import IconButton from "@mui/material/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import history from "./../../history";

import logo from "./../../assets/logo.svg";
import { RouterRounded } from "@material-ui/icons";
import UserLogout from "../authForms/UserLogout";

function ElevationScroll(props) {
  const { children } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    //target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em",
    [theme.breakpoints.down("md")]: {
      marginBottom: "2em",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "1.25em",
    },
  },
  logo: {
    height: "8em",
    width: "26em",
    [theme.breakpoints.down("md")]: {
      height: "7em",
    },
    [theme.breakpoints.down("xs")]: {
      height: "5.5em",
    },
  },
  logoContainer: {
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  tabContainer: {
    marginLeft: "auto",
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "15px",
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: "250px",
    marginLeft: "30px",
    marginRight: "10px",
    height: "45px",
    width: "100px",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  menu: {
    backgroundColor: theme.palette.common.blue,
    color: "white",
    borderRadius: "0px",
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    "&:hover": {
      opacity: 1,
    },
  },
  drawerIcon: {
    height: "50px",
    width: "50px",
  },
  drawerIconContainer: {
    // marginLeft: "auto",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  drawer: {
    backgroundColor: theme.palette.common.blue,
  },
  drawerItem: {
    ...theme.typography.tab,
    color: "white",
    opacity: 0.8,
  },
  drawerItemEstimate: {
    backgroundColor: theme.palette.common.orange,
  },
  drawerItemSelected: {
    "& .MuiListItemText-root": {
      opacity: 1,
    },
  },
  appbar: {
    zIndex: theme.zIndex.modal + 1,
  },
}));

const Header = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const iOS =
    typeof navigator !== "undefined" &&
    /iPad|iPhone|iPod/.test(navigator.userAgent);
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const [openDrawer, setOpenDrawer] = useState(false);

  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);
  const [openLogout, setOpenLogout] = useState(false);

  const handleChange = (e, newValue) => {
    props.setValue(newValue);
    setOpenMenu(true);
  };

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleMenuItemClick = (e, i) => {
    setAnchorEl(null);
    setOpenMenu(false);
    props.setSelectedIndex(i);
  };
  const handleClose = (e) => {
    setAnchorEl(null);
    setOpenMenu(false);
  };

  const menuOptions = [];

  const accountOptions = [
    {
      name: "Ledgers",
      link: "/accounts/ledgers",
      activeIndex: 0,
      selectedIndex: 0,
    },
    {
      name: "Expenses",
      link: "/accounts/expenses",
      activeIndex: 0,
      selectedIndex: 1,
    },
    {
      name: "Inflows",
      link: "/accounts/inflows",
      activeIndex: 0,
      selectedIndex: 2,
    },
    {
      name: "Listings",
      link: "/accounts/listings",
      activeIndex: 0,
      selectedIndex: 3,
    },
    {
      name: "Employees",
      link: "/accounts/employees",
      activeIndex: 0,
      selectedIndex: 4,
    },
    {
      name: "Transactions",
      link: "/accounts/transactions",
      activeIndex: 0,
      selectedIndex: 5,
    },
    {
      name: "Bank Deposits",
      link: "/accounts/bankdeposits",
      activeIndex: 0,
      selectedIndex: 6,
    },
    {
      name: "Utilities",
      link: "/accounts/utilities",
      activeIndex: 0,
      selectedIndex: 7,
    },
  ];

  const assetsOptions = [
    {
      name: "Assets",
      link: "/assets/assets",
      activeIndex: 1,
      selectedIndex: 10,
    },
    {
      name: "Procurement",
      link: "/assets/procurements",
      activeIndex: 1,
      selectedIndex: 11,
    },
    {
      name: "Depreciation",
      link: "/assets/depreciations",
      activeIndex: 1,
      selectedIndex: 12,
    },
    {
      name: "Inventory",
      link: "/assets/inventories",
      activeIndex: 1,
      selectedIndex: 13,
    },
    {
      name: "Maintenances",
      link: "/assets/maintenances",
      activeIndex: 1,
      selectedIndex: 14,
    },
    {
      name: "Supply Chain",
      link: "/assets/supplychains",
      activeIndex: 1,
      selectedIndex: 15,
    },
    {
      name: "Disposition",
      link: "/assets/dispositions",
      activeIndex: 1,
      selectedIndex: 16,
    },
    {
      name: "Locations",
      link: "/assets/locations",
      activeIndex: 1,
      selectedIndex: 17,
    },
    {
      name: "Transfer & Leasing",
      link: "/assets/transfers",
      activeIndex: 1,
      selectedIndex: 18,
    },
    {
      name: "Utilities",
      link: "/assets/utilities",
      activeIndex: 1,
      selectedIndex: 19,
    },
  ];

  const operationsOptions = [
    {
      name: "Projects",
      link: "/operations/projects",
      activeIndex: 2,
      selectedIndex: 20,
    },
    {
      name: "Transformation",
      link: "/operations/transformations",
      activeIndex: 2,
      selectedIndex: 21,
    },
    {
      name: "Maintenances",
      link: "/operations/maintenances",
      activeIndex: 2,
      selectedIndex: 22,
    },
    {
      name: "Quality Assurance",
      link: "/operations/qualityassurances",
      activeIndex: 2,
      selectedIndex: 23,
    },
    {
      name: "Finishings",
      link: "/operations/finishings",
      activeIndex: 2,
      selectedIndex: 24,
    },
    {
      name: "Utilities",
      link: "/operations/utilities",
      activeIndex: 2,
      selectedIndex: 25,
    },
  ];

  const crmOptions = [
    {
      name: "Users",
      link: "/crm/users",
      activeIndex: 3,
      selectedIndex: 30,
    },
    {
      name: "Contacts",
      link: "/crm/contacts",
      activeIndex: 3,
      selectedIndex: 31,
    },
    {
      name: "Suppliers",
      link: "/crm/suppliers",
      activeIndex: 3,
      selectedIndex: 36,
    },
    {
      name: "Partners",
      link: "/crm/partners",
      activeIndex: 3,
      selectedIndex: 37,
    },
    {
      name: "Customers",
      link: "/crm/customers",
      activeIndex: 3,
      selectedIndex: 38,
    },
    // {
    //   name: "Leads",
    //   link: "/crm/leads",
    //   activeIndex: 3,
    //   selectedIndex: 32,
    // },
    // {
    //   name: "Opportunities",
    //   link: "/crm/opportumities",
    //   activeIndex: 3,
    //   selectedIndex: 33,
    // },
    // {
    //   name: "Social Media",
    //   link: "/crm/socialmedia",
    //   activeIndex: 3,
    //   selectedIndex: 34,
    // },
    // {
    //   name: "Utilities",
    //   link: "/crm/utilities",
    //   activeIndex: 3,
    //   selectedIndex: 35,
    // },
  ];

  const salesOptions = [
    {
      name: "Products",
      link: "/sales/products",
      activeIndex: 4,
      selectedIndex: 40,
    },
    {
      name: "Team",
      link: "/sales/teams",
      activeIndex: 4,
      selectedIndex: 41,
    },
    {
      name: "Tasks",
      link: "/sales/tasks",
      activeIndex: 4,
      selectedIndex: 42,
    },
    {
      name: "Sales",
      link: "/sales/sales",
      activeIndex: 4,
      selectedIndex: 43,
    },
    {
      name: "Invoices",
      link: "/sales/invoices",
      activeIndex: 4,
      selectedIndex: 44,
    },
    // {
    //   name: "Campaign",
    //   link: "/sales/campaign",
    //   activeIndex: 4,
    //   selectedIndex: 45,
    // },
    {
      name: "Accounts",
      link: "/sales/accounts",
      activeIndex: 4,
      selectedIndex: 45,
    },
    {
      name: "Utilities",
      link: "/sales/utilities",
      activeIndex: 4,
      selectedIndex: 45,
    },
  ];

  const hrOptions = [
    {
      name: "Planning",
      link: "/hr/planning",
      activeIndex: 6,
      selectedIndex: 60,
    },
    {
      name: "Recruitments",
      link: "/hr/recruitments",
      activeIndex: 6,
      selectedIndex: 61,
    },
    {
      name: "Compensations",
      link: "/hr/compensations",
      activeIndex: 6,
      selectedIndex: 62,
    },
    // {
    //   name: "Training",
    //   link: "/hr/trainings",
    //   activeIndex: 6,
    //   selectedIndex: 63,
    // },
    {
      name: "Performance",
      link: "/hr/performances",
      activeIndex: 6,
      selectedIndex: 64,
    },
    // {
    //   name: "Employee Relations",
    //   link: "/hr/employeerelations",
    //   activeIndex: 6,
    //   selectedIndex: 65,
    // },
    {
      name: "Leave",
      link: "/hr/leaves",
      activeIndex: 6,
      selectedIndex: 66,
    },

    {
      name: "Exit",
      link: "/hr/Exit",
      activeIndex: 6,
      selectedIndex: 67,
    },
    // {
    //   name: "Career",
    //   link: "/hr/career",
    //   activeIndex: 6,
    //   selectedIndex: 68,
    // },
    {
      name: "Self Service",
      link: "/hr/selfservices",
      activeIndex: 6,
      selectedIndex: 69,
    },
    {
      name: "Utilities",
      link: "/hr/utilities",
      activeIndex: 6,
      selectedIndex: 600,
    },
  ];

  const consoleOptions = [
    {
      name: "Roles",
      link: "/systems/roles",
      activeIndex: 7,
      selectedIndex: 70,
    },
    {
      name: "Tasks",
      link: "/systems/tasks",
      activeIndex: 7,
      selectedIndex: 71,
    },
    {
      name: "Privileges",
      link: "/systems/privileges",
      activeIndex: 7,
      selectedIndex: 72,
    },
    {
      name: "Systems",
      link: "/systems/systems",
      activeIndex: 7,
      selectedIndex: 73,
    },
    {
      name: "Utilities",
      link: "/systems/Utilities",
      activeIndex: 7,
      selectedIndex: 74,
    },
  ];

  const reportOptions = [
    {
      name: "Accounts",
      link: "/reports/accounts",
      activeIndex: 8,
      selectedIndex: 80,
    },
    {
      name: "Assets",
      link: "/reports/assets",
      activeIndex: 8,
      selectedIndex: 81,
    },
    {
      name: "Customer Relations",
      link: "/reports/crm",
      activeIndex: 8,
      selectedIndex: 82,
    },
    {
      name: "Human Resurces",
      link: "/reports/hr",
      activeIndex: 8,
      selectedIndex: 83,
    },
    {
      name: "Operations",
      link: "/reports/operations",
      activeIndex: 8,
      selectedIndex: 84,
    },
    {
      name: "Sales",
      link: "/reports/sales",
      activeIndex: 8,
      selectedIndex: 85,
    },
    {
      name: "Projects",
      link: "/reports/projects",
      activeIndex: 8,
      selectedIndex: 86,
    },
    {
      name: "General",
      link: "/reports/general",
      activeIndex: 8,
      selectedIndex: 87,
    },
  ];

  const projectsOptions = [
    {
      name: "Initiation",
      link: "/projects/initiation",
      activeIndex: 5,
      selectedIndex: 50,
    },
    {
      name: "Planning",
      link: "/projects/planning",
      activeIndex: 5,
      selectedIndex: 51,
    },
    {
      name: "Execution",
      link: "/projects/execution",
      activeIndex: 5,
      selectedIndex: 52,
    },
    {
      name: "Monitoring",
      link: "/projects/monitoring",
      activeIndex: 5,
      selectedIndex: 53,
    },
    {
      name: "Closure",
      link: "/projects/closure",
      activeIndex: 5,
      selectedIndex: 54,
    },
    {
      name: "Utilities",
      link: "/projects/utilities",
      activeIndex: 5,
      selectedIndex: 55,
    },
  ];

  const profileOptions = [
    {
      name: "Account",
      link: "/profile/account",
      activeIndex: 9,
      selectedIndex: 90,
    },
  ];

  const dashboardOptions = [
    {
      name: "Dashboard",
      link: "/",
      activeIndex: 100,
      selectedIndex: 100,
    },
  ];

  const policyOptions = [
    {
      name: "Accounts",
      link: "/policies/accounts",
      activeIndex: 10,
      selectedIndex: 111,
    },
    {
      name: "Assets",
      link: "/policies/assets",
      activeIndex: 10,
      selectedIndex: 112,
    },
    {
      name: "Customer Relations",
      link: "/policies/crm",
      activeIndex: 10,
      selectedIndex: 113,
    },
    {
      name: "Human Resurces",
      link: "/policies/hr",
      activeIndex: 10,
      selectedIndex: 114,
    },
    {
      name: "Operations",
      link: "/policies/operations",
      activeIndex: 10,
      selectedIndex: 115,
    },
    {
      name: "Sales",
      link: "/policies/sales",
      activeIndex: 10,
      selectedIndex: 116,
    },
    {
      name: "Projects",
      link: "/policies/projects",
      activeIndex: 10,
      selectedIndex: 117,
    },
    {
      name: "General",
      link: "/policies/general",
      activeIndex: 10,
      selectedIndex: 118,
    },
  ];

  const routes = [
    { name: "Dashboard", link: "/", activeIndex: 100 },

    { name: "Accounts Management System", link: "/accounts", activeIndex: 0 },
    { name: "Assets Management System", link: "/assets", activeIndex: 1 },
    {
      name: "Operations Management System",
      link: "/operations",
      activeIndex: 2,
    },
    { name: "Customer Relationship Management", link: "/crm", activeIndex: 3 },
    { name: "Sales Management System", link: "/sales", activeIndex: 4 },
    { name: "Project Management System", link: "/projects", activeIndex: 5 },
    { name: "Human Resource Management", link: "/hr", activeIndex: 6 },
    { name: "Security & Systems", link: "/systems", activeIndex: 7 },
    { name: "Reports", link: "/reports", activeIndex: 8 },
    { name: "Policies & Settings", link: "/policies", activeIndex: 10 },
    { name: "Profile", link: "/profile", activeIndex: 9 },
    // { name: "Sign Out", link: "/logout" },
  ];

  //   useEffect(() => {
  //
  //         if (window.location.pathname === "/" && value !== 0) {
  //           setValue(0);
  //         } else if (window.location.pathname === "/services" && value !== 1) {
  //           setValue(1);
  //         } else if (window.location.pathname === "/revolution" && value !== 2) {
  //           setValue(2);
  //         } else if (window.location.pathname === "/about" && value !== 3) {
  //           setValue(3);
  //         } else if (window.location.pathname === "/contact" && value !== 4) {
  //           setValue(4);
  //         } else if (window.location.pathname === "/estimate" && value !== 5) {
  //           setValue(5);
  //         }

  //     switch (window.location.pathname) {
  //       case "/":
  //         if (value !== 0) {
  //           setValue(0);
  //         }
  //         break;
  //       case "/services":
  //         if (value !== 1) {
  //           setValue(1);
  //           setSelectedIndex(0);
  //         }
  //         break;
  //       case "/customservices":
  //         if (value !== 1) {
  //           setValue(1);
  //           setSelectedIndex(1);
  //         }
  //         break;
  //       case "/mobileapps":
  //         if (value !== 1) {
  //           setValue(1);
  //           setSelectedIndex(2);
  //         }
  //         break;
  //       case "/websites":
  //         if (value !== 1) {
  //           setValue(1);
  //           setSelectedIndex(3);
  //         }
  //         break;
  //       case "/revolutions":
  //         if (value !== 2) {
  //           setValue(2);
  //         }
  //         break;
  //       case "/about":
  //         if (value !== 3) {
  //           setValue(3);
  //         }
  //         break;
  //       case "/contact":
  //         if (value !== 4) {
  //           setValue(4);
  //         }
  //         break;
  //       case "/estimate":
  //         if (value !== 5) {
  //           setValue(5);
  //         }
  //         break;
  //       default:
  //         break;
  //     }
  //   }, [value]);

  //this is the refactored version of the hook
  useEffect(() => {
    [
      ...operationsOptions,
      ...assetsOptions,
      ...salesOptions,
      ...hrOptions,
      ...crmOptions,
      ...dashboardOptions,
      ...policyOptions,
      ...reportOptions,
      ...profileOptions,
      ...projectsOptions,
      ...consoleOptions,
      ...accountOptions,
      ...menuOptions,
      ...routes,
    ].forEach((route) => {
      switch (window.location.pathname) {
        case `${route.link}`:
          if (props.value !== route.activeIndex) {
            props.setValue(route.activeIndex);
            if (
              route.selectedIndex &&
              RouterRounded.selectedIndex !== props.selectedIndex
            ) {
              props.setSelectedIndex(route.selectedIndex);
            }
          }
          break;
        case "/logout":
          props.setValue(12);
          break;
        default:
          break;
      }
    });
  }, [
    props.value,
    accountOptions,
    salesOptions,
    crmOptions,
    hrOptions,
    assetsOptions,
    profileOptions,
    dashboardOptions,
    projectsOptions,
    reportOptions,
    policyOptions,
    consoleOptions,
    operationsOptions,
    menuOptions,
    props.selectedIndex,
    routes,
    props,
  ]);

  const tabs = (
    <React.Fragment>
      <Tabs
        value={props.value}
        onChange={handleChange}
        className={classes.tabContainer}
        indicatorColor="primary"
      >
        {routes.map((route, index) => (
          <Tab
            key={`${route}${index}`}
            className={classes.tab}
            component={Link}
            to={route.link}
            label={route.name}
            // aria-owns={route.ariaOwns}
            // aria-haspopup={route.ariaPopup}
            onMouseOver={route.mouseOver}
          />
        ))}
      </Tabs>

      {/* <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleClose}
        classes={{ paper: classes.menu }}
        MenuListProps={{ onMouseLeave: handleClose }}
        elevation={0}
        style={{ zIndex: 1302 }}
        keepMounted
      >
        {menuOptions.map((option, i) => (
          <MenuItem
            key={`${option}${i}`}
            component={Link}
            to={option.link}
            classes={{ root: classes.menuItem }}
            onClick={(event) => {
              handleMenuItemClick(event, i);
              props.setValue(1);
              handleClose();
            }}
            selected={i === props.selectedIndex && props.value === 1}
          >
            {option.name}
          </MenuItem>
        ))}
      </Menu> */}
    </React.Fragment>
  );

  const accountsTabs = (
    <React.Fragment>
      <Tabs
        value={props.value}
        onChange={handleChange}
        className={classes.tabContainer}
        indicatorColor="primary"
      >
        {accountOptions.map((route, index) => (
          <Tab
            key={`${route}${index}`}
            className={classes.tab}
            component={Link}
            to={route.link}
            label={route.name}
            // aria-owns={route.ariaOwns}
            // aria-haspopup={route.ariaPopup}
            onMouseOver={route.mouseOver}
          />
        ))}
      </Tabs>
    </React.Fragment>
  );

  const assetsTabs = (
    <React.Fragment>
      <Tabs
        value={props.value}
        onChange={handleChange}
        className={classes.tabContainer}
        indicatorColor="primary"
      >
        {assetsOptions.map((route, index) => (
          <Tab
            key={`${route}${index}`}
            className={classes.tab}
            component={Link}
            to={route.link}
            label={route.name}
            // aria-owns={route.ariaOwns}
            // aria-haspopup={route.ariaPopup}
            onMouseOver={route.mouseOver}
          />
        ))}
      </Tabs>
    </React.Fragment>
  );

  const operationsTabs = (
    <React.Fragment>
      <Tabs
        value={props.value}
        onChange={handleChange}
        className={classes.tabContainer}
        indicatorColor="primary"
      >
        {operationsOptions.map((route, index) => (
          <Tab
            key={`${route}${index}`}
            className={classes.tab}
            component={Link}
            to={route.link}
            label={route.name}
            // aria-owns={route.ariaOwns}
            // aria-haspopup={route.ariaPopup}
            onMouseOver={route.mouseOver}
          />
        ))}
      </Tabs>
    </React.Fragment>
  );

  const crmTabs = (
    <React.Fragment>
      <Tabs
        value={props.value}
        onChange={handleChange}
        className={classes.tabContainer}
        indicatorColor="primary"
      >
        {crmOptions.map((route, index) => (
          <Tab
            key={`${route}${index}`}
            className={classes.tab}
            component={Link}
            to={route.link}
            label={route.name}
            // aria-owns={route.ariaOwns}
            // aria-haspopup={route.ariaPopup}
            onMouseOver={route.mouseOver}
          />
        ))}
      </Tabs>
    </React.Fragment>
  );

  const hrTabs = (
    <React.Fragment>
      <Tabs
        value={props.value}
        onChange={handleChange}
        className={classes.tabContainer}
        indicatorColor="primary"
      >
        {hrOptions.map((route, index) => (
          <Tab
            key={`${route}${index}`}
            className={classes.tab}
            component={Link}
            to={route.link}
            label={route.name}
            // aria-owns={route.ariaOwns}
            // aria-haspopup={route.ariaPopup}
            onMouseOver={route.mouseOver}
          />
        ))}
      </Tabs>
    </React.Fragment>
  );

  const consoleTabs = (
    <React.Fragment>
      <Tabs
        value={props.value}
        onChange={handleChange}
        className={classes.tabContainer}
        indicatorColor="primary"
      >
        {consoleOptions.map((route, index) => (
          <Tab
            key={`${route}${index}`}
            className={classes.tab}
            component={Link}
            to={route.link}
            label={route.name}
            // aria-owns={route.ariaOwns}
            // aria-haspopup={route.ariaPopup}
            onMouseOver={route.mouseOver}
          />
        ))}
      </Tabs>
    </React.Fragment>
  );

  const salesTabs = (
    <React.Fragment>
      <Tabs
        value={props.value}
        onChange={handleChange}
        className={classes.tabContainer}
        indicatorColor="primary"
      >
        {salesOptions.map((route, index) => (
          <Tab
            key={`${route}${index}`}
            className={classes.tab}
            component={Link}
            to={route.link}
            label={route.name}
            // aria-owns={route.ariaOwns}
            // aria-haspopup={route.ariaPopup}
            onMouseOver={route.mouseOver}
          />
        ))}
      </Tabs>
    </React.Fragment>
  );

  const reportsTabs = (
    <React.Fragment>
      <Tabs
        value={props.value}
        onChange={handleChange}
        className={classes.tabContainer}
        indicatorColor="primary"
      >
        {reportOptions.map((route, index) => (
          <Tab
            key={`${route}${index}`}
            className={classes.tab}
            component={Link}
            to={route.link}
            label={route.name}
            // aria-owns={route.ariaOwns}
            // aria-haspopup={route.ariaPopup}
            onMouseOver={route.mouseOver}
          />
        ))}
      </Tabs>
    </React.Fragment>
  );

  const projectsTabs = (
    <React.Fragment>
      <Tabs
        value={props.value}
        onChange={handleChange}
        className={classes.tabContainer}
        indicatorColor="primary"
      >
        {projectsOptions.map((route, index) => (
          <Tab
            key={`${route}${index}`}
            className={classes.tab}
            component={Link}
            to={route.link}
            label={route.name}
            // aria-owns={route.ariaOwns}
            // aria-haspopup={route.ariaPopup}
            onMouseOver={route.mouseOver}
          />
        ))}
      </Tabs>
    </React.Fragment>
  );

  const profileTabs = (
    <React.Fragment>
      <Tabs
        value={props.value}
        onChange={handleChange}
        className={classes.tabContainer}
        indicatorColor="primary"
      >
        {profileOptions.map((route, index) => (
          <Tab
            key={`${route}${index}`}
            className={classes.tab}
            component={Link}
            to={route.link}
            label={route.name}
            // aria-owns={route.ariaOwns}
            // aria-haspopup={route.ariaPopup}
            onMouseOver={route.mouseOver}
          />
        ))}
      </Tabs>
    </React.Fragment>
  );

  const dashboardTabs = (
    <React.Fragment>
      <Tabs
        value={props.value}
        onChange={handleChange}
        className={classes.tabContainer}
        indicatorColor="primary"
      >
        {dashboardOptions.map((route, index) => (
          <Tab
            key={`${route}${index}`}
            className={classes.tab}
            component={Link}
            to={route.link}
            label={route.name}
            // aria-owns={route.ariaOwns}
            // aria-haspopup={route.ariaPopup}
            onMouseOver={route.mouseOver}
          />
        ))}
      </Tabs>
    </React.Fragment>
  );

  const policiesTabs = (
    <React.Fragment>
      <Tabs
        value={props.value}
        onChange={handleChange}
        className={classes.tabContainer}
        indicatorColor="primary"
      >
        {policyOptions.map((route, index) => (
          <Tab
            key={`${route}${index}`}
            className={classes.tab}
            component={Link}
            to={route.link}
            label={route.name}
            // aria-owns={route.ariaOwns}
            // aria-haspopup={route.ariaPopup}
            onMouseOver={route.mouseOver}
          />
        ))}
      </Tabs>
    </React.Fragment>
  );

  const renderSignOut = () => {
    return (
      <Button
        variant="contained"
        //component={Link}
        //to="/"
        color="secondary"
        className={classes.button}
        // onClick={() => props.setValue(12)}
        //onClick={props.handleLogoutProcess}
        // onClick={() => (
        //   <UserLogout
        //     handleLogoutProcess={props.handleLogoutProcess}
        //     setToken={props.setToken}
        //   />
        // )}
        onClick={() => [setOpenLogout(true), history.push("/")]}
      >
        Sign Out
      </Button>
    );
  };

  const renderLogout = () => {
    return (
      <Dialog
        style={{ zIndex: 1302 }}
        fullScreen
        open={openLogout}
        onClose={() => [setOpenLogout(false), history.push("/")]}
        fullWidth
        maxWidth="md"
      >
        <DialogContent>
          <UserLogout
            token={props.token}
            handleLogoutProcess={props.handleLogoutProcess}
            setToken={props.setToken}
            // handleDialogOpenStatus={handleDialogOpenStatus}
          />
        </DialogContent>
      </Dialog>
    );
  };

  const drawer = (
    <React.Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{ paper: classes.drawer }}
      >
        <div className={classes.toolbarMargin} />
        <List disablePadding>
          {routes.map((route) => (
            <ListItem
              //   className={
              //     value === route.activeIndex
              //       ? [classes.drawerItem, classes.drawerItemSelected]
              //       : classes.drawerItem
              //   }
              className={classes.drawerItem}
              divider
              key={`${route}${route.activeIndex}`}
              button
              component={Link}
              to={route.link}
              selected={props.value === route.activeIndex}
              onClick={() => {
                setOpenDrawer(false);
                props.setValue(route.activeIndex);
              }}
            >
              <ListItemText disableTypography>{route.name}</ListItemText>
            </ListItem>
          ))}

          {/* <ListItem
            className={classes.drawerItemEstimate}
            onClick={() => {
              setOpenDrawer(false);
              props.setValue(5);
            }}
            divider
            button
            component={Link}
            to="/estimate"
            classes={{
              root: classes.drawerItemEstimate,
              selected: classes.drawerItemSelected,
            }}
            selected={props.value === 5}
          >
            <ListItemText className={classes.drawerItem} disableTypography>
              Estimate
            </ListItemText>
          </ListItem> */}
        </List>
      </SwipeableDrawer>
      <IconButton
        className={classes.drawerIconContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </React.Fragment>
  );

  const renderTab = () => {
    if (props.value === 0) {
      return accountsTabs;
    } else if (props.value === 1) {
      return assetsTabs;
    } else if (props.value === 2) {
      return operationsTabs;
    } else if (props.value === 3) {
      return crmTabs;
    } else if (props.value === 4) {
      return salesTabs;
    } else if (props.value === 5) {
      return projectsTabs;
    } else if (props.value === 6) {
      return hrTabs;
    } else if (props.value === 7) {
      return consoleTabs;
    } else if (props.value === 8) {
      return reportsTabs;
    } else if (props.value === 9) {
      return profileTabs;
    } else if (props.value === 100) {
      return dashboardTabs;
    } else if (props.value === 10) {
      return policiesTabs;
    }
  };

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed" className={classes.appbar}>
          <Toolbar disableGutters>
            <Button
            // onClick={() => props.setValue(0)}
            // disableRipple
            // component={Link}
            // to="/"
            // className={classes.logoContainer}
            >
              {/* <img alt="company logo" src={logo} className={classes.logo} /> */}
            </Button>
            {/* {matches ? drawer : tabs} */}
            {drawer}
            {renderTab()}
            {renderSignOut()}
            {renderLogout()}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin}></div>
    </React.Fragment>
  );
};

export default Header;
