import React, { useContext, useState } from "react";
import { Context } from "../Context";
import { Header } from "./Header";
import { SinglePost } from "./SinglePost";

export const Posts = () => {
  const { globalState } = useContext(Context);
  const componentName = "Posts";

  console.log(`${globalState.welcomeMsg} ${componentName}`);

  const [filter, setFilter] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  return (
    <>
      <Header />
      <section className="container">
        <div className="search-box">
          <label htmlFor="search" className="search-box__label">
            Search:
          </label>
          <input
            type="text"
            placeholder="Search posts by user name..."
            className="search-box__input"
            onChange={(e) => {
              if (e.target.value.length === 0) {
                setFilter("");
              } else {
                setFilter(e.target.value);
                let result = globalState.posts.filter((post) =>
                  post.name.toLowerCase().includes(e.target.value.toLowerCase())
                );

                setFilteredData(result);
              }
            }}
          />
        </div>
        <h2>Posts:</h2>
        {globalState.loading ? (
          <div className="loading">Loading...</div>
        ) : filter ? (
          filteredData.length ? (
            <div>
              <div className="search-results">
                Search results: {filteredData.length}
              </div>
              {filteredData.map((post) => (
                <SinglePost key={post.id} post={post} link={true} />
              ))}
            </div>
          ) : (
            <div className="no-results">No results...</div>
          )
        ) : (
          globalState.posts.map((post) => (
            <SinglePost key={post.id} post={post} link={true} />
          ))
        )}
      </section>
    </>
  );
};
