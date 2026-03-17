import React, { Component } from "react";
import { StickerWrapper, StickerImg, StickerLabel } from "./Sticker.styled.js";

export default class Sticker extends Component {
  handleClick = () => {
    const { sticker, onClick } = this.props;
    onClick(sticker.label);
  };

  render() {
    const { sticker } = this.props;
    return (
      <StickerWrapper onClick={this.handleClick}>
        <StickerImg src={sticker.img} alt={sticker.label} />
        <StickerLabel>{sticker.label}</StickerLabel>
      </StickerWrapper>
    );
  }
}
