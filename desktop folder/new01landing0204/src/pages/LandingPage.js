import React, { useState } from 'react' 
import jsontext from '../Global.json'
import Navigation from './Navigation'
import Body from './Body'
import Plan from './Plan'
import MiddleFeature from './MiddleFeature'
import Footer from './Footer'
import Youtube from './Youtube'

const LandingPage = () => {
  const [copyAccount, setCoppiedAccount] = useState('')
  return (<>
  <Navigation />
  <Body />
  <Plan />
  <MiddleFeature />
  <Youtube/>
  <Footer />
  </>)
}

export default LandingPage