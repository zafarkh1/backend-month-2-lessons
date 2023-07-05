import { readFileCustom } from "../helpers/read-helper.js";
import { writeFileCustom } from "../helpers/write-helper.js";

class CourseController {
  getCourseList(_, res) {
    const courseList = readFileCustom("courses.json");
    res.json(courseList);
  }

  createCourse(req, res) {
    const { title, price } = req.body;

    const courseList = readFileCustom("courses.json");

    courseList.push({
      id: courseList.at(-1)?.id + 1 || 1,
      title,
      price,
    });

		writeFileCustom('courses.json', courseList)
    res.status(201).json({
			message: 'Created'
		});
  }
}

export default new CourseController();
