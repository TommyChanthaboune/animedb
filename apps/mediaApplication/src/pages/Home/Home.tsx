import { useContext, useState } from "react";
import { MediaContext } from "../../context/MediaContext";
import { MediaList } from "../../components/MediaList/MediaList";
import { FilterBar } from "../../components/FilterBar/FilterBar";
import classes from "./Home.module.css";

function Home() {
  const mediaStore = useContext(MediaContext);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState({
    movie: true,
    "tv-show": true,
    game: true,
  });

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter({
      ...filter,
      [e.target.value]: e.target.checked,
    });
  };

  return (
    <div className={classes.home}>
      <FilterBar
        search={search}
        filter={filter}
        onSearchChange={handleSearchChange}
        onFilterChange={handleFilterChange}
      />
      <MediaList
        media={mediaStore?.media || []}
        search={search}
        filter={filter}
      />
    </div>
  );
}

export { Home };
