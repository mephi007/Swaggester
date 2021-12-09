import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import Header from "./components/Header";
import LandingForm from "./components/LandingForm";
import Footer  from "./components/Footer";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '200vh',
    // height:'200vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + "/assests/Background.jpg"})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundColor:'grey'
  },
}));

export default function App() {
  const classes = useStyles();
  return <div className={classes.root}>
    <CssBaseline />
    <Header />
    <LandingForm />
    <Footer />
  </div>;
}