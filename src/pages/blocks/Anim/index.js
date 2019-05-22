import React,{useState} from 'react';
import {CSSTransition, TransitionGroup,} from 'react-transition-group';

import './style.scss';

function TodoList() {
    const [items, setItems] = useState([
        { id: 1, text: 'Buy eggs' },
        { id:2, text: 'Pay bills' },
        { id:3, text: 'Invite friends over' },
        { id: 4, text: 'Fix the TV' },
    ]);
    return (
        <div style={{ marginTop: '2rem' }}>
            <ul style={{ marginBottom: '1rem' }}>
                <TransitionGroup className="todo-list">
                    {items.map(({ id, text }) => (
                        <CSSTransition key={id} timeout={500} classNames="item">
                            <li>
                                <button className="remove-btn" onClick={() =>
                                        setItems(items =>
                                            items.filter(item => item.id !== id)
                                        )
                                    }
                                >
                                    &times;
                                </button>
                                {text}
                            </li>
                        </CSSTransition>
                    ))}
                </TransitionGroup>
            </ul>
            <button
                onClick={() => {
                    const text = prompt('Enter some text');
                    if (text) {
                        setItems(items => [
                            ...items,
                            { text },
                        ]);
                    }
                }}
            >
                Add Item
            </button>
        </div>
    );
}
export default TodoList;

