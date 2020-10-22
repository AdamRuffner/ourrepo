
import React,{ useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";

import IndividualArticle from "./components/IndividualArticle";
import ArticleList from "./components/ArticleList";
import {SignUpPage} from './components/SignUpPage'
import LoginPage from './components/LoginPage'
import Article from "./components/Article";
import SavedList from "./components/SavedList";

import {  fetchArticles,  rankArticle,  saveArticle,} from "../src/store/actions";



const App = (props) => {
  const { fetchArticles, rankArticle, saveArticle } = props;
  const [savedList, setSavedList] = useState({});

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    
      <div className="App">
    
      <Route path = '/signup'>
        <SignUpPage />
      </Route>
      <Route exact path = '/'>
        <LoginPage />
      </Route>
    
        <Link exact path to="/articles">
          Articles
        </Link>
        <br></br>
        <Link exact path to="/saved-articles/">
          Saved Articles
        </Link>

        <Route exact path="/saved-articles/">
          <SavedList savedList={props.savedArticles}/>
        </Route>

        <Route exact path="/">
          <ArticleList articles={props.articles} />
        </Route>

        <Route exact path="/articles/:id/">
          <IndividualArticle />
          <Article />
        </Route>
      </div>
      );
};

const mapStateToProps = (state) => {
  return {
    articles: state.articles,
    savedArticles: state.savedArticles,
  };
};

export default connect(mapStateToProps, {
  fetchArticles,
  rankArticle,
  saveArticle,
})(App);
