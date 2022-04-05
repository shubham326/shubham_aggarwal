import React from 'react'
import './portfolio.css'
import Img1 from '../../media/assets/portfolio1.jpg'
import Img2 from '../../media/assets/portfolio2.jpg'
import Img3 from '../../media/assets/portfolio3.jpg'
import Img4 from '../../media/assets/portfolio4.jpg'
import Img5 from '../../media/assets/portfolio5.png'
import Img6 from '../../media/assets/portfolio6.jpg'


const data = [
{
  id: 1,
  image: Img1,
  title: 'Resturant Wbesite',
  github: 'https://github.com',
  demo: 'https://github.com'
},

{
  id: 2,
  image: Img2,
  title: 'Resturant Wbesite',
  github: 'https://github.com',
  demo: 'https://github.com'
},

{
  id: 3,
  image: Img3,
  title: 'Resturant Wbesite',
  github: 'https://github.com',
  demo: 'https://github.com'
},

{
  id: 4,
  image: Img4,
  title: 'Resturant Wbesite',
  github: 'https://github.com',
  demo: 'https://github.com'
},

{
  id: 5,
  image: Img5,
  title: 'Resturant Wbesite',
  github: 'https://github.com',
  demo: 'https://github.com'
},

{
  id: 6,
  image: Img6,
  title: 'Resturant Wbesite',
  github: 'https://github.com',
  demo: 'https://github.com'
},
]



const Portfolio = () => {
  return (
    /*<div>Portfolio</div>*/
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Protfolio</h2>

      <div className='container port_cont'>

        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className='port_item'>
                <div className='port_item-image'>
                  <img src={image} alt="portfolio" />
                </div>
                <h3>{title}</h3>
                <div className="port_item-cta">
                  <a href={github} className='btn btn-primary' target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio


