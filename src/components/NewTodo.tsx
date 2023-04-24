import { ChangeEvent, useState } from "react"

interface Props {
    onSubmit: (todo: string) => void
}

export function NewTodo(props: Props) {
    const [name, setName] = useState<string>("");

    function onType(e: ChangeEvent) {
        e.preventDefault();
        const target = e.target as HTMLInputElement;
        setName(target.value);
    }

    function submit() {
        if (name === "") return;
        props.onSubmit(name);
        setName("");
    }

    function submitOnEnter(e: KeyboardEvent) {
        if (e.key === 'Enter') submit();
    }

    return (
        <div className="w-full flex gap-2 min-h-[2rem] my-2">
            <input value={name} onChange={onType} type="text" placeholder="ToDo" className="rounded-lg px-2 flex-grow" autoComplete="off" name="name" onKeyUp={submitOnEnter}/>
            <button className="bg-ctp-green px-3 rounded-md shadow-lg uppercase font-semibold" onClick={submit}>Add</button>
        </div>
    )
}
