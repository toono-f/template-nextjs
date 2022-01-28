import Link from "next/link";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";

export default function Custom404() {
  return (
    <>
      <Header />
      <main className="p-4 pt-20 pb-20 text-center">
        <h1 className="font-bold">404 ご指定のページが見つかりませんでした。</h1>
        <p className="mt-6">
          アクセスしようとしたページは削除、変更されたか、
          <br className="md:hidden" />
          現在利用できない可能性があります。
        </p>
        <p className="mt-6">
          <Link href="/">
            <a href="" className="underline hover:opacity-70">
              トップページに戻る
            </a>
          </Link>
        </p>
      </main>
      <Footer />
    </>
  );
}
