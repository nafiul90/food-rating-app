import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav className="custom-nav">
        <div className="nav-wrapper">
          <a href="#!" className="brand-logo custom-msg">
            <i className="material-icons">fastfood</i>
            <span className="custom-msg">Rate Your Favorite Food</span>
          </a>

          <ul class="right hide-on-med-and-down">
            <li>
              <a href="sass.html">
                <i className="material-icons">search</i>
              </a>
            </li>
            <li>
              <a href="badges.html">
                <i className="material-icons">view_module</i>
              </a>
            </li>
            <li>
              <a href="collapsible.html">
                <i className="material-icons">refresh</i>
              </a>
            </li>
            <li>
              <a href="mobile.html">
                <i className="material-icons">more_vert</i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
