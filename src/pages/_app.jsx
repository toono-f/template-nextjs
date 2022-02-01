import { DefaultSeo } from "next-seo";
import Head from "next/head";
import { useRouter } from "next/router";
import { Layout } from "src/components/layout";
import "src/styles/globals.scss";

// swiper関連
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/autoplay";

const MyApp = ({ Component }) => {
  // meta関連
  const router = useRouter();
  const type = router.pathname === "/" ? "website" : "article";
  const siteInfo = {
    title: "",
    description: "",
    url: "",
    type: type,
  };

  return (
    <>
      <DefaultSeo
        defaultTitle={siteInfo.title}
        description={siteInfo.description}
        openGraph={{
          type: siteInfo.type,
          title: siteInfo.title,
          description: siteInfo.description,
          site_name: siteInfo.title,
          url: siteInfo.url,
        }}
      />
      <Head>
        <meta name="format-detection" content="telephone=no" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        {/* <link rel="shortcut icon" href="" /> */}
        {/* <link rel="apple-touch-icon" href="" /> */}
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&display=swap" rel="stylesheet" />
      </Head>
      <Layout>
        <Component />
      </Layout>
    </>
  );
};

export default MyApp;
