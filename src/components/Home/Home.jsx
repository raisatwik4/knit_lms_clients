import React from "react";
import "./home.css";
import axios from 'axios';
import { useState , useEffect } from "react";
import { Link } from "react-router-dom";



const Home = () => {
  const [sample, setSample] = useState([]);

  const [user, setUser] = useState([]); 
  useEffect(() => {
  fetch("http://localhost:3000/books")

    .then((res) => res.json())
    .then((data) => {
      setSample(data);
      console.log(data);
    }
    );
  }, []);


  return (
    <div className="home">
    <div class="container bg-dark">
          <div class="row">
           {sample.map((item) => (
            <div class="col-md-4">
            <div class="card">
  
            <div class="card-body">

            <h5 class="card-title">{item.title}</h5>
            <p class="card-text">{item.author}</p>
            <p class="card-text">{item.isbn}</p>
            <p class="card-text">{item.edition}</p>
            <p class="card-text">{item.dimensions}</p>
            <p class="card-text">{item.publisher}</p>
            <p class="card-text">{item.year}</p>
            <Link to={`/book/${item.isbn}`} class="btn btn-primary">View Details</Link>
            </div>
            </div>
            

        </div>
        ))}
      
      </div>
    </div>
  </div>
 
  );
};

export default Home;
