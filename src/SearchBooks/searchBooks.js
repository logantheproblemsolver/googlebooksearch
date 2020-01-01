import React, {Component} from 'react';



class SearchBooks extends Component {

    handleSubmit(e) {
        e.preventDefault();

    }


    render() {
        return (
            <div>
                <form onSubmit={e => this.handleSubmit(e)}>
                <label htmlFor="Search">Search: </label>
                <input 
                type="text" 
                name="bookSearch" 
                id="bookSearch" 
                value={this.valueSearch}
                />
                <button
                type="submit" 
                >
                    Submit
                </button>
                <br />
                <label htmlFor="Print Type">Print Type: </label>
                <select id="printType" name="printType">Select one...</select>
                <label htmlFor="Book Type">Book Type: </label>
                <select id="bookType" name="bookType">Select one...</select>
                </form>
            {/* <div className="searchBooks__searchBar">
                <label htmlFor="Search">Search: </label>
                <input 
                type="text" 
                name="bookSearch" 
                id="bookSearch" 
                value={this.valueSearch}
                onChange={e => this.bookSearch(e.target.value)}

                />
                <button
                type="submit" 
                >
                    Submit
                </button>
            </div>
            <div>
                <label htmlFor="Print Type">Print Type: </label>
                <select id="printType" name="printType">Select one...</select>
                <label htmlFor="Book Type">Book Type: </label>
                <select id="bookType" name="bookType">Select one...</select>
            </div> */}
            </div>
        )
    }
}

export default SearchBooks 