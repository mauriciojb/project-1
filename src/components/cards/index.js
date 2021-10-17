import './cards.css'
//background-image: url(../../img/hallowin.jpg);
const Cards = (props) =>{
    return(
        <>
        <div className='container-titel-cards'>
             <h1 className='titel-cards'>{props.titelCards}</h1>
             </div>
          <div className="cont-cards">
             
            <div className="cards img-1">
                <div className="cards-contents">
                <h1>{props.titel1}</h1>
                <p>{props.p1}</p>
                <button className="btn-card">Saiba +</button>
                </div>
            </div>
            <div className="cards img-2">
                <div className="cards-contents">
                <h1>{props.titel2}</h1>
                <p>{props.p2}</p>
                <button className="btn-card">Saiba +</button>
                </div>
            </div>
            <div className="cards img-3">
                <div className="cards-contents">
                <h1>{props.titel3}</h1>
                <p>{props.p3}</p>
                <button className="btn-card">Saiba +</button>
                </div>
            </div>
            <div className="cards img-4">
                <div className="cards-contents">
                <h1>{props.titel4}</h1>
                <p>{props.p4}</p>
                <button className="btn-card">Saiba +</button>
                </div>
            </div>
            
         </div>
        </>
    )
}
export default Cards;