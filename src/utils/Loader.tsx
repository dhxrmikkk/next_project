"use client";
import { useState, CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const Loader = ({ color, size }: { color: any; size: any }) => {
  let [loading, setLoading] = useState(true);

  return (
    <div className="sweet-loading flex justify-center items-start h-screen">
      <ClipLoader
        color={color}
        loading={loading}
        size={size}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loader;
