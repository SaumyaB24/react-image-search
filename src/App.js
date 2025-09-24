import searchImages from "./api";
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
import { useState } from "react";
function App() {
  const [img, setImg] = useState([]);
  const handleSubmit = async (term) => {
    const result = await searchImages(term);
    setImg(result);
  };
  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList img={img} />
    </div>
  );
}

export default App;
