import { NavbarContainer } from "./components/navbar/NavbarContainer"
import { Hero } from "./components/hero/Hero"

const App = () => {
  return (
    <main className='max-w-full min-h-screen'>
      <NavbarContainer />
      <Hero />
    </main>
  )
}

export default App