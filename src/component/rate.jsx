import React, { Component } from "react";

class Rate extends Component {
  rating = [];

  componentWillMount() {
    for (var i = 1; i <= 5; i++) {
      if (i <= this.props.rating_number) {
        this.rating.push({ id: i, status: "star" });
      } else this.rating.push({ id: i, status: "star_border" });
    }
    this.props.rating.push(this.rating);
  }
  render() {
    return (
      <div>
        {this.props.rating[this.props.id - 1].map(e => (
          <i
            className="material-icons"
            onClick={() =>
              this.props.changeRating({ number: e.id, id: this.props.id })
            }
            style={{ cursor: "pointer" }}
          >
            {e.status}
          </i>
        ))}
      </div>
    );
  }
}

export default Rate;
