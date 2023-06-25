import { Link } from "react-router-dom";
import { EditPencil } from "iconoir-react";
import classes from "./EditButton.module.css";

export type EditButtonProps = {
  id: number;
};

const EditButton = ({ id }: EditButtonProps) => {
  return (
    <Link to={`/detail/${id}`} className={classes.editButton}>
      <EditPencil />
      <span>Edit</span>
    </Link>
  );
};

export { EditButton };
