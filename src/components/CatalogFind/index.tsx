import "./styles.css";

function CatalogFind() {
  return (
    <>
      <div className="card catalog-find">
        <div className="input-group mb-3 card-body">
          <input
            type="text"
            className="form-control"
            placeholder=""
            aria-label=""
            aria-describedby="basic-addon2"
          />
          <button className="btn btn-primary " type="button">
            BUSCAR
          </button>
        </div>
      </div>
    </>
  );
}

export default CatalogFind;
