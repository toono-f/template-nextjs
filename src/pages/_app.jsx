import { DefaultSeo } from "next-seo";
import Head from "next/head";
import { useRouter } from "next/router";
import { Layout } from "src/components/layout";
// import { basePath } from "src/hooks/basePath";
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
    title: "テンプレート",
    description: "こちらはテンプレートです。",
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
        {/* <link rel="shortcut icon" href="" /> */}
        {/* <link rel="apple-touch-icon" href="" /> */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        {/* next export時にに以下有効 */}
        <script
          dangerouslySetInnerHTML={{
            __html: `var viewport=document.querySelector('meta[name="viewport"]');function switchViewport(){var value=window.outerWidth>375?"width=device-width,initial-scale=1.0":"width=375";if(viewport.getAttribute("content")!==value){viewport.setAttribute("content",value)}} switchViewport();window.addEventListener("resize",switchViewport);`,
          }}
        />
      </Head>
      <Layout>
        <Component />
      </Layout>
    </>
  );
};

export default MyApp;
