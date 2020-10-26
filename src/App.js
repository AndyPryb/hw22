import React from 'react';
import './App.css';
import friend1 from "./Images/friend1.jpg"
import friend2 from "./Images/friend2.jpg"
import friend3 from "./Images/friend3.jpg"
import friend4 from "./Images/friend4.jpg"
import friend5 from "./Images/friend5.jpg"
import friend6 from "./Images/friend6.jpg"
import friend7 from "./Images/friend7.jpg"
import friend8 from "./Images/friend8.jpg"
import friend9 from "./Images/friend9.jpg"
import luke from "./Images/main.jpg"
function App() {
    return (
        <div>
            <header>
                <nav className="fixed-top ml-4 mt-2">
                    <ul className="nav">
                        <li className="nav-item btn btn-danger mx-1">Home</li>
                        <li className="nav-item btn btn-danger mx-1">About me</li>
                        <li className="nav-item btn btn-danger mx-1">Star wars</li>
                        <li className="nav-item btn btn-danger mx-1">Contact</li>
                    </ul>
                </nav>
                <h1 className="text-center py-3">Luke Skywalker</h1>
            </header>
            <main>
                <section className="float-left w-25 mr-2 row">
                    <img className="hero col" src={luke} alt="Luke Skywalker"></img>
                </section>
                <section className="float-right w-50 row no-gutters border">
                    <h2 className="col-12 text-center">Dream Team</h2>
                    <img className="col-4 p-1" src={friend1} alt="friend"></img>
                    <img className="col-4 p-1" src={friend2} alt="friend"></img>
                    <img className="col-4 p-1" src={friend3} alt="friend"></img>
                    <img className="col-4 p-1" src={friend4} alt="friend"></img>
                    <img className="col-4 p-1" src={friend5} alt="friend"></img>
                    <img className="col-4 p-1" src={friend6} alt="friend"></img>
                    <img className="col-4 p-1 bottomLeft" src={friend7} alt="friend"></img>
                    <img className="col-4 p-1" src={friend8} alt="friend"></img>
                    <img className="col-4 p-1 bottomRight" src={friend9}
                         alt="friend"></img>
                </section>
                <p className="farGalaxy">It is a period of civil war.
                    Rebel spaceships, striking
                    from a hidden base, have won
                    their first victory against
                    the evil Galactic Empire.

                    During the battle, Rebel
                    spies managed to steal secret
                    plans to the Empire's
                    ultimate weapon, the DEATH
                    STAR, an armored space
                    station with enough power
                    to destroy an entire planet.

                    Pursued by the Empire's
                    sinister agents, Princess
                    Leia races home aboard her
                    starship, custodian of the
                    stolen plans that can save her
                    people and restore
                    freedom to the galaxy....</p>

            </main>
            <footer className="row align-items-center no-gutters">
                <div className="btn btn-danger col-2 offset-2 text-center">
                    Send me an <span className="email text-uppercase small">email</span>
                </div>
            </footer>
        </div>
    );
}

export default App;
