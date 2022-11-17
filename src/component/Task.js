import {React} from 'react';

export default function Task({task}) {
	return (
		<>
		<li>
		  <p><span>key: </span><em>{task.key}</em></p>
		  <p><span>text: </span><em>{task.text}</em></p>
		  <p><span>done: </span><em>{task.done ? '完了' : '未完了'}</em></p>
		</li>
	  </>
	);
}