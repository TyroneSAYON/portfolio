import Navigation from './components/Navigation'
import Landing from './pages/Landing'
import Skills from './pages/Skills'
import Stories from './pages/Stories'
import Contact from './pages/Contact'
import './App.css'

function App() {
  return (
    <div className="App">
      <Navigation />
      <main>
        <Landing />
        <Skills />
        <Stories />
        <Contact />
      </main>
    </div>
  )
}

export default App