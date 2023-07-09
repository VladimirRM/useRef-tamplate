
import './App.css';
import { useRef } from 'react';

function App() {

const nameInput = useRef()
    
function handleSubmit(event ){
      event.preventDefault()
    }


  return (
   
    
    <div className="App">

   <form onSubmit={handleSubmit}>
  <input type="text"  ref={nameInput}/>
   <input type="text" />
   <input type="text" />



      </form>
   
    </div>
  );
}

export default App;
