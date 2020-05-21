import React from 'react';
import {Link} from 'react-router-dom';

export const Contact = props => {
  return (
    <>
      <section className='contact section'>
        <div className='back_img_content'>
          <h5>Contact Us</h5>
          <h4>Take The Next Step & Reach Out Today.</h4>
        </div>        
      </section>
      <div className='breadcumb-wrapper'>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/contact'>Contact</Link>
        </nav>
      </div>
      
      <div className='contact_wrapper'>
      
        <div class='contact_form_wrapper'>
        
          <b>Connect with us </b>
          <h6>How Can We help ?</h6>
          
          <form>
            
          <label>Full Name</label>
          <input type='text' name='name'/>
          <label>Email</label>
          <input type='text' name='email'/>
          <label>Message</label>
          <textarea name='message'></textarea>
          <input type='submit' value='Send Message' />
          </form>
          
        </div>
        <div class='contact_info_form_wrapper'>
        
        <b>Contact Info</b>
        <h6>Details</h6>
        <span>Address</span>
        <p>88 New Street, Washington DC United States, America</p>
        <span>Phone</span>
        <p>+44-(0) 739 851 6076</p>
        <span>Email</span>
        <p>sales@origineuk.co.uk</p>
          
        </div>
        
      </div>
    </>
  )
}