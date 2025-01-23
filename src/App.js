import './App.css';
import NavigationBar from './componen/NavigationBar';
import Intro from './componen/Intro';
import Trending from './componen/Trending';
import './Style/landingPage.css'
import Horor from './componen/Horor';

function App() {
  return (
    <div>
      {/* Intro saction */}
      <div className='myBG'>
      <NavigationBar />
      <Intro />
      </div>
      {/* End Intro Saction */}

      {/* Trending saction */}
      <div className='trending'> 
        <Trending />
      </div>
      {/* End of Trending */}
      
      <div className='horor'>
        <Horor/>
      </div>
    </div>
  )
}

export default App;
