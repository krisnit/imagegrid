import React, { useEffect, useState } from "react";
import debounce from "lodash.debounce";
import Image from "./Image";
import axios from "axios";
import "./Photogrid.scss";

const PhotoGrid = () => {
  let [pageno, setPageno] = useState(1);
  let url = `https://api.unsplash.com/search/photos/?page=${pageno}&query=flowers&client_id=012dcb3d65a862122b8ece74da4a0db017d4dfaa9a5c7191871092b17aa39db6`;
  let [photos, setPhotos] = useState({
    photo: [],
    error: false,
    isLoading: false
  });
  window.onscroll = debounce(() => {
    let { error, isLoading } = photos;

    if (error || isLoading) return;
    if (
      parseInt(window.innerHeight) +
        parseInt(document.documentElement.scrollTop) +
        100 >=
      parseInt(document.documentElement.offsetHeight)
    ) {
      console.log(
        parseInt(window.innerHeight) +
          parseInt(document.documentElement.scrollTop) +
          50
      );
      loadPhotos();
    }
  }, 100);

  useEffect(() => {
    loadPhotos();
  }, []);

  const loadPhotos = async () => {
    let result = await axios.get(url);
    console.log("here");
    if (pageno === result.data.total_pages) return;
    setPhotos({ ...photos, photo: [...photos.photo, ...result.data.results] });
    setPageno(pageno + 1);
    console.log(photos, pageno);
  };
  return (
    <div className="photogrid">
      {photos.photo.map((i, index) => {
        let gridArea = "" + (index % 10);
        console.log(gridArea);
        return (
          <Image
            gridarea={gridArea}
            key={i.id}
            url={i.urls.small}
            id={i.id}
            desc={i.description || i.alt_description}
          />
        );
      })}
    </div>
  );
};

export default PhotoGrid;
