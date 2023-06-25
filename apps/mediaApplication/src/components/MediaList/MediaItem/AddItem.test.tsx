import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import { MemoryRouter } from "react-router-dom";
import { AddItem } from "./AddItem";

const mockUseNavigate = vi.fn();

vi.mock("react-router-dom", async () => {
  const mod = await vi.importActual<typeof import("react-router-dom")>(
    "react-router-dom"
  );
  return {
    ...mod,
    useNavigate: () => mockUseNavigate,
  };
});

describe("AddItem Component", () => {
  afterAll(() => {
    vi.clearAllMocks();
  });
  test("navigates to the correct path", async () => {
    render(
      <MemoryRouter>
        <AddItem />
      </MemoryRouter>
    );
    const addItemComponent = screen.getByRole("link");

    await userEvent.click(addItemComponent);

    expect(mockUseNavigate).toHaveBeenCalledWith("add");
  });
});
