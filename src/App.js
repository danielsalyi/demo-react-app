import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

    const [name, setName] = useState('Dave')
    const [count, setCount] = useState(0)

    const handleNameChange = () => {
        const names = ["bob", 'kevin', 'dave']
        const int = Math.floor(Math.random() * 3)
        setName(names[int])
    }

    const handleClick = () => {
        setCount(count + 1)
        console.log("asdasd")
    }

    return (
        <main>
            <p>
                Hello {name} {count}!
            </p>
            <button onClick={handleNameChange}>Change name</button>
            <button onClick={handleClick}>Change number</button>
        </main>
    );
}

export default App;
