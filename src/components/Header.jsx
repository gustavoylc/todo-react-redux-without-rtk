import { Searcher } from "@components/Searcher";

import { useSelector } from "react-redux";

const Header = () => {
	const todosList = useSelector((state) => state.todosData.todos);
	const completedTodos = todosList.filter((todo) => todo.completed).length;
	return (
		<header className="text-center my-4 flex flex-col gap-4">
			<h2>
				Has completado {completedTodos} de {todosList.length} Todos
			</h2>
			<Searcher />
		</header>
	);
};

export { Header };
