import { NextSeo } from "next-seo";
import { useState } from "react";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import { Modal } from "src/components/Modal";

// meta
const pageInfo = {
  title: "TOP",
};

const Index = (props) => {
  // youtubeの再生
  const [movie, setMovie] = useState(null);
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
        <p>
          <button
            title="Youtubeを見る"
            className="w-200 btn-nl"
            onClick={() => {
              movieUpdate("j1hft9Wjq9U");
            }}
          >
            <span className="btn-nl_in">
              <span className="btn-nl_text">
                <span className="text-show">Youtubeを見る</span>
                <span className="text-hidden">Youtubeを見る</span>
              </span>
            </span>
          </button>
        </p>
        <p className="mt-30">
          <button
            title="Youtubeを見る"
            className="w-200 btn-nl"
            onClick={() => {
              movieUpdate("yXZd7xVdpJ0");
            }}
          >
            <span className="btn-nl_in">
              <span className="btn-nl_text">
                <span className="text-show">Youtubeを見る</span>
                <span className="text-hidden">Youtubeを見る</span>
              </span>
            </span>
          </button>
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Index;

// export const config = {
//   unstable_runtimeJS: false,
// };
