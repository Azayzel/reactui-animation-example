import { Reorder } from "framer-motion";
import { useState } from "react";
import "./ReoderList.css";

const initialColors = ["#FF008C", "#D309E1", "#ff1a1a", "#7700FF"];

interface IHeights {
  [key: number]: string | number;
}

const heights: IHeights = {
  0: 60,
  1: 80,
  2: 40,
  3: 100,
};
export default function ReorderList() {
  const [items, setItems] = useState([0, 1, 2, 3]);

  return (
    <Reorder.Group axis="y" values={items} onReorder={setItems}>
      {items.map((item, i) => (
        <Reorder.Item
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 1.12 }}
          style={{ background: initialColors[i], height: heights[i] }}
          key={item}
          value={item}
        >
          {item}
        </Reorder.Item>
      ))}
    </Reorder.Group>
  );
}
