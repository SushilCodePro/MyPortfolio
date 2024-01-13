import style from '../style/style.module.css'

function Navbar({setStatus}) {
    return (
      <>
        <div className={style.navbar}>
          <h1 onClick={()=>setStatus('Home')}>Home</h1>
          <h1 onClick={()=>setStatus('About')}>About</h1>
          <h1 onClick={()=>setStatus('Items')}>Items</h1>
        </div>
      </>
    );
  }
  
  export default Navbar;