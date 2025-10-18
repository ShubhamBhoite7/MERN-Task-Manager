import { Container } from "@mui/material";
import { Nav } from "./components/AppBar.jsx";
import { TaskManager } from "./components/TaskManager.jsx";
import TaskModal from "./components/TaskModal.jsx";
import TaskTable from "./components/TaskTable.jsx";

function App() {
  return (
    <>
      <Nav />
      <Container maxWidth="lg">
        <TaskManager />
      </Container>
    </>
  );
}

export default App;
