import { NavbarContainer } from "./components/navbar/NavbarContainer"
import { Hero } from "./components/hero/Hero"
import { About } from "./components/about/About"
import { Find } from "./components/find/Find"

const App = () => {
  return (
    <main className='max-w-full min-h-screen'>
      <NavbarContainer />
      <Hero />
      <About />
      <Find />
    </main>
  )
}

export default App