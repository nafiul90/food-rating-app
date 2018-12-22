import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./component/navbar";
import Form from "./component/form";
import Table from "./component/table";
import Footer from "./component/footer";

class App extends Component {
  state = {
    items: [
      {
        id: 1,
        name: "abc",
        type: "burger",
        resturent: "abc",
        location: "dhaka,banani",
        rate: 5
      },
      {
        id: 2,
        name: "abc",
        type: "burger",
        resturent: "abc",
        location: "dhaka,banani",
        rate: 4
      },
      {
        id: 3,
        name: "abc",
        type: "burger",
        resturent: "abc",
        location: "dhaka,banani",
        rate: 1
      }
    ],

    item: {
      id: null,
      name: "",
      type: "",
      resturent: "",
      location: "",
      rate: 0
    },

    rating: [],
    items_backup: []
  };

  componentWillMount() {
    //localStorage.setItem("my_foods", JSON.stringify(this.state.items));
    var items = localStorage.getItem("my_foods");
    if (items != null)
      this.setState({
        items: JSON.parse(items),
        items_backup: JSON.parse(items)
      });
  }

  takeName = e => {
    var item = { ...this.state.item };
    item.name = e.target.value;
    this.setState({ item });
  };

  takeType = e => {
    var item = { ...this.state.item };
    item.type = e.target.value;
    this.setState({ item });
  };
  takeResturent = e => {
    var item = { ...this.state.item };
    item.resturent = e.target.value;
    this.setState({ item });
  };

  takeLocation = e => {
    var item = { ...this.state.item };
    item.location = e.target.value;
    this.setState({ item });
  };
  addItem = () => {
    var items = [...this.state.items];
    this.state.item.id = this.state.items.length + 1;
    if (
      this.state.item.name === "" ||
      this.state.item.type === "" ||
      this.state.item.resturent === "" ||
      this.state.item.location === ""
    ) {
      return;
    }
    items.push(this.state.item);
    localStorage.setItem("my_foods", JSON.stringify(items));
    this.setState({ items });
  };
  changeRating = obj => {
    console.log(obj);
    var items = this.state.items.map(e => {
      if (obj.id === e.id) {
        e.rate = obj.number;
      }
      return e;
    });

    this.setState({
      items
    });

    var r = this.state.rating[obj.id - 1].map(e => {
      if (e.id <= obj.number) {
        e.status = "star";
      } else {
        e.status = "star_border";
      }
      return e;
    });
    this.state.rating[obj.id - 1] = r;
    console.log(this.state.rating);
    this.setState({ rating: this.state.rating });

    localStorage.setItem("my_foods", JSON.stringify(this.state.items));
  };

  searchAction = e => {
    console.log(e.target.value);
    //this.items_backup = this.state.items;
    var items_backup = this.state.items_backup;
    if (e.target.value === "") {
      this.setState({ items: items_backup });
      return;
    }

    var items = this.state.items_backup.filter(item => {
      if (
        item.name.includes(e.target.value) ||
        item.location.includes(e.target.value) ||
        item.resturent.includes(e.target.value) ||
        item.type.includes(e.target.value)
      ) {
        return item;
      }
    });
    this.setState({ items });
  };

  render() {
    return (
      <div className="#e0e0e0 grey lighten-2">
        <Navbar />
        <div className="underflow" />
        <Form
          item={this.props.item}
          takeName={this.takeName}
          takeType={this.takeType}
          takeResturent={this.takeResturent}
          takeLocation={this.takeLocation}
          addItem={this.addItem}
        />

        <Table
          items={this.state.items}
          changeRating={this.changeRating}
          rating={this.state.rating}
          searchAction={this.searchAction}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
