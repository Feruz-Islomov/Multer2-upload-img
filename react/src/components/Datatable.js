import React from "react";
import { Link } from "react-router-dom";

const Datatable = ({ data }) => {
  return (
    <div className="Container">
      <div className="names">
        schools
        {data.map((x) => {
          return <h2>{x.name}</h2>;
        })}
        <button>
          <h1>add school</h1>
        </button>
      </div>
      <div className="sums">
        <Link to="/makalatura">makalatura</Link>

        {data.map((x) => {
          return <h2>{x.metalsum}</h2>;
        })}
        <button>
          <h1>add</h1>
        </button>
        <button>
          <h1>edit</h1>
        </button>
      </div>
      <div className="sums">
        <Link to="/metalalom">metalalom</Link>
        {data.map((x) => {
          return <h2>{x.qogoz}</h2>;
        })}
        <button>
          <h1>add</h1>
        </button>
        <button>
          <h1>edit</h1>
        </button>
      </div>
      <div>
        <button>
          <h1>add new Column</h1>
        </button>
      </div>
    </div>
  );
};

export default Datatable;
