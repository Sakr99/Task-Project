import { useState, useEffect } from "react";
import NewProject from "./components/NewProject";
import NoProjcetsSelected from "./components/NoProjcetsSelected";
import ProjectSidebar from "./components/ProjectSidebar";
import SelectedProjecet from "./components/SelectedProject";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  // حفظ البيانات في الـ Local Storage
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    const storedProjects = JSON.parse(localStorage.getItem("projects"));

    if (storedTasks) {
      setProjectState((prevState) => ({
        ...prevState,
        tasks: storedTasks,
      }));
    }

    if (storedProjects) {
      setProjectState((prevState) => ({
        ...prevState,
        projects: storedProjects,
      }));
    }
  }, []);

  // حفظ التحديثات في الـ Local Storage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(projectState.tasks));
    localStorage.setItem("projects", JSON.stringify(projectState.projects));
  }, [projectState.tasks, projectState.projects]);

  const handleAddTask = (text) => {
    setProjectState((prevState) => {
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

  const handleDeleteTask = (id) => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id),
      };
    });
  };

  const handleSelectProject = (id) => {
    setProjectState((prevState) => {
      return { ...prevState, selectedProjectId: id };
    });
  };

  const handleStartAddProject = () => {
    setProjectState((prevState) => {
      return { ...prevState, selectedProjectId: null };
    });
  };

  const handleCancelAddProject = () => {
    setProjectState((prevState) => {
      return { ...prevState, selectedProjectId: undefined };
    });
  };

  const handleDeleteProject = () => {
    setProjectState((prevState) => {
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
    setProjectState((prevState) => {
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
      onDleted={handleDeleteProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={projectState.tasks}
    />
  );

  if (projectState.selectedProjectId === null) {
    content = (
      <NewProject onAdd={handleAddProject} onCansel={handleCancelAddProject} />
    );
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjcetsSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar
        onSelectProject={handleSelectProject}
        projects={projectState.projects}
        onStartAddProject={handleStartAddProject}
        selectedProjectId={projectState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
