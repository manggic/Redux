import React from "react";
import Form from "./Form";
import List from "./List";
import  Post  from "./Post";

const App = () => {
  return (
    <>
      <div>
        <h2>Articles</h2>
        <List />
      </div>
      <div>
        <h2>To add new Articles</h2>
        <Form />
          </div>
          <div>
      <h2>API posts</h2>
      <Post />
    </div>
    </>
  );
};

export default App;
