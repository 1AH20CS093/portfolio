import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      link: 'https://www.linkedin.com/in/ashu-sharma-99091826a/',
      name: 'Ashu Sharma',
      role: 'Full-Stack Web Developer. JavaScript |  React , Improving open-source projects, one commit at a time.',
      test: 'As a developer and a problem solver, I think Saurabh is a great collaborative partner to have. I met him in  Collge  and since then he has drastically progressed in her understanding of the development process. he always has a professional environment and has good audio and video quality which makes it easier to communicate with him.',
    },
    {
      id: 2,
      link: 'https://www.linkedin.com/in/sharuti-jamwal-784781286/',
      name: 'Sharuti Jamwal',
      role: 'Full-stack developer ',
      test: "It was a pleasure collaborating with Saurabh on different projects. One of the things that I think is special about him is that he never settles, even after completing the projects he finds other resources and strengthens his knowledge. Collaborating with him is easy and comfortable, it's like working with someone you've known for a long period of time.",
    },
    {
      id: 3,
      link: 'https://www.linkedin.com/in/nikhal-singh-664b82221/',
      name: 'Nikhal Singh',
      role: 'Full Stack Developer| Data Analyst | Html&Css | Python.',
      test: 'I worked with Saurabh in the same team and his  communication skills are very strong. His programming skill is one of the bests, given the time frame in the field. He is a good team player.  He will probably fit in most of the companies not only because He\'s a good team worker, but also because he has very good skills and I know he has much more potential to be shown.',
    },
    {
      id: 4,
      link: 'https://www.linkedin.com/in/vaibhavkatre/',
      name: 'Vaibhav Katre',
      role: 'Full-Stack Web Developer. JavaScript | Rails | React | Redux.',
      test: "I mentored Saurabh some months ago, and I can say that he is one of those people that you love to work with. he was always interested in what I was trying to teach him, paying attention and always asking questions if something was not clear. When it comes to professional skills, he is really committed to work, always doing her best and going beyond the requirements of the project he's building.",
    },
    /*
    {
      id: 5,
      link: 'https://www.linkedin.com/in/hamzaalitarar/',
      name: 'Hamza Tarar',
      role: 'Software Developer',
      test: "Throughout all our collaborations, Meri has always conducted herself politely and kindly. She comes across as someone that's always willing to help and puts the team ahead of herself. But beneath this, I see a strength and determination to distinguish herself. She's not only someone I highly recommend but is also someone I greatly respect.",
    },
    {
      id: 6,
      link: 'https://www.linkedin.com/in/rex9/',
      name: 'Htet (Rex) Naing',
      role: 'Full Stack Developer | Mindful Mentor | Cheerful Team Player',
      test: "Meri is really cheerful and supportive person. I know her when she reviewed my resume. Her feedback was so crystal clear and super effective for me. After that, even though she has no responsibility of reviewing my resume again. She helped me patiently when I ask her again and again. Meri is gifted in reviewing the work and giving advice to others. I feel really lucky to have her as the reviewer of my resume.",
    },*/
  ];
  return (
    <section id="testmonials">
      <h5>Feedback from my peers</h5>
      <h2>Testimonials</h2>
      <Swiper 
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        >
        {testimonials.map((test) => (
          <SwiperSlide className="testimonial" key={test.id}>
          <div className="client__avatar">
            <a href={test.link}>
              <BsLinkedin />
            </a>
          </div>
          <h5 className='client__name'>{test.name}</h5>
          <small className="client__review">{test.test}</small>
        </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Testimonials