import React, { useEffect } from "react";
import { rankArticle, deleteArticle } from "../store/actions";
import { connect } from "react-redux";

const object =
    {
        "id": 0,
        "title": "",
        "author": "",
        "summary": "",
        "image": "https://picsum.photos/seed/picsum/200/300",
        "category": "",
        "rank": 4
};

function SavedList(props) {
  const { rankArticle, deleteArticle, savedArticles } = props;

  const onClick = (id) =>  {
    deleteArticle(id);
    // console.log(saveArticle);
  };

  const rankChange = ( article ) => {
    //   console.log(tempHolder)
    object.rank +=1
      rankArticle(article.id, JSON.stringify(article))

  }

  return (
    <div className="saved-list">
      {savedArticles ? (
        savedArticles.map((article) => (
          <div className="article-card">
            <h1>{article.title}</h1>

            <h3>Author: {article.author}</h3>
            <img className="image" src={article.image}></img>
            <div className="summary">
              <p>Summary: {article.summary}</p>
            </div>
            <div className="category">
              <p>Category: {article.category}</p>
            </div>
            <div className="rank">
              <p>Rank: {article.rank}</p>
            </div>
            <div>
            <button className="delete-btn" onClick={() => rankChange(article)}> 
            {/* why does this need an arrow function */}
              Edit Rank
            </button>
            <button className="delete-btn" onClick={() => onClick(article.id)}> 
            {/* why does this need an arrow function */}
              Delete
            </button>
            </div>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    savedArticles: state.savedArticles,
  };
};

export default connect(mapStateToProps, {
  rankArticle,
  deleteArticle,
})(SavedList);
