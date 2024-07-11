import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [color, setColor] = useState("steelblue")
  const colors = [
    { id: 1, colorName: 'red' },
    { id: 2, colorName: 'blue' },
    { id: 3, colorName: 'green' },
    { id: 4, colorName: 'tomato', colorCode: '#ff6347' },
    { id: 5, colorName: 'steelblue', colorCode: '#4682b4' },
    { id: 6, colorName: 'greenyellow', colorCode: '#adff2f' },
    { id: 7, colorName: 'hotpink', colorCode: '#ff69b4' },
    { id: 8, colorName: 'blueviolet', colorCode: '#8a2be2' },
    { id: 9, colorName: 'gold', colorCode: '#ffd700' },
    { id: 10, colorName: 'lightseagreen', colorCode: '#20b2aa' }
  ];

  return (
    <>
      <div className={`h-screen w-full text-white`}
        style={{ backgroundColor: color || colorName }}
      // style={{backgroundColor:'red'}}
      >
        <div className='p-4 flex gap-4 justify-center'>
          {colors.map((color) => (
            <ul>
              <li className='border rounded p-2'
                style={{ backgroundColor: color.colorName }}
                onClick={()=> setColor(color.colorName)}
              > {color.colorName} </li>
            </ul>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
