import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { saveArticle } from '../store/actions/index';

const ArticleCard = (props) => {
  const {
    title,
    author,
    image,
    summary,
    category,
    rank,
    id,
  } = props.article;
//   console.log(props);

  const newCard = {
    title: title,
    author: author,
    image: image,
    summary: summary,
    category: category,
    rank: rank,
    id: id,
  };
  const onClick = () => {
    props.saveArticle(newCard.id);
    // console.log(saveArticle);
  };

  return (
    <div>
      {props.article ? (
        <div className="article-card">
          <Link key={id} to={`/articles/${id}`}>
            <h1>{title}</h1>
          </Link>

          <h3>Author: {author}</h3>
          <img className="image" src={image}></img>
          <div className="summary">
            <p>Summary: {summary}</p>
          </div>
          <div className="category">
            <p>Category: {category}</p>
          </div>
          <div className="rank">
            <p>Rank: {rank}</p>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <button className="save-btn" onClick={onClick} >
        Save
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
  };
};

export default connect(mapStateToProps, {
  saveArticle,
})(ArticleCard);
