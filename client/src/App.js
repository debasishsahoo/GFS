import React from "react";
import Left from './Components/LeftComponent'
import Right from './Components/RightComponent'
import './Components/Product.css'
function App() {
  return <>
  <Left
  img_src='https://www.dropbox.com/s/e928cht0h5crcn4/shoe.png?raw=1'
  img_alt='shoe'
  />
  <Right
  name='Airmax'
  headline1='Winter Collection'
  headline2='Men Black Sneakers'
  price1={150}
  price2={200}
  size={[7,8,9,10,11]}
  color={['yellow','black','blue']}
  button1='Buy Now'
  button2='Add TO Cart'
  />
  </>;
}

export default App;
