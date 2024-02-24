export const HOME_PAGE_NAME = "HOME_PAGE_NAME";
export const CONTENT_PAGE_NAME = "CONTENT_PAGE_NAME";

export const changeName = (state, field, name) => ({
  ...state,
  [field]: name,
});
