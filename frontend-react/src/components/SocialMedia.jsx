import React from 'react';
import {BsTwitter, BsInstagram} from 'react-icons/bs';
import {FaGithub, FaLinkedin} from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
            <a href='https://www.linkedin.com/in/vitali-rzheutski/'>
              <FaLinkedin />
              </a> 
        </div>
        <div>
            <a href='https://github.com/VitaliRzheutski'>
              <FaGithub />
              </a> 
        </div>
        <div>
            <a href='https://www.instagram.com/'>
              <BsInstagram />
              </a> 
        </div>
    </div>
  )
}

export default SocialMedia