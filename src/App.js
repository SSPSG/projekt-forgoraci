import './App.css'
import React from 'react'
import Recenze  from './Recenze.js'
import articles from './Articles'
import filmNames from './FilmNames'
import filmLinks from './FilmLinks'
import images from './Images'
import ratings from './Ratings.js'
import ids from './id.js'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useRef } from 'react';
import { useState } from 'react';
import ReactDOM from "react-dom/client";
import { end } from '@popperjs/core'

function App() { 
  // Konstruktor
  let reviewsArray = []
  function Review (rating, filmName, article, image, filmLink, id) {
    this.rating = rating
    this.filmName = filmName
    this.article = article
    this.image = image
    this.filmLink = filmLink
    this.id = id
  }

  for (let i = 0; i <= 2079; i++) {
    const review = new Review(ratings[i], filmNames[i], articles[i], images[i], filmLinks[i-1], ids[i])
    reviewsArray.push(review)
  }

  const sectionRef = useRef(null);
  const Scroll = () => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  }}
  
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Počet položek na stránce

  const nextPage = () => {
    setCurrentPage(currentPage + 1); 
    Scroll();
  }
  const prevPage = () => {
    setCurrentPage(currentPage - 1) 
    Scroll()
  }

  const firstPage = () => {
    setCurrentPage(1)
    Scroll()
  }
  const lastPage = () => {
    setCurrentPage(reviewsArray.length / itemsPerPage )
    Scroll()
  }

  const [currentData, setCurrentData] = useState(reviewsArray)
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    const inputText = event.target.value;
    setInputValue(inputText);
  }

  function Search() {
    let filtered
    for (let i = 0; i < currentData.length; i++) {
      let filmName = currentData[i].filmName
      let bool = filmName.includes(inputValue.toString)
      if (bool === true) {
        filtered.push(currentData[i])
      }
    }
    return filtered
  }

  function confirm() {
    setInputValue(document.querySelector("#confirm").textContent)
    let searchResult = Search()
    console.log(searchResult)
    setCurrentData(searchResult)
  }

  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;

  if(currentData.length > 10){
    var currentItems = currentData.slice(firstIndex, lastIndex)
  } else {
    var currentItems = {filmName: "Nebyl nalezen výsledek", id:2080, image:" ", rating:" ", article:" ", filmLink:" "}
  }
  
  /*const currentItems = {filmName: "Nebyl nalezen výsledek", id:2080, image:" ", rating:" ", article:" ", filmLink:" "}*/
  
  return (
    <div className="App">
      <section  ref={sectionRef} >
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div id='navbar' className="container-fluid">
            <a className="navbar-brand" onClick={firstPage} href="#">Verbal Library</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <form className="d-flex" role="search">
                <input onChange={handleInputChange} id='search' className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                <button id='confirm' onClick={confirm} className="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>
      </section>

      <h1>Verbalovy Recenze:</h1>
      <br></br>
      <div id='container'>
        <ul>
          {currentItems.map((item) => (
            <li key={item.id.toString()}>
              <Recenze href = {item.filmLink} title = {item.filmName} image = {item.image} article = {item.article} rating = {item.rating}/>
            </li>
          ))}
        </ul>
      </div>

      <div className='page-changer'>
        <button onClick={firstPage} className='first-last'>První</button>
        <button className='btn-primary' onClick={prevPage} disabled={currentPage === 1}>Zpět</button>
        <div className='current-page'>{currentPage}</div>
        <button className='btn-primary' onClick={nextPage} disabled={lastIndex >= reviewsArray.length}>Další</button>
        <button onClick={lastPage} className='first-last'>Poslední</button>
      </div>
    </div>
  );
}

export default App;