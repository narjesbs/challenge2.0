import me from "../images/John-Doe.jpg";
function About({info}) {
  console.log(info)
  return(
  <div>
    <section id="about-me">
      <h1>
        Hello, my name is
        <span class="rotate text-important">{info.name} {info.lastname}</span>,<br />
        and i make horrible websites.
      </h1>
      <img class="avatar" src={me} alt="jhon-doe" />
    </section>
  </div>
  );
  
}
export default About;