import { Html, useProgress } from "@react-three/drei";
import "./loader.css";
const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html
      as="div"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
      center
    >
      <p
        style={{
          fontSize: 14,
          color: "#f1f1f1",
          fontWeight: 400,
          marginTop: 40,
        }}
      >
        {progress && <div className="loader"></div>}
      </p>
    </Html>
  );
};

export default CanvasLoader;
