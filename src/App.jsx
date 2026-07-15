import Welcome from "./components/Welcome"
import About from "./components/About"
import Home from "./components/Home"
import "./App.css"
import { BrowserRouter, Link, Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
<BrowserRouter>
<nav>
  <Link to="/gh-live-react/">Welcome</Link> |&nbsp;
<Link to="/gh-live-react/about">About</Link> |&nbsp;
<Link to="/gh-live-react/home">Home</Link>
</nav>
<Routes>
  <Route path="gh-live-react/" element={<Welcome/>}> 
    <Route path="gh-live-react/about" element={<About/>}/>
    <Route path="gh-live-react/home" element={<Home/>}/>
  </Route>
</Routes>
</BrowserRouter>
    </>
  )
}

export default App