import { NextSeo } from "next-seo";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";

const Index = (props) => {
  // meta
  const pageInfo = {
    title: "TOP",
  };
  return (
    <>
      <NextSeo title={pageInfo.title} />
      <Header />
      <Footer />
    </>
  );
};

export default Index;
