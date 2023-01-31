import './DesignPage.css'
import {BsCheckCircleFill} from 'react-icons/bs'



export function SectionDescription( {titleMain, paragrafMain, imgMain} ) {
    return(
        <section className='main-section'>
            <div className="section-description">
                <h1> {titleMain} </h1>
                <div className="descrip-about">
                    <p> {paragrafMain} </p>
                    <img src={imgMain} alt="foto de desarrollador" />
                </div>
            </div>
        </section>
    )
}

export function CardsPlans({titleCard,  numberCard, paragrafCard, itemOneCard, itemTwoCard, itemThreeoCard, itemFourCard, itemFiveCard, buttonCard  }){
    return(
        <div className="card-group">
            <div className="cards">
                <h2> {titleCard} </h2>
                <span> {numberCard} </span>
                <p> {paragrafCard} </p>
                <div className="card-list">
                    <ul>
                        <li><span> {<BsCheckCircleFill />} { itemOneCard} </span></li>
                        <li><span> {<BsCheckCircleFill />} {itemTwoCard} </span></li>
                        <li><span> {<BsCheckCircleFill />} {itemThreeoCard} </span></li>
                        <li><span> {<BsCheckCircleFill />} {itemFourCard} </span></li>
                        <li><span> {<BsCheckCircleFill />} {itemFiveCard} </span></li>
                    </ul>
                </div>
                <button> {buttonCard} </button>
            </div>
        </div>
    )
}
