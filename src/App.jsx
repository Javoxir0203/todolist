import './App.css'
import Todo from './components/todo';
import Todolist from './components/todolist';
import React from 'react';

function App() {
  const [input, setinput] = React.useState('');
	const [todos, settodos] = React.useState([]);
	const [editTodo, seteditTodo] = React.useState(null);
  return (
		<>
			<div className=' mx-auto  w=full h-screen bg-blue-950 items-center justify-center pt-80 '>
				<div className='wrapper w-80  bg-red-950 border  rounded-3xl shadow-2xl  py-4 px-3 ml-96 '>
					<div>
						<Todo className='input_img' input={input} setinput={setinput} todos={todos} settodos={settodos} editTodo={editTodo} seteditTodo={seteditTodo} />

						<div>
							<Todolist todos={todos} settodos={settodos} seteditTodo={seteditTodo} />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default App
