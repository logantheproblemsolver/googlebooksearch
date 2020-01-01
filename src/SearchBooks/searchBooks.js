import React, {Component} from 'react';




class SearchBooks extends Component {

    handleSubmit(e) {
        e.preventDefault();
        this.props.onSearch(this.textInput.value)
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
                <select 
                id="printType" 
                name="printType"
                options={this.props.printType}
                >
                        Select one...
                    </select>
                <label htmlFor="Book Type">Book Type: </label>
                <select 
                id="bookType" 
                name="bookType"
                >
                    Select one...
                </select>
                
                </form>

            </div>
        )
    }
}

export default SearchBooks 