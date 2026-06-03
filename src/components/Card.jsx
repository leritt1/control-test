import "./Card.css"

function Card({card}) {
    return(
        <div className="card">
            <div className="card-img">
                <img src={card.path_img} alt={card.name} />
            </div>

            <div className="card-info">
                <div className="title-price">
                    <h3>{card.name}</h3>
                    <span>{card.price}</span>
                </div>

                <div className="card-footer">
                    <div className="gram">
                    <span>{card.gram}</span>
                    </div>

                    <button>Buy</button>
                </div>
            </div>
            
        </div>
    )
    
}

export default Card;