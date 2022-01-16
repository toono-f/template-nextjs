import Head from "next/head";
import Link from "next/link";
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
      <p className="flex justify-center">
        <Picture src={require("@public/assets/images/sample02.jpg?resize&size=600&format=webp")} alt="こつこつとプログラムの改修を行うエンジニア">
          <Source srcset={require("@public/assets/images/sample02.jpg?resize&size=300&format=webp")} media="sm" />
          <Source srcset={require("@public/assets/images/sample02.jpg?resize&size=300")} media="sm" />
          <Source srcset={require("@public/assets/images/sample02.jpg?resize&size=600")} />
        </Picture>
      </p>
      <p className="mt-10 text-center">
        <Link href="/">
          <a className="underline">Top</a>
        </Link>
      </p>
      <Footer />
    </>
  );
};

export default About;
