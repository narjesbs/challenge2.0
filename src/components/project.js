import ProjectCardPage from "./projectsCard";
function Project ({data}) {

  return(
<div>
<section id="projects">
      <h2 class="text-important">Projects</h2>
      <div class="projects-container">
        {
          data.map(el=> <ProjectCardPage  el={el} />   )
        }
      </div>
    </section>
  </div>
  );
  
}
export default Project;
