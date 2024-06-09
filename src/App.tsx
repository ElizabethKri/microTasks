import './App.css';
import {Header} from "./site/Header";
import {Body} from "./site/Body";
import {Footer} from "./site/Footer";
import {NewComponent} from "./map/NewComponent";
import {useState} from "react";
import {Car} from "./map/Car";
import {Button} from "./button/Button";
import {Button2} from "./button/Button2";

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

 const Button1Foo = () => {
      console.log('I am Liza')
 }

    const Button2Foo = (subscriber: string, age: number) => {
        console.log(subscriber, age)
    }

    const Button3Foo = () => {
      console.log("I am stuped")
    }

  return (
      <>
        <Header title = {'New Header'}/>
        <Body titleforBody = {'New Body'}/>
        <Footer titleforFooter={'New Footer'}/>
        <NewComponent students={students}/>
        <Car cars={topCars}/>
        <Button/>
        <Button2 name={'MyYoutubeChanel-1'} callBack={Button1Foo}/>
        <Button2 name={'MyYoutubeChanel-2'} callBack={() =>Button2Foo('I am Nick', 21)}/>
        <Button2 name={'Stuped'} callBack={Button3Foo}/>
      </>
  );
}

export default App;
