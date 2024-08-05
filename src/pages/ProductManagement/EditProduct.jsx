import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const EditProduct = () => {
  const params = useParams(); //Lấy tham số id trên url
  const { id } = params;
  const getProductById = async () => {
    const res = await axios.get(
      `https://apitraining.cybersoft.edu.vn/api/ProductApi/get/${id}`
    );
    console.log(res.data);
  };

  useEffect(() => {
    getProductById();
  }, [id]);

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-header">Edit Product</div>
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="id" className="form-label">
                    ID
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="id"
                    disabled
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input type="text" className="form-control" name="name" />
                </div>
                <div className="mb-3">
                  <label htmlFor="price" className="form-label">
                    Price
                  </label>
                  <input type="text" className="form-control" name="price" />
                </div>
                <div className="mb-3">
                  <label htmlFor="img" className="form-label">
                    Image URL
                  </label>
                  <input type="text" className="form-control" name="img" />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">
                    Description
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="description"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="type" className="form-label">
                    Type
                  </label>
                  <select className="form-control" name="type">
                    <option value={"SONY"}>SONY</option>
                    <option value={"APPLE"}>APPLE</option>
                    <option value={"SAMSUNG"}>SAMSUNG</option>
                    <option value={"XIAOMI"}>XIAOMI</option>
                  </select>
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    name="deleted"
                  />
                  <label className="form-check-label" htmlFor="deleted">
                    Deleted
                  </label>
                </div>
                <button type="submit" className="btn btn-primary">
                  Update
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
