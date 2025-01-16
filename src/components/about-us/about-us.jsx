import React from 'react';
import { Flex, Card } from 'antd';
import { FacebookOutlined, InstagramOutlined, LinkedinOutlined, MailOutlined } from '@ant-design/icons';

const AboutUs = () => {
  const containerStyle = {
    padding: '20px',
    maxWidth: '100%',
    margin: '0 auto',
    fontFamily: 'Arial, sans-serif',
    color: '#282c34',
    textAlign: 'center',
  };

  const headingStyle = {
    fontSize: '32px',
    marginBottom: '20px',
  };

  const paragraphStyle = {
    fontSize: '18px',
    lineHeight: '1.6',
    marginBottom: '20px',
  };

  const socialLinksStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
    marginBottom: '30px',
  };

  return (
    <Card style={containerStyle}>
      <Flex gap={20}>
        <Card>
          <h1 style={headingStyle}>About Me</h1>
          <p style={paragraphStyle}>
            Hi, I’m Ram Kishor, a passionate software developer specializing in JavaScript and React.
            I love creating web applications that solve real-world problems and bring ideas to life.
            With expertise in modern web development techniques and tools, I strive to deliver
            intuitive and high-performing user experiences.
          </p>
          <p style={paragraphStyle}>
            I’m constantly learning and experimenting with new technologies to stay at the forefront
            of the tech industry. When I’m not coding, I enjoy exploring new places, reading tech blogs,
            and sharing my knowledge with the community.
          </p>

          <div style={socialLinksStyle}>
            <a href="mailto:iamrkishoryadav@example.com" >
              <MailOutlined />
            </a>
            <a href="https://www.linkedin.com/in/ram-kishor-47734a206/" target="_blank" rel="noopener noreferrer" >
              <LinkedinOutlined />
            </a>
            <a href="https://www.instagram.com/ram.kishor_yadav?igsh=MW9wN2Rmb3M4YjV0cQ==" target="_blank" rel="noopener noreferrer" >
              <InstagramOutlined />
            </a>
            <a href="https://www.facebook.com/ram.kishor.946954" target="_blank" rel="noopener noreferrer" >
              <FacebookOutlined />
            </a>
          </div>
        </Card>
        <Card>
          <Contact />
        </Card>
      </Flex>
    </Card>
  );
};


const Contact = () => {
  const containerStyle = {
    padding: '20px',
    maxWidth: '800px',
    margin: '0 auto',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
  };

  const headingStyle = {
    fontSize: '28px',
    color: '#282c34',
    marginBottom: '20px',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    marginBottom: '15px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontSize: '16px',
  };

  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '16px',
    color: 'white',
    backgroundColor: '#61dafb',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  const buttonHoverStyle = {
    backgroundColor: '#21a1f1',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Contact Us</h1>
      <form>
        <input type="text" placeholder="Your Name" style={inputStyle} required />
        <input type="email" placeholder="Your Email" style={inputStyle} required />
        <textarea
          placeholder="Your Message"
          style={{ ...inputStyle, height: '120px', resize: 'none' }}
          required
        ></textarea>
        <button
          type="submit"
          style={buttonStyle}
          onMouseOver={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
          onMouseOut={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default AboutUs;


