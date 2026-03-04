
//function
// import React from 'react'

// const App = () => {
//   function inputChanging(){
//     console.log('User is changing')
//   }
//   return (
//     <div>
//       <input onChange={(elem)=>{inputChanging(elem.target.value)}} type="text" placeholder='Name'/>
//     </div>
//   )
// }

// export default App




//useState
// const App = () => {
//   const [num, setNum] = useState(0)
//   const inceasefunction=()=>{

//     setNum(num+1)
//   }
//   const decreaseNum=()=>{
//     setNum(num-1)
//   }
//   const JumpBy5num=()=>{
//     setNum(num+5)
//   }
//   return (
//     <div>
//       <h1>{num}</h1>
//       <button onClick={inceasefunction}>Increase</button>
//       <button onClick={decreaseNum}> Decrease</button>
//       <button onClick={JumpBy5num}>Jump by 5</button>
//     </div>
//   )
// }

// export default App

// update in object 
// import React, { useState } from 'react'

// const App = () => {
//   const [num, setNum] = useState({ user: 'Bishwas', age: 20 })
//   const btnClicked = () => {
//     const newNum = { ...num }
//     newNum.user = "Aman"
//     newNum.age = 30
//     setNum(newNum)
//     //setNum(prev=>({...prev,age:50}))
//   }
//   return (
//     <div>
//       <h1>{num.user} ,{num.age}</h1>
//       <button onClick={btnClicked}> click</button>
//     </div>
//   )
// }

// export default App



// form handling
// import React from 'react'

// const App = () => {
//   const [title, setTitle] = useState("")
//   const submitHanlde=(e)=>{
//   e.preventDefault()
//   console.log('form submitted')
//   setTitle("")
// }
//   return (
//     <div>
//       <form action="" onSubmit={(e)=>{
//         submitHanlde(e)
//       }}>
//         <input type="text " placeholder='Enter your name'
//         value={title}
//         onChange={(e)=>{
//           setTitle(e.target.value())
//         }} />
//       <button>Sumbit</button>
//       </form>
//     </div>
//   )
// }

// export default App