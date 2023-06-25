import { makeAutoObservable, observable } from "mobx";
import { MediaService } from "../services/MediaService";

export type MediaType = "movie" | "tv-show" | "game";

export type MediaItem = {
  id: number;
  title: string;
  type: MediaType;
  genre: string;
  releaseYear: number;
  rating: number;
};

export enum FILTER_TYPES {
  MOVIE = "movie",
  TV_SHOW = "tv-show",
  GAME = "game",
}

export declare type FilterKey = keyof typeof FILTER_TYPES;

class MediaStore {
  media = observable.array<MediaItem>([]);

  constructor() {
    makeAutoObservable(this);

    const mediaService = new MediaService();
    const mediaStream = mediaService.getAllMediaStream();

    mediaStream.subscribe((media) => {
      this.media.replace(media);
    });
  }

  // Computed
  get mediaCount() {
    return this.media.length;
  }

  // Actions
  editMediaContent(media: MediaItem) {
    this.media = observable.array(
      this.media.map((m: MediaItem) => {
        if (m.id === media.id) {
          return media;
        } else {
          return m;
        }
      })
    );
  }

  addMediaContent(media: MediaItem) {
    this.media.push(media);
  }

  deleteMediaContent(media: MediaItem) {
    this.media = observable.array(this.media.filter((m) => m.id !== media.id));
  }
}

export { MediaStore };
