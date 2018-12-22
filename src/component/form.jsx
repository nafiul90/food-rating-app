import React, { Component } from "react";

class Form extends Component {
  render() {
    return (
      <div class="row custom-form">
        <div className="col s10 offset-s1 custom-div">
          <h5 className="add-food-title">Add Food Info</h5>
          <hr />
          <form>
            <div class="input-field col s6">
              <input
                id="last_name"
                type="text"
                class="validate"
                onChange={e => this.props.takeName(e)}
                required
              />
              <label for="last_name">Name</label>
            </div>

            <div class="input-field col s6">
              <input
                id="last_name"
                type="text"
                class="validate"
                onChange={e => this.props.takeType(e)}
                required
              />
              <label for="last_name">Type</label>
            </div>
            <div class="input-field col s6">
              <input
                id="last_name"
                type="text"
                class="validate"
                onChange={e => this.props.takeResturent(e)}
                required
              />
              <label for="last_name">Resturent</label>
            </div>
            <div class="input-field col s6">
              <input
                id="last_name"
                type="text"
                class="validate"
                onChange={e => this.props.takeLocation(e)}
                required
              />
              <label for="last_name">Location</label>
            </div>
            <div class="input-field col s6">
              <button
                class="btn-floating btn-large waves-effect waves-light red"
                onClick={this.props.addItem}
              >
                <i class="material-icons">add</i>
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Form;
