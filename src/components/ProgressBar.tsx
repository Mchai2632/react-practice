type TypeProps = {
  progress: number;
  total: number;
  colorHex?: string;
  title?: string;
};

const ProgressBar = (props: TypeProps) => {
  if (props.total < props.progress) {
    console.error("total must be greater than or equal to progress");
    return (
      <div className="text-red-500">❌ 錯誤: total 必須大於等於 progress</div>
    );
    // return null; // 直接不顯示 ProgressBar
  }

  let percent;
  percent = (props.progress / props.total) * 100;
  if (isNaN(percent)) percent = 0;

  const styles = {
    //   container: {
    //     width: "100%",
    //     height: "10px",
    //     backgroundColor: "#e0e0e0",
    //     borderRadius: "5px",
    //     overflow: "hidden",
    //   },
    progress: {
      height: "100%",
      width: "0%",
      backgroundColor: props.colorHex ? props.colorHex : "#4caf50",
      transition: "width 1s ease-in-out",
      borderRadius: "16px",
    },
  };

  return (
    <div className="flex items-center ">
      <div className="w-[300px] h-[30px] bg-[#e0e0e0] rounded-2xl flex items-center overflow-hidden">
        <div
          style={{ ...styles.progress, width: `${percent}%` }}
          className="relative "
        >
          <span className="absolute pl-6 h-full place-content-center">
            {percent.toFixed(2)}%
          </span>
        </div>
      </div>
      <div className="flex flex-col">
        <span>{props.progress}</span>
        {/* <span>{percent.toFixed(0)}%</span> */}
        <span>{props.title}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
