import react from "react";
import { Sticker } from "./Sticker.jsx";
import data from "../stickers.json";

export default function StickerList() {
  return (
    <ul className="sticker_list">
      {data.map((sticker) => {
        return <Sticker stickerData={sticker} />;
      })}
    </ul>
  );
}
