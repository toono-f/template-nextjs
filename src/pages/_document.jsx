import Document, { Head, Html, Main, NextScript } from "next/document";
// import { basePath } from "src/hooks/basePath";
class MyDocument extends Document {
  render() {
    return (
      <Html lang="ja">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&family=Noto+Sans+JP:wght@300;400;500;700&display=swap" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&family=Noto+Sans+JP:wght@300;400;500;700&display=swap"
            media="print"
            onLoad="this.media='all'"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          {/* <script src={`${basePath}assets/js/jquery-3.6.0.min.js`}></script> */}
          {/* <script src={`${basePath}assets/js/main.min.js`}></script> */}
        </body>
      </Html>
    );
  }
}
export default MyDocument;
