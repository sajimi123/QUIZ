
import {  Route, Routes } from 'react-router-dom'

import './App.css'
import Home from './pages/Home'
import Game from './pages/Game'
import LeaderBoard from './pages/LeaderBoard'
import PageNotFound from './pages/PageNotFound'
import { ThemeProvider } from '@emotion/react'
import { Box, Button, CssBaseline } from '@mui/material'
import {
  lightTheme,
  darkTheme,
} from "./components/theme";
import { useState } from 'react'
function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
     <ThemeProvider
      theme={darkMode ? darkTheme : lightTheme}
    >
      <CssBaseline />

      

        {/* Dark / Light Mode */}

        <Box
          sx={{
            position: "fixed",
            top: 20,
            right: 20,
            zIndex: 1000,
          }}
        >
          <Button
            variant="contained"
            onClick={() => setDarkMode(!darkMode)}
            sx={{
              borderRadius: 3,
              textTransform: "none",
              boxShadow: 3,

              transition: "0.3s",

              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </Button>
        </Box>

     <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/game' element={<Game/>}/>
        <Route path='/leaderboard' element={<LeaderBoard/>}/>
       
        <Route path='/*' element={<PageNotFound/>}/>
     </Routes>
     
     </ThemeProvider>
    </>
  )
}

export default App
