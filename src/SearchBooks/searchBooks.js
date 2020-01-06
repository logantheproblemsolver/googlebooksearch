import React, {Component} from 'react';




class SearchBooks extends Component {

    handleSubmit(e) {
        e.preventDefault();
        this.props.onSearch(this.textInput.value)
        this.props.typeOfPrint(this.refs.printSelector.value)
        this.props.typeOfBook(this.refs.bookSelector.value)
        
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
                ref={(input) => this.textInput = input}
                />
                <button
                type="submit" 
                >
                    Submit
                </button>
                <br />
                <label 
                htmlFor="Print Type">Print Type: </label>
                <select id="printType" onChange={this.typeOfPrint} ref="printSelector">
                    {printOptions}
                </select>
                
                <label htmlFor="Book Type">Book Type: </label>
                <select 
                id="bookType" 
                name="bookType"
                ref="bookSelector"
                onChange={this.typeOfBook}
                >
                    {bookOptions}
                </select>
                
                </form>

            </div>
        )
    }
}

export default SearchBooks 