import solidBookmark from "../icons/bookmark-solid.svg";
import regularBookmark from "../icons/bookmark-regular.svg";
import { useState, useContext, useEffect } from "react";
import { LibraryContext } from "../context/LibraryContext";
const BookmarkButton = ({ gameId }) => {
  const { addToCollection, collection } = useContext(LibraryContext);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setSaved(collection.includes(gameId));
  }, [collection, gameId]);
  function buttonClicked() {
    setSaved(!saved);
    addToCollection(gameId);
  }

  return (
    <button className="bookmark-buttons" onClick={buttonClicked}>
      <img
        className="bookmark"
        src={saved ? solidBookmark : regularBookmark}
        alt="bookmark"
      />
    </button>
  );
};

export default BookmarkButton;
