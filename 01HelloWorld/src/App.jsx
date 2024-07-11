// import './App.css'
// import HelloWorld from './HelloWorld'

// through arrow function 

// const  HelloWorld = ()=>{
//   return (
//       <h2> hi from HelloWord component</h2>
//   )
// }

// through normal function

function HelloWorld () {
  return (
      <h2> hi from HelloWord component from same file</h2>
  )
}

function App() {

  return (
    <>
      <HelloWorld/>
    </>
  )
}

export default App
