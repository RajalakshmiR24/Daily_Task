import React from 'react';
// import UseRef3 from './components/UseRef3';
// import Context1 from './components/Context';
// import UseRef from './components/UseRef';
import ChildOne from './components/task/ChildOne';
import ChildTwo from './components/task/ChildTwo';
// import Context5 from './components/Context';
// import { ClassComp, Click } from './components/classcomp';
// import {Count} from './components/Count'
// import Classprops from './components/Classprops';
// import { Funcprops } from './components/Funcprops';
// import List from './components/List';
// import ContactList from './components/task/ContactList'
// import Sample from './components/ConditionalRendering';
// import UseRef2 from './components/UseRef2';




export default function App() {
  const dataForChildOne = "Raja";
  const dataForChildTwo = "Lakshmi";

  // const contacts = [
  //   { name: 'Ramya', email: 'Ramya@gmail.com', phoneNum: '8248492118' },
  //   { name: 'Sasikala', email: 'Sasikala@gmail.com', phoneNum: '9790914849' },
  //   { name: 'AnuPriya', email: 'AnuPriya@gmail.com', phoneNum: '6382809217' },
  // ];
  return (
    <>
    { /*<Click />
      <ClassComp />
      <Count />
      <Classprops name='Ramya'/>
      <Funcprops name = 'R RAJALAKSHMI' />
      <List />

<div className="p-4 max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {contacts.map((data, i) => (
        <ContactList key={i} name={data.name} email={data.email} phoneNum={data.phoneNum} />
      ))}
    </div>

    <Sample age= "11"/>
                <UseRef/>


        <UseRef2/>
                <UseRef3 />
                                <Context1 />


                */}

      <h1 className="text-2xl font-bold mb-4">Prop Drilling Example</h1>
      <ChildOne data={dataForChildOne} />
      <ChildTwo data={dataForChildTwo} />


    </>
  )
}

