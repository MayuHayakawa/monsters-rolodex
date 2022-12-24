// import { Component } from 'react';

import './card.styles.css'

// ***Functional Component way1***
const Card =({ monster }) => {
    const {id, name, email} = monster;

    return (
        <div className='card-container' key={id}>
            <img alt={`monster &{name}`} src={`https://robohash.org/${id}?set=set2?size=180x180`}/>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    )
}


// ***Functional Component way2***
// const Card =({ monster: {id, name, email} }) => (
//     <div className='card-container' key={id}>
//         <img alt={`monster &{name}`} src={`https://robohash.org/${id}?set=set2?size=180x180`}/>
//         <h2>{name}</h2>
//         <p>{email}</p>
//     </div>
// )


// ***Class Component***
// class Card extends Component {
//     render() {
//         const {id, name, email} = this.props.monster;
//         return (
//             <div className='card-container' key={id}>
//             <img alt={`monster &{name}`} src={`https://robohash.org/${id}?set=set2?size=180x180`}/>
//             <h2>{name}</h2>
//             <p>{email}</p>
//         </div>
//         )
//     }
// }

export default Card;