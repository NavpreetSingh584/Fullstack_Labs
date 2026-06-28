import { Request, Response } from "express";
import employeeService from "../services/employeeService";

const employeeController = {
  getDepartments(req: Request, res: Response) {
    const departments = employeeService.getDepartments();
    res.json(departments);
  },

  createEmployee(req: Request, res: Response) {
    const { firstName, lastName, departmentName } = req.body;

    if (!firstName || !lastName || !departmentName) {
      res.status(400).json({ error: "Missing required fields." });
      return;
    }

    const result = employeeService.createEmployee(
      firstName,
      lastName,
      departmentName
    );

    if (!result.success) {
      res.status(400).json({ errors: result.errors });
      return;
    }

    res.status(201).json(result.departments);
  },
};

export default employeeController;