import React, {Component} from 'react';

class BookList extends Component {
    render() {
                
        return (
            <div className="BookList">
                <ul>
                    <li>
                        <h2>{this.props.title}</h2>
                    </li>
                    <li>
                        <p>{this.props.author}</p>
                    </li>
                    <li>
                        <p>{this.props.description}</p>
                    </li>
                    <li>
                        <p>{this.props.price}</p>
                    </li>
                    <li>
                        <a href={this.props.link}>Book Link</a>
                    </li>
                </ul>
                <p></p>
            </div>
        )
    }
}

export default BookList