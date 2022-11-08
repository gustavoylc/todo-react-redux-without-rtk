import { TodoForm } from "@components/TodoForm";
import { TodoList } from "@components/TodoList";

const Main = () => {
	return (
		<main className="h-full flex mb-16">
			<aside className="fixed">
				<TodoForm />
			</aside>

			<TodoList />
		</main>
	);
};

export { Main };
