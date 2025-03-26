import Counter from "./components/Counter/Counter";
import TodoList from "./components/TodoList/TodoList";
import ThemeChanger from "./components/ThemeChanger/ThemeChanger";
import "./App.css";
import CountDownTimer from "./components/CountDownTimer/CountDownTimer";

function App() {
    return (
        <div>
            <Counter />
            <TodoList />
            <ThemeChanger />
            <CountDownTimer />
        </div>
    );
}

export default App;
