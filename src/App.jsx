import Nav from "./views/样式私有化处理/Nav";
import Menu from "./views/样式私有化处理/Menu";

function App() {
  return (
    <div className="home-box">
      <Nav />
      <Menu />
      <div className="box">我是内容</div>
    </div>
  );
}

export default App;
