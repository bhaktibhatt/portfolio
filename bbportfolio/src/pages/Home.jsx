import React, { useState,Suspense } from 'react'
import {Canvas} from '@react-three/fiber'
import Island from "../models/Island.jsx";
import Loader from '../components/Loader.jsx';
import Sky from "../models/Sky.jsx";
import Bird from "../models/Bird.jsx";
import Plane from "../models/Plane";
      // <div className='absolute top-28 left-0 right-0 z-10 flex items-center justlfy-center'>
      //   POPUP
      // </div>
const Home = () => {
  const [isRotating, setIsRotating] = useState(false);
  const adjustIslandForScreenSize = ()=>{
    let screenScale;
    let screenPostion=[0, 0, 0];
    let rotation = [0.1, 4.7, -0.1]

    if(window.innerWidth < 768){
      screenScale = [0.9,0.9,0.9];
      
    }
    else{
      screenScale = [0.1,0.1,0.1];
    }
    return [screenScale, screenPostion, rotation];
  }
  const adjustPlaneForScreenSize = ()=>{
    let screenScale, screenPostion;

    if(window.innerWidth < 768){
      screenScale = [1.5,1.5,1.5];
      screenPostion=[0, -1.5,0]
    }
    else{
      screenScale = [3,3,3];
      screenPostion=[0,-4,-4]
    }
    return [screenScale, screenPostion];
  }

  const [islandScale, islandPostion, islandRotation] = adjustIslandForScreenSize();
  const [planeScale, planePosition] = adjustPlaneForScreenSize();
  return (
    <section className='w-full h-screen relative'>
      <Canvas className={`w-full h-screen bg-transparent${isRotating? 'cursor:grabbing':'cursor-grab'}`} camera = {{near:0.1, far:1000}}>
        <Suspense fallback={<Loader/>}>
        <directionalLight position={[1,1,1]} intensity={2}/>
        <ambientLight intensity={0.5}/>
        <hemisphereLight skyColor = '#b1e1ff' groundColor='#000000'
          intensity={1}        
        />

        <Sky/>
        <Bird/>
        <Island 
        postion = {islandPostion} 
        scale = {islandScale} 
        rotation = {islandRotation}
        isRotating = {isRotating}
        setIsRotating = {setIsRotating}
        />
        <Plane
          isRotating = {isRotating}
          planeScale ={planeScale}
          PlanePostion = {planePosition}
          rotation = {[0,10,0]}
        />
        </Suspense>
      </Canvas>
    </section>
  )
}

export default Home