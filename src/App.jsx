

import './App.css'
import Footer from './Components/Footer'
import Homepage from './Components/Homepage'
import Section from './Components/Section'
import Contact from './Components/contact/Contact'

function App() {


  return (
  
      <div className='App'>
       <section id="Homepage" ><Homepage/></section>
       <Section/>
     <section id="Contact" ><Contact/></section>
         <Footer/>
      </div>
      
    
  )
}

export default App
