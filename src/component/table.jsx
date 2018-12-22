import React, { Component } from "react";
import Rate from "./rate";
import Search from "./search";

class Table extends Component {
  changeRating = obj => {
    this.props.changeRating(obj);
  };
  render() {
    return (
      <div className="row">
        <div className="col s10 offset-s1 custom-table">
          <Search searchAction={this.props.searchAction} />
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Resturent</th>
                <th>Location</th>
                <th>Rating</th>
              </tr>
            </thead>

            <tbody>
              {this.props.items.map(e => (
                <tr>
                  <td>{e.name}</td>
                  <td>{e.type}</td>
                  <td>{e.resturent}</td>
                  <td>{e.location}</td>
                  <td>
                    {
                      <Rate
                        changeRating={this.changeRating}
                        rating_number={e.rate}
                        id={e.id}
                        rating={this.props.rating}
                      />
                    }
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Table;
