// import { Component } from 'react';

import Card from '../card/card.component';
import './card-list.styles.css';

// ***Functional Component***
const CardList = ({ monsters }) => (
    // we don't need return()
    <div className='card-list'>
        {monsters.map((monster) => {
            return <Card monster={monster} />
        })}
    </div>    
)

// ***Class Component***
// class CardList extends Component {
//     render() {
//         // we can use values of other component calls this component by using props
//         const {monsters} = this.props;
//         return (
//             <div className='card-list'>
//                 {monsters.map((monster) => {
//                     return <Card monster={monster}/>
//                 })}
//             </div>
//         )
//     }
// }

export default CardList;