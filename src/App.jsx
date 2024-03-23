import { useState } from 'react'
import './App.css'
import { ImageProfile } from './components/ImageProfile'
import { Title } from './components/Title'
import moment from 'moment';

function App() {
  const [hide, setHide] = useState(false)

  return (
    <main id="main">
      <div className="leftPort">
        <ImageProfile image="/src/assets/avatar.jpg" />

        <Title title="Thitiporn Kraiwong (Petch)">
          <h3>Position : It support </h3>
        </Title>

        <Title title="Contact">
     
          <p>current date: {moment().format("D MMM YYYY")}</p>
          <p>Date of Birth: {moment("2002/03/03").format("D MMM YYYY")}</p>
          <p style={{ display: hide ? 'none': 'block'}} >
            Tel : +66941147713
          </p>
          <button onClick={() => setHide(!hide)}>
            {hide ? 'Show': 'hide'}
          </button>
          <p>Email : s64122202050@ssru.ac.th</p>
          <p>www.s64122202050.com</p>
        </Title>
    
        <Title title="Education">
          <p>Bachelor of Science in Information Technology (IT)</p>
          <p>Suan Sunandha Rajabhat University</p> 
        </Title>
      </div>

      <div className="rightPort">
        <Title title="Profile">
          <p>New graduates are ready to learn new things all the time.</p>
        </Title>

        <Title title="Experience">
          <p>Install software and hardware equipment.</p>
        </Title>
        
        <Title title="Skills">
          <p>• Design UX/UI.</p>
          <p>• Office365 skill</p>
          <p>• Manage and troubleshoot server and network systems.</p>
        </Title>

        <Title title="Solf Skills">
          <p>• Services mind</p>
          <p>• Strong coordinatio</p>
          <p>• Good relationship</p>
          <p>• Level of leadership skill and interpersonal skills to work effectively with there</p>
          <p>• Microsoft Office</p>
        </Title>
      </div>
    </main>
  )
}

export default App
