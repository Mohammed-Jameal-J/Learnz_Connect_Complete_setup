"use client";

import { useState, useEffect } from "react";

const LikeButton = () => {
  const [likes, setLikes] = useState(0);
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const date = new Date();
    setCurrentDate(date.toLocaleTimeString());
  }, []);

  return (
    <div>
        <p>Current Time: {currentDate}</p>
      <button onClick={() => setLikes((prev) => prev + 1)}>Like {likes}</button>
    </div>
  );
};

export default LikeButton;
