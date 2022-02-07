import { NextSeo } from "next-seo";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import { basePath } from "src/hooks/basePath";

export default function Custom404() {
  // meta
  const pageInfo = {
    title: "404",
  };
  return (
    <>
      <NextSeo title={pageInfo.title} />
      <Header />
      <main className="p-4 py-200 text-center bg-white">
        <h1 className="text-30 font-bold">404 ご指定のページが見つかりませんでした。</h1>
        <p className="mt-60 text-20">
          アクセスしようとしたページは削除、変更されたか、
          <br />
          現在利用できない可能性があります。
        </p>
        <p className="mt-40 mb-100 text-center">
          <a className="w-200 font-serif btn-nl" href={`${basePath}`}>
            <span className="btn-nl_in">
              <span className="btn-nl_text">
                <span className="text-show">TOPに戻る</span>
                <span className="text-hidden">TOPに戻る</span>
              </span>
            </span>
          </a>
        </p>
      </main>
      <Footer />
    </>
  );
}
