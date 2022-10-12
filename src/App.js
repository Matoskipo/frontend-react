import React from 'react'
import image1 from './assets/hero-bcg-2.jpeg';
import image2 from './assets/hero-bcg.jpeg';
import styled from 'styled-components'
import './App.css';

function App() {
  return (
    <div className="App">
      <HeroStyle>
      <h1>image</h1>

      <div className='img-container'>
      <img src={image1} alt="" className='mainImg'/>
      <img src={image2} alt="" className='subImage'/>
      </div>
    </HeroStyle>

    </div>
  );
}

const HeroStyle = styled.div`
text-align:center;
justify-content:center;
margin-left:20rem;
.img-container{
  display:block;
  position:relative;

}
.mainImg{
  width:50%;
  height:550px;
  position:relative;
  display:block;
  object-fit:cover;
}
.subImage{
  position:absolute;
  bottom:0;
  left:0;
  width:250px;
  transform:translate(-50%)
}
.img-container::before{
  content:'';
  position:absolute;
  width:10%;
  height:80%;
  bottom:0;
  left:-8%;
  background:grey;
}
 
`

export default App;
