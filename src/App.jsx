import Foreground from "./components/Foreground";
import Background from "./components/Background";
function App() {
  return (
    <>
      <div className="relative w-full h-screen bg-stone-800">
        <Background></Background>
        <Foreground></Foreground>
      </div>
    </>
  );
}

export default App;
