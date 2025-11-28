import {
  Routes,  
  Route,   
  BrowserRouter,
} from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { LeaveRequest } from "./pages/LeaveRequest";
import Layout from "./components/Layout";
import { PayrollGeneration } from "./pages/PayrollGeneration";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/leave-request" element={<LeaveRequest />} />
          <Route path="/payroll/generate" element={<PayrollGeneration />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;