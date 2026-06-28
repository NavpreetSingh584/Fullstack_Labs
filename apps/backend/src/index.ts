import express from "express";
import cors from "cors";
import employeeRoutes from "./routes/employeeRoutes";
import organizationRoutes from "./routes/organizationRoutes";

const app = express();
const PORT = 4000;

// Allow requests from the frontend only
app.use(cors({
  origin: ["http://localhost:5173", "http://localhost:5174"],
}));

app.use(express.json());

app.use("/employees", employeeRoutes);
app.use("/organization", organizationRoutes);

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});