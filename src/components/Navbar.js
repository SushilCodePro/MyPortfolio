import style from '../style/style.module.css'

function Navbar({setStatus}) {
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
          <h1 onClick={()=>setStatus('Home')}>Home</h1>
          <h1 onClick={()=>setStatus('About')}>About</h1>
          <h1 onClick={()=>setStatus('Items')}>Items</h1>
          <button onClick={handleDownload}>Download Resume</button>
        </div>
      </>
    );
  }
  
  export default Navbar;