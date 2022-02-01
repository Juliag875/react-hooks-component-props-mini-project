import React from "react";
import Article from "./Article";

function ArticleList({posts}) {
 
  const articleElement = posts.map((post) => {
    return <Article 
      key={post.id}
      {...post}
      // title={post.title}
      // preview={post.preview}
      // date={post.date}
    />
  });
  return <main> {articleElement} </main>;
}

export default ArticleList;