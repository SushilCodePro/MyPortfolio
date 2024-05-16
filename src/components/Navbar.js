import { Link } from 'react-router-dom';
import style from '../style/style.module.css'

function Navbar({setStatus}) {

  // const handleDownload = () => {
    // Replace the Google Drive file ID with your own file ID
    // const googleDriveFileId = '1WlsgObhoBRr9dq7LErrOTdkUZvA_Vw_V';
    // const downloadLink = document.createElement('a');

    // Construct the Google Drive file URL
    // const googleDriveFileUrl = `https://drive.google.com/uc?id=${googleDriveFileId}`;

    // downloadLink.href = googleDriveFileUrl;
    // window.open(googleDriveFileUrl, '_blank');
    // downloadLink.target = '_blank'; // Open in a new tab/window
    // downloadLink.rel = 'noopener noreferrer'; // Security best practice
    // downloadLink.click();
  // };

  return (
      <>
        <div className={style.navbar}>
          <div className={style.navLeft}>
            <Link to={`/`} className={style.linktext}>Sushil's Portfolio</Link>
          </div>
          <div className={style.navRight}>
            {/* <Link to={`/`} className={style.linktext}>Home</Link> */}
            <Link to={`/Projects`} className={style.linktext}>Projects</Link>
            <Link to={`/Skills`} className={style.linktext}>Skill</Link>
            <Link to={`/Experience`} className={style.linktext}>Experience</Link>
            <Link to={`/Certificates`} className={style.linktext}>Certificate</Link>
            <Link to={`/Education`} className={style.linktext}>Education</Link>
            <Link to={`/Contact`} className={style.linktext}>Contact</Link>
          </div>
          
        </div>
      </>
    );
  }
  
  export default Navbar;