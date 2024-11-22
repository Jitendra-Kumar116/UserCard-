import React from 'react'
import UserCard from './components/UserCard'
import Jit from './assets/about_me.jpg'
import Jit1 from './assets/img2.jpg'
import Jit2 from './assets/im3.jpg'

function App() {
  return (
    <div className='container'>
      <UserCard name="Jitendra Kumar" desc="Description 1" image={Jit} style={{borderRadius:"10px"}}/>
      <UserCard name="Jitendra Kumar 2" desc="Description 2" image={Jit1} style={{borderRadius:"10px"}}/>
      <UserCard name="Jitendra Kumar 3" desc="Description 3"image={Jit2} style={{borderRadius:"10px"}}/>
    </div>
  )
}

export default App
