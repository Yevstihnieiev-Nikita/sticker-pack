import React, { Component } from "react";
import { ChoiceWrapper, ChoiceImg } from "./Choice.styled.js";

export default class Choice extends Component {
  render() {
    const { selected } = this.props;
    return (
      <ChoiceWrapper>selected sticker: {selected || "none"}</ChoiceWrapper>
    );
  }
}
