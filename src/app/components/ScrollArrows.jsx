import React from "react";

const ScrollArrows = () => {
    const handleScroll = (direction) => {
        const scrollHeight = window.innerHeight;
        if (direction === "up") {
            window.scrollBy(0, -scrollHeight);
        } else {
            window.scrollBy(0, scrollHeight);
        }
    };
  
    return (
        <div className="fixed bottom-4 right-4 flex flex-col space-y-2">
            <button className="bg-gray-800 text-white px-3 py-2 rounded" onClick={() => handleScroll("up")}>
                &#8593;
            </button>
            <button className="bg-gray-800 text-white px-3 py-2 rounded" onClick={() => handleScroll("down")}>
                &#8595;
            </button>
        </div>
    );
};

export default ScrollArrows;