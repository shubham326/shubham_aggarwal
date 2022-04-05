import React from 'react'
import './about.css'
import Me from '../../media/assets/me-about.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'
const About = () => {
  return (
    /*<div>About</div>*/
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about_container'>

        <div className='about_me'>
          <div className='about_me-image'>
            <img src={Me} alt="About" />
          </div>
        </div>

        <div className='about_content'>

          <div className='about_cards'>
            <article className='about_card'>
              <FaAward className='about_icon' />
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>

            <article className='about_card'>
              <FiUsers className='about_icon' />
              <h5>Clients</h5>
              <small>2+ Worldwide</small>
            </article>

            <article className='about_card'>
              <VscFolderLibrary  className='about_icon' />
              <h5>Projects</h5>
              <small>10+</small>
            </article>
          </div>
         

         <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste odio nesciunt distinctio. Recusandae est inventore sed obcaecati neque ratione sunt voluptate dolore ad illo odit magni delectus, molestias dolorem enim quae nisi sit nesciunt. Quibusdam cupiditate ex fuga deleniti molestias maxime culpa sunt aut!</p>
          

          <a href="#contact" className='btn btn-primary'> Let's  Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About