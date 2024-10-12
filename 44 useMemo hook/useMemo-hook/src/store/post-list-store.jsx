import { createContext, useCallback, useMemo, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  addInitialPosts: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_INITIAL_POSTS") {
    newPostList = action.payload.posts;
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);

  const addPost = (userId, postTitle, postBody, reactions, tags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reactions: reactions,
        userId: userId,
        tags: tags,
      },
    });
  };

  const addInitialPosts = (posts) => {
    dispatchPostList({
      type: "ADD_INITIAL_POSTS",
      payload: {
        posts,
      },
    });
  };

  // useCallback hook helps to avoid re-rendering of methods(creating objects of methods) again and again, even when there is no change in that method
  const deletePost = useCallback(
    (postId) => {
      dispatchPostList({
        type: "DELETE_POST",
        payload: {
          postId,
        },
      });
    },
    [dispatchPostList] // deletePost method is dependent on dispatchPostList method, so giving it as argument to useCallback hook method, so our deletePost method will only re-render when there is any change in dispatchPostList method, and it will help to avoid re-rendering of deletePost method again and again, even when there is no change in that method
  );

  const arr = [5, 2, 6, 7, 4];
  // useMemo hook helps to avoids unnecessary re-computing(i.e calculations, sorting of array in below example) again and again, even when there is no change in array arr's data
  const sortedArr = useMemo(() => arr.sort(), [arr]);
  // sortedArr method is dependent on value arr, so giving it as the argument to useMemo hook method, so here our sorting(calculation) method will only re-render when there is any change in arr value, and it will help to avoids unnecessary re-computing(i.e calculations, sorting of array in below example) again and again, even when there is no change in array arr's data

  return (
    <PostList.Provider
      value={{ postList, addPost, addInitialPosts, deletePost }}
    >
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
