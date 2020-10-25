import './App.css';
import customTheme from './customTheme'
import Header from './components/Header'
import colors from './components/colors'


// import Chakra
import React from "react";
import { ThemeProvider } from "@chakra-ui/core";
import { Box } from "@chakra-ui/core";

// Use at the root of your app


function App() {

  return (
    <ThemeProvider className="App" theme={customTheme} >
      <Box >
        <Header >header</Header>
          <Box>
            <Box 
              bg={colors.brandMiddle}
              width= '150px'>
                Hello
            </Box>

          </Box>
      </Box>
    </ThemeProvider>
  );
}


export default App;
