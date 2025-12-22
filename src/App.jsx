import React from 'react'
import notesLogo from './assets/notes-app-symbol.jpg'

const App = () => {

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
  }

  return (
    <div>
      <h1 className="text-7xl font-bold mb-6 text-center">Notes App</h1>
      <form onSubmit={submitHandler} className='flex flex-row gap-30 mb-4 mt-10 justify-center px-10'>
        <div className='flex flex-col gap-4 mb-4 w-[60%] ml-30'>
          <input className='border border-black-600 rounded px-2 py-2 outline-none font-medium' type="text" placeholder="Enter your note Title..." />
          <textarea rows="4" cols="70" className='border border-black-600 outline-none rounded px-2 py-2 font-medium' type="text" placeholder="Description..." />
          <button type="submit" className='bg-black text-white px-4 py-2 rounded cursor-pointer'>Add Note</button>
        </div>
        <img className='h-60 w-60 rotate-y-180 mr-30 mb-10 pb-10' src={notesLogo} alt="notes" />
      </form>

      <div className='flex flex-wrap p-10'>
        <div className='h-32 w-62 bg-blue-200 rounded-2xl '> </div>
      </div>
    </div>
  )
}

export default App
