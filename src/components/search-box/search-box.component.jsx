// import { Component } from "react";

import './search-box.styles.css';

// ***Functional Component***
const SearchBox = ({ className, placeholder, onChange}) => (
    <input
        className={`search-box ${this.props.className}`}
        type='search'
        placeholder={this.props.placeholder}
        onChange={this.props.onChangeHandler}
    />
)

// ***Class Component***
// class SearchBox extends Component {
//     render() {
//         return (
//             // we can generalize this component by using props
//             // for that, we need to set props value on component calls this component
//             <input
//             // general classname: search-box, also we can add other class name on component calls this component
//             className={`search-box ${this.props.className}`}
//             type='search'
//             placeholder={this.props.placeholder}
//             onChange={this.props.onChangeHandler}
//           />
//         )
//     }
// }

export default SearchBox;