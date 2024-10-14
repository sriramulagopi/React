import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";
import { SearchBar } from "./search";
import { ImagesList } from "./images";
import { Pagination } from "./page";
import "./app.scss";
let clientId= "6YXNHArV-pApjJMPnTDs5O-Sxtjmt3opb_RiY5hXG7U";
const root = ReactDOM.createRoot(document.getElementById("root"));
const App = function () {
  const [query, setQuery] = useState("nature");
  const [pageNo, setPageNo] = useState(1);
  const [data, setData] = useState(null);
  useEffect(() => {
    axios({
      url:`https://api.unsplash.com/search/photos?page=${pageNo}&query=${query}&client_id=${clientId}`,
    }).then((data1)=>{
      setData(data1.data.results);
    }).catch((err)=>{
      setData("Error")
    })
  }, [query,pageNo]);
  return (
    <div className="app">
      <SearchBar setQuery={setQuery} setPageNo={setPageNo}/>
      <ImagesList data={data}/>
      <Pagination pageNo={pageNo} setPageNo={setPageNo}/>
    </div>
  );
};
root.render(<App />);
