import React from 'react';
import ReactDOM from 'react-dom';
import foods from './foods';
import {choice, remove} from './helpers';

const decision = choice(foods);
const foodsLeft = remove(foods, decision);



class App extends React.Component {
    render() {
        return (
            <div>
                <p>I'd like one {decision}, please.</p>
                <p>Here you go: {decision}</p>
                <p>Delicious! May I have another?"</p>
                <p>I'm sorry, we're all out. We have {foodsLeft.length} ({foodsLeft}) left.</p>
                <p></p>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("root"));