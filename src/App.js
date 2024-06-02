import React from 'react';
// import { ClassComp, Click } from './components/classcomp';
// import {Count} from './components/Count'
// import Classprops from './components/Classprops';
// import { Funcprops } from './components/Funcprops';
// import List from './components/List';
// import ContactList from './components/task/ContactList'
import Sample from './components/ConditionalRendering';


export default function App() {

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

    */}
    <Sample age= "11"/>
    </>
  )
}

