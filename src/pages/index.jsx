import Head from "next/head";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";

const Index = (props) => {
  return (
    <>
      <Head>
        <title>Index</title>
      </Head>
      <Header />
      <h1 className="text-center">title</h1>
      <Footer />
    </>
  );
};

export default Index;
