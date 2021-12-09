import React, { useState, useEffect } from "react";
import { AppBar, IconButton, Toolbar, Collapse } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SortIcon from "@material-ui/icons/Sort";
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import { Link as Scroll } from "react-scroll";

const useStyles = makeStyles((theme) => ({
  root: {
    // display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'center',
    // minHeight: '100vh',
    fontFamily: "Poppins",
  },
  appbar: {
    background: "none",
  },
  appbarWrapper: {
    width: "95%",
    margin: "0 auto",
  },
  appbarTitle: {
    flexGrow: "1",
  },
  menuIcon: {
    color: "#37474f",
    fontSize: "2rem",
  },
  colorText: {
    color: "#00acc1",
  },
  container: {
    alignItems: "center",
    minHeight: "140vh",
    // height: '100vh',
    display: "flex",
    justifyContent: "center",
    flexDirection:'column',
    width: "95%",
    margin: '0 auto',
  },
  containerLeft: {
    height: "80vh",
    // margin: '0 auto',
    direction: "row",
    flexGrow: "1",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  title: {
    color: "#eceff1",
    fontSize: "4.5rem",
  },
  createColor: {
    color: "#9e9e9e",
  },
  goDownIcon: {
    color: "#00acc1",
    fontSize: "6rem",
  },
}));

export default function Header() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  return (
    <div className={classes.root} id="header">
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appbarWrapper}>
          <h1 className={classes.appbarTitle}>
            Swagg<span className={classes.colorText}>ester.</span>
          </h1>
          <IconButton>
            <SortIcon className={classes.menuIcon} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Collapse
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapseHeight={40}
      >
        <div className={classes.container} id="headerTitle">
          <h1 className={classes.title}>
            {/* Create your Own Tshirt */}
            {/* <span className={classes.createColor}> */}
            <span className={classes.colorText}> C</span>
            <span className={classes.createColor}>reate Your </span>
            <br /> <span className={classes.createColor}>Own</span> {/* </span>{" "} */}
            <span className={classes.colorText}> Design</span>
          </h1>
          <h2>Earn equity points on every sale of your design.</h2>
          <Scroll to="landing-form" smooth={true}>
            <IconButton className={classes.downArrow}>
              <ExpandCircleDownIcon className={classes.goDownIcon} />
            </IconButton>
          </Scroll>
        </div>
      </Collapse>
    </div>
  );
}
