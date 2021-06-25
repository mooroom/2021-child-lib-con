import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Award from "../components/Award";

function Awards({ match }) {
  const { pagename } = match.params;
  useEffect(() => {
    console.log(pagename);
  });

  return (
    <>
      <Navbar current={pagename} />
      <Banner pagename={pagename} />
      <Award pagename={pagename} />
      <Footer />
    </>
  );
}

export default Awards;
