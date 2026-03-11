import ShowSelection from "./shows/ShowSelection";
import ShowDetails from "./shows/ShowDetails";
import { useState } from "react";
import { tvShows as showsData } from "./shows/data";

/**
 * React TV is an web streaming platform that allows users to browse
 * through the episodes of a variety of different shows.
 */
export default function App() {
  const [shows] = useState(showsData);
  const [selectedShow, setSelectedShow] = useState();
  return (
    <>
      <header>
        <p>React TV</p>
        <ShowSelection shows={shows} setSelectedShow={setSelectedShow} />
      </header>
      <main>
        <ShowDetails show={selectedShow} />
      </main>
    </>
  );
}
