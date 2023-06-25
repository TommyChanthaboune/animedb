import { render, fireEvent, screen } from "@testing-library/react";
import { MediaForm } from "./MediaForm"; // replace with the actual import path
import type { MediaItem } from "../../stores/MediaStore";
import {vi} from 'vitest';

describe("MediaForm Component", () => {
  const mockMediaItem: MediaItem = {
    id: 1,
    title: "Mock Title",
    type: "movie",
    genre: "Mock Genre",
    releaseYear: 2000,
    rating: 5,
  };

  const handleSubmitMock = vi.fn();
  const handleDeleteMock = vi.fn();

  afterAll(() => {
    vi.clearAllMocks();
  });
  
  const setup = () => {
    render(
      <MediaForm
        media={mockMediaItem}
        handleSubmit={handleSubmitMock}
        handleDelete={handleDeleteMock}
        purpose="edit"
      />
    );
  };

  test("form fields", () => {
    setup();
    expect(screen.getByDisplayValue(mockMediaItem.title)).toBeTruthy();
    expect(screen.getByDisplayValue(mockMediaItem.genre)).toBeTruthy();
    expect(screen.getByDisplayValue(mockMediaItem.releaseYear)).toBeTruthy();
    expect(screen.getByDisplayValue(mockMediaItem.rating)).toBeTruthy();
  });

  test("handleSubmit", () => {
    setup();
    const submitButton = screen.getByText("Submit");
    fireEvent.click(submitButton);
    expect(handleSubmitMock).toHaveBeenCalledTimes(1);
  });

  test("handleDelete", () => {
    setup();
    const deleteButton = screen.getByText("Delete");
    fireEvent.click(deleteButton);
    expect(handleDeleteMock).toHaveBeenCalledTimes(1);
  });
});
