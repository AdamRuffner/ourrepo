import axios from "axios";
import { axiosWithAuth } from "./utils/axiosWithAuth";
export const FETCH_ARTICLES_START = "FETCH_ARTICLES_START";
export const RANK_ARTICLE = "RANK_ARTICLE";
export const SAVE_ARTICLE = "SAVE_ARTICLE";
export const DELETE_ARTICLE = "DELETE_ARTICLE";
const baseUrl = "https://pintereach-backend-ajg.herokuapp.com/";
export const fetchArticles = () => (dispatch) => {
  axios
    .get(`${baseUrl}articles`)
    .then((res) => {
      dispatch({ type: FETCH_ARTICLES_START, payload: res.data.data });
    })
    .finally(() => {});
};


export const rankArticle = (id, obj) => (dispatch) => {
    console.log('RANK ARTICLE',obj['rank'], 'this is id', id)
  axiosWithAuth()
    .put(`${baseUrl}edit_articles/3`, obj['rank'])
    .then((res) => {
        console.log('RANKED GIVE',res.data.updatedList)
        dispatch({ type: RANK_ARTICLE, payload: res.data.updatedList[id - 1] });
    })
    .catch((err) => {
      console.log(err);
    });
};
export const deleteArticle = (id) => (dispatch) => {
  axiosWithAuth()
    .delete(`${baseUrl}saved_articles/${id}`)
    .then((res) => {
      dispatch({ type: DELETE_ARTICLE, payload: res.data });
      axiosWithAuth()
        .get(`${baseUrl}saved_articles/`)
        .then((res) => {
          console.log(
            "after deleting an article and hitting .get",
            res.data.data
          );
          dispatch({ type: SAVE_ARTICLE, payload: res.data.data });
        });
    })
    .catch((err) => {
      console.log(err);
    });
};
export const saveArticle = (id) => (dispatch) => {
  axiosWithAuth()
    .post(`${baseUrl}saved_articles/${id}`)
    .then((res) => {
      console.log("second axiosauth call");
      axiosWithAuth()
        .get(`${baseUrl}saved_articles/`)
        .then((res) => {
          console.log(
            "after saving an article and hitting .get",
            res.data.data
          );
          dispatch({ type: SAVE_ARTICLE, payload: res.data.data });
        });
    });
};
