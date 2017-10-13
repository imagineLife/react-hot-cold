import React from 'react';
import {connect} from 'react-redux';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';

import {guessFromAction, restartGame} from '../actions';

class Game extends React.Component {

    newGame() {
        this.props.dispatch(restartGame());
    }

    guess(guess) {

        this.props.dispatch(guessFromAction(guess));

    }

    render() {
        return (
            <div>
                <Header onNewGame={() => this.newGame()}/>
                <GuessSection feedback={this.props.feedback}
                    onGuess={(guess) => this.guess(guess)} />
                <GuessCount count={this.props.guesses.length} />
                <GuessList guesses={this.props.guesses} />
            </div>
        );
    }
}

Game.defaultProps = {
    guesses: [],
    feedback: 'Make your guess!',
    correctAnswer: Math.floor(Math.random() * 100) + 1,
    showInfoModal: false
}

const mapStateToProps = state => ({
  guesses : state.guesses,
  feedback : state.feedback,
  correctAnswer : state.correctAnswer
});

export default connect(mapStateToProps)(Game);
