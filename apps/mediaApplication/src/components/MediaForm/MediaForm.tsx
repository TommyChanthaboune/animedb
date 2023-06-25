import React, { useState } from "react";
import type { MediaItem } from "../../stores/MediaStore";
import { FILTER_TYPES } from "../../stores/MediaStore";
import type { FilterKey } from "../../stores/MediaStore";
import classes from "./MediaForm.module.css";

type MediaFormProps = {
  media: MediaItem;
  handleSubmit: (formState: MediaItem) => void;
  handleDelete?: (mediaItem: MediaItem) => void;
  purpose?: "add" | "edit";
};

const MediaForm = ({
  purpose = "edit",
  media,
  handleSubmit,
  handleDelete = () => {},
}: MediaFormProps) => {
  const [formState, setFormState] = useState<MediaItem>(media);

  const handleFormInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormState((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    handleSubmit(formState);
  };

  const onDelete = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    handleDelete(media);
  };

  return (
    <form className="pure-form pure-form-stacked">
      <fieldset>
        <legend>{purpose === "add" ? "Add Media" : "Edit Media"}</legend>
        <label htmlFor="title">Title</label>
        <input
          className="pure-input-1"
          type="text"
          id="title"
          placeholder="Title"
          value={formState.title}
          onChange={handleFormInput}
        />

        <label htmlFor="type">Type</label>
        <select
          className="pure-input-1"
          id="type"
          value={formState.type}
          onChange={handleFormInput}
        >
          {Object.keys(FILTER_TYPES).map((key) => (
            <option
              key={FILTER_TYPES[key as FilterKey]}
              value={FILTER_TYPES[key as FilterKey]}
            >
              {FILTER_TYPES[key as FilterKey]}
            </option>
          ))}
        </select>

        <label htmlFor="genre">Genre</label>
        <input
          className="pure-input-1"
          type="text"
          id="genre"
          placeholder="genre"
          value={formState.genre}
          onChange={handleFormInput}
        />

        <label htmlFor="releaseYear">Release Year</label>
        <input
          className="pure-input-1"
          type="number"
          id="releaseYear"
          placeholder="Release Year"
          value={formState.releaseYear}
          onChange={handleFormInput}
        />

        <label htmlFor="rating">Rating</label>
        <input
          className="pure-input-1"
          type="number"
          id="rating"
          placeholder="Rating"
          value={formState.rating}
          onChange={handleFormInput}
        />
        <br />

        <div className={classes.buttonGroup}>
          <button
            className="pure-button pure-button-primary"
            onClick={onSubmit}
          >
            Submit
          </button>
          {purpose === "edit" && (
            <button className="pure-button" onClick={onDelete}>
              Delete
            </button>
          )}
        </div>
      </fieldset>
    </form>
  );
};

export { MediaForm };
