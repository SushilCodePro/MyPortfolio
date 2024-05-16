import style from '../style/style.module.css'
function Home() {

  const handleDownload = () => {
    // Replace with the actual GitHub raw content URL of your resume PDF
    // const gitHubURL='https://github.com/SushilCodePro/ResumePDF/blob/main/Sushil_Resume_11_01.pdf'

    const githubRawUrl = 'https://raw.githubusercontent.com/SushilCodePro/ResumePDF/main/Sushil_Resume_16_01.pdf';
    // window.open(githubRawUrl, '_blank');
    const downloadLink = document.createElement('a');
    downloadLink.href = githubRawUrl;
    downloadLink.download = `resume.pdf`;

  //   // Triggering the click event to start the download
    downloadLink.click();
  };
    return (
      <>
        <div className={style.home}>
          <div className={style.homeleft}>
            <h1>Hi, My Name is SHL and I am a Full Stack Developer</h1>
            <button onClick={handleDownload} className={style.downloadButton}>
              Download Resume
            </button>
            <a
              href="https://github.com/SushilCodePro"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className={style.downloadButton}>GitHub</button>
            </a>
          </div>
          <div className='homeright'>
            <img 
            src='https://www.optimalvirtualemployee.com/wp-content/uploads/2022/12/Web-Developer-skill.jpg'
            alt='Develop pic'
            className={style.devpic}
            />
          </div>
          
        </div>
      </>
    );
  }
  
  export default Home;