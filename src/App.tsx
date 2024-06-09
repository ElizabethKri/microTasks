import './App.css';
import {Header} from "./site/Header";
import {Body} from "./site/Body";
import {Footer} from "./site/Footer";

function App() {
  return (
      <>
        <Header title = {'New Header'}/>
        <Body titleforBody = {'New Body'}/>
        <Footer titleforFooter={'New Footer'}/>
      </>
  );
}

export default App;
