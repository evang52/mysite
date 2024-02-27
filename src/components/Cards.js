import React from 'react'
import CardItem from './CardItem'
import './Cards.css';
function Cards() {
    return (
        <div className='cards'>
            <h1>Featured Writing</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <div className='cards__items'>
                        <CardItem
                         src="images/hands-1.jpg"
                         text="3 Ways to Foster Comfortable, Safe Conflict Resolution with Your Partner"
                         label="Relationship Wisdom"
                         path='https://typeshare.co/egrimes52/posts/3-ways-to-foster-comfortable-safe-conflict-resolution-with-your-partner-d48jo'
                         />
                        <CardItem
                         src="images/NOLS-1.jpg"
                         text="Stumbling into Inner Peace In the Wyoming Backcountry"
                         label="Grit"
                         path='/services'
                         />
                         <CardItem
                         src="images/cold-1.jpg"
                         text="A Love letter to Cold"
                         label="Discipline Writing"
                         path='https://typeshare.co/egrimes52/posts/a-love-letter-to-cold'
                         /> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards;