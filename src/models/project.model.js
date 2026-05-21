import db from "../config/db.js";

const findAll = async () => {
  const sql = "SELECT * FROM projects ORDER BY created_at DESC";
  const [result] = await db.query(sql);
  return result;
};
const findById = async (id) => {
  const sql = "SELECT * FROM projects WHERE id = ?";
  const [result] = await db.query(sql, [id]);
  return result;
};
const create = async ({
  title,
  description,
  tech_stack,
  github_url,
  demo_url,
  image_url,
  text_one,
  text_two,
  video_url,
  picture_1,
  picture_2,
  picture_3,
  picture_4
}) => {

  const sql = `
    INSERT INTO projects (
      title,
      description,
      tech_stack,
      github_url,
      demo_url,
      image_url,
      text_one,
      text_two,
      video_url,
      picture_1,
      picture_2,
      picture_3,
      picture_4
    ) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  const [result] = await db.query(sql, [
    title,
    description,
    tech_stack,
    github_url,
    demo_url,
    image_url,
    text_one,
    text_two,
    video_url,
    picture_1,
    picture_2,
    picture_3,
    picture_4
  ]);

  return result;
};
const update = async (
  id,
  {
    title,
    description,
    tech_stack,
    github_url,
    demo_url,
    image_url,
    text_one,
    text_two,
    video_url,
    picture_1,
    picture_2,
    picture_3,
    picture_4,
  },
) => {
  const sql = `
    UPDATE projects 
    SET 
      title=?,
      description=?,
      tech_stack=?,
      github_url=?,
      demo_url=?,
      image_url=?,
      text_one=?,
      text_two=?,
      video_url=?,
      picture_1=?,
      picture_2=?,
      picture_3=?,
      picture_4=?
    WHERE id=?
  `;

  const result = await db.query(sql, [
    title,
    description,
    tech_stack,
    github_url,
    demo_url,
    image_url,
    text_one,
    text_two,
    video_url,
    picture_1,
    picture_2,
    picture_3,
    picture_4,
    id,
  ]);

  return result;
};
const remove = async (id) => {
  const sql = "DELETE FROM projects WHERE id = ?";
  const [result] = await db.query(sql, [id]);
  return result;
};

export default {
  findAll,
  findById,
  create,
  update,
  remove,
};
