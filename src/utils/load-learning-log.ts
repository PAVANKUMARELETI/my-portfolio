import fs from 'fs';
import path from 'path';


export interface LearningLog {
  title: string;
  date: string;
  content: string;
}

export const getLearningLog = (): LearningLog => {
  const filePath = path.join(process.cwd(), 'src', 'content', 'learning-log.md');
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  return {
    title: data.title || '',
    date: data.date || '',
    content,
  };
};
