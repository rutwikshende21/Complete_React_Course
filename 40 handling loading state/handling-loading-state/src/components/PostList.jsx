import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListData);

  // creating a state, fetching state with initial value false, this state will show a loading bar/spinner when we call fetch method and our date is yet to be fetched(means it is in promise state)
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    setFetching(true); // setting fetching value to true to show loading spinner while dummy api data is fetching

    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);

        setFetching(false); // setting fetching value to false to hide loading spinner as our data is fetched
      });
  }, []);

  return (
    <>
      {/* if fetching value is true then only show the loading spinner on our UI */}
      {fetching && <LoadingSpinner></LoadingSpinner>}
      {/* !fetching means when fetching value is false, then only show below components */}
      {!fetching && postList.length === 0 && <WelcomeMessage></WelcomeMessage>}
      {!fetching && postList.map((post) => <Post key={post.id} post={post} />)}
    </>
  );
};

export default PostList;
