import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Count from "./Count";
import FirstStep from "./FirstStep";
import { Toaster } from "react-hot-toast";

function MainRehous() {
  return (
    <>
      <Header />
      <Count />
      <FirstStep />
      <Footer />
      <Toaster />
    </>
  );
}

export default MainRehous;
