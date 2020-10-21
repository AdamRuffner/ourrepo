import { FETCH_ARTICLES_START } from "../actions";
import { RANK_ARTICLE } from "../actions";
import { SAVE_ARTICLE } from "../actions";
import { DELETE_ARTICLE } from "../actions";
let initialState = {
  articles: [
    {
      id: 0,
      title: "",
      author: "",
      summary: "",
      image: "https://picsum.photos/seed/picsum/200/300",
      category: "",
      rank: 0,
    },
    {
      id: 3,
      title: "",
      author: "",
      summary: "",
      image: "https://picsum.photos/seed/picsum/200/300",
      category: "",
      rank: 4,
    },
  ], // Holds all articles in no order
  isLoading: false,
  error: "",
  savedArticles: [
    {
      id: 1,
      title: "",
      author: "",
      summary: "",
      image: "https://picsum.photos/seed/picsum/200/300",
      category: "",
      rank: 0,
    },
  ], //Holds users saved articles
};
export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ARTICLES_START:
      return { ...state, isLoading: true, articles: action.payload };
    case RANK_ARTICLE:
      //Edits the article's rank and saves it to state of all articles and if any
      // are in the saved list it will update them there too
      let savedTemp = state.savedArticles.map((article) => {
        if (action.payload.id === article.id) {
          return (article = action.payload);
        } else {
          return article;
        }
      });
      return {
        ...state,
        savedArticles: savedTemp,
      };
    case DELETE_ARTICLE:
      //Deletes the article and removes from state of all articles and if any
      //are in the saved list it remove them there too
      return {
        ...state,
        isLoading: true,
        //if its inside saved we need to update and return new savedartciles list
      };
    case SAVE_ARTICLE:
      //Updates the state of saved articles in the server and on the local state
      //of user
      return {
        ...state,
        isLoading: true,
        savedArticles: action.payload,
      };
    default:
      return state;
  }
};
