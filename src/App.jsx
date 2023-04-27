import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
 

  return (
    <>
    <body>
    <h1>Password Generator</h1>
    <div className="password_container">
      <span className="random_pass">rarsAnd4363</span>
      <img src="../public/icon-copy.svg" alt="copy" />
    </div>
    <div className="card">
      <div className="slide_container">
        <div className="text_number_container">
          <span className="char">Character Length</span>
          <span className="length_num">10</span>
        </div>
        <input
          type="range"
          min="0"
          max="20"
          value="10"
          step="1"
          className="slider-bar"
          id="myRange"
        />
      </div>
      <div className="checkbox_container">
        <label>
          <input type="checkbox" name="uppercase" value="uppercase" />
          Include Uppercase Letters
        </label>
       
        <label>
          <input type="checkbox" name="lowercase" value="lowercase" />
          Include Lowercase Letters
        </label>
       
        <label>
          <input type="checkbox" name="numbers" value="numbers" />
          Include Numbers
        </label>
       
        <label>
          <input type="checkbox" name="symbols" value="symbols" />
          Include Symbols
        </label>
      </div>
      <div className="strength_container">
        <span className="strength_text">STRENGTH</span>
        <div className="textNblocks_container">
          <span className="strength_indicator_text">MEDIUM</span>
          <div className="blocks"></div>
        </div>
      </div>
      <div className="generate_container">
        <span className="generate_text">GENERATE</span>
        <img src="../public/icon-arrow-right.svg" alt="arrow"/>
      </div>
    </div>
  </body>
    
    </>
  )
}

export default App
