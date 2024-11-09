import React, { useState } from "react";
import Table from "./Table";
import Button from "./Button";

const Home = () => {
  const articles = [
    { date: "2022-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-02", views: 150, article: "Article 2" },

    { date: "2023-09-02", views: 120, article: "Article 3" },

    { date: "2020-09-03", views: 200, article: "Article 4" },
  ];

  const [articleList, setArticleList] = useState(articles);


  const sortByDates = () => {
    let updatedDateData = [...articleList].sort((a,b) => new Date(b.date) - new Date(a.date))
    setArticleList(updatedDateData);
    console.log('sort by date', updatedDateData)
  }

  const sortByViews = () => {
    let updatedViewsData = [...articleList].sort((a,b) => b.views - a.views);
    setArticleList(updatedViewsData);
    console.log('sort by views', updatedViewsData)
  }

  
  return (
    <div className="home">
      <h1>Date and Views Table</h1>
      <Button sortByDates={sortByDates} sortByViews={sortByViews}/>
      <Table articleList={articleList} />
    </div>
  );
};

export default Home;
