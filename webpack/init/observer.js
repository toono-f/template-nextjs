import UaParser from "ua-parser-js";

export const observer = () => {
  window.addEventListener("load", () => {
    const uaParser = new UaParser();
    const device = uaParser.getDevice().type;
    const boxes = document.querySelectorAll(".js-scroll-trigger");
    const boxesArray = Array.prototype.slice.call(boxes);
    const options = {
      root: null,
      rootMargin: device !== "mobile" && device !== "tablet" ? "-10px" : "10px",
      threshold: 0,
    };
    const activateIndex = (element) => element.classList.add("is-active");
    const doWhenIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activateIndex(entry.target);
        }
      });
    };
    const observer = new IntersectionObserver(doWhenIntersect, options);
    boxesArray.forEach((box) => observer.observe(box));
  });
};
