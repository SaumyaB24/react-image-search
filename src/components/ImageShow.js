function ImageShow({ img }) {
  return (
    <div>
      <img src={img.urls.small} alt={img.alt_description}></img>
    </div>
  );
}

export default ImageShow;
