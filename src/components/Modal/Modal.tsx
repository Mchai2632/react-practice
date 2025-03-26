import { ReactNode } from "react";
import { createPortal } from "react-dom";
import Container from "../Container";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
    if (!isOpen) return null;

    return createPortal(
        <div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 1000,
            }}
            onClick={onClose} // 是否點擊外面關閉
        >
            <Container
                style={{ minWidth: 300 }}
                onClick={(e) => e.stopPropagation()}
            >
                {children}
                <button onClick={onClose} style={{ marginTop: "10px" }}>
                    關閉
                </button>
            </Container>
        </div>,
        document.body // 將 Modal 掛載到 body
    );
}
