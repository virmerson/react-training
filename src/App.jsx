
import HomePage from './pages/HomePage'
import About from './pages/About'
import ArticlePage from './pages/ArticlePage'
import ArticlesListPage from './pages/ArticlesListPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './NavBar'


function App() {
 
  
  return (

    <BrowserRouter>
        <div className='App' >
         <NavBar/>
          <div id='page-body'>
            <Routes>
              <Route path='/' element={<HomePage/>}/>
              <Route path='/about' element={<About/>} />
              <Route path='/articles/:articleId' element={<ArticlePage/>} />
              <Route path='/articles' element={<ArticlesListPage/>} />
            </Routes>
          </div>
      </div>
    </BrowserRouter>
  )
}

export default App
