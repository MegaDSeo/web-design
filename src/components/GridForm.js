import './GridForm.css'


export function Grid({titleGrid, img1, img2, img3, img4, img5, img6, img7, img8}) {
    return(
        <div className="section-grid">
            <h2> {titleGrid} </h2>
            <div className="grid-img">
               <div> <img src={img1} alt="" /></div>
               <div> <img src={img2} alt="" /></div>
               <div><img src={img3} alt="" /></div>
               <div><img src={img4} alt="" /></div>
                <div><img src={img5} alt="" /></div>
                <div><img src={img6} alt="" /></div>
                <div><img src={img7} alt="" /></div>
               <div><img src={img8} alt="" /></div>
            </div>
        </div>
    )
}

export function Form({titleForm, labelForm1, labelForm2, labelForm3, labelForm4, placeForm1, placeForm2, placeForm3, buttonForm, imgForm}) {
    return(
        <div className="section-form">
            <h2> {titleForm} </h2>
            <div className="form-img">
                <img src={imgForm} alt="" />
                <form>
                    <div className="imput">
                        <div className='label'><label htmlFor="nombre"> {labelForm1} </label></div>
                        <input type="text" id='nombre' placeholder={placeForm1} />
                    </div>
                    <div className="imput">
                        <div className='label'><label htmlFor="email"> {labelForm2} </label></div>
                        <input type="email" id='email' placeholder={placeForm2} />
                    </div>
                    <div className="input-check imput">
                        <div className='label'><label htmlFor="check"> {labelForm3} </label></div>
                        <div><input type="checkbox" id='check'/> Si, estoy de acuerdo</div>
                    </div>
                    <div className="imput">
                        <div className='label'><label htmlFor="messaje"> {labelForm4} </label></div>
                        <textarea id="messaje" cols="30" rows="3" placeholder={placeForm3}></textarea>
                    </div>
                    <button type='button'> {buttonForm} </button>
                </form>
                
            </div>
        </div>
    )
}