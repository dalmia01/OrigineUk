import React from 'react';
import Slider from 'react-slick';
import usp1 from '../assets/images/netflix.jpg';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  autoplay: false,
  slidesToScroll: 1
}

export const Home = props => {
    
  const sliderElem = React.useRef(null);
  
  const [collapseval,setCollapseVal] = React.useState('w1');
  
  const collapsableWhy = e => {
    console.log(e);
    setCollapseVal(e);
  }
  
  return (
    <>
    <div className='home section'>
      
      <Slider {...settings} ref={sliderElem}>
        <div className='back_img bg1'>
          
          <div className='back_img_content'>
            <h5>We bring experience with technology.</h5>
            <h3>Thorough. Transparent. Time bound.</h3>
          </div>
        
        </div>
        <div className='back_img bg2'>
        
          <div className='back_img_content'>
            <h5>We make the kind look & sound awesome.</h5>
            <h5>we have all covered.</h5>
            <h3>Content Rocks.</h3>
          </div>
          
        </div>
      </Slider>
      <button className='home_banner_left_arrow home_arrow_btn' onClick={() => {sliderElem.current.slickPrev()}}></button>
      <button className='home_banner_right_arrow home_arrow_btn' onClick={() => {sliderElem.current.slickNext()}}></button>
      
      
      
    </div>
    
    <div className='excellence'>
        
      <div className='content'>
        <span>
          <h4 className='heading'>Excellence Cannot Be Defined, Only Experienced</h4>
          <p className='paragraph'>We thrive to attain and maintain ever better standards to deliver professional services in the world of content.</p>
        </span>
        
        
        <div className='usps'>
        
          <div>
            <div className='image img1'></div>
            <div className='img_content'>
              <b>Experienced</b>
              <p>in Neflix & Amazon Guidelines</p>
            </div>
          </div>
          
          <div>
            <div className='image img2'></div>
            <div className='img_content'>
              <b>Literary</b>
              <p>experts on pannel</p>
            </div>
          </div>
          
          <div>
            <div className='image img3'></div>
            <div className='img_content'>
              <b>Highly</b>
              <p> skilled bi-lingual resources</p>
            </div>
          </div>
          
        </div>
        
        
      </div>
    
    </div>
    
    
    <div className='our_story'>
    
      <div className='content'>
      
        <div className='back_img'></div>
        <div className='img_content'>
          <h5>Our Story</h5>
          <h4>Who We Are</h4>
          <p>Origine is a localization agency founded by some young & dynamic professionals, to provide digital localization services all over the world for the Indian as well as foreign language speakers. Our team members have years of experience in Subtitling and Dubbing.</p>
          <p>A workflow that utilizes QC over every phase of translation to ensure quality work. Using world known software with industry standard software reduce problems while ensuring the ability to provide all known formats.</p>
          <p>Large team of professional translators, lyricists, casting directors, voice-over directors, musical directors, actors, singers, quality control officers and linguists for all services like subtitling broadcast, VOD, synopsis, metadata, text translation (medical, legal, scientific, publications) and website localization.</p>
          <p>Large talented database of males and females of all age groups, prints of voices and types of characters. A working environment that encourages innovation and out of the box problem-solving.</p>
        </div>
        
      </div>
    
    
    </div>
    
    <div className='moto'>
    
    <div className='image'></div>
    
      <div className='content'>
      
      
          
      <span className='img_content'>A team curated to carefully examine every aspect of the services we offer, we believe in delivering an experience to our customers.</span>
      
      <h6>Jessica Pearson</h6>
      
      </div>
    
    </div>
    
    <div className='why_us'>
      <div className='left_card'>
      
        <div className='image'></div>
        <h5>We believe in the power of great experience.</h5>
        <p>We are able to quickly match customer voice expectations with a well maintained & updated database of males and females of all age groups, prints of voices and types of characters. A working environment that encourages innovation and out of the box problem-solving.</p>
      
      </div>
      <div className='right_card'>
      
      <h6>Why Origine UK ?</h6>
      <h4>Creativity is to Think More Effectively</h4>
      
      <div>
        <div className='why_lists' onClick={()=>collapsableWhy('w1')}>
          <b>Our Experience</b>
          {collapseval == 'w1' && <ion-icon name="remove" ></ion-icon>}
          {collapseval != 'w1' && <ion-icon name="add" ></ion-icon>}
        </div>
        {collapseval == 'w1' && <span className='why_content whc1'>ORIGINE UK is a localization agency founded by a bunch of young & dynamic professionals, to provide digital localization services all over the world. Our team members have years of experience in Subtitling and Dubbing.</span>}
      </div>
      
      <div>
        <div className='why_lists' onClick={()=>collapsableWhy('w2')}>
          <b>Our Strategy</b>
          {collapseval == 'w2' && <ion-icon name="remove" ></ion-icon>}
          {collapseval != 'w2' && <ion-icon name="add" ></ion-icon>}
        </div>
        {collapseval == 'w2' && <span className='why_content'>We thrive on a workflow with different stages of QC spread over each phase like translation, adaptation, dubbing and so on to ensure quality output. Using industry standard software reduces problems and ensures the ability to deliver in almost all prevalent formats.</span>}
      </div>
      
      <div>
        <div className='why_lists'onClick={()=>collapsableWhy('w3')}>
          <b>Our Team</b>
          {collapseval == 'w3' && <ion-icon name="remove" ></ion-icon>}
          {collapseval != 'w3' && <ion-icon name="add" ></ion-icon>}
        </div>
        {collapseval == 'w3' && <span  className='why_content'>A large team of professional translators, lyricists, casting directors, voice-over directors, musical directors, actors, singers, quality control officers and linguists for all services like subtitling, broadcast, VOD, synopsis, metadata, text translation (medical, legal, scientific, publications) and website localization helps us to take the challenges head on and deliver consistently well.</span>}
      </div>
      
      </div>
    </div>
    
    </>
  )
}