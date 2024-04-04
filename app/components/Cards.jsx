import { Card } from "@mui/material";
import React from "react";
import Button from "./Button";
const Cards = (props) => {
  return (
    <div className="bg-teritary p-5 rounded-lg">
      <div>
        <img src={props.img} alt="Image" />
      </div>
      <div className="text-right">
        <div>
          <p>{props.name}</p>
        </div>
        <div>
          <p>{props.desc}</p>
        </div>
        <div className="py-3 flex justify-end gap-10">
            <Button text={"buy"}>Buy</Button>
            <Button text={"cart"}>Add to Cart</Button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
