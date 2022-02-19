import React from 'react'

// import Custom Components
import Layout from '../containers/common/common-layout'
import AbouSection from '../containers/about/about'
import TestimonialSection from '../containers/about/testimonial'
import SpeakerSection from '../containers/about/speaker'
import CounterSection from '../containers/about/counter'
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