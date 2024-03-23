import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
//import { FaAngellist } from 'react-icons/insta'
import { FaInstagramSquare } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/saurabh-kumar-59012725a/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/1AH20CS093" target="_blank" rel="noreferrer" ><FaGithub /></a>
      <a href="https://www.instagram.com/sau_rabh0611/?hl=en" target="_blank" rel="noreferrer" ><FaInstagramSquare /></a>
    </div>
  )
}

export default HeaderSocials