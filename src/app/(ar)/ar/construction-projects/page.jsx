// Route (Arabic): /ar/construction-projects
import ProjectsHub from "@/site-pages/projects/ProjectsHub";
import { hubMeta } from "@/lib/projectMeta";

export const metadata = hubMeta("ar");

export default function Page() {
  return <ProjectsHub />;
}
