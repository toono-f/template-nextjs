import Head from "next/head";
import Link from "next/link";
import { useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import { Picture } from "src/components/Picture";
import { Source } from "src/components/Source";
import classes from "src/styles/index.module.scss";

const Index = (props) => {
  // object
  const fruit = [
    {
      name: "apple",
      style: "text-red",
    },
    {
      name: "orange",
      style: "text-orange",
    },
    {
      name: "grape",
      style: "text-purple",
    },
  ];
  // useState
  const [count, setCount] = useState(0);

  // useRef
  const inputElement = useRef(null);
  const doClick = () => {
    inputElement.current.focus();
    inputElement.current.classList.add("is-open");
    alert(`あなたが入力したのは${inputElement.current.value}`);
  };

  const { ref, inView } = useInView({
    // オプション
    rootMargin: "-100px", // ref要素が過ぎてから50px後に発火
    triggerOnce: true, // 最初の一度だけ実行
  });

  return (
    <>
      <Head>
        <title>Index</title>
      </Head>
      <Header />

      <p className={`mt-10 text-center`}>
        <span className="block">{count}</span>
        <button className="mt-10 btn-link" onClick={() => setCount(count + 1)}>
          クリックしてください
        </button>
      </p>
      {count > 3 && <p className="mt-10 text-center">クリック数が3以上になりました</p>}
      <div className="flex flex-wrap justify-center mt-20">
        {fruit.map((fruit) => {
          return (
            <p className={`${fruit.style} pr-5 pl-5`} key={fruit.name}>
              {fruit.name}
            </p>
          );
        })}
      </div>
      <div className="flex flex-col items-center mt-20">
        <input className="w-72 border" ref={inputElement} type="text" />
        <button onClick={doClick}>入力欄をフォーカスする</button>
      </div>

      <p className={`flex justify-center mt-96 scroll-fade-in ${inView ? "is-active" : "is-passive"}`} ref={ref}>
        <Picture src={require("@public/assets/images/sample.jpg?resize&size=600&format=webp")} alt="ギターとアンプと彼女" lazy>
          <Source srcset={require("@public/assets/images/sample.jpg?resize&size=300&format=webp")} media="sm" />
          <Source srcset={require("@public/assets/images/sample.jpg?resize&size=300")} media="sm" />
          <Source srcset={require("@public/assets/images/sample.jpg?resize&size=600")} />
        </Picture>
      </p>
      <p className="mt-10 text-center">
        <Link href="/about/">
          <a className={`${classes.link} mt-10 text-center font-bold underline link md:font-light`}>About</a>
        </Link>
      </p>
      <div style={{ height: "300px" }}></div>
      <Footer />
    </>
  );
};

export default Index;
