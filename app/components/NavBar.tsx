'use client'

export default function Navbar() {

  return (
    <header>
      <img src="Img/images__1_-removedbg-preview.png" alt="Logo" width="100" />
      <h1>Infot beebide ja väikelaste kohta</h1>
      <div className="emergency-box">
        Hospital <br></br>
        Hädaabi number: <a className="color-white underline-none" href="tel:+112"><span>112</span></a> <br></br>
        Perearsti infotelefon: <a className="color-white underline-none" href="tel:+1220"><span>1220</span></a>
      </div>
    </header>
  );
}