import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    
    <div className="header__socials">

        <a href="https://www.linkedin.com/in/ankith-shetty-1babb924b/" target="_blank" rel='noreferrer'><BsLinkedin/></a>
        <a href="https://github.com/ankithshetty17" target="_blank" rel='noreferrer'><BsGithub/></a>
        <a href="https://www.instagram.com/aankii_th?igsh=dWp4ejdqcHUweGQ1" target="_blank" rel='noreferrer'><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocials