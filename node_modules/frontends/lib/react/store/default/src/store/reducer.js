import { HOME_PAGE_NAME, changeName, CONTENT_PAGE_NAME } from "./actions";

const reducer = (state, { type, payload }) => {
  switch (type) {
    case HOME_PAGE_NAME:
      return changeName(state, "homePageName", payload);
    case CONTENT_PAGE_NAME:
      return changeName(state, "contentPageName", payload);
    default:
      return state;
  }
};
export default reducer;
