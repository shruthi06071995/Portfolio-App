function ProjectCard({ title, desc, tech, link }) {
  return (
    <div className="card p-3">
      <h5>{title}</h5>
      <p>{desc}</p>
      <p><b>Tech:</b> {tech}</p>
      <a href={link} target="_blank">GitHub</a>
    </div>
  );
}
export default ProjectCard;
