import { render, fireEvent, screen } from "@testing-library/react";
import { FilterBar } from "./FilterBar";
import { FILTER_TYPES } from "../../stores/MediaStore";
import type { FilterKey } from "../../stores/MediaStore";
import {vi} from 'vitest';

describe("FilterBar Component", () => {
  afterAll(() => {
    vi.clearAllMocks();
  });
  
  const setup = () => {
    const onSearchChangeMock = vi.fn();
    const onFilterChangeMock = vi.fn();
    const props = {
      search: "",
      filter: { movie: false, "tv-show": false, game: false },
      onSearchChange: onSearchChangeMock,
      onFilterChange: onFilterChangeMock,
    };
    render(<FilterBar {...props} />);
    const input = screen.getByPlaceholderText("Search Titles");
    return {
      input,
      onSearchChangeMock,
      onFilterChangeMock,
    };
  };

  test("input change", () => {
    const { input, onSearchChangeMock } = setup();
    fireEvent.change(input, { target: { value: "test" } });
    expect(onSearchChangeMock).toHaveBeenCalledTimes(1);
  });

  test("checkboxes change", () => {
    const { onFilterChangeMock } = setup();
    const keys = Object.keys(FILTER_TYPES);

    keys.forEach((key) => {
      const checkbox = screen.getByLabelText(FILTER_TYPES[key as FilterKey]);
      fireEvent.click(checkbox);
      expect(onFilterChangeMock).toHaveBeenCalled();
      onFilterChangeMock.mockClear();
    });
  });

  test("render FilterBar component", () => {
    const { input } = setup();
    const keys = Object.keys(FILTER_TYPES);
    expect(input).toBeTruthy();
    keys.forEach((key) => {
      const checkbox = screen.getByLabelText(FILTER_TYPES[key as FilterKey]);
      expect(checkbox).toBeTruthy();
    });
  });
});
