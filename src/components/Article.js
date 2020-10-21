import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";

function Article({ addToSavedList }) {
  const [article, setArticle] = useState(null);
  const params = useParams();
  const history = useHistory();

  const fetchArticle = (id) => {
    axios
      .get(`https://pintereach-backend-ajg.herokuapp.com/articles/${id}`)
      .then((res) => setArticle(res.data))
      .catch((err) => console.log("ERROR: fetchArticle", err.response));
  };

//   const saveArticle = () => {
//       console.log(saveArticle)
//     addToSavedList(article);
//     history.push(`/saved-articles`);
//   };

  const editArticle = () => {
    history.push(`/update-article/${params.id}`);
  };

  useEffect(() => {
    fetchArticle(params.id);
  }, [params.id]);

  return (
    <div className="save-wraper">
    </div>
  );
}

export default Article;
