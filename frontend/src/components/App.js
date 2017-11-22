import React from 'react';
import VotingModule from './VotingModule';

import './App.css';

const Header = (props) => {
    return (
        <div className="Header" />
    );
};
  
class App extends React.Component {
    render() {
        return (
            <div className="container">
                <Header />
                <div className="row">
                    <div className="col-2" />
                    <div className="col-8">
                        <VotingModule {...this.props} />
                    </div>
                    <div className="col-2" />
                </div>
            </div>
        );
    }
};

export default App;