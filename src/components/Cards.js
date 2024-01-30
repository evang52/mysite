import React from 'react'
import CardItem from './CardItem'
import './Cards.css';
function Cards() {
    return (
        <div className='cards'>
            <h1>The trips I've been on, and what I've learned from them!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <div className='cards__items'>
                        <CardItem
                         src="images/img-9.jpg"
                         text="My first big solo trip to France"
                         label="Adventure"
                         path='/services'
                         />
                        <CardItem
                         src="images/img-2.jpg"
                         text="My NOLS Backpacking experience- Leadership Trial by Fire"
                         label="Grit"
                         path='/services'
                         />
                         <CardItem
                         src="images/img-3.jpg"
                         text="Being in a Local Metal band"
                         label="Hobbies"
                         path='/services'
                         /> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards;