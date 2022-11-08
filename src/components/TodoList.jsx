import { Loading } from "@components/Loading";
import { TodoItem } from "@components/TodoItem";



import { initialsTodos } from "@actions";
import { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";


const TodoList = () => {
	const todos = useSelector(
		(state) => state.todosData.todos.sort((a, b) => { return b.id - a.id;}),
		shallowEqual
	);
	const loading = useSelector((state) => state.todosUi.loading);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(initialsTodos());
	}, []);
	return (
		<>
			{loading ? (
				<Loading />
			) : (
				<ul className="text-gray-200 text-sm w-full px-10 ml-72">
					{todos.map((todo) => (
						<TodoItem
							key={todo.id}
							todo={todo}
						/>
					))}
				</ul>
			)}
		</>
	);
};

export { TodoList };