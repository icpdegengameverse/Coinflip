import React from 'react';
import {Link} from 'react-router-dom';

import './App.css';

const App = () => {
    const [bet, setBet] = React.useState('head');
    const [betSum, setBetSum] = React.useState(0.5)

    const editBet = (bet) => {
        setBet(bet);
    }

    const editBetSum = (bet) => {
        setBetSum(bet);
    }

    return(
        <>
            <header className="header temp">
                <div className="container">
                    <div className="temp__inner">
                        <Link to="/" className="logo">
                            Logo
                        </Link>

                        <button className="button default__button">
                            Connect Wallet
                        </button>
                    </div>
                </div>
            </header>

            <section className="content">
                <div className="container">
                    <div className="content__inner">
                        <div className="content__content">
                            <div className="content__item content__big">
                                <div className="content__coin--inner">
                                    <img src="/assets/img/coin.png" className="content__coin front" alt="Монетка" />
                                    <img src="/assets/img/coin-back.png" className="content__coin back" alt="Монетка" />
                                </div>

                                <div className="content__bet--inner">
                                    <p className="content__bet--title">
                                        For
                                    </p>

                                    <div className="content__bet--wrapper">
                                        <button className={`content__bet--item${betSum === 0.5 ? ' active' : ''}`} onClick={() => editBetSum(0.5)}>
                                            <img src="/assets/img/coin.svg" className="content__bet--icon" alt="Иконка" />
                                            
                                            0.5 ICP
                                        </button>

                                        <button className={`content__bet--item${betSum === 0.1 ? ' active' : ''}`} onClick={() => editBetSum(0.1)}>
                                            <img src="/assets/img/coin.svg" className="content__bet--icon" alt="Иконка" />

                                            0.1 ICP
                                        </button>

                                        <button className={`content__bet--item${betSum === 25 ? ' active' : ''}`} onClick={() => editBetSum(25)}>
                                            <img src="/assets/img/coin.svg" className="content__bet--icon" alt="Иконка" />

                                            25 ICP
                                        </button>

                                        <button className={`content__bet--item${betSum === 0.7 ? ' active' : ''}`} onClick={() => editBetSum(0.7)}>
                                            <img src="/assets/img/coin.svg" className="content__bet--icon" alt="Иконка" />

                                            0.7 ICP
                                        </button>

                                        <button className={`content__bet--item${betSum === 1 ? ' active' : ''}`} onClick={() => editBetSum(1)}>
                                            <img src="/assets/img/coin.svg" className="content__bet--icon" alt="Иконка" />

                                            1 ICP
                                        </button>

                                        <button className={`content__bet--item${betSum === 2 ? ' active' : ''}`} onClick={() => editBetSum(2)}>
                                            <img src="/assets/img/coin.svg" className="content__bet--icon" alt="Иконка" />

                                            2 ICP
                                        </button>
                                    </div>

                                    <button className="button default__button content__bet--button">
                                        Double or nothing
                                    </button>
                                </div>
                            </div>

                            <div className="content__item">
                                <div className="content__choose--inner">
                                    <div className={`content__choose ${bet === 'head' && 'active'}`} onClick={() => editBet('head')}>
                                        <p className="content__choose--title">
                                            Head
                                        </p>

                                        <img src="/assets/img/coin.png" className="content__choose--img" alt="Монетка" />
                                    </div>

                                    <div className={`content__choose ${bet === 'tail' && 'active'}`} onClick={() => editBet('tail')}>
                                        <p className="content__choose--title">
                                            Tail
                                        </p>

                                        <img src="/assets/img/coin-back.png" className="content__choose--img" alt="Монетка" />
                                    </div>
                                </div>
                            </div>

                            <div className="content__item">
                                <p className="content__item--title">
                                    184397 spins
                                </p>

                                <div className="content__item--wrapper">
                                    <div className="content__item--wrapper--item">
                                        <p className="content__item--text">
                                            Heads
                                        </p>

                                        <p className="red content__item--value">
                                            92 187
                                        </p>
                                    </div>

                                    <div className="content__item--wrapper--item">
                                        <p className="content__item--text">
                                            Tails
                                        </p>

                                        <p className="green content__item--value">
                                            92 187
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <p className="title result__title">
                            My games
                        </p>

                        <div className="result__content">
                            <div className="result__item">
                                Time
                            </div>

                            <div className="result__item">
                                Transaction
                            </div>

                            <div className="result__item">
                                Bid
                            </div>

                            <div className="result__item">
                                Result
                            </div>

                            <div className="result__item">
                                
                            </div>

                            <div className="result__item">
                                
                            </div>

                            <div className="result__item">
                                
                            </div>

                            <div className="result__item">
                                
                            </div>

                            <div className="result__item">
                                
                            </div>

                            <div className="result__item">
                                
                            </div>

                            <div className="result__item">
                                
                            </div>

                            <div className="result__item">
                                
                            </div>

                            <div className="result__item">
                                
                            </div>

                            <div className="result__item">
                                
                            </div>

                            <div className="result__item">
                                
                            </div>

                            <div className="result__item">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="footer temp">
                <div className="container">
                    <div className="temp__inner">
                        <Link to="/" className="logo">
                            Logo
                        </Link>

                        <p className="copy">
                            2020 Все права защищены
                        </p>

                        <button className="button default__button">
                            Connect Wallet
                        </button>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default App;