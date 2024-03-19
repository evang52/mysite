import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      {/* <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the Adventure newsletter to receive our best vacation deals
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section> */}
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          {/*<div className='footer-link-items'>
              <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Destinations</Link>
            <Link to='/'>Sponsorships</Link>
          </div> */}
        </div> 
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Associated Artists</h2>
            <Link to='https://linktr.ee/spreadloves'>Spreadloves</Link>
            <Link to='https://open.spotify.com/artist/5w5BW6R0zkT7TjUX4ykABO?si=ARFJbJU0QO6W0WDzPiwypw'>Hailey Brown</Link>
            <Link to='https://open.spotify.com/album/72PfNnH38vI1flvn2LJiFr?si=s0n_gfW0SPWPk02NKvQixA'>Rushay</Link>
            {/* <Link to='/'>Agency</Link>
            <Link to='/'>Influencer</Link> */}
          </div>
          <div className='footer-link-items'>
            <h2>Social Media</h2>
            {/* <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link> */}
            <Link to='https://www.linkedin.com/in/evandgrimes/'>Linkedin</Link>
            <Link to='https://www.quora.com/profile/Evan-Grimes-15'>Quora</Link>
            <Link to='https://twitter.com/heavystonelover'>Twitter</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              EG
              <i className='fab fa-typo3' />
            </Link>
          </div>
          <small className='website-rights'>Evan Grimes © 2024</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i className='fab fa-facebook-f' />
            </Link>
            <Link
              className='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </Link>
            <Link
              className='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i className='fab fa-youtube' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i className='fab fa-twitter' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;