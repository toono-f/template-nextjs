import Document, { Head, Html, Main, NextScript } from "next/document";
import { basePath } from "src/hooks/basePath";
class MyDocument extends Document {
  render() {
    return (
      <Html lang="ja">
        {/* <Head>
          <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&display=swap" rel="stylesheet" />
        </Head> */}
        <Head />
        <body>
          <Main />
          <NextScript />
          <script src={`${basePath}/assets/js/jquery-3.6.0.min.js`}></script>
          <script src={`${basePath}/assets/js/main.min.js`}></script>
        </body>
      </Html>
    );
  }
}
export default MyDocument;
