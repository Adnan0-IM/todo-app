import {useState} from 'react'

const InputArea = ({handlebutton}) => {

    const [inputText, setInputText] = useState("");

    const handleChange = (event) => {
      setInputText(event.target.value);
    };
  return (
    <div className="form" onSubmit={(e) => e.preventDefault()}>
    <input onChange={handleChange} value={inputText} type="text" />
    <button onClick={() => { handlebutton(inputText) 
         setInputText("");
    }}>
      <span>Add</span>
    </button>
  </div>
  )
}

export default InputArea