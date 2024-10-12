import { useContext, useEffect } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";

const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListData);

  // in useState, the state was changed frequently from flase to true and true to false, so due to this our UI was painted/rendered multiple times, so to avoid this we use useEffect, useEffect will load the UI in every few milliseconds(this can also be problem), it will make multiple network request calls on our server
  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
      });
  }, []); // giving [] empty array as second argument, which means we don't have any dependency, means our useEffect will not call fetch method in every few millisecond(this problem is also can be avoided which we had mentioned in the above comment), it will just fetch only first time when we render the application
  // so in short, because of [] empty array, UI will be painted only once using useEffect hook, useEffect won't run again in re-paint cycles

  return (
    <>
      {postList.length === 0 && <WelcomeMessage></WelcomeMessage>}
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

export default PostList;
