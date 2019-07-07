import IArticle from "@interfaces/article";

export const actions = {
  GET_ARTICLES: "@@ARTICLE/GET_ARTICLES",
  ADD_ARTICLE: "@@ARTICLE/ADD_ARTICLE",
  UPDATE_ARTICLE: "@@ARTICLE/UPDATE_ARTICLE",
  DELETE_ARTICLE: "@@ARTICLE/DELETE_ARTICLE",
  SEARCH_ARTICLE: "@@ARTICLE/SEARCH_ARTICLE",
  SET_ARTICLES: "@@ARTICLE/SET_ARTICLES"
};

const actionsCreators = {
  setArticles: (article: IArticle) => ({
    type: actions.SET_ARTICLES,
    payload: article
  }),
  addArticle: (article: IArticle) => ({
    type: actions.ADD_ARTICLE,
    payload: article
  }),
  deleteArticle: (articleId: number) => ({
    type: actions.DELETE_ARTICLE,
    payload: articleId
  }),
  updateArticle: (article: IArticle) => ({
    type: actions.SEARCH_ARTICLE,
    payload: article
  })
};

export default actionsCreators;
