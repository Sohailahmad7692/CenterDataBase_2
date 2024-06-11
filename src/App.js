import "./styles.css";
import NavigationDrawer from "./component/NavigationDrawer.tsx";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./component/dashboard";
import Student from "./component/Student.tsx";
import Batches from "./component/Batches.tsx";
import FormAddStudent from "./component/FormAddStudent";
export default function App() {
  return (
    <Router>
      <div className="App">
        <NavigationDrawer />
        <Routes>
          <Route exact path="/dashboard" element={<Dashboard />}></Route>
          <Route exact path="/student" element={<Student />}></Route>
          <Route exact path="/batches" element={<Batches />}></Route>
          <Route exact path="/addStudent" element={<FormAddStudent />}></Route>
        </Routes>
      </div>
    </Router>
  );
}
