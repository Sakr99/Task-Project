import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjcetsSelected from "./components/NoProjcetsSelected";
import ProjectSidebar from "./components/ProjectSidebar";
import SelectedProjecet from "./components/SelectedProject";

function App() {
  const [projectState, setprojectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });
  const handleAddTask = (text) => {
    setprojectState((prevState) => {
      const taskId = Math.random();
      const newTask = {
        text: text,
        projectId: prevState.selectedProjectId,
        id: taskId,
      };
      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks],
      };
    });
  };
  const handleDleleteTask = (id) => {
    setprojectState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id),
      };
    });
  };
  const handleSelectProject = (id) => {
    setprojectState((prevState) => {
      return { ...prevState, selectedProjectId: id };
    });
  };
  const handleStartAddProject = () => {
    setprojectState((prevState) => {
      return { ...prevState, selectedProjectId: null };
    });
  };

  const handleCanselAddProject = () => {
    setprojectState((prevState) => {
      return { ...prevState, selectedProjectId: undefined };
    });
  };

  const handleDletedProject = () => {
    setprojectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedProjectId
        ),
      };
    });
  };

  const handleAddProject = (projectData) => {
    setprojectState((prevState) => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId,
      };
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  };

  const selectedProject = projectState.projects.find(
    (project) => project.id === projectState.selectedProjectId
  );

  let content = (
    <SelectedProjecet
      project={selectedProject}
      onDleted={handleDletedProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDleleteTask}
      tasks={projectState.tasks}
    />
  );
  if (projectState.selectedProjectId === null) {
    content = (
      <NewProject onAdd={handleAddProject} onCansel={handleCanselAddProject} />
    );
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjcetsSelected onStartAddProject={handleStartAddProject} />;
  }
  console.log(projectState);
  return (
    <>
      <main className="min-h-screen my-8 flex flex-col md:flex-row gap-4 md:gap-8 px-4">
        <ProjectSidebar
          onSelectProject={handleSelectProject}
          projects={projectState.projects}
          onStartAddProject={handleStartAddProject}
          selectedProjectId={projectState.selectedProjectId}
        />
        {content}
      </main>
    </>
  );
}

export default App;
