import { useCallback, useEffect, useState } from "react";
import Container from "../Container";
import { imgArray } from "../../_lib/mockImage";

export default function ImageGallery() {
    const [img, setImg] = useState("");

    // 監聽鍵盤事件，按下 Esc 鍵關閉 Modal
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setImg("");
            }
        };

        if (img) {
            document.addEventListener("keydown", handleKeyDown);
        }

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [img]);

    // 記憶 setImg，避免每次 render 時重新創建函數
    const handleImageClick = useCallback((src: string) => {
        setImg(src);
    }, []);
    return (
        <Container>
            <h1>ImageGallery</h1>
            <hr />
            <div className="image-box">
                {imgArray.map((item) => (
                    <img
                        key={item.id}
                        src={item.img}
                        alt="preview"
                        className="thumbnail"
                        onClick={() => handleImageClick(item.img)}
                        loading="lazy"
                    />
                ))}
            </div>
            {img && (
                <div className="modal" onClick={() => handleImageClick("")}>
                    <img
                        src={img}
                        alt="cannot find resource!"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}
        </Container>
    );
}
