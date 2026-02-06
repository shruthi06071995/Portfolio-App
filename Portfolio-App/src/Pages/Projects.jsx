import ProjectCard from "../Components/ProjectCard";

function Projects() {
    return (
        <div className="container mt-5">
            <h2>Projects</h2>

            <div className="row">
                <div className="col-md-4">
                    <ProjectCard
                        title="Todo App"
                        desc="Add, delete and manage tasks"
                        tech="React, useState"
                        link="https://github.com/shruthi06071995"
                    />
                </div>

                <div className="col-md-4">
                    <ProjectCard
                        title="User List"
                        desc="Fetch and display users from API"
                        tech="React, useEffect, API"
                        link="https://github.com/shruthi06071995"
                    />
                </div>
            </div>
        </div>
    );
}
export default Projects;
