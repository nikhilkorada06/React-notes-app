import {useState} from 'react'
import notesLogo from './assets/notes-app-symbol.jpg';
import pinNotes from './assets/background-for-pinned-notes.png';
import { X } from 'lucide-react';

const App = () => {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [todo, setTodo] = useState(JSON.parse(localStorage.getItem("todo")) || []);

  const submitHandler = (e, title, description) => {
    e.preventDefault();
    setTitle("");
    setDescription("");

    console.log("Form Submitted");

    setTodo([...todo, {title, description}]);
    localStorage.setItem("todo", JSON.stringify([...todo, {title, description}]));
  }

  const deleteHandler = (index) => {
    const newTodo = todo.filter((_, idx) => idx !== index);
    setTodo(newTodo);
    localStorage.setItem("todo", JSON.stringify(newTodo));
  }

  return (
    <>
      <div className='flex flex-row items-center justify-center mt-10'>
        <h1 className="text-5xl font-bold mb-6 flex items-center pt-4">Notes App</h1>
        <img className='h-20 w-20 ml-3 rotate-y-180' src={notesLogo} alt="notes" />
      </div>

      <form 
            onSubmit={(e) => {submitHandler(e, title, description)}} 
            className='flex flex-row gap-30 mb-4 mt-10 justify-center px-10'
      >

        <div className='flex flex-col gap-4 mb-4 w-80 '>

          <input 
                className='border border-black-600 rounded px-2 py-2 outline-none font-bold' 
                type="text" 
                placeholder="Enter your note Title..." 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
          />
          <textarea 
                rows="4" 
                cols="70" 
                type="text" 
                placeholder="Description..."
                className='border border-black-600 outline-none rounded px-2 py-2 font-semibold'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
          />
          <button 
                type="submit" 
                className='bg-black text-white active:bg-gray-100 px-4 py-2 rounded cursor-pointer'
          >   
                Add Note
          </button>

        </div>
      </form>

      <div className='flex flex-wrap p-10 gap-3 justify-center'>

        {todo.map((item, idx) => (

          <div 
              key={idx} 
              className='relative sm:h-62 sm:w-72 object-fit bg-cover rounded-2xl p-1 h-30 w-35'
              style={{backgroundImage: `url(${pinNotes})`}}
          >
              <button 
                      onClick={() => deleteHandler(idx)} 
                      className='active:scale-90 absolute sm:top-2 sm:right-9 top-0.8 right-4 bg-red-500 text-white rounded-full sm:p-1 p-0 hover:bg-red-700 cursor-pointer'
              >
                <X size={16} />
              </button>

              <h2 
                  className='text-xl font-bold mb-2 flex justify-center text-black pt-7 mr-5'
              >
                    {item.title} 
              </h2>

              <p className='text-md text-gray-600 pl-4 pt-2'>{item.description}</p>
          </div>

        ))}
        
      </div>
    </>
  )
}

export default App