import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import './CSS/Home.css';
import Footer from './Footer';

function Home() {
  return (
    <div>
      <Card className='card'>
        <CardContent>
          <Typography variant="h5" component="div">
            Welcome to the College
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Explore our college and discover the opportunities it offers. Whether you're a student, faculty member, or visitor, you'll find a welcoming environment for learning and growth.
          </Typography>
          <Typography variant="body2" color="text.secondary" style={{ marginTop: '16px' }}>
            Our college is known for:
            <ul className='list'>
              <li>High-quality education and research programs</li>
              <li>Experienced faculty members</li>
              <li>State-of-the-art facilities</li>
              <li>Engaging extracurricular activities</li>
            </ul>
          </Typography>
        </CardContent>

        <div className="card-divider"></div> {/* Add space between cards */}

        <Card>
          <CardContent>
            <Typography variant="h5" component="div">
              Academic Programs
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Our college offers a wide range of academic programs to suit your interests and career goals. Whether you're interested in STEM fields, humanities, or arts, we have something for everyone.
            </Typography>
            <Typography variant="body2" color="text.secondary" style={{ marginTop: '16px' }}>
              Explore our programs and find the one that's right for you.
            </Typography>
          </CardContent>
        </Card>

        <div className="card-divider"></div> {/* Add space between cards */}

        <Card>
          <CardContent>
            <Typography variant="h5" component="div">
              Campus Facilities
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Our campus is equipped with state-of-the-art facilities, including modern classrooms, well-equipped labs, a library, sports facilities, and a student center.
            </Typography>
            <Typography variant="body2" color="text.secondary" style={{ marginTop: '16px' }}>
              We provide a conducive environment for both academic and extracurricular activities.
            </Typography>
          </CardContent>
        </Card>

        <div className="card-divider"></div> {/* Add space between cards */}

        <Card>
          <CardContent>
            <Typography variant="h5" component="div">
              Student Life
            </Typography>
            <Typography variant="body2" color="text.secondary">
              At our college, student life is vibrant and diverse. Join clubs, participate in events, and make lasting friendships.
            </Typography>
            <Typography variant="body2" color="text.secondary" style={{ marginTop: '16px' }}>
              We believe in holistic development and encourage students to explore their passions beyond academics.
            </Typography>
          </CardContent>
        </Card>

        <div className="card-divider"></div> {/* Add space between cards */}

        <CardContent>
          <Typography variant="h5" component="div">
            Campus 
          </Typography>
          <div className="image-container">
            <CardMedia
              component="img"
              alt="Sample Image 1"
              height="200"
              src="https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sbGVnZSUyMGNhbXB1c3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
              title="Sample Image 1"
              style={{ marginRight: '16px' }}
            />
            <div style={{ width: '16px' }}></div> {/* Add space */}
            <CardMedia
              component="img"
              alt="Sample Image 2"
              height="200"
              src="https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sbGVnZSUyMGNhbXB1c3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
              title="Sample Image 2"
            />
          </div>
        </CardContent>
      </Card>
      <Footer />
    </div>
  );
}

export default Home;