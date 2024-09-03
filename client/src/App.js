import React from "react";
// import Card from "./Components/Card";
// import DCard from "./Components/DCard";
// import Main from "./Components/Main"
import SingleProps from "./Components/PROPS/SingleProps";
import MultipleProps from "./Components/PROPS/MultipleProps";
import ValueProps from "./Components/PROPS/ValueProps";
import IterativeProps from "./Components/PROPS/IterativeProps";
import PropSpread from "./Components/PROPS/PropsSpread";
import PropsSpread from "./Components/PROPS/PropsSpread";

function App() {
  const val = 36;
  const anyData = "This is Javascript Any data";
  const jsLib = { a: "React", b: "Vue" };

  return (
    // <div>
    //   <Card />
    //   <Card />
    //   <hr />
    //   <DCard
    //   img='https://img.freepik.com/premium-photo/profile-icon-white-background_941097-162604.jpg'
    //   name="Debasish"
    //   domain='SRE/ML/dEV'
    //   />
    //   <DCard
    //   img='https://secure.gravatar.com/avatar/f9500c0a414e864c58de44bbca108465?s=500&d=mm&r=g'
    //   name="Debasish"
    //   domain='dEVoPS/AI/dEV'
    //   />

    //   <DCard img='https://cdn.vectorstock.com/i/1000v/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg'
    //   name="Debasish"
    //   domain='MERN STACK'
    //   />
    // </div>
    // <>
    // <Main/>
    // </>
    <>
      <SingleProps name="Debasish" />
      <MultipleProps name="Debasish" surname="Sahoo" dept="CSE" />
      <ValueProps
        //Simple Data Type
        strData="This is String Value"
        numData={23}
        boolData={false}
        arrData={[1, 2, 3, 4, 5, 6]}
        objData={{ d1: "Dev", d2: "Ops" }}
        //Complex Data Type
        tempData={`This is a Template Data ${val}`}
        jsxData={2 + 2 - 5 * 8 + 16 + 15 / 3}
        anyData={anyData}
      />
      <IterativeProps students={["Ayush", "Nilay", "Sneha"]} />

      {/* //Manual Process */}
      <PropSpread a={jsLib.a} b={jsLib.b} />

      {/* //Spreading Process */}
      <PropSpread {...jsLib} />
    </>
  );
}

export default App;
