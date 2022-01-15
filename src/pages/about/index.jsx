import Head from "next/head";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import { Picture } from "src/components/Picture";
import { Source } from "src/components/Source";

const About = (props) => {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <Header />
      <h1 className="text-center">title</h1>
      <Picture class="mv-img" src="assets/images/vercel.svg" alt="画像">
        <Source srcset="vercel.svg" media="md" />
      </Picture>
      <Footer />
    </>
  );
};

export default About;
