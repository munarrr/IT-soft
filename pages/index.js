import React, { useEffect } from 'react'
import Head from 'next/head'

// import Custom Components
import Header from '../containers/common/header'
import BannerSection from '../components/banner'
import FeatureSection from '../components/feature'
import BuildSection from '../components/build'
import WorkSection from '../components/work'
import PriceSection from '../components/price'
import TestimonialSection from '../components/testimonial'
import SubscribeSection from '../components/subscribe'
import FaqSection from '../components/faq'
import ClientSection from '../components/client'
import FooterSection from '../components/footer'
import Copyright from '../components/copyright'

const ModernSass = () => {

    useEffect(() => {
        document.body.style.setProperty('--primary', '#fb3b64')
        document.body.style.setProperty('--secondary', '#071828')
        document.body.style.setProperty('--light', '#071828')
        document.body.style.setProperty('--dark', '#fb3b64')
    })

    return (
        <div>
            <Head>
                <title>Modern Sass Layout </title>
            </Head>

            <Header className="saas1"  />

            <BannerSection />

            <FeatureSection />

            <BuildSection />

            <WorkSection />

            <PriceSection />

            <TestimonialSection />

            <SubscribeSection />

            <FaqSection />

            <ClientSection />

            <FooterSection />

            <Copyright />
        </div>
    )
}

export default ModernSass;