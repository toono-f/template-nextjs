import { NextSeo } from "next-seo";
import Link from "next/link";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";

const Sitemap = (props) => {
  // meta情報
  const pageInfo = {
    title: "制作リスト",
  };

  return (
    <>
      <NextSeo title={pageInfo.title} />
      <Header />
      <main className="pt-14 pb-14">
        <ul className="text-center">
          <li>
            <Link href="/">
              <a className="underline hover:opacity-70" target="_blank" rel="noopener noreferrer">
                TOP
              </a>
            </Link>
          </li>
        </ul>
      </main>
      <Footer />
    </>
  );
};

export default Sitemap;
