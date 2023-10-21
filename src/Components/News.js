import React, { useEffect, useReducer, useState } from "react";
import NewsItem from "./NewsItem";
import img1 from "./picture-loading-failed-1.png";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export default function News(props) {
  const [statea, setStatea] = useReducer(
    (statea, setStatea) => ({ ...statea, ...setStatea }),
    { articles: [], loading: false }
  );
  const [page, setPage] = useState(1);
  const handlePrevClick = () => {
    setPage(page - 1);
  };
  const handleNextClick = () => {
    if (page + 1 > Math.ceil(statea.totalResults / props.pageSize)) {
    } else {
      setPage(page + 1);
    }
  };
  useEffect(() => {
    async function fetchData() {
      let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=4a9ef6a2fd814a9cb20f7ba22cc4ffc8&page=${page}&pageSize=${props.pageSize}`;
      setStatea({
        loading: true,
      });
      let data = await fetch(url);
      let parsedData = await data.json();
      setStatea({
        articles: parsedData.articles,
        totalResults: parsedData.totalResults,
        loading: false,
      });
    }
    fetchData();
  }, [page, props.pageSize, props.category, props.country]);
  document.title = `NewsAlligator - ${(props.category).toUpperCase()} Headlines`
  return (
    <>
      <div className="newscontainer">
        <h1 className={props.mode==="dark"?"newsheading dark-txt":"newsheading"}>NewsAlligator - Top {(props.category).toUpperCase()} Headlines</h1>
        {statea.loading && <Spinner />}
        <div className="row">
          {statea.articles.map((element) => {
            return (
              <div className="col" key={element.url}>
                <NewsItem
                  title={
                    element.title ? element.title.slice(0, 40) : "No Title"
                  }
                  description={
                    element.description
                      ? element.description.slice(0, 80)
                      : "No Desc."
                  }
                  imageUrl={element.urlToImage ? element.urlToImage : img1}
                  newsUrl={element.url}
                  author={element.author?element.author:"anonymous"}
                  date={element.publishedAt}
                  source={element.source.name}
                  mode={props.mode}
                />
              </div>
            );
          })}
        </div>
        <div className="newsbutton">
          <button
            disabled={page <= 1}
            className={props.mode==="dark"?"button dark dark-txt":"button button-light"}
            onClick={handlePrevClick}
            style={{
              opacity: page <= 1 ? 0.5 : 1,
            }}
          >
            &larr; Previous
          </button>
          <button
            className={props.mode==="dark"?"button dark dark-txt":"button button-light"}
            disabled={
              page + 1 > Math.ceil(statea.totalResults / props.pageSize)
            }
            onClick={handleNextClick}
            style={{
              opacity:
                page + 1 > Math.ceil(statea.totalResults / props.pageSize)
                  ? 0.5
                  : 1,
            }}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    </>
  );
}
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};
News.defaultProps = {
  country: "in",
  pageSize: 20,
  category: "general",
};
