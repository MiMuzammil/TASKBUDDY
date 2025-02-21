import React, { useState } from "react";

export default function Taskform() {
  let [task, setTask] = useState("");
  let [priority, setPriority] = useState("Medium");
  let [category, setCategory] = useState("General");
  return (
    <div>
      <input onChange={(e)=> setTask(e.target.value)}></input>
      <h1>{task}</h1>
      <button>Submit</button>
      <div>

      <select onChange={(e)=>setPriority(e.target.value)}>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
        <option value="Low">Low</option>
      </select>

      <select onChange={(e)=>setCategory(e.target.value)}>
        <option value="General">General</option>
        <option value="Work">Work</option>
        <option value="Personal">Personal</option>
      </select>

      </div>

    </div>
  )
}