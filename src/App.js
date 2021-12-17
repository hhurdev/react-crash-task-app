import Header from './components/Header'
import Tasks from './components/Tasks';
import { useState } from "react"

// compiles to div root that has div app inside
// if you want
// div root only, use a fragmet <> for classnameapp div

function App() {
  /*what we want to call this state,
  a function to update the state ]
  and finally useState has a default
  that we want to use for this state for our  tasks*/

  const [tasks, setTask] = useState([
    {
      id: 1,
      text: 'Doctors appointment',
      day: 'Feb 5th at 2:30pm',
      reminder: true
    },
    {
      id: 2,
      text: 'Meeting',
      day: 'Feb 6th at 1:30pm',
      reminder: true
    },
    {
      id: 3,
      text: 'Shopping',
      day: 'Feb 5th at 2:30pm',
      reminder: false
    },
  ]); 
  
  /*State is immutable so you can't change it directly by
  tasks.push; you gotta use the function to change state.
  You recreate it and send it down with setTask*/

  const deleteTask = (id) => {
    console.log('delete', id);
  }

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} onDelete={deleteTask}/>
    </div>
  );
}

export default App;
