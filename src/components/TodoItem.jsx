const TodoItem = ({ todo }) => {
	return (
		<li className="bg-neutral-800 my-2 p-3 rounded-lg">
			<p className={`${todo.completed && "line-through"}`}>
				{todo.id} - {todo.title}
			</p>
		</li>
	);
};

export { TodoItem };
