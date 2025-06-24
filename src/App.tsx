
// import Basic from './components/Effect&ref';
// import Form from './components/form';
// import Tanstackform from './components/Tanstackform';
// import Tabs from './components/tabs';

import Userlist from "./components/quering/Userlist";



// import Usecontext from "./routes/Propdrilling";
// import Propdrilling from "./components/Propdrilling";


function App() {
// 	const [todos, setTodos] = useState<TodoItem[]>([]);
// 	const [tasks, setTasks] = useState<string[]>([]);

// 	const handleSubmit = (values: { task: string }) => {
// 		setTasks((prev) => [...prev, values.task]);
// 		form.reset(); // Only resets the form, not the tasks array
// 	};

// 	useEffect(() => {
// 		const stored = localStorage.getItem("todos");
// 		if (stored) setTodos(JSON.parse(stored));
// 	}, []);
// 	useEffect(() => {
// 		const stored = localStorage.getItem("todos");
// 		if (stored) setTodos(JSON.parse(stored) as TodoItem[]);
// 	}, []);
	
// const form = useForm({
// 	defaultValues: { task: "" },
// 	onSubmit: ({ value }) => {
// 		const newTodo: TodoItem = {
// 			id: crypto.randomUUID(),
// 			task: value.task,
// 			completed: false,
// 		};
// 		setTodos((prev) => [...prev, newTodo]);
// 		form.reset();
// 	},
// });

  return (
		<>
			{/* <form onSubmit={handleSubmit}>
				<form.Field
					name="task"
					children={(field) => (
						<input
							value={field.state.value}
							onChange={(e) => field.handleChange(e.target.value)}
							placeholder="Enter task"
						/>
					)}
				/>
				<button type="submit">Add</button>
			</form>
			<ul>
				{todos.map((todo) => (
					<li key={todo.id}>
						<input
							type="checkbox"
							checked={todo.completed}
							onChange={() => {
								setTodos((prev) =>
									prev.map((t) =>
										t.id === todo.id ? { ...t, completed: !t.completed } : t
									)
								);
							}}
						/>
						{todo.task}
					</li>
				))}
			</ul> */}
			<Userlist/>

			{/* <Tabs /> */}
			{/* <Form/> */}
			{/* <Basic/> */}
			{/* <Tanstackform/> */}
			{/* <Propdrilling /> */}
			{/* <Usecontext /> */}
		</>
	);
}

export default App
