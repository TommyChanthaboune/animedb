import { useContext, useState } from "react";
import { MediaContext } from "../../context/MediaContext";
import { useParams } from "react-router-dom";
import { MediaItem } from "../../stores/MediaStore";
import classes from "./Details.module.css";
import { MediaForm } from "../../components/MediaForm/MediaForm";
import { observer } from "mobx-react-lite";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Details = observer(() => {
  const mediaContext = useContext(MediaContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const media = mediaContext?.media.find((m) => {
    if (id) {
      return m.id === parseInt(id);
    }
  });

  const handleSubmit = (formState: MediaItem) => {
    mediaContext?.editMediaContent(formState);
    toast.success("Media edited successfully");
  };

  const handleDelete = (media: MediaItem) => {
    mediaContext?.deleteMediaContent(media);
    toast.success("Media deleted successfully");
    navigate("/");
  };

  return (
    <div className={classes.detailsPage}>
      {media && (
        <MediaForm
          media={media}
          handleSubmit={handleSubmit}
          handleDelete={handleDelete}
        />
      )}
    </div>
  );
});

export { Details };
