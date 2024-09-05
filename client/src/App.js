import React from "react";
import Left from "./Components/LeftComponent";
import Right from "./Components/RightComponent";
import "./Components/Product.css";

import PropsValidation from "./Components/PropsValidation";

function App() {
  // return <>
  // <Left
  // img_src='https://www.dropbox.com/s/e928cht0h5crcn4/shoe.png?raw=1'
  // img_alt='shoe'
  // />
  // <Right
  // name='Airmax'
  // headline1='Winter Collection'
  // headline2='Men Black Sneakers'
  // price1={150}
  // price2={200}
  // sizes={[7,8,9,10,11]}
  // colors={['yellow','black','blue','red']}
  // button1='Buy Now'
  // button2='Add TO Cart'
  // />
  // </>;

  return (
    <>
      <PropsValidation any={90} />
    </>
  );
}

export default App;
