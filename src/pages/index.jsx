import { NextSeo } from "next-seo";
import { useState } from "react";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import { Modal } from "src/components/Modal";

const Index = (props) => {
  // meta
  const pageInfo = {
    title: "TOP",
  };

  // youtubeの再生
  const [movie, setMovie] = useState(0);
  const [update, setUpdate] = useState(false);
  const movieUpdate = (e) => {
    setMovie(e);
    setUpdate(update ? false : true);
  };

  return (
    <>
      <NextSeo title={pageInfo.title} />
      <Header />
      <Modal id={movie} update={update} />
      <div className="p-20 text-center">
        <button
          title="Youtubeを見る"
          onClick={() => {
            movieUpdate("j1hft9Wjq9U");
          }}
        >
          <span>Youtubeを見る</span>
        </button>
      </div>
      <Footer />
    </>
  );
};

export default Index;

// export const config = {
//   unstable_runtimeJS: false,
// };
