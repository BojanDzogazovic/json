import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../Context";

export const NotFound = () => {
  const { globalState } = useContext(Context);
  const componentName = "Notfound";

  console.log(`${globalState.welcomeMsg} ${componentName}`);

  return (
    <div className="no-page">
      <p className="no-page__message">
        404 <br /> Page not found
      </p>
      <Link className="no-page__link" to={"/json/posts"}>
        Back to Posts
      </Link>
    </div>
  );
};
