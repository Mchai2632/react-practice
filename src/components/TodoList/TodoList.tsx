import { useState } from "react";
import Container from "../Container";

type Todo = {
  id: number;
  todo: string;
};

export default function TodoList() {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const [todo, setTodo] = useState<Todo>({
    id: new Date().getTime(),
    todo: "",
  });

  /** 新增待辦 */
  const addTodo = () => {
    if (todo.todo == "") {
      alert("cannot empty");
      return;
    }
    setTodoList([...todoList, todo]);
    setTodo({ id: new Date().getTime(), todo: "" });
  };

  /** 刪除待辦 */
  const deleteTodo = (id: number) => {
    const newTodoList = todoList.filter((item) => item.id !== id);
    setTodoList(newTodoList);
  };
  return (
    <Container>
      <h1>TodoList</h1>
      <hr />
      <div>
        <input
          type="text"
          onChange={(e) => {
            setTodo({ ...todo, todo: e.target.value });
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") addTodo();
          }}
          value={todo.todo}
        />
        <button onClick={addTodo}>add</button>

        <ul
          style={{
            marginTop: 10,
          }}
        >
          {todoList.map((item) => {
            return (
              <li key={item.id}>
                <span>{item.todo}</span>
                <button onClick={() => deleteTodo(item.id)}>delete</button>
                {/* <span>{item.id}</span> */}
              </li>
            );
          })}
        </ul>
      </div>
    </Container>
  );
}
