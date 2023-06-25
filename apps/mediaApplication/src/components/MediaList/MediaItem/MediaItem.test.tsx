import { render, screen } from "@testing-library/react";
import { MediaItem as MediaItemType } from "../../../stores/MediaStore";
import { MediaItem } from "./MediaItem";
import { MemoryRouter } from "react-router-dom";

describe("MediaItem Component", () => {
  it("renders media item data correctly", () => {
    const testItem: MediaItemType = {
      id: 1,
      title: "Test Title",
      type: "movie",
      genre: "Test Genre",
      releaseYear: 2023,
      rating: 5,
    };

    render(
      <MemoryRouter>
        <MediaItem item={testItem} />
      </MemoryRouter>
    );

    // Check that the title, type, genre, releaseYear, and rating are displayed correctly
    expect(screen.getByText(testItem.title)).toBeInTheDocument();
    expect(screen.getByText(`${testItem.type}`)).toBeInTheDocument();
    expect(screen.getByText(`${testItem.genre}`)).toBeInTheDocument();
    expect(screen.getByText(`${testItem.releaseYear}`)).toBeInTheDocument();
    expect(screen.getByText(`${testItem.rating}`)).toBeInTheDocument();
  });
});
