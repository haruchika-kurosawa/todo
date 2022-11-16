import logo from './logo.svg';
import './App.css';
import { v4 as uuid } from 'uuid';
import {React, useState} from 'react';

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
      {
        tasks.map((task) => {
          return (
            <>
              <li>
                <p><span>key: </span><em>{task.key}</em></p>
                <p><span>text: </span><em>{task.text}</em></p>
                <p><span>done: </span><em>{task.done ? '完了' : '未完了'}</em></p>
              </li>
            </>
          );
        })
      }
      <p>test</p>
    </div>
  );
}

export default App;
