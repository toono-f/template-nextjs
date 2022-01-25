import { useEffect, useState } from "react";

export const Modal = (props) => {
  // youtubeの再生
  const [movie, setMovie] = useState(0);

  useEffect(() => {
    setMovie(props.id);
  }, [props.update]);

  const movieUrl = (id, time = 0) => {
    const opts = {
      autoplay: 1, // 自動再生（スマホでは効かない）
      controls: 1, // コントロールバーの表示
      disablekb: 0, // （1の場合）キーボード操作を禁止
      loop: 1, // ループ再生
      mute: 0, // ミュート
      playsinline: 1, // iOS端末で全画面再生させない
      rel: 0, // 同じチャンネルから関連動画を再生させる
      fs: 1, // 全画面表示ボタンの表示
      iv_load_policy: 1, // 動画アノテーションの表示
      modestbranding: 1, // 初期表示のyoutubeロゴの非表示
      start: time, // 動画再生開始時間の設定（秒指定）
    };
    const optsText = Object.keys(opts)
      .map((key) => `&${key}=${opts[key]}`)
      .join("&");
    return id !== 0 ? `https://www.youtube.com/embed/${id}?playlist=${id}${optsText}` : null;
  };

  // 領域外クリック
  const closeModal = (e) => {
    if (!e.target.closest(".js-modal-box")) {
      setMovie(0);
    }
  };

  return (
    <div onClick={closeModal} className={`modal_movie ${movie !== 0 ? "is-open" : "is-close"}`}>
      <div className={`modal_movie_box js-modal-box ${movie !== 0 ? "is-open" : "is-close"}`}>
        <button
          onClick={() => {
            setMovie(0);
          }}
          title="閉じる"
          className="modal_movie_close"
        >
          <img src={require("@public/assets/images/common/close.svg")} alt="閉じる" width="20" height="20" />
        </button>
        <div className="modal_movie_main">
          <iframe
            width="560"
            height="315"
            src={movieUrl(movie)}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};
