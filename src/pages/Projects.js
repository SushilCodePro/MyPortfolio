import style from '../style/style.module.css'
function Projects() {
    return (
      <>
        <div className={style.ProContainer}>
          
            <div className={style.Project}>
              <h2>E-Commerce App</h2>
              <p>React.js, Firebase Store for Real Time Database, Netlify</p>
              <a
              href="/kkk"
              target="_blank"
              rel="noopener noreferrer"
              >
                <button className={style.projectButton}>Code Link</button>
              </a>
              <a
              href="/kkk"
              target="_blank"
              rel="noopener noreferrer"
              >
                <button className={style.projectButton}>Live Project</button>
              </a>
            </div>
            <div className={style.Project}>
              
            </div>
            <div className={style.Project}>
              
            </div>
            <div className={style.Project}>
              
            </div>
            <div className={style.Project}>
              
            </div>
            <div className={style.Project}>
              
            </div>

          </div>
      </>
    );
  }
  
  export default Projects;