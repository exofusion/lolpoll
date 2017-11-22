import React from 'react';
import ReactDOM from 'react-dom';

import $ from 'jquery';
window.jQuery = $;
window.$ = $;

import bootstrap from 'bootstrap/dist/js/bootstrap';
import App from './components/App';

let question_text = "Who is going to win Worlds?"
let question_choices = {
    0: "TSM",
    1: "SKT",
    2: "C9",
    3: "EDG"
}

let question_data = {
    text: question_text,
    choices: question_choices
}

ReactDOM.render(<App question_data={question_data} />,
                document.getElementById('root'));