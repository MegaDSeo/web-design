import './Nav.css'
import { FaBars } from 'react-icons/fa'
import { Bars } from './Bars'


export default function Nav({imgNav, itemHomeNav, item1Nav, item2Nav, item3Nav, titleSection, paragrafSection, buttonSection1, buttonSection2}){
    return(
        <div className="navbar">
            <nav>
                <img src={imgNav} alt="logo de la pagina" />
                <ul>
                    <li> {itemHomeNav} </li>
                    <li>{item1Nav}</li>
                    <li>{item2Nav}</li>
                    <li>{item3Nav}</li>
                   
                </ul>
                <li className='bars' onClick={Bars}> {<FaBars />} </li>
            </nav>
            <main className="titles-button">
                <div className="cover"></div>
                <h1>{titleSection}</h1>
                <p> {paragrafSection} </p>
               <div className="section-buttons">
                    <button>{buttonSection1}</button>
                    <button>{buttonSection2}</button>
               </div>
            </main>
        </div>
    )
}






