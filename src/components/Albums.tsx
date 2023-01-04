import { FunctionComponent, useEffect, useState } from "react";

interface AlbumsProps {}

const Albums: FunctionComponent<AlbumsProps> = () => {
  let [albums, setAlbums] = useState<any>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((res) => res.json())
      .then((data) => setAlbums(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h1>Albums</h1>
      <ul>
        {albums.length ? (
          albums.map((album: any) => <li key={album.id}>{album.title}</li>)
        ) : (
          <p>Theres no albums</p>
        )}
      </ul>
    </>
  );
};

export default Albums;
