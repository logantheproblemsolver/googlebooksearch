import React, { Component } from 'react';
import './App.css';
import DisplayBookSearch from './DisplayBookSearch/displayBookSearch';
import SearchBooks from './SearchBooks/searchBooks';



const APIkey = "AIzaSyBDQna96EQrlN6LgmmB_eGLEx8___VDuSc"



class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      search: "",
      books: [],
      printType: null,
      BookType: null,
    }

  }

    


  bookSearch = (searchvalue) => {
    this.setState({
      search: searchvalue,
    })
  }

  typeOfPrint = (selectedprint) => {
    console.log(selectedprint)
    this.setState({
      PrintType: selectedprint
    })
  }

  typeOfBook = (selectedprice) => {
    this.setState({
      BookType: selectedprice,
    })
  }

  fetchAPI = () => {

    console.log(this.state)
    const url = "https://www.googleapis.com/auth/books/"

    const params = {

      key: APIkey,
      printType: this.state.printType,
      q: this.state.search,
    }
    

    function formatQueryParams(params) {
      const queryItems = Object.keys(params)
          .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
      return queryItems
      .join('&');
    }


    const queryString = formatQueryParams(params)
    const searchURL = url + '?' + queryString;

    fetch(searchURL)
      .then(res => {
        if(!res.ok) {
          throw new Error('Something went wrong, please try again');
        }
        return res
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        this.setState({
          books: data,
          error: null,
        });
      })
      .catch(err => {
        this.setState({
          error: err.message,
        });
      });
  }



  render() {

    const printType = [ "all", "books", "magazine"]

    const bookType = [ "all", "free"]


    return (
      <div className="App">
        <h1>Google Book Search</h1>
        <SearchBooks
          valueSearch={this.state.search}
          onSearch={searchvalue => this.bookSearch(searchvalue)}
          PrintType={this.state.printType}
          printType={printType}
          bookType={bookType}
          typeOfPrint={selectedprint => this.typeOfPrint(selectedprint)}
          typeOfBook={selectedprice => this.typeOfBook(selectedprice)}
          fetchAPI = {this.fetchAPI}

        />
        <DisplayBookSearch 
        
        />
      </div>
    );
  }
}

export default App;