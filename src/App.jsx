import Badge from './components/Badge'
import Banner from './components/Banner/Banner'
import BannerTitle from './components/Banner/BannerTitle'
import BannerDescription from './components/Banner/BannerDescription'
import Card from './components/Card/Card'
import CardTitle from './components/Card/CardTitle'
import CardDescription from './components/Card/CardDescription'
import Testimonial from './components/Testimonial/Testimonial'
import TestimonialBody from './components/Testimonial/TestimonialBody'
import Image from './assets/images/testimonialIcon.png'
import { IoCloudUploadOutline } from "react-icons/io5";
import './App.css'

function App() {

  return (
    <main>
      <h1>Badges</h1>
      <section className='section-squares'>
        <h2>Square</h2>
        <Badge style="square" variant="gray"/>
        <Badge style="square" variant="red" />
        <Badge style="square" variant="yellow" />
        <Badge style="square" variant="green" />
        <Badge style="square" variant="blue" />
        <Badge style="square" variant="indigo" />
        <Badge style="square" variant="purple" />
        <Badge style="square" variant="pink" />
      </section>
      <section className='section-pills'>
        <h2>Pill</h2>
        <Badge style="pill" variant="gray"/>
        <Badge style="pill" variant="red" />
        <Badge style="pill" variant="yellow" />
        <Badge style="pill" variant="green" />
        <Badge style="pill" variant="blue" />
        <Badge style="pill" variant="indigo" />
        <Badge style="pill" variant="purple" />
        <Badge style="pill" variant="pink" />
      </section>

      <h1>Banners</h1>
      <section className="section-banners">
        <h1></h1>
        <h2 className="h2-banner">MULTI LINE</h2>
        <h2 className='h2-banner'>SINGLE LINE</h2>
        <h2 className="h2-variant-banner">Success</h2>
          <Banner variant="success">
              <BannerTitle>Congratulations!</BannerTitle>
              <BannerDescription variant='success'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</BannerDescription>
          </Banner>
          <Banner variant="success">
             <BannerTitle>Congratulations!</BannerTitle>
          </Banner>
          <h2 className="h2-variant-banner">Warning</h2>
          <Banner variant="warning">
            <BannerTitle>Attention</BannerTitle>
              <BannerDescription variant='warning'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.</BannerDescription>
          </Banner>
          <Banner variant="warning">
            <BannerTitle>Attention</BannerTitle>
          </Banner>
          <h2 className="h2-variant-banner">Error</h2>
          <Banner variant="error">
            <BannerTitle>There is a problem with your application</BannerTitle>
              <BannerDescription variant='error'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.</BannerDescription>
          </Banner>
          <Banner variant="error">
             <BannerTitle>There is a problem with your application</BannerTitle>
          </Banner>
          <h2 className="h2-variant-banner">Neutral</h2>
          <Banner variant="neutral">
              <BannerTitle>Update available</BannerTitle>
              <BannerDescription variant='neutral'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</BannerDescription>
          </Banner>
          <Banner variant="neutral">
          <BannerTitle>Update available</BannerTitle>
          </Banner>
      </section>
      <h1>Cards</h1>
      <section className='section-cards'>
        <Card icon={ <IoCloudUploadOutline />  }>
          <CardTitle>Easy Deployment</CardTitle>
          <CardDescription>Ac tincident sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis</CardDescription>
        </Card>
      </section>
      <h1>Testimonials</h1>
      <section className='section-testimonials'>
          <Testimonial>
            <TestimonialBody icon={Image}>
                <p className='p-testimonial-icon'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla
                vitae laoreet augue.Amet feugiat est integer dolor auctor adipiscing nunc urna,sit.
                </p>
                <p>
                  May Andersons <span>Workcation, CTO</span>
                </p>
            </TestimonialBody>
          </Testimonial>

      </section>
    </main>
  )
}

export default App
