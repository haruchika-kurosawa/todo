import logo from './logo.svg';
import './App.css';
import { v4 as uuid } from 'uuid';
import {React, useState} from 'react';
import TaskList from './component/TaskList';

const data = {
  "data": [
    {
      "key": uuid(),
      "text": "ダミーダミーダミーダミーダミーダミー",
      "done": false
    },
    {
      "key": uuid(),
      "text": "ダミーダミーダミーダミー",
      "done": true
    },
    {
      "key": uuid(),
      "text": "ダミーダミーダミーダミーダミーダミーダミーダミーダミーダミー",
      "done": false
    },
  ]
}

function App() {
  const [tasks, setTasks] = useState(data.data);

  return (
    <div className="App">
      <TaskList tasks={tasks} />
      <p>test</p>
    </div>
  );
}

export default App;
