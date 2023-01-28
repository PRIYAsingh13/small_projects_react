import React from 'react'




const SlotM = ( props) => {
  // let x = '😄';
  // let y = '😄';
  // let z = '👳';
// let x = props.x;
// let y = props.y;
// let z = props.z;

let {x,y,z} = props;


  if((x===y) && (y===z)){
    return(
      <>
      <div className='slot_inner'>
        <h1>
          {x}{y}{z}
        </h1>
        <h1> this is matching</h1>
      </div>
      </>
    );
  }else{
    return(
      <>
      <div className='slot_inner'>
        <h1>
          {x}{y}{z}
        </h1>
        <h1> this is  not matching</h1>
      </div>
      </>
    );
  }

}

const App = () => {
  return (
    <div>
      
      <h1 className='heading_style'> 🎰 Welcome to <span style = {{fontWeight:"bold"}}> Slot machine game</span> 🎰</h1>
   <div className='slotmachine'>
    <SlotM x = '😄' y = '😄' z = '😄'/>
    <SlotM x = '🍎' y = '😄' z = '👍'/>
    <SlotM x = '🍒' y = '🍰' z = '😄'/>

</div>
    </div>
  )
};

export default App;
