import React from "react";
import Card from "./Components/Card";
import DCard from "./Components/DCard";
function App() {
  return (
    <div>
      <Card />
      <Card />
      <hr />
      <DCard 
      img='https://img.freepik.com/premium-photo/profile-icon-white-background_941097-162604.jpg'
      name="Debasish"
      domain='SRE/ML/dEV'
      />






      <DCard 
      img='https://secure.gravatar.com/avatar/f9500c0a414e864c58de44bbca108465?s=500&d=mm&r=g'
      name="Debasish"
      domain='dEVoPS/AI/dEV'
      />
      
      <DCard img='https://cdn.vectorstock.com/i/1000v/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg'
      name="Debasish"
      domain='MERN STACK'
      />
    </div>
  );
}

export default App;
