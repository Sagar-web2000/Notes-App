import React, { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [task, setTask] = useState([]);

  const SubmitHandler = (e) => {
    e.preventDefault();

    

    const copyTask = [...task];
    copyTask.push({ title, details });

    setTask(copyTask);
    setTitle("");
    setDetails("");
  };
  const deleteNote = (idx)=>{
    const copyTask = [...task]
    copyTask.splice(idx,1)
    setTask(copyTask)
  }

  return (
    <div className="lg:flex h-screen bg-black text-white">
      {/* Left Side */}
      <form
        onSubmit={SubmitHandler}
        className="p-10 flex items-start gap-5 lg:w-1/2 flex-col"
      >
        <h1 className="font-bold text-3xl">Add Notes</h1>

        <input
          className="font-medium outline-none w-full px-5 py-2 border-2 rounded"
          type="text"
          placeholder="Enter Notes Heading"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          className="font-medium outline-none w-full px-5 py-2 border-2 rounded h-24"
          placeholder="Enter Notes Details"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        />

        <button className="w-full bg-white text-black px-5 py-2 rounded active:scale-95">
          Add Notes
        </button>
      </form>

      {/* Right Side */}
      <div className="p-10 lg:w-1/2 lg:border-l-2">
        <h1 className="text-3xl font-bold">Your Notes</h1>

        <div className="flex flex-wrap gap-5 overflow-auto p-5 h-[90%] no-scrollbar">
          {task.map((elem, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between h-60 w-40 rounded-2xl p-5 bg-cover bg-center text-black shadow-lg"
              style={{
                backgroundImage:
                  "url('https://static.vecteezy.com/system/resources/thumbnails/010/793/873/small/a-lined-note-paper-covered-with-transparent-tape-on-a-yellow-background-with-a-white-checkered-pattern-free-png.png')",
              }}
            >
              <div>
              <h3 className="text-xl font-bold ">
                {elem.title}
              </h3>
              <div className="h-30 w-full overflow-auto no-scrollbar">
              <p className="mt-4  text-gray-700 ">
                {elem.details}
              </p>
              </div>
              </div>
              <button onClick={()=>{
                deleteNote(idx)
              }} className="cursor-pointer active:scale-95 py-1 w-full font-bold bg-red-500 text-white rounded">Delete Note</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;