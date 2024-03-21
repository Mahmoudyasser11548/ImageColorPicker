import "./App.css";
import image from "./assets/codeImage.jpg";
import ImageColorPicker from "./components/ImageColorPicker";

function App() {
  return (
    <div className="app-wrapper">
      <ImageColorPicker imageUrl={image} />
    </div>
  );
}

export default App;
