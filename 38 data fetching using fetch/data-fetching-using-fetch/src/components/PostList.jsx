import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";

const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListData);

  const handleGetPostsClick = () => {
    // fetching a dummy api from this url, fetch method will give us the promise to provide data from dummy api
    fetch("https://dummyjson.com/posts")
      // once the promise is fulfilled by fetch method, then get the json data file from the dummy api url
      .then((res) => res.json())
      // then adding our initial posts got from dummy api to our UI
      .then((data) => {
        addInitialPosts(data.posts);
      });
  };

  return (
    <>
      {postList.length === 0 && (
        <WelcomeMessage onGetPostsClick={handleGetPostsClick}></WelcomeMessage>
      )}
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

export default PostList;
