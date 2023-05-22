import solidBookmark from "../icons/bookmark-solid.svg";
import regularBookmark from "../icons/bookmark-regular.svg";
import { useState, useContext, useEffect } from "react";
import { CollectionContext } from "../context/CollectionContext";
const BookmarkButton = ({ gameId }) => {
  const { addToCollection, collectionIds } = useContext(CollectionContext);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setSaved(collectionIds.includes(gameId));
  }, [collectionIds, gameId]);
  function buttonClicked() {
    setSaved(!saved);
    addToCollection(gameId);
  }
  console.log(collectionIds);
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
