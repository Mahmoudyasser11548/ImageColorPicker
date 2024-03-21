import React, { useState } from "react";
import { ColorExtractor } from "react-color-extractor";

interface ImageColorPickerProps {
  imageUrl: string;
}

const ImageColorPicker = ({ imageUrl }: ImageColorPickerProps) => {
  const [colors, setColors] = useState<string[]>([]);

  const handleColorsExtraction = (colors: string[]) => {
    setColors(colors);
  };

  return (
    <div>
      <ColorExtractor src={imageUrl} getColors={handleColorsExtraction} />
      <div>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {colors.map((color, index) => (
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                key={index}
                style={{
                  backgroundColor: color,
                  width: "50px",
                  height: "50px",
                  margin: "5px",
                  borderRadius: "10px",
                  border: "1px solid #ccc",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              ></div>
              <div>{color}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageColorPicker;
