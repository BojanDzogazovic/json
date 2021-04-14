import "./App.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Posts } from "./components/Posts";
import { Post } from "./components/Post";
import { NotFound } from "./components/NotFound";
import { Context } from "./Context";
import { useState, useEffect, useMemo } from "react";

function App() {
  const [globalState, setGlobalState] = useState({
    loading: true,
    welcomeMsg: "Hello from",
    postID: 0,
    posts: [],
    comments: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await Promise.all([
          fetch("https://jsonplaceholder.typicode.com/posts/"),
          fetch("https://jsonplaceholder.typicode.com/comments/"),
          fetch("https://jsonplaceholder.typicode.com/users/"),
        ]);
        const data = await Promise.all(res.map((r) => r.json()));

        data[0].forEach((post) => {
          data[2].forEach((user) => {
            if (post.userId === user.id) {
              post.name = user.name;
            }
          });
        });

        setGlobalState((prevState) => ({
          ...prevState,
          posts: data[0],
          comments: data[1],
          loading: false,
        }));
      } catch {
        throw Error("Fetching data failed");
      }
    };

    fetchData();
  }, []);

  const providerValue = useMemo(() => ({ globalState, setGlobalState }), [
    globalState,
    setGlobalState,
  ]);

  return (
    <BrowserRouter>
      <Context.Provider value={providerValue}>
        <Switch>
          <Route path="/posts" exact component={Posts} />
          <Route path="/post/:id" exact component={Post} />
          <Route component={NotFound} />
        </Switch>
      </Context.Provider>
    </BrowserRouter>
  );
}

export default App;
