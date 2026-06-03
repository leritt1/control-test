import "./Grid.css"
import Card from "./Card"
import data from "../data.json/"

function Grid() {
    return (
        <section className="grid">
            {data.map((item) => (
                <Card key={item.id} card={item}  />
            ) )}
        </section>
    )
}

export default Grid