import type { MediaItem as MediaItemType } from "../../stores/MediaStore";

import { observer } from "mobx-react-lite";
import { MediaItem } from "./MediaItem/MediaItem";
import { AddItem } from "./MediaItem/AddItem";
import classes from "./MediaList.module.css";

type MediaListProps = {
  media: MediaItemType[] | [];
  search: string;
  filter: {
    movie: boolean;
    "tv-show": boolean;
    game: boolean;
  };
};

const MediaList = observer(({ media, search, filter }: MediaListProps) => {
  const filteredMedia = media
    .filter((mediaItem) => {
      return mediaItem.title.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    })
    .filter((mediaItem) => {
      return filter[mediaItem.type];
    });

  return (
    <div className={classes.mediaList}>
      {search.length === 0 &&
        filter.movie &&
        filter["tv-show"] &&
        filter.game && <AddItem />}
      {filteredMedia.map((mediaItem) => (
        <MediaItem key={mediaItem.id} item={mediaItem} />
      ))}
    </div>
  );
});

export { MediaList };
