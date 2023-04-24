import { useState } from "react";
import { NewTodo } from "./NewTodo";
import { ListItem } from "./ListItem";
import { nanoid } from "nanoid"

export interface ToDo {
    id: string;
    name: string;
    completed: boolean;
    created_at: number
}

export function Card() {

    const [todos, setTodos] = useState<Array<ToDo>>([])

    function onNewTodo(todo: string) {
        setTodos(_todos => {

            return [..._todos, {
                id: nanoid(),
                name: todo,
                completed: false,
                created_at: Date.now(),
            }].sort((a: ToDo, b: ToDo) => a.created_at - b.created_at);
        });
    }

    function toggleComplete(todo: ToDo) {
        todo.completed = !todo.completed;
        deleteTodo(todo)
        setTodos(_todos => {
            return [..._todos, todo].sort((a: ToDo, b: ToDo) => a.id.localeCompare(b.id));
        });
    }

    function deleteTodo(todo: ToDo) {
        setTodos(_todos => {
            return _todos.filter(_todo => {
                return _todo.id !== todo.id;
            })
        });
    }

    return (
        <div className="w-[50vw] h-[70vh] bg-white bg-opacity-50 flex flex-col items-center rounded-lg backdrop-blur-md drop-shadow-lg p-2 lg:px-20">
            <h1 className="text-4xl font-bold text-ctp-flamingo">ToDo</h1>
            <NewTodo onSubmit={onNewTodo} />
            <ul className="flex flex-col items-start w-full overflow-auto scrollbar-hide">
                {
                    todos.map(todo => <ListItem todo={todo} key={todo.id} onDelete={deleteTodo} toggleComplete={toggleComplete} />)
                }
            </ul>
        </div>
    )
}
