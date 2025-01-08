import { useState } from "react";
import NoProject from "../noProject/NoProject";
import Sidebar from "../sidebar/Sidebar";
import NewProject from "../newProject/NewProject";
import Project from "../project/Project";

export default function Master() {
  const [projectsState, setProjectsState] = useState({
    projects: [],
    selectedProject: undefined,
  });
  const setAddProject = () => {
    setProjectsState((prevState) => ({ ...prevState, selectedProject: null }));
  };
  const handleCancel = () => {
    setProjectsState((prevState) => ({
      ...prevState,
      selectedProject: undefined,
    }));
  };

  const getAddedProject = (newpro) => {
    setProjectsState((prevState) => ({
      projects: [...prevState.projects, newpro],
      selectedProject: undefined,
    }));
  };

  const getDetails = (id) => {
    setProjectsState((prevState) => ({
      ...prevState,
      selectedProject: id,
    }));
  };

  const handleBack = () => {
    setProjectsState((prevState) => ({
      ...prevState,
      selectedProject: undefined,
    }));
  };

  const handleDelete = (id) => {
    const toBeDeleted = projectsState.projects.findIndex(
      (project) => project.id == id
    );
    let newState;
    setProjectsState((prev) => (
       {...prev,selectedProject:undefined}
    ));
    console.log(projectsState)
  };
  
  let content;
  if (projectsState.selectedProject === undefined) {
    content = <NoProject setAddProject={setAddProject} />;
  } else if (projectsState.selectedProject === null) {
    content = (
      <NewProject
        handleCancel={handleCancel}
        getAddedProject={getAddedProject}
      />
    );
  } else {
    const selectedCurrentProject = projectsState.projects.findIndex(
      (project) => project.id === projectsState.selectedProject
    );
    content = (
      <Project
        project={projectsState.projects[selectedCurrentProject]}
        projectsState={projectsState}
        handleBack={handleBack}
        handleEdit=""
        handleDelete={handleDelete}
      />
    );
  }

  return (
    <div className="flex gap-4 items-center my-10 h-screen">
      <Sidebar
        setAddProject={setAddProject}
        projects={projectsState.projects}
        getDetails={getDetails}
      />
      {content}
    </div>
  );
}
