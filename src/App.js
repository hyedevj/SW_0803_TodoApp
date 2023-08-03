import TodoForm from "./TodoForm.js"
import TodoList from "./TodoList.js"

export default function App({
    $target
}) {
    new TodoForm({
        $target,
        onSubmit: (content) => {
            alert(`${content} 추가 처리!`)
        }
    })
    const todoList = new TodoList({
        $target,
        initialState: DUMMY_DATA,
        onToggle: (id) => {
            alert(`${id} 토글 예정`)
        },
        onRemove: (id) => {
            alert(`${id} 삭제 예정`)
        }
    })
}