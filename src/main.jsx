import { createRoot } from 'react-dom/client'
import './index.css'
import DemoSetEffect from './views/DemoSetEffect'
import DemoSetRef from './views/DemoSetRef'
import DemosetRef2 from './views/DemoSetRef2'
import DemoSetMemo from './views/DemoSetMemo'

// import { CountdownTimer } from './views/DemoTimer'
const root = createRoot(document.getElementById('root'))
root.render(
  <>
    <DemoSetMemo></DemoSetMemo>
  </>
)


// import DemoUseState from './views/DemoUseState'
// const root = createRoot(document.getElementById('root'))
// root.render(
//   <>
//     <DemoUseState></DemoUseState>
//   </>
// )


// import DemoSetState from './views/DemoSetState'
// const root = createRoot(document.getElementById('root'))
// root.render(
//   <>
//     <DemoSetState></DemoSetState>
//   </>
// )


// import DemoRefCom from './views/DemoRefCom'
// const root = createRoot(document.getElementById('root'))
// root.render(
//   <>
//     <DemoRefCom></DemoRefCom>
//   </>
// )

// import DemoRef from './views/DemoRef'
// const root = createRoot(document.getElementById('root'))
// root.render(
//   <>
//     <DemoRef></DemoRef>
//   </>
// )

// import DemoPureComponent from './views/DemoPureComponent'
// const root = createRoot(document.getElementById('root'))
// root.render(
//   <>
//     <DemoPureComponent></DemoPureComponent>
//   </>
// )

// import VoteStatic from './views/Vote-static'
// const root = createRoot(document.getElementById('root'))
// root.render(
//   <>

//     <VoteStatic></VoteStatic>
//   </>
// )

// import Vote from './views/Vote'
// const root = createRoot(document.getElementById('root'))
// root.render(
//   <>
//     <Vote title="其实react还是很好学的！!"></Vote>
//   </>
// )

// import Vote from './views/Vote-static'
// const root = createRoot(document.getElementById('root'))
// root.render(
//   <>
//     <Vote title="React还是很好学的"></Vote>
//   </>
// )

// import Dialog from './components/Dialog.jsx'
// const root = createRoot(document.getElementById('root'))
// root.render(
//   <>
//     <Dialog title="友情提示" content="请大家出门做好个人防护！"></Dialog>

//     <Dialog content="我们一定好好学React">
//       <button>确定</button>
//       <button>很确定</button>
//     </Dialog>
//   </>

// )


// import DemoOne from './views/DemoOne.jsx'
// const root = createRoot(document.getElementById('root'))
// root.render(
//   <>
//     <DemoOne title="React好好玩" x={10}>
//       <span slot="footer">我是页脚</span>
//       <span>我是中间的</span>
//       <span slot="header">我是页眉</span>
//     </DemoOne>

//     <DemoOne title="第二个实例">
//       <span>xixi</span>
//     </DemoOne>

//     <DemoOne />
//   </>
// )
