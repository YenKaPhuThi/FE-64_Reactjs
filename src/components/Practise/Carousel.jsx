import React, { Component } from "react";

export default class Carousel extends Component {
  render() {
    return (
      <div id="carouselId" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselId" data-slide-to={0} className="active" />
          <li data-target="#carouselId" data-slide-to={1} />
          <li data-target="#carouselId" data-slide-to={2} />
        </ol>
        <div className="carousel-inner" role="listbox">
          <div className="carousel-item active">
            <img
              data-src="holder.js/900x500/auto/#777:#555/text:First slide"
              alt="First slide"
            />
          </div>
          <div className="carousel-item">
            <img
              data-src="holder.js/900x500/auto/#666:#444/text:Second slide"
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              data-src="holder.js/900x500/auto/#666:#444/text:Third slide"
              alt="Third slide"
            />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselId"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselId"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  }
}
