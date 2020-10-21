import React from "react";
import ArticleCard from "./ArticleCard";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import SavedList from "./SavedList";

function ArticleList(props) {
  const { articles, setSavedList, savedList } = props;
  const history = useHistory();

  //   const saveArticle = (article) => {
  //     setSavedList(article);
  //   console.log(savedList)
  // };

  //   console.log(setSavedList);
  return (
    <div className="article-list">
      {articles
        ? articles.map((article) => (
            <div>
              <ArticleCard
                article={article}
                // setSavedList={setSavedList}
                // savedList={savedList}
              />
              {/* <div className="save-btn" onClick={saveArticle(article)}>
                Save
              </div> */}
            </div>
          ))
        : "loading.."}
    </div>
  );
}

export default ArticleList;
