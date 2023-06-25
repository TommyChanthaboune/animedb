import { MediaItem } from "../../../stores/MediaStore";
import classes from "./MediaItem.module.css";
import { EditButton } from "../EditButton/EditButton";

type MediaListItemProps = {
  item: MediaItem;
};

const MediaItem = ({ item }: MediaListItemProps) => (
  <div className={classes.mediaItem}>
    <h2>{item.title}</h2>
    <div className={classes.mediaData}>
      <dl>
        <dt>Category:</dt>
        <dd>{item.type}</dd>

        <dt>Genre:</dt>
        <dd>{item.genre}</dd>
      </dl>
      <dl>
        <dt>Release Year:</dt>
        <dd>{item.releaseYear}</dd>

        <dt>Rating</dt>
        <dd>{item.rating}</dd>
      </dl>
    </div>
    <EditButton id={item.id} />
  </div>
);

export { MediaItem };
