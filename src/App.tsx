import './App.css';
import {Header} from "./site/Header";
import {Body} from "./site/Body";
import {Footer} from "./site/Footer";
import {NewComponent} from "./map/NewComponent";
import {useState} from "react";
import {Car} from "./map/Car";

function App() {

  let [students, setStudents] = useState([
      {id: 1, name: "John", age: 18},
      {id: 2, name: "Nick", age: 19},
      {id: 3, name: "Eliza", age: 20},
      {id: 4, name: "Misha", age: 21},
  ])

  let topCars = [
        {manufacturer:'BMW', model:'m5cs'},
        {manufacturer:'Mercedes', model:'e63s'},
        {manufacturer:'Audi', model:'rs6'}
  ]

  return (
      <>
        <Header title = {'New Header'}/>
        <Body titleforBody = {'New Body'}/>
        <Footer titleforFooter={'New Footer'}/>
        <NewComponent students={students}/>
        <Car cars={topCars}/>
      </>
  );
}

export default App;
