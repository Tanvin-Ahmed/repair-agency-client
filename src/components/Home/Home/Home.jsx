import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import NavBar from '../../Shared/NavBar/NavBar';
import Advertisement from '../Advertisement/Advertisement';
import Banner from '../Banner/Banner';
import Experience from '../Experience/Experience';
import Location from '../Location/Location';
import ProjectChallenges from '../ProjectChallenges/ProjectChallenges';
import RepairDemo from '../RepairDemo/RepairDemo';
import Services from '../Services/Services';
import Team from '../Team/Team';
import Testimonials from '../Testimonials/Testimonials';
import './Home.css';

const Home = () => {
    return (
        <main>
            <NavBar />
            <Banner />
            <RepairDemo />
            <ProjectChallenges />
            <Services />
            <Experience />
            <Team />
            <Advertisement />
            <Testimonials />
            <Location />
            <Footer />
        </main>
    );
};

export default Home;