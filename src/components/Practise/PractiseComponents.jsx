import React, { Component } from "react";
import Carousel from "./Carousel";
import Header from "./Header";
import Product from "./Product";
import Footer from "./Footer";

export default class PractiseComponents extends Component {
  render() {
    return (
      <div>
        <Header />
        <Carousel />
        <div className="container">
          <h3 className="text-center">Product List</h3>
          <div className="row">
            <div className="col-md-4">
              <Product />
            </div>
            <div className="col-md-4">
              <Product />
            </div>
            <div className="col-md-4">
              <Product />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
