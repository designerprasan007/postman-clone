export const PostManReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_POST":
      return { postdata: action.payload };
    case "SUCCESS_CREATE":
      return { PostSuccess: action.payload };
    default:
      return state;
  }
};
