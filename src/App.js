import Navbar from "./Navbar"
import About from "./pages/About"
import Home from "./pages/Home"
import Github from "./pages/Github"



function App() {

  let page 
 
switch (window.location.pathname) {

  default: case "/":
    page = <Home />
    break
  case "/about":
    page = <About />
  break
  case "/github":
    page = <Github />
  break

}

  return ( 
  <> 

    <Navbar />
    <Home/>
  </>
  )
 
}

export default App
