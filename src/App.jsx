
import './App.css'
import Hello from './components/Hello'
import Clock from './components/Clock'
import Slider from './components/Slider'
import DemoEvent from './components/DemoEvent'
import DemoForm from './components/DemoForm'
import FormulaireAjoutPrenom from './components/FormulaireAjoutPrenom'

function App() {

  let prenom = 'Maxence'
  let liste = ['Pizza' , 'Risotto' , 'Magret' , 'Mcdo' , 'Dimitri' , 'Poulet' , 'Pâtes']


  return (
    <>
    <FormulaireAjoutPrenom listePrenomsExistant={['Jean', 'Marie', 'Paul']} />
    </>
  )
}

export default App
