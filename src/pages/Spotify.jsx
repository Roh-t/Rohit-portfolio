import { useEffect, useState } from "react";

export default function Spotify() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://spotify-api-integration-yu38.vercel.app/spotify")
      .then(res => res.json())
      .then(setData)
      .catch(err => console.log(err));
  }, []);

  return (
    <pre style={{ padding: "20px", whiteSpace: "pre-wrap" }}>
      {data ? JSON.stringify(data, null, 2) : "Loading…"}
    </pre>
  );
}
