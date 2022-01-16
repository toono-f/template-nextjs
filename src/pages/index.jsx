import Head from "next/head";
import Link from "next/link";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import { Picture } from "src/components/Picture";
import { Source } from "src/components/Source";

const Index = (props) => {
  return (
    <>
      <Head>
        <title>Index</title>
      </Head>
      <Header />
      <p className="flex justify-center">
        <Picture src={require("@public/assets/images/sample.jpg?resize&size=600&format=webp")} alt="ギターとアンプと彼女">
          <Source srcset={require("@public/assets/images/sample.jpg?resize&size=300&format=webp")} media="sm" />
          <Source srcset={require("@public/assets/images/sample.jpg?resize&size=300")} media="sm" />
          <Source srcset={require("@public/assets/images/sample.jpg?resize&size=600")} />
        </Picture>
      </p>
      <Footer />
      <p className="mt-10 text-center">
        <Link href="/about/">
          <a className="underline">About</a>
        </Link>
      </p>
    </>
  );
};

export default Index;
