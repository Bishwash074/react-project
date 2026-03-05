
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


import React, { useState } from 'react'

const App = () => {
  const [title, setTitle] = useState('')
  const [detail, setDetail] = useState("")
  const [task, setTask] = useState([])
  const submitHnadler = (e) => {
    e.preventDefault()
    const copyTask = [...task];

    copyTask.push({ title, detail })
    setTask(copyTask)

    setTitle("")
    setDetail("")

  }
  const deleteNote = (idx) => {
    const copyTask = [...task]

    copyTask.splice(idx, 1)

    setTask(copyTask)

  }
  return (
    <div className='h-screen lg:flex   bg-black text-white'>
      <form
        className='flex lg:w-1/2 gap-4 p-10 flex-col items-start  '
        onSubmit={(e) => {
          submitHnadler(e)
          console.log(title)
        }}
      >
        <h1 className='text-4xl font-bold '>Add Notes</h1>
        {/* first input */}
        <input
          className='px-5 w-full font-medium py-2 border-2 outline-none rounded'
          type="text"
          placeholder='Enter notes Heading'
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
          }}
        />
        {/* detials */}
        <textarea
          type="text"
          className='px-5 font-medium h-32 flex items-start flex-row w-full outline-none py-2 border-2 rounded'
          placeholder='Write Details here'
          value={detail}
          onChange={(e) => {
            setDetail(e.target.value)
          }}
        />
        <button
          className='bg-white active:bg-gray-400 w-full font-medium outline-none text-black  px-5 py-2 rounded'> Add Notes</button>

      </form>

      <div className=' lg:w-1/2 lg:border-l-2 gap-5  p-10'>
        <h1 className='text-3xl font-bold'>Recent Notes</h1>
        <div className='flex flex-wrap items-start justify-items-start h-[90%] gap-5 mt-5 ' >
          {
            task.map((elem, idx) => {
              return <div key={idx} className=" flex justify-between flex-col items-start relative h-52 w-40 bg-cover rounded-xl text-black pt-9 pb-4 px-4 bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]">
                <div>
                  <h1 className='leading-tight text-xl font-bold'>{elem.title}</h1>
                  <p className='mt-4 leading-tight font-medium text-gray-500'>{elem.detail}</p>
                </div>
                <button onClick={() => {
                  deleteNote(idx)
                }}
                  className='w-full cursor-pointer active:scale-95 bg-red-500 py-1 text-xs rounded font-bold text-white'>
                  Delete
                </button>
              </div>
            })
          }


        </div>
      </div>
    </div>
  )
}

export default App