import CatalogCard from "components/CatalogCard";
import CatalogFind from "components/CatalogFind";

function Catalog() {
  return (
    <>
      <CatalogFind />
      <div className="container">
        <div className="row">
          <div key={1} className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <CatalogCard />
          </div>
          <div key={1} className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <CatalogCard />
          </div>
          <div key={1} className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <CatalogCard />
          </div>
          <div key={1} className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <CatalogCard />
          </div>
          <div key={1} className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <CatalogCard />
          </div>
          <div key={1} className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <CatalogCard />
          </div>
        </div>
      </div>
    </>
  );
}

export default Catalog;
