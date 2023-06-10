import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import FeatureCard from './FeatureCard';


const Landingpage = () => {
  const features = [
    {
      title: 'Expense Tracking',
      description: 'Track your expenses and manage your budget with ease.',
      icon: 'fas fa-chart-pie',
    },
    {
      title: 'Goal Setting',
      description: 'Set financial goals and monitor your progress towards achieving them.',
      icon: 'fas fa-bullseye',
    },
    {
      title: 'Asset Management',
      description: 'Track your expenses and manage your budget with ease.',
      icon: 'fas fa-chart-pie',
    }
  ];

  return (
    <>
      <div className="landing-page">
        <div className="hero-section">
          <Container>
            <div className='page-title'>
                <h2>Jipange</h2>
            </div>
            <Row>
              <Col md={6}>
                <h1>Take Control of Your Finances</h1>
                <p>Start managing your personal budget and achieving your financial goals with our powerful web app.</p>
                <Button variant="primary">Get Started</Button>
              </Col>
              <Col md={6}>
                <img src="" alt="Hero" />
              </Col>
            </Row>
          </Container>
        </div>
        <div className="features-section">
          <Container>
            <h2>Key Features</h2>
            <Row>
              {features.map((feature, index) => (
                <Col key={index} md={4}>
                  <FeatureCard feature={feature} />
                </Col>
              ))}
            </Row>
          </Container>
        </div>
        <div className="cta-section">
          <Container>
            <h2>Ready to Get Started?</h2>
            <p>Create your account today and experience the benefits of our personal finance web app.</p>
            <Button onClick={()=>{window.location.pathname = '/login'}} variant="primary">Sign Up</Button>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Landingpage;