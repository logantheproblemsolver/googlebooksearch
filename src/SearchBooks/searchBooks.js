import React, {Component} from 'react';




class SearchBooks extends Component {

    handleChange(c) {
        c.preventDefault();
        this.props.typeOfPrint(this.refs.printSelector.value)

    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.fetchAPI();
        
    }


    render() {

        const printOptions = this.props.printType
                .map((type, i) => <option value={type} key={i}>{type}</option>)



        const bookOptions = this.props.bookType
                .map((price, i) => <option value={price} key={i}>{price}</option>)

        return (
            <div>
                <form onSubmit={e => this.handleSubmit(e)}>
                <label htmlFor="Search">Search: </label>
                <input 
                type="text" 
                name="bookSearch" 
                id="bookSearch" 
                value={this.valueSearch}
                onChange={e => this.props.onSearch(e.target.value)}
                />
                <button
                type="submit" 
                >
                    Submit
                </button>
                <br />
                <label 
                htmlFor="Print Type">Print Type: </label>
                <select 
                id="printType" 
                onChange={(e) => this.handleChange(e)} 
                ref="printSelector" 
                defaultValue="all"
                
                >
                    {printOptions}
                </select>
                
                <label htmlFor="Book Type">Book Type: </label>
                <select 
                id="bookType" 
                name="bookType"
                ref="bookSelector"
                onChange={e => this.typeOfBook(e.target.value)}
                >
                    {bookOptions}
                </select>
                
                </form>

            </div>
        )
    }
}

export default SearchBooks 