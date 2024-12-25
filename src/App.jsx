import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Saved from './components/Saved';

const App = () => {
  const [Images, setImages] = useState([]);
  const [search, setsearch] = useState("cars"); 
  const [Loader, setLoader] = useState(true);
  const [saved, setSaved] = useState([]);



  const API_KEY = "hb8MPopChrmSumnGThlEYVAOQBdIgfJzrnI02W1T4bwcp6EFeND9xWNf";

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const res = await axios.get(
          `https://api.pexels.com/v1/search?query=${search}&per_page=80`,
          {
            headers: {
              Authorization: API_KEY, 
            },
          }
        );
        setImages(res.data.photos); 
        setLoader(false); // data aane ke bad loader ko band kr dega
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
   const data = JSON.parse(localStorage.getItem("saved"));
   if (data) {
     setSaved(data);      // abhi jo niche local storage m save kiya hai ... usi se nikala hai 
   }
    fetchImage();
  }, [search]); //as a dependency pass kiya hai

  useEffect(() => {
   if (saved.length !== 0) {
     const json = JSON.stringify(saved);
     localStorage.setItem("saved", json);
   }
  }, [saved]) // local storage mein save ho gi

  

  console.log("Images:", Images);
  console.log("Image is saved", saved);

  return (
    <Router>
      <Navbar setsearch={setsearch}/>
      <Routes>
        <Route path="/" 
        element=
        {<Home 
          Images={Images} 
          Loader ={Loader}
          saved={saved}
        setSaved={setSaved}
         />
        }
          />
        <Route path="/saved" element={<Saved saved={saved}  Loader ={Loader}/>} />
      </Routes>
    </Router>
  );
};

export default App;




