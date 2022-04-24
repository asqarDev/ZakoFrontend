import React, { Component } from "react";
import "./indexHome.css";
export default class Olcha extends Component {
  render() {
    return (
      <>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container">
            <a class="navbar-brand" href="#">
              Hidden brand
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo01"
              aria-controls="navbarTogglerDemo01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Link
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link disabled">Disabled</a>
                </li>
              </ul>
              <form class="d-flex">
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <select
                  class="form-select form-select-sm"
                  aria-label=".form-select-sm example"
                >
                  <option selected>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </form>
            </div>
          </div>
        </nav>

        <div className="container-fluid">
          <div
            id="carouselExampleControls"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  style={{ width: "400px" }}
                  src="https://olcha.uz/image/60x50/category/3OqvliYxYnrZoZKX7ZSuIyAPCC3C4lp11u45G04T8RbYWan6GDrMBB0gwre1.png"
                  class="d-block "
                  alt="img"
                />
              </div>
              <div class="carousel-item">
                <img
                  style={{ width: "400px" }}
                  src="https://olcha.uz/image/60x50/category/3OqvliYxYnrZoZKX7ZSuIyAPCC3C4lp11u45G04T8RbYWan6GDrMBB0gwre1.png"
                  class="d-block "
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  style={{ width: "400px" }}
                  src="https://olcha.uz/image/60x50/category/3OqvliYxYnrZoZKX7ZSuIyAPCC3C4lp11u45G04T8RbYWan6GDrMBB0gwre1.png"
                  class="d-block "
                  alt="..."
                />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <img src="https://olcha.uz/image/60x50/category/3OqvliYxYnrZoZKX7ZSuIyAPCC3C4lp11u45G04T8RbYWan6GDrMBB0gwre1.png" />
            </div>
            <div className="col-lg-4">
              <img src="https://olcha.uz/image/60x50/category/3OqvliYxYnrZoZKX7ZSuIyAPCC3C4lp11u45G04T8RbYWan6GDrMBB0gwre1.png" />
            </div>
            <div className="col-lg-4">
              <img src="https://olcha.uz/image/60x50/category/3OqvliYxYnrZoZKX7ZSuIyAPCC3C4lp11u45G04T8RbYWan6GDrMBB0gwre1.png" />
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <div className="card w-100 h-100 mycardolcha">
                <div className="card-header">
                  <img src="https://olcha.uz/image/60x50/category/3OqvliYxYnrZoZKX7ZSuIyAPCC3C4lp11u45G04T8RbYWan6GDrMBB0gwre1.png" />
                </div>
                <div className="card-body">
                  <p>lorem12 </p>
                </div>
                <div className="card-footer text-center d-flex justify-content-center">
                  <button className="btn btn-outline-danger d-block">
                    Kirish
                  </button>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card w-100 h-100">
                <div className="card-header">
                  <img src="https://olcha.uz/image/60x50/category/3OqvliYxYnrZoZKX7ZSuIyAPCC3C4lp11u45G04T8RbYWan6GDrMBB0gwre1.png" />
                </div>
                <div className="card-body">
                  <p>jhj</p>
                </div>
                <div className="card-footer">
                  <button className="btn btn-outline-danger d-block">
                    Kirish
                  </button>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card w-100 h-100">
                <div className="card-header">
                  <img src="https://olcha.uz/image/60x50/category/3OqvliYxYnrZoZKX7ZSuIyAPCC3C4lp11u45G04T8RbYWan6GDrMBB0gwre1.png" />
                </div>
                <div className="card-body">
                  <p>lorem12 </p>
                </div>
                <div className="card-footer">
                  <button className="btn btn-outline-danger d-block">
                    Kirish
                  </button>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card w-100 h-100">
                <div className="card-header">
                  <img src="https://olcha.uz/image/60x50/category/3OqvliYxYnrZoZKX7ZSuIyAPCC3C4lp11u45G04T8RbYWan6GDrMBB0gwre1.png" />
                </div>
                <div className="card-body">
                  <p>lorem12 </p>
                </div>
                <div className="card-footer">
                  <button className="btn btn-outline-danger d-block">
                    Kirish
                  </button>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card w-100 h-100">
                <div className="card-header">
                  <img src="https://olcha.uz/image/60x50/category/3OqvliYxYnrZoZKX7ZSuIyAPCC3C4lp11u45G04T8RbYWan6GDrMBB0gwre1.png" />
                </div>
                <div className="card-body">
                  <p>lorem12 </p>
                </div>
                <div className="card-footer">
                  <p>jhdfgjsd</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="card">
                <div className="mydiv">
                  <div>
                    <img
                      style={{ width: "50px" }}
                      src="https://olcha.uz/image/60x50/category/3OqvliYxYnrZoZKX7ZSuIyAPCC3C4lp11u45G04T8RbYWan6GDrMBB0gwre1.png"
                    />
                    <p>Apple</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
