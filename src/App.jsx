import { useState } from 'react'
import Copy from "./assets/icon-copy.svg"
import Arrow from "./assets/icon-arrow-right.svg"



import {numbers,upperCaseLetters ,lowerCaseLetters,specialCharacters  } from './character'


function App() {
  const[password,setPassword]=useState('')
  const [passwordLength,setPasswordLength]=useState(10)
  const [includeUppercase,setIncludeUppercase]=useState(false)
  const [includeLowercase,setIncludeLowercase]=useState(false)
  const [includeNumbers,setIncludeNumbers]=useState(false)
  const [includeSymbols,setIncludeSymbols]=useState(false)
  const [passwordStrength, setPasswordStrength] = useState("");
  const [rectanglesColor, setRectanglesColor] = useState([
    "transparent",
    "transparent",
    "transparent",
    "transparent",
  ]);

  const handleGeneratePassword=()=>{
    let characterList=""
    if(includeLowercase){
      characterList=characterList+lowerCaseLetters;
    }
    if(includeUppercase){
      characterList=characterList+upperCaseLetters
    }
    if(includeNumbers){
      characterList+=numbers
    }
    if(includeSymbols){
      characterList+=specialCharacters
    }
    setPassword(createPassword(characterList));
    determinePasswordStrength();

  }
  const createPassword=(characterList)=>{
      let password=""
      const characterListLength=characterList.length

      for(let i=0;i<passwordLength;i++){
        const characterIndex = Math.random()*characterListLength
        password=password+characterList.charAt(characterIndex)

      }
      return password
  }
  const handleCopyPassword = async () => {
    try {
      await navigator.clipboard.writeText(password);
      console.log('Password copied to clipboard');
    } catch (err) {
      console.error('Failed to copy password: ', err);
    }
  };
  const updateSliderBackground = (value) => {
    const slider = document.getElementById("myRange");
    const percentage = (value / 20) * 100;
    const neonBackground = `linear-gradient(90deg, var(--neon-green) ${percentage}%, var(--very-dark-gray) ${percentage}%)`;
    slider.style.background = neonBackground;
  };
  const determinePasswordStrength = () => {
    const countChecked = [
      includeUppercase,
      includeLowercase,
      includeNumbers,
      includeSymbols,
    ].filter(Boolean).length;
  
    let newColors = ["transparent", "transparent", "transparent", "transparent"];
  
    if (countChecked === 0 || countChecked === 1) {
      setPasswordStrength("TOO WEAK");
      newColors = ["red", "transparent", "transparent", "transparent"];
    } else if (countChecked === 2) {
      setPasswordStrength("WEAK");
      newColors = ["orange", "orange", "transparent", "transparent"];
    } else if (countChecked === 3) {
      setPasswordStrength("MEDIUM");
      newColors = ["yellow", "yellow", "yellow", "transparent"];
    } else {
      setPasswordStrength("STRONG");
      newColors = ["var(--neon-green)", "var(--neon-green)", "var(--neon-green)", "var(--neon-green)"];
    }
  
    setRectanglesColor(newColors);
  };
  

  return (
    <>
    
    <h1>Password Generator</h1>
    <div className="password_container">
      <span className="random_pass">{password}</span>
     <button onClick={handleCopyPassword} > <img src={Copy} alt="copy" /> </button>
    </div>
    <div className="card">
      <div className="slide_container">
        <div className="text_number_container">
          <span className="char">Character Length</span>
          <span className="length_num">{passwordLength}</span> 
         
        </div>
        <input
        defaultValue="10"
        onChange={(e)=>
         { setPasswordLength(e.target.value);
          updateSliderBackground(e.target.value)
         }
        }
          type="range"
          min="0"
          max="20"
          value={passwordLength}
          step="1"
          className="slider-bar"
          id="myRange"
        
        />
      </div>
      <div className="checkbox_container">
        <label>
          <input 
          checked={includeUppercase}  
          onChange={(e)=>setIncludeUppercase(e.target.checked)}
          type="checkbox" name="uppercase" value="uppercase" />
          Include Uppercase Letters
        </label>
       
        <label>
          <input 
          checked={includeLowercase} 
          onChange={(e)=>setIncludeLowercase(e.target.checked)}
          type="checkbox" name="lowercase" value="lowercase" />
          Include Lowercase Letters
        </label>
       
        <label>
          <input 
          checked={includeNumbers} 
          onChange={(e)=>setIncludeNumbers(e.target.checked)}
          type="checkbox" name="numbers" value="numbers" />
          Include Numbers
        </label>
       
        <label>
          <input 
          checked={includeSymbols} 
          onChange={(e)=>setIncludeSymbols(e.target.checked)}
          type="checkbox" name="symbols" value="symbols" />
          Include Symbols
        </label>
      </div>
      <div className="strength_container">
        <span className="strength_text">STRENGTH</span>
        <div className="textNblocks_container">
          <span className="strength_indicator_text">{passwordStrength}</span>
          <div className="blocks">
            <div
              className="rectangle"
              style={{ backgroundColor: rectanglesColor[0] }}
            ></div>
            <div
              className="rectangle"
              style={{ backgroundColor: rectanglesColor[1] }}
            ></div>
            <div
              className="rectangle"
              style={{ backgroundColor: rectanglesColor[2] }}
            ></div>
            <div
              className="rectangle"
              style={{ backgroundColor: rectanglesColor[3] }}
            ></div>
          </div>
        </div>
      </div>
      <button onClick={handleGeneratePassword} className="generate_container">
        <span className="generate_text">GENERATE</span>
        <img src={Arrow} alt="arrow"/>
      </button>
    </div>
  
    
    </>
  )
}

export default App
