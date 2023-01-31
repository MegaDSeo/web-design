import './FormPage.css'

export function Page( {titlePage} ){
    return(
        <div className='title-page'>
            <h1> {titlePage} </h1>
        </div>
    )
}


export function Footer({listFooter1, listFooter2, listFooter3, listFooter4, iconFooter1, iconFooter2, iconFooter3, iconFooter4, rightFooter1, rightFooter2}){
    return(
        <footer className='footer'>
            <div className="footer-i-desc">
                <div className="footer-items">
                    <ul>
                        <li> {listFooter1} </li>
                        <li> {listFooter2} </li>
                        <li> {listFooter3} </li>
                        <li> {listFooter4} </li>
                    </ul>
                    <ul>
                        <li className='icon'> {iconFooter1} </li>
                        <li className='icon'> {iconFooter2} </li>
                        <li className='icon'> {iconFooter3} </li>
                        <li className='icon'> {iconFooter4} </li>
                    </ul>
                </div>
                <div className="footer-rights">
                    <p> {rightFooter1} </p>
                    <p> {rightFooter2} </p>
                </div>
            </div>
        </footer>
    )

}