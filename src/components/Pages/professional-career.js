import React from 'react'
import { Link } from 'react-router-dom';
import Footer from '../Footer';
import '../../App.css'
import './professional-career.css';

function Professional_Career() {
    return (<div className='Professional_Career'>
        <div className='container'>
            <div className='column-1 box' id='value-statement'>
                <h1>Professional Career</h1>
                <h3> My Work Philosophy</h3>
                <p>Learning never stops. My professional career is predicated on this mantra. From the moment I stepped through the doors at my first Job after college,
                    I set out to continually grow and improve. I am always seeking the best and most efficient pathway forward. I embrace new methodologies readily. I question
                    norms and old ways, and I am not afraid to speak up when there's a better way. Learning is the way, not knowing.</p>
                <h4>Core Values</h4>
                <ul>
                    <li> <strong>Integrity:</strong> I deliver what I promise.</li>
                    <li><strong>Kindness Always Wins:</strong> Being Kind to others is always the way forward.</li>
                    <li><strong>Work is Impersonal:</strong> I do not take offense to comments made at work. Feedback, solicited or not, is always welcome and valued.</li>
                    {/* <li>Flexibility is Freedom: In-office mandates are a thing of the past. I have proven for the first 3 and a half years of my professional
            career that I deliver responsibly from home. I am most efficient and productive as a remote worker. </li> */}

                </ul>
            </div>
            <div className='column-2 box'>
                <img id='sunrise-profile' src="images/sunrise_side.jpg" alt='sunrise-side.jpg'></img>
            </div>

        </div>
        <div className='column-2 box' id='skills'>
            <h1>Professional Skills</h1>


        </div>
        <Link to="/"></Link>
    </div>

    )
}

export default Professional_Career;