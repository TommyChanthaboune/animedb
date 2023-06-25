import { vi } from "vitest";
import { setupServer } from "msw/node";
import { rest } from "msw";

import { MediaStore, MediaItem, MediaType } from "./MediaStore";

const testMedia: MediaItem[] = [
  {
    id: 1,
    title: "Test Movie",
    type: "movie",
    genre: "Action",
    releaseYear: 2021,
    rating: 5,
  },
];

const restHandlers = [
  rest.get("http://localhost:3001/media/all", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(testMedia));
  }),
];

const server = setupServer(...restHandlers);

describe("MediaStore", () => {
  beforeAll(() => server.listen({ onUnhandledRequest: "error" }));

  afterEach(() => server.resetHandlers());

  afterAll(() => {
    server.close();
    vi.clearAllMocks();
  });

  it("adds a media item", () => {
    const store = new MediaStore();
    const item: MediaItem = {
      id: 1,
      title: "Test Movie",
      type: "movie" as MediaType,
      genre: "Action",
      releaseYear: 2021,
      rating: 5,
    };

    store.addMediaContent(item);

    expect(store.media.length).toBe(1);
    expect(store.media[0]).toEqual(item);
  });

  it("edits a media item", () => {
    const store = new MediaStore();
    const item: MediaItem = {
      id: 1,
      title: "Test Movie",
      type: "movie" as MediaType,
      genre: "Action",
      releaseYear: 2021,
      rating: 5,
    };
    const editedItem = { ...item, title: "Edited Test Movie" };

    store.addMediaContent(item);
    store.editMediaContent(editedItem);

    expect(store.media.length).toBe(1);
    expect(store.media[0]).toEqual(editedItem);
  });

  it("deletes a media item", () => {
    const store = new MediaStore();
    const item: MediaItem = {
      id: 1,
      title: "Test Movie",
      type: "movie" as MediaType,
      genre: "Action",
      releaseYear: 2021,
      rating: 5,
    };

    store.addMediaContent(item);
    store.deleteMediaContent(item);

    expect(store.media.length).toBe(0);
  });
});
