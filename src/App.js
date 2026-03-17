import React, { Component } from "react";
import StickerList from "./components/StickerList/StickerList.jsx";
import Choice from "./components/Choice/Choice.jsx";
import stickersData from "./stickers.json";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSticker: null,
    };
  }

  handleSelect = (label) => {
    this.setState({ selectedSticker: label });
  };

  render() {
    return (
      <div>
        <StickerList stickers={stickersData} onSelect={this.handleSelect} />
        <Choice selected={this.state.selectedSticker} />
      </div>
    );
  }
}
