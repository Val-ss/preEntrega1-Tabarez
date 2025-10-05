import "../styles/ItemListContainer.css";

function ItemListContainer({saludo})  {
    return(
        <div className="main">
            <section className="main-content">
                <h2 className="items">{saludo}</h2>
            </section>
        </div>
    );
}


export default ItemListContainer;