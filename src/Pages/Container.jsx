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
import Ex6 from '../screens/Ex6'
import Ex7 from '../screens/Ex7'
import Ex8 from '../screens/Ex8'
import Ex9 from '../screens/Ex9'
import RefComp from '../component/RefComp'
import PerformComp from '../component/PerformComp'
import ContextComp from '../component/ContextComp'


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
        <Route path={`/hooks/ref`} element={<RefComp/>}>
          <Route path={`useRef`} element={<Ex6/>} />
        </Route>
       
        <Route path={`/hooks/perform`} element={<PerformComp/>}>
        <Route path={`useCallback`} element={<Ex7/>}/>
        <Route path={`useMemo`} element={<Ex8/>}/>
        </Route>
        
        <Route path={`/hooks/context`} element={<ContextComp/>}>
        <Route path={`useContext`} element={<Ex9/>}/>
        <Route/>
        </Route>
        <Route path={`/*`} element={<Pnf/>}/>

    </Routes>
  )
}

export default ContainerComp