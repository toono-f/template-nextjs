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
    </>
  );
};

export default MyApp;
