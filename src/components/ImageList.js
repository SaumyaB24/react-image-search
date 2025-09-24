import ImageShow from "./ImageShow";
import "./ImageList.css";
function ImageList({ img }) {
  const renderedImg = img.map((img) => {
    return <ImageShow key={img.id} img={img} />;
  });
  return <div className="image-list">{renderedImg}</div>;
}

export default ImageList;
