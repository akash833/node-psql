import client from "../config/database";
import { Request, Response } from "express";
export const getUsers = async (req: Request, res: Response) => {
  try {
    const query = "Select * from users";
    const result = await client.query(query);
    res.json({
      success: true,
      message: "user data",
      data: result,
    });
  } catch (err) {
    res.json({
      message: "Server error",
      success: false,
    });
  }
};
