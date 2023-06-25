import { useContext } from "react";
import { observer } from "mobx-react-lite";
import toast from "react-hot-toast";

import { MediaContext } from "../../context/MediaContext";
import { MediaItem } from "../../stores/MediaStore";
import classes from "../Details/Details.module.css";
import { MediaForm } from "../../components/MediaForm/MediaForm";
import { useNavigate } from "react-router-dom";

const Add = observer(() => {
  const mediaContext = useContext(MediaContext);
  const currentYear = new Date().getFullYear();
  const count = mediaContext?.mediaCount || 0;
  const navigate = useNavigate();

  const defaultMedia: MediaItem = {
    id: count + 1,
    title: "",
    type: "movie",
    genre: "",
    releaseYear: currentYear,
    rating: 0,
  };

  const handleSubmit = (formState: MediaItem) => {
    mediaContext?.addMediaContent(formState);
    toast.success("Media added successfully");
    navigate("/");
  };

  return (
    <div className={classes.detailsPage}>
      <MediaForm
        purpose="add"
        media={defaultMedia}
        handleSubmit={handleSubmit}
      />
    </div>
  );
});

export { Add };
