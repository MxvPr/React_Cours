
import './App.css'
import './styles/index.scss'
import Hello from './components/Hello'
import Post from './components/Post'
import Clock from './components/Clock'
import Home from './components/home'
import Slider from './components/Slider'
import DemoEvent from './components/DemoEvent'
import DemoForm from './components/DemoForm'
import FormulaireAjoutPrenom from './components/FormulaireAjoutPrenom'
import Calculator from './components/calculatrice'
import { Routes, BrowserRouter , Route} from 'react-router-dom'
import Nav from './components/nav'

function App() {

  let prenom = 'Maxence'
  let liste = ['Pizza' , 'Risotto' , 'Magret' , 'Mcdo' , 'Dimitri' , 'Poulet' , 'Pâtes']


  return (
    <>
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path="/form" element={<DemoForm />} />
      <Route path="/event" element={<DemoEvent />} />
      <Route path="/clock" element={<Clock />} />
      <Route path="/home" element={<Home />} />
      <Route path="/post/:id" element={<Post />} />
      <Route path="*" element={
        <main><p>Page Error 404 !</p></main>
      } />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
