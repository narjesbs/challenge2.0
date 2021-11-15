function Navigation({info}) {
    return(
    <div>
      <header>
        <h1>{info.name} {info.lastname}</h1>
        <h1></h1>
        <ul class="navmenu">
          <li><a href="#">About</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </header>
    </div>
    ); 
  }
  export default Navigation;
   