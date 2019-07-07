import { actions } from "./actions";
import IArticle from "@interfaces/article";

interface IState {
  articles: Array<IArticle>;
  originalData: Array<IArticle>;
}

interface IActionReducer {
  type: String;
  payload: IArticle | Number;
}

const initialState: IState = {
  articles: [],
  originalData: []
};

function reducer(state = initialState, action: IActionReducer) {
  switch (action.type) {
    case actions.SET_ARTICLES:
      return { ...state };
    case actions.GET_ARTICLES:
      return { ...state };
    case actions.ADD_ARTICLE:
      return { ...state };
    case actions.SEARCH_ARTICLE:
      return { ...state };
    case actions.UPDATE_ARTICLE:
      return { ...state };
    case actions.DELETE_ARTICLE:
      return { ...state };
    default:
      return state;
  }
}

export default reducer;
