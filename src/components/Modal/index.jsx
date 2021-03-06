import { useEffect, useState } from "react";
import classes from "src/components/Modal/Modal.module.scss";

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
  return id !== null ? `https://www.youtube.com/embed/${id}?playlist=${id}${optsText}` : null;
};

export const Modal = (props) => {
  // youtubeの再生
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    setMovie(props.id);
  }, [props.update, props.id]);

  // 領域外クリック
  const closeModal = (e) => {
    if (!e.target.closest(".js-modal-box")) {
      setMovie(null);
    }
  };

  return movie !== null ? (
    <div onClick={closeModal} className={`${classes.modal}`}>
      <div className={`js-modal-box ${classes.modal_box}`}>
        <button
          onClick={() => {
            setMovie(null);
          }}
          title="閉じる"
          className={classes.modal_close}
        ></button>
        <div className={classes.modal_movie}>
          <iframe
            width="560"
            height="315"
            src={movieUrl(movie)}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  ) : null;
};
