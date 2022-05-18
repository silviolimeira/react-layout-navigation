import "./styles.css";
import image from "assets/images/car-red.png";

function CatalogCard() {
  return (
    <>
      <div className="card catalog-card">
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Audi Supra TT</h5>
          <p className="card-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Cupiditate, nisi
          </p>
          <button className="btn btn-primary custom-card-button" type="button">
            COMPRAR
          </button>
        </div>
      </div>
    </>
  );
}

export default CatalogCard;
