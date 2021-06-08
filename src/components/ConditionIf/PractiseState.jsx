import React, { Component } from "react";
import RedCar from "../../assets/img/car/products/red-car.jpg";
import SilverCar from "../../assets/img/car/products/silver-car.jpg";
import SteelCar from "../../assets/img/car/products/steel-car.jpg";
import BlackCar from "../../assets/img/car/products/black-car.jpg";

export default class PractiseState extends Component {
  state = {
    imgSrc: RedCar,
  };

  handleChangeImg = (img) => {
    return () => {
      this.setState({
        imgSrc: img,
      });
    };
  };

  changeImage = (img) => {
    return () => {
      this.setState({
        imgSrc: img,
      });
    };
  };

  render() {
    return (
      <div className="row">
        <div className="col-6">
          <img src={this.state.imgSrc} className="img-fluid" alt="img car" />
        </div>
        <div className="col-6">
          <button
            type="button"
            onClick={this.handleChangeImg(RedCar)}
            className="btn btn-danger mx-2"
          >
            Red color
          </button>
          <button
            type="button"
            onClick={this.handleChangeImg(SilverCar)}
            className="btn btn-secondary mx-2"
          >
            Silver color
          </button>
          <button
            type="button"
            onClick={this.handleChangeImg(SteelCar)}
            className="btn btn-light mx-2"
          >
            Steel color
          </button>
          <button
            type="button"
            onClick={this.handleChangeImg(BlackCar)}
            className="btn btn-dark mx-2"
          >
            Black color
          </button>
        </div>
      </div>
    );
  }
}
