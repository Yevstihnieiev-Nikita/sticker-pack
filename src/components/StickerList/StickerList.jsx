import React, { Component } from "react";
import Sticker from "../Sticker/Sticker.jsx";
import { ListWrapper } from "./Stickers.styled.js";

export default class StickerList extends Component {
  render() {
    const { stickers, onSelect } = this.props;
    return (
      <ListWrapper>
        {stickers.map((sticker, index) => (
          <Sticker key={index} sticker={sticker} onClick={onSelect} />
        ))}
      </ListWrapper>
    );
  }
}
