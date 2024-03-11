import React from 'react'
import { Route,Routes} from 'react-router-dom'
import Home from '../component/Home'
import StateComp from '../component/StateComp'
import EffectComp from '../component/EffectComp'
import Pnf from '../component/Pnf'
import Ex1 from '../screens/Ex1'
import Ex2 from '../screens/Ex2'
import Ex3 from '../screens/Ex3'
import Ex4 from '../screens/Ex4'
import Ex5 from '../screens/Ex5'


function ContainerComp() {
  return (
    <Routes>
        <Route path={`/`} element={<Home/>}/>
        <Route path={`/hooks/state`} element={<StateComp/>}>
            {/*nested route*/}
            <Route path={`useState`} element={<Ex1/>}/>
            <Route path={`useReducer`} element={<Ex2/>}/>

        </Route>
        <Route path={`/hooks/effect`} element={<EffectComp/>}>
          <Route path={`useEffect`} element={<Ex3/>}/>
          <Route path={`useEffect/2`} element={<Ex5/>} />
          <Route path={`useLayoutEffect`} element={<Ex4/>}/>
            </Route>
        <Route path={`/*`} element={<Pnf/>}/>

    </Routes>
  )
}

export default ContainerComp