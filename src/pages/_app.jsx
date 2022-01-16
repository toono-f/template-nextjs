import Head from "next/head";
import { Layout } from "src/components/layout";
import "src/styles/globals.scss";

const MyApp = ({ Component }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Component />
      </Layout>
      {/* <script src="/assets/js/jquery-3.6.0.min.js"></script> */}
      {/* <script src="/assets/js/vendor.js"></script> */}
    </>
  );
};

export default MyApp;
