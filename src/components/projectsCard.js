
function ProjetCarte ({el}) {

    return(
  <div>
<div class="project-card">
          <img src= {el.image} alt="project" />
          <h3>{el.name}</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus ex natus quis beatae perspiciatis repellat laudantium
            aliquam.
          </p>
          <p><a href="#">Github Link</a></p>
        </div>
        </div>
  );
  
}
export default ProjetCarte;