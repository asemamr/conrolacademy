// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import path from "path";
import fs from "fs";
import glob from "glob";
import matter from "gray-matter";
import { comments } from "../../../comments";

const POSTS_PATH = path.join(process.cwd(), "posts");


export function getSlugs() {
  
  const paths = glob.sync(`${POSTS_PATH}/*.mdx`.replaceAll("\\", "/"));
 
  return paths.map(path => {
    const parts = path.split("/");
    const fileName = parts[parts.length - 1];
    const [slug, _ext] = fileName.split(".");
    return slug;
  })
}

export function getAllPosts() {
  const posts = getSlugs().map(slug => getPostFromSlug(slug));
  return posts
}

export function getPostFromSlug(slug) {
  const postPath = path.join(POSTS_PATH, `${slug}.mdx`);
  const source = fs.readFileSync(postPath);
  const { data, content } = matter(source);
  
  return {
    meta: {
      title: data.title,
      layout: data.layout,
      fileName: data.fileName,
      writer: data.writer,
      date: data.date
    },
    content
  }
}