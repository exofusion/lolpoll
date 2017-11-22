import React from 'react';
import RiotAPI from '../api.js';

const IconConfirmation = (props) => {
    return (
        <div className="IconConfirmation">
            <img className="img-thumbnail" src={`http://ddragon.leagueoflegends.com/cdn/7.22.1/img/profileicon/${props.summoner_icon}.png`} />
            <br />
            <button type="button" className="btn btn-outline-success">Confirm</button>
        </div>
    );
};

class SummonerNameInput extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            summoner_name: ''
        };
    }

    handleChange(evt) {
        this.setState({ summoner_name: evt.target.value });
    }

    render() {
        return (
            <div className="input-group">
                <input type="text" className="form-control" placeholder="Enter Summoner Name" value={this.state.summoner_name} onChange={this.handleChange.bind(this)} />
                <span className="input-group-btn">
                    <button className="btn btn-secondary" type="button" onClick={() => this.props.onSubmit(this.state.summoner_name)}>Go</button>
                </span>
            </div>
        );
    }
};

const VotingChoiceList = (props) => {
    return (
        <div>
            {Object.entries(props.choices).map(([id, text]) =>
                <button key={id}
                        type="button"
                        className={"btn btn-outline-dark btn-lg btn-block " + (props.selected_choice == id ? "active" : "")}
                        onClick={() => props.setSelectedChoice(id)}>
                    {text}
                </button>)
            }
        </div>
    );
};

class VotingModule extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          selected_choice: null,
          summoner_icon: null
        };
    };

    setSelectedChoice(id) {
        if (id == this.state.selected_choice)
            id = null;

        this.setState({ selected_choice: id });
    }

    setSummonerIcon(summoner_icon) {
        this.setState({ summoner_icon: summoner_icon });
    }

    getSummonerIcon(summoner_name) {
        RiotAPI.getSummonerIcon(summoner_name, this.setSummonerIcon.bind(this))
    }

    render() {
        return (
          <div className="VotingModule">
            <h1>{this.props.question_data.text}</h1>
            <br />
            <div className="row">
                <div className="col-2" />
                <div className="col-8">
                    <VotingChoiceList choices={this.props.question_data.choices}
                                      selected_choice={this.state.selected_choice}
                                      setSelectedChoice={this.setSelectedChoice.bind(this)} />
                    <br />
                    <SummonerNameInput onSubmit={(summoner_name) => this.getSummonerIcon(summoner_name)} />
                    {this.state.summoner_icon && <IconConfirmation summoner_icon={this.state.summoner_icon} />}
                </div>
                <div className="col-2" />
            </div>
          </div>
        );
    }
};

export default VotingModule;