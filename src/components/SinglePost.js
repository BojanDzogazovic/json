import React, { useContext } from "react";
import { Context } from "../Context";
import arrowIcon from "../assets/arrow-icon.svg";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const SinglePost = ({ post, link }) => {
  const { globalState, setGlobalState } = useContext(Context);
  const componentName = "Single Post";

  console.log(`${globalState.welcomeMsg} ${componentName}`);

  let comments = globalState.comments.filter(
    (comment) => comment.postId === post.id
  );

  return (
    <div className="single-post">
      <p className="single-post__user">User: {post.name}</p>
      <h3 className="single-post__title">{post.title}</h3>
      <p className="single-post__body">{post.body}</p>
      <div className="single-post__comments">
        <h4 className="single-post__comments-title">Comments:</h4>
        {comments.map((comment) => (
          <div key={comment.id} className="single-post__comment">
            <p className="single-post__comment-title">{comment.name}</p>
            <p className="single-post__comment-email">- {comment.email}</p>
            <p className="single-post__comment-body">{comment.body}</p>
          </div>
        ))}
      </div>
      <div className="single-post__cta-box">
        {link ? (
          <Link
            target="_blank"
            key={post.id}
            to={`/json/post/${post.id}`}
            onClick={() => {
              setGlobalState((prevState) => ({
                ...prevState,
                postID: post.id,
              }));
            }}
          >
            <button className="cta">
              Go to post
              <img className="cta__icon" src={arrowIcon} alt="arrow" />
            </button>
          </Link>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

SinglePost.propTypes = {
  post: PropTypes.object,
  link: PropTypes.bool,
};
