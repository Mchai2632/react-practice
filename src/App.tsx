import Counter from "./components/Counter/Counter";
import TodoList from "./components/TodoList/TodoList";
import ThemeChanger from "./components/ThemeChanger/ThemeChanger";
import CountDownTimer from "./components/CountDownTimer/CountDownTimer";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import "./App.css";
import { useState } from "react";
import Modal from "./components/Modal/Modal";

function App() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <button onClick={() => setIsOpen(true)}>開啟Modal</button>
            <Counter />
            <TodoList />
            <ThemeChanger />
            <CountDownTimer />
            <ImageGallery />
            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <div> 123</div>
            </Modal>
        </div>
    );
}

export default App;
