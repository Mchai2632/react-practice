import { useEffect, useRef, useState } from "react";
import Container from "../Container";

export default function CountDownTimer() {
    const [countDown, setCountDown] = useState<number>(1);
    const [isStart, setIsStart] = useState(false); // 可以判斷是否開始
    const intervalRef = useRef<number | null>(null);

    useEffect(() => {
        if (isStart && countDown > 0) {
            intervalRef.current = setInterval(() => {
                setCountDown((prev) => {
                    if (prev <= 1) {
                        clearInterval(intervalRef.current!);
                        setIsStart(false); // 自動停止
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);

            return () => {
                if (intervalRef.current) {
                    console.log("我清除啦");
                    clearInterval(intervalRef.current);
                    intervalRef.current = null;
                }
            };
        } else {
            setIsStart(false);
        }
    }, [isStart]);

    return (
        <Container>
            <h1>CountDownTimer</h1>
            <hr />
            <input
                type="number"
                onChange={(e) => {
                    setCountDown(Number(e.target.value));
                    setIsStart(false);
                }}
                value={countDown}
                min={1}
            />
            <span style={{ margin: "0 10px" }}>
                {countDown === 0 ? "時間到!" : countDown}
            </span>
            <button onClick={() => setIsStart(true)} disabled={isStart}>
                {isStart && countDown != 0 ? "倒數中.." : "開始"}
            </button>
            <button onClick={() => setIsStart(false)} disabled={!isStart}>
                暫停
            </button>
        </Container>
    );
}
