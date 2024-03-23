import React from 'react';
import IMG1 from '../../assets/resturant.png';
import IMG2 from '../../assets/landing.png';
import IMG3 from '../../assets/imageseacrch.png';
import IMG4 from '../../assets/timer.png';
import IMG5 from '../../assets/news.png';
import IMG6 from '../../assets/math.png';

import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'Resturant Website',
      img: IMG1,
      description:
        'Welcome to Savory Bites, where every meal is a celebration of flavor and tradition. Our restaurant website is your gateway to a culinary journey like no other. With a blend of modern design and traditional charm, we invite you to explore our menu, crafted with passion and expertise to tantalize your taste buds and satisfy your cravings.',
      technologies: 'HTML | CSS | JAVASCRIPT',
      link: 'https://1ah20cs093.github.io/resturant-website.github.io/',
      github: 'https://github.com/1AH20CS093/resturant-website.github.io',
    },
    {
      id: 2,
      title: 'Timer and Stopwatch',
      img: IMG4,
      description:
        'A time description might involve the measurement of time passing, while a stopwatch is a tool used to precisely measure the duration of an event or activity. Time can be described as continuous and ever-flowing, while a stopwatch is a device that can be started, stopped, and reset to measure specific intervals of time with accuracy.',
      technologies: 'HTML|CSS | JAVASCRIPT',
      link: 'https://1ah20cs093.github.io/timer-stopwatch/',
      github: 'https://github.com/1AH20CS093/timer-stopwatch.git',
    },
    {
      id: 3,
      title: 'Landing Page',
      img: IMG2,
      description:'Welcome to Taste Haven, your ultimate destination for culinary exploration and delightful dining experiences. Our restaurant landing page, crafted with React, invites you to embark on a journey of gastronomic delight. Immerse yourself in the tantalizing world of flavors as you discover our diverse menu offerings, ranging from gourmet entrees to mouthwatering desserts.',
      technologies: 'HTML|CSS|JavaScript | REACT',
      link: 'https://foodie-saurabh.yourprojectcode.com/',
      github: 'https://github.com/1AH20CS093/Landing_page.git',
    },
    {
      id: 4,
      title: 'Image Search Engine',
      img: IMG3,
      description:
        'Image Searcher is a user-friendly website designed to help users discover and explore a vast collection of images from various sources. The website provides a simple yet powerful interface where users can enter keywords or phrases to search for images related to their interests. Powered by advanced search algorithms.',
      technologies: 'JavaScript | CSS',
      link: 'https://imagecollectionbysaurabh.netlify.app/',
      github: 'https://github.com/1AH20CS093/image-app.git',
    },
    /*
    {
      id: 5,
      title: 'World News',
      img: IMG5,
      description:
        'Fully responsive interactive website built based on Adobe XD design',
      technologies: 'JavaScript | CSS',
      link: 'https://meri-mg.github.io/Unilab-world-news/',
      github: 'https://github.com/Meri-MG/Unilab-world-news',
    },
    {
      id: 6,
      title: 'Math Resource',
      img: IMG6,
      description:
        'Real-world group project which is still in progress and will provide educational platform for future young developers',
      technologies: 'JavaScript | Scss | Python',
      link: 'https://lukinoo.github.io/math-resource/',
      github: 'https://github.com/lukinoo/math-resource',
    },*/
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Visit Website
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
