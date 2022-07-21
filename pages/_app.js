import React from "react";
import Layout from "../Layout";
import "../styles/globals.css";
import "../styles/fontface.css";
import "../styles/loader.css";

const MemorizeLayout = React.memo(Layout);

function MyApp({ Component, pageProps }) {
  return (
    <MemorizeLayout>
      <Component {...pageProps} />
    </MemorizeLayout>
  );
}

export default MyApp;
