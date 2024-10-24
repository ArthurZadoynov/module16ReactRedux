import './todo.css'
import { useState } from "react";
import { useDispatch, useSelector} from "react-redux";
import { removeTodo, addTodo, toggleTodo } from "../../features/todoSlice";
import { FILTER_ALL, FILTER_COMPLETED, FILTER_INCOMPLETE } from '../../redux/actionTypes';

const Todo = () => {
    const [inputValue, setInputValue] = useState('')

    const todos = useSelector((state) => state.todos)
    const {filterValue} = useSelector((state) => state.activeFilter)

    const dispatch = useDispatch()

    const handleAddTodo = () => {
        if (inputValue.trim()) {
            dispatch(addTodo({id:Date.now(), text: inputValue, completed: false, }))
            setInputValue('')
        }
    }

    const handleRemoveTodo = (id) => {
        dispatch(removeTodo(id))
    }

    const ToggleTodo = (id) => {
        dispatch(toggleTodo(id))
    }

    return (
        <div>
            <div className="todo">
                <input 
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    type="text"
                    placeholder="Введите задачу"
                />
                <button onClick={handleAddTodo}>Добавить</button>
            </div>
            <ul>
                {todos.filter(todo => {
                    if (filterValue === FILTER_ALL){
                        return true;
                    } else if (filterValue === FILTER_COMPLETED) {
                        return todo.completed === true;
                    } else if (filterValue === FILTER_INCOMPLETE) {
                        return todo.completed === false
                    }
                }).map((todo) => (
                    <li className={todo.completed ? 'completed' : ''} key={todo.id}
                    onClick={() => ToggleTodo(todo.id)}
                    >
                    <p><abbr data-title="Нажми на меня для выполнения задачи">{todo.text}</abbr></p>
                    <div>
                        <button onClick={() => handleRemoveTodo(todo.id)}>Удалить</button>
                    </div>
                    </li>
                ))}
            </ul>
            
        </div>
    )

}

export default Todo