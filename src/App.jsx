
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  function incrandom() {
    setCount(count+1)
  }
  function decrandom(){
    setCount(count-1)
  }

  return (
    <>
      {/* here i am trying to make a todo app which have two button inc and dec and one display of value basically state variable */}

      {/*passed as a state variable  because if we use normal let cnt = 0 it wil not display changes*/}
      
      {/*Automatic Re-rendering: When a state variable changes, React automatically triggers a re-render of the component. 
        This ensures that the user interface (UI) reflects the latest state of the component. 
        Normal Variables:
        No Re-rendering: Normal variables are not tied to React’s rendering system. Changes to normal variables do not trigger component re-renders, 
        so the UI will not automatically update to reflect changes in these variables.
        Normal variables are reinitialized every time a component renders. */}

        {/* here we not pass incrandom as () because onClick is aysncronous ad we want these inc and dec functions to be called
        only when they are clicked so if we write () it will skip onclick and still call incrandom function */}



      <h1>{count}</h1>
      <button onClick={incrandom}><h3>increase</h3></button>
      <button onClick={decrandom}><h3>decrease</h3></button>
    </>
  )
}

export default App
