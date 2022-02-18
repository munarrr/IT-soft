import React from 'react'

// import Custom Components
import Layout from '../containers/common/common-layout'
import AbouSection from './page/about-us/about'
import TestimonialSection from './page/about-us/testimonial'
import SpeakerSection from './page/about-us/speaker'
import CounterSection from './page/about-us/counter'
import Faq from './layouts/sections/modern-sass/faq'

const AboutUs = () => (
    <Layout pathList={['pages', 'about us']} pathTitle="about us">
        <AbouSection />

        <TestimonialSection />

        <SpeakerSection />

        <CounterSection />

        <Faq />
        
    </Layout>
);
    
    
export default AboutUs;