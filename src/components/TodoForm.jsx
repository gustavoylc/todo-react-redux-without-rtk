import { addTodo } from "@actions";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";

const TodoForm = () => {
	const [titleValue, setTitleValue] = useState("");
	const titleRef = useRef(null);
	const dispatch = useDispatch();
	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(addTodo(titleValue));
		setTitleValue("");
	};

	const handleTitleValueChange = () => {
		setTitleValue(titleRef.current.value);
	};
	return (
		<form onSubmit={handleSubmit}>
			<div className="flex flex-col px-10 gap-4">
				<label>
					<h4>Escriba su nuevo TODO</h4>
				</label>
				<textarea
					className="text-gray-400 bg-neutral-800 rounded-md focus:outline-none focus:bg-neutral-700 focus:text-gray-200 p-4 "
					onChange={handleTitleValueChange}
					placeholder="TODO..."
					value={titleValue}
					ref={titleRef}
				/>
				<button className="bg-neutral-800 py-2 rounded-lg hover:bg-neutral-700">
					Crear
				</button>
			</div>
		</form>
	);
};

export { TodoForm };
