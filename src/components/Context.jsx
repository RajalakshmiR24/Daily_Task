import { createContext, useState, useContext } from "react";
const user = createContext();

function Context1() {

  const [name, setName] = useState("Ramya");

  return (
    <>
      <user.Provider value={name}>
      <Context2/>
      </user.Provider>
    </>
  );
}

function Context2() {
  return (
    <>
      <h1>Context 2nd time passed</h1>
      <Context3/>
    </>
  );
}

function Context3() {
  return (
    <>
      <h1>Context 3rd time passed</h1>
      <Context4/>
    </>
  );
}

function Context4() {
  return (
    <>
      <h1>Context 4th time passed</h1>
      <Context5/>
    </>
  );
}

function Context5() {
const name = useContext(user);

  return (
    <>
      <h2>{`Hello ${name} again!`}</h2>
    </>
  );
}

export default Context1;