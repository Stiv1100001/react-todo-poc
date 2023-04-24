import { ChangeEvent } from "react";
import { ToDo } from "./Card";
import { motion } from 'framer-motion'

interface Props {
    todo: ToDo;
    onDelete: (todo: ToDo) => void
    toggleComplete: (todo: ToDo) => void
}

export function ListItem(props: Props) {

    function onCheck(e: ChangeEvent) {
        props.toggleComplete(props.todo)
    }

    function deleteTodo() {
        props.onDelete(props.todo);
    }

    return (
        <motion.li initial={{opacity: 0.5, scale: 0.5}} animate={{ opacity: 1, scale: 1, }} transition={{ duration: 0.2 }} exit={{ opacity: 0}} className="bg-ctp-peach w-full rounded-md mb-2 py-2 px-2 font-semibold flex items-center">
            <input id="todo-item" type="checkbox" className="rounded-md focus:ring-0 outline-none border-none checked:text-ctp-lavender focus:outline-none-none" checked={props.todo.completed} onChange={onCheck} />
            <label htmlFor="todo-item" className={`ml-4 ${props.todo.completed ? 'line-through' : ''}`}>{props.todo.name}</label>
            <button type="button" className="ml-auto bg-ctp-red px-2 rounded-lg uppercase" onClick={() => deleteTodo()}>delete</button>
        </motion.li>
    )
}
