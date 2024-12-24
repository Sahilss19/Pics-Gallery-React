import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Saved from './components/Saved';

const App = () => {
  const [Images, setImages] = useState([]);
  const [search, setsearch] = useState("cars"); 
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
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchImage();
  }, [search]); //as a dependency pass kiya hai

  console.log("Images:", Images);

  return (
    <Router>
      <Navbar setsearch={setsearch}/>
      <Routes>
        <Route path="/" element={<Home Images={Images} />} />
        <Route path="/saved" element={<Saved />} />
      </Routes>
    </Router>
  );
};

export default App;
