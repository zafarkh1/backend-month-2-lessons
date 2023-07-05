import express from "express";
import { schemaValidate } from "../middlewares/schema-validate.middleware.js";
import { courseSchema } from "../schema/course.schema.js";
import CourseController from "../controller/course.controller.js";

const router = express.Router();

 router
 .get(
  "/course/list",
  CourseController.getCourseList
)
 .post(
  "/course",
  schemaValidate(courseSchema),
  CourseController.createCourse
);

export default router;