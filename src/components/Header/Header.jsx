import Bubble from '../Bubble/Bubble'
const Header = ()=>{
    return (
        <nav className="navbar navbar-expand-lg bg-dark-blue">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"> <Bubble/></a>
    <div className='col-4'></div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active white" aria-current="page" href="#">HOME</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active white" aria-current="page" href="#">ABOUT</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active white" aria-current="page" href="#">MY SKILLS</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active white" aria-current="page" href="#">PORTFOLIO</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active white" aria-current="page" href="#">CONTACT</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
}


export default Header