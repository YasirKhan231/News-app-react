import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import News from "./news";

function App() {
  let [article, setArticle] = useState([]);
  let [catogary, setcatogary] = useState("india");

  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/everything?q=${catogary}&from=2023-12-10&apiKey=d0395fe58a274c2ca836da4f17813220`
    )
      .then((response) => response.json())
      .then((news) => {
        setArticle(news.articles);
        console.log(news.articles);
      })
      .catch((err) => console.log(err));
  }, [catogary]);

  return (
    <div className="app">
      <header className="header">
        <h2>Parso Tak</h2>
        <input
          type="text"
          onChange={(event) => {
            if (event.target.value !== "") {
              setcatogary(event.target.value);
            } else {
              setcatogary("india");
            }
          }}
          placeholder="search news "
        />
      </header>
      <section className="news-article">
        {article.length !== 0 ? (
          article.map((article) => {
            return <News msg={article}></News>;
          })
        ) : (
          <h2>News not found</h2>
        )}
      </section>
    </div>
  );
}

export default App;
