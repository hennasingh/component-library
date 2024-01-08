import Badge from './components/Badge'
import Banner from './components/Banner'
import { IoMdCheckmarkCircle } from 'react-icons/io';
import { IoWarning } from "react-icons/io5";
import { FaTimesCircle } from "react-icons/fa";
import { FaCircleInfo } from "react-icons/fa6";
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
            <div className='div-banner'>
              <IoMdCheckmarkCircle className="success"/>
              <p>Congratulations!</p>
            </div>
              <p className="p-banner text-success">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</p>
          </Banner>
          <Banner variant="success">
            <div className='div-banner'>
              <IoMdCheckmarkCircle className="success"/>
              <p>Congratulations!</p>
              </div>
          </Banner>
          <h2 className="h2-variant-banner">Warning</h2>
          <Banner variant="warning">
            <div className='div-banner'>
              <IoWarning className="warning"/>
              <p>Attention</p>
              </div>
              <p className="p-banner text-warning">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.</p>
          </Banner>
          <Banner variant="warning">
            <div className='div-banner'>
              <IoWarning className="warning"/>
              <p>Attention</p>
              </div>
          </Banner>
          <h2 className="h2-variant-banner">Error</h2>
          <Banner variant="error">
            <div className='div-banner'>
              <FaTimesCircle className="error"/>
              <p>There is a problem with your application</p>
              </div>
              <p className="p-banner text-warning">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.</p>
          </Banner>
          <Banner variant="error">
            <div className='div-banner'>
              <FaTimesCircle className="error"/>
              <p>There is a problem with your application</p>
              </div>
          </Banner>
          <h2 className="h2-variant-banner">Neutral</h2>
          <Banner variant="neutral">
            <div className='div-banner'>
              <FaCircleInfo className="neutral"/>
              <p>Update available</p>
              </div>
              <p className="p-banner text-neutral">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</p>
          </Banner>
          <Banner variant="neutral">
            <div className='div-banner'>
              <FaCircleInfo className="neutral"/>
              <p>Update available</p>
              </div>
          </Banner>
      </section>
    </main>
  )
}

export default App
