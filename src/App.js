import React, { Component } from 'react';
import './App.css';
import DisplayBookSearch from './DisplayBookSearch/displayBookSearch';
import SearchBooks from './SearchBooks/searchBooks';



const APIkey = "AIzaSyBDQna96EQrlN6LgmmB_eGLEx8___VDuSc"

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      search: null,
      books: [],
      "Print Type": "all",
      "Book Type": "all",
    }

  }
  // componentDidMount() {
  //   const url = "https://www.googleapis.com/auth/books"
  //   const params = {
  //     key: {APIkey}
  //   }

  //   fetch(url)
  //     .then(res => {
  //       if(!res.ok) {
  //         throw new Error('Something went wrong, please try again');
  //       }
  //       return res
  //     })
  //     .then(res => res.json())
  //     .then(data => {
  //       this.setState({
  //         books: data,
  //         error: null,
  //       });
  //     })
  //     .catch(err => {
  //       this.setState({
  //         error: err.message,
  //       });
  //     });
  // }

  bookSearch(searchvalue) {
    console.log(searchvalue);
    this.setState({
      search: {searchvalue},
    })
  }


  render() {
    return (
      <div className="App">
        <h1>Google Book Search</h1>
        <SearchBooks
          valueSearch={this.state.search}
          bookSearch={searchvalue => this.bookSearch(searchvalue)}
        />
        <DisplayBookSearch />
      </div>
    );
  }
}

export default App;