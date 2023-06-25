import { ajax } from "rxjs/ajax";
import { MediaService } from "./MediaService";
import { of } from "rxjs";
import { vi } from "vitest";

vi.mock("rxjs/ajax", () => ({
  ajax: {
    getJSON: vi.fn(),
  },
}));

describe("MediaService", () => {
  afterAll(() => {
    vi.clearAllMocks();
  });

  it("fetches media data successfully", (done) => {
    const testData = [{ id: 1, title: "Test Media" }];

    // Mock the ajax.getJSON method to return test data
    (ajax.getJSON as jest.Mock).mockImplementation(() => of(testData));

    const mediaService = new MediaService();

    mediaService.getAllMediaStream().subscribe((data) => {
      expect(data).toEqual(testData);
    });
  });

  it("handles errors", (done) => {
    const testError = new Error("Test error");

    // Mock the ajax.getJSON method to throw an error
    (ajax.getJSON as jest.Mock).mockImplementation(() => of(testError));

    const mediaService = new MediaService();

    mediaService.getAllMediaStream().subscribe((data) => {
      expect(data).toEqual(testError);
    });
  });
});
