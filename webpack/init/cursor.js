import UaParser from "ua-parser-js";
import { Cursor } from "../modules/stalker";

export const cursor = () => {
  window.addEventListener("load", () => {
    const uaParser = new UaParser();
    const browser = uaParser.getBrowser().name;
    const device = uaParser.getDevice().type;
    if (browser !== "IE" && device !== "mobile" && device !== "tablet") {
      const cursor = new Cursor(document.querySelector(".js-cursor"));
      // スプレッド構文によりNodeListから配列に変換
      // 参考： https://javascript-k.hatenablog.com/entry/javascript_htmlcollection_nodelist
      [...document.querySelectorAll("a,button")].forEach((link) => {
        // ホバーアニメーション
        link.addEventListener("mouseenter", () => cursor.enter());
        link.addEventListener("mouseleave", () => cursor.leave());
      });
      // 画面外判定
      document.addEventListener("mouseleave", () => {
        cursor.mouseleave();
      });
      document.addEventListener("mouseenter", () => {
        cursor.mouseenter();
      });
    }
  });
};
