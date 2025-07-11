import React, { useState } from "react";
import './Home.css';
import joystick from '../assets/joystick.png';
import rock from '../assets/icons8-hand-50.png';
import paper from '../assets/palm-of-hand.png';
import sissor from '../assets/two.png';
import question from '../assets/question-mark.png';

const Home = () => {
    const [userChoice, setUserChoice] = useState(null);
    const [computerChoice, setComputerChoice] = useState(null);
    const [playerScore, setPlayerScore] = useState(0);
    const [computerScore, setComputerScore] = useState(0);
    const [result, setResult] = useState("")

    
    const play = () => {
        if (userChoice === null) {
            alert("Select your choice!");
            return;
        }
        const choices = ["rock", "paper", "sissor"];
        const randomChoice = choices[Math.floor(Math.random() * 3)];
        setComputerChoice(randomChoice);

        calculateWinner(userChoice, randomChoice);

        setTimeout(() => {
            setUserChoice(null)
            setComputerChoice(null)
        }, 800);
    };

    const calculateWinner = (user, computer) => {
        if (user === computer) {
            setResult("It's a Draw!");
        } else if (
            (user === "rock" && computer === "sissor") ||
            (user === "paper" && computer === "rock") ||
            (user === "sissor" && computer === "paper")
        ) {
            setPlayerScore(prev => prev + 1);
            setResult("You Win!");
        } else {
            setComputerScore(prev => prev + 1);
            setResult("Computer Wins!");
        }
        return;
    };

    return (
        <>
            <div className="main">
                <div className="container">
                    <div className="head">
                        <img src={joystick} alt="joystick" />
                        <p>Rock Paper Scissors</p>
                    </div>

                    <div className="contents">
                        <div className="sub-head">
                            <p>Player: {playerScore}</p>
                            <p>Computer: {computerScore}</p>
                        </div>

                        <div className="center">
                            <div className="player-computer">
                                <div className="player">
                                    <h3>Player</h3>
                                    <img
                                        src={
                                            userChoice === "rock" ? rock :
                                                userChoice === "paper" ? paper :
                                                    userChoice === "sissor" ? sissor :
                                                        question
                                        }
                                        alt="Player choice"
                                    />
                                </div>

                                <p>Vs</p>

                                <div className="computer">
                                    <h3>Computer</h3>
                                    <img
                                        src={
                                            computerChoice === "rock" ? rock :
                                                computerChoice === "paper" ? paper :
                                                    computerChoice === "sissor" ? sissor :
                                                        question
                                        }
                                        alt="Computer choice"
                                    />
                                </div>
                            </div>

                            <div className="icons">
                                <div className="left">
                                    <img onClick={() => setUserChoice("rock")} src={rock} alt="Rock" />
                                    <img onClick={() => setUserChoice("paper")} src={paper} alt="Paper" />
                                    <img onClick={() => setUserChoice("sissor")} src={sissor} alt="Scissors" />
                                </div>
                                {/* <div className="right">
                                    <img src={rock} alt="Rock" />
                                    <img src={paper} alt="Paper" />
                                    <img src={sissor} alt="Scissors" />
                                </div> */}
                            </div>
                        </div>
                    </div>
                    <p style={{ textAlign: "center", width: "100%", fontWeight: "700", fontSize: "25px" }}>{result}</p>
                    <div className="btn">
                        <button onClick={play}>Play Round</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
