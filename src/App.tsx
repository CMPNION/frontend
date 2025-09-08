import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import HomePage from './pages/HomePage/Homepage';
import './index.css'
import Assignmentone from "./pages/Assignment1/Assignment1"


function App() {

  return (
    <>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
          <header className="bg-accent-dark text-main-light py-4 px-6 shadow-md">
        <nav className="flex justify-between items-center">
          <Link
            to="/"
            className="bg-main-light text-accent-dark px-4 py-2 rounded hover:bg-accent-light"
          >
            Home
          </Link>
        </nav>
      </header>
      <Routes>
        <Route path={'/'} element={<HomePage />}/>
        <Route path={'/1'} element={<Assignmentone />} />
      </Routes>
    </BrowserRouter>
    </>
    

  )
}

export default App
