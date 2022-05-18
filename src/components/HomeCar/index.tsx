import "./styles.css";
import image from "assets/images/car-yellow.png";
import { Link } from "react-router-dom";

function HomeCar() {
  return (
    <>
      <div className="card homecar-card">
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">O carro perfeito para você</h5>
          <p className="card-text">
            Conheça nossos carros e dê mais um passo na realização de seu sonho
          </p>
        </div>
      </div>
      <div className="card homecar-card custom-card-fundo">
        <div className="card-body-1">
          <button className="btn btn-primary custom-card-button" type="button">
            <Link to="/catalog">VER CATÁLOGO</Link>
          </button>
          <span className="custom-card-text">Começe agora a navegar</span>
        </div>
      </div>
    </>
  );
}

export default HomeCar;
