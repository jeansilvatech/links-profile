import './App.css'
import Button from './Components/Buttons/Button'
import Footer from './Components/Footer/Footer'
import Title from './Components/Title/Title'
import {LinkedinLogo, InstagramLogo, GithubLogo, Globe} from "@phosphor-icons/react"
function App() {

  return (
    <div className='container'>
      <div className="black"></div>
      <div className="white"></div>
     <Title/>
     <Button href="https://www.linkedin.com/in/jeanpesil" name="LinkedIn" icon={<LinkedinLogo size={32} />}/>
     <Button href="https://github.com/jeansilvatech" name="GitHub" icon={<GithubLogo size={32} />}/>
     <Button href="https://www.instagram.com/jeansilvatech" name="Instagram" icon={<InstagramLogo size={32} />}/>
     <Button href="https://jeansilvatech.netlify.app" name="Portfólio"icon={<Globe size={32} />}/>

     <Footer/>
    </div>
  )
}

export default App
