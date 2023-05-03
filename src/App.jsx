import { NavbarContainer } from "./components/navbar/NavbarContainer"
import { Hero } from "./components/hero/Hero"
import { About } from "./components/about/About"
import { Find } from "./components/find/Find"
import { Footer } from "./components/footer/Footer"

const App = () => {
  return (
    <main className='max-w-full min-h-screen'>
      <NavbarContainer />
      <Hero />
      <About />
      <Find />
      <Footer />
    </main>
  )
}

export default App