import './App.css'
import { Routes, Route } from 'react-router'
import NotePage from './pages/NotePage'
import RootLayout from './layouts/RootLayout'

function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="home" element={<h1>Home</h1>} />
        <Route path="note-page" element={<NotePage />} />
      </Route>
    </Routes>
  )
}

export default App




