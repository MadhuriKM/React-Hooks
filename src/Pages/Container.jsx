import React from 'react'
import { Route,Routes} from 'react-router-dom'
import Home from '../component/Home'
import StateComp from '../component/StateComp'
import EffectComp from '../component/EffectComp'
import Pnf from '../component/Pnf'
import Ex1 from '../screens/Ex1'
import Ex2 from '../screens/Ex2'


function ContainerComp() {
  return (
    <Routes>
        <Route path={`/`} element={<Home/>}/>
        <Route path={`/hooks/state`} element={<StateComp/>}>
            {/*nested route*/}
            <Route path={`useState`} element={<Ex1/>}/>
            <Route path={`useReducer`} element={<Ex2/>}/>

        </Route>
        <Route path={`/hooks/effect`} element={<EffectComp/>}/>
        <Route path={`/*`} element={<Pnf/>}/>

    </Routes>
  )
}

export default ContainerComp