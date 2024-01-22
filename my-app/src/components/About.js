import React from 'react';

const About = () => {
    return (
    <div>
      <p className="content is-medium">Student in the UCF Full Stack Flex bootcamp</p>
      <hr />
      <img className="my-own-picture" src={process.env.PUBLIC_URL + '/img/creator.jpeg'} alt="a smoov criminal"/>
      <p className="content is-italic mt-4">
       Hello, my name is Alvin. I am currently a  student in a full stack web Developer bootcamp. This is my porfolio.
      </p>
      <p className="content">
       Be kind for I'm fairly new to react!
      </p>
    </div>
  );
}

export default About;