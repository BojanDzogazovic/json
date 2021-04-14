import React, { useContext, useEffect } from "react";
import { Context } from "../Context";
import { SinglePost } from "./SinglePost";

export const Post = () => {
  const { globalState, setGlobalState } = useContext(Context);
  const componentName = "Post";

  console.log(`${globalState.welcomeMsg} ${componentName}`);

  useEffect(() => {
    setGlobalState((prevState) => ({
      ...prevState,
      postID: window.location.pathname.split("/").pop() - 1,
    }));
  }, []);

  return (
    <div className="container">
      {globalState.loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <SinglePost
          key={globalState.postID}
          post={globalState.posts[globalState.postID]}
          link={false}
        />
      )}
    </div>
  );
};
