import react from "react";
import styled from "styled-components";
import { Component } from "react";

const StickerDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
`;

export class Sticker extends Component {
  render() {
    console.log(this.props);

    return (
      <StickerDiv>
        <img src={this.props.stickerData.img} alt="Coding" />
        <h2>{this.props.stickerData.label}</h2>
      </StickerDiv>
    );
  }
}
