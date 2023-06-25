import classes from "./addItem.module.css";
import { mediaItem } from "./MediaItem.module.css";
import { AddCircle } from "iconoir-react";
import { useNavigate } from "react-router-dom";

const AddItem = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("add");
  };

  return (
    <div
      className={`${mediaItem} ${classes.addItem}`}
      role="link"
      onClick={handleClick}
    >
      Add New
      <AddCircle />
    </div>
  );
};

export { AddItem };
