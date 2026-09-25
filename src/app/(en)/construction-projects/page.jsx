// Route (English): /construction-projects
import ProjectsHub from "@/site-pages/projects/ProjectsHub";
import { hubMeta } from "@/lib/projectMeta";

export const metadata = hubMeta("en");

export default function Page() {
  return <ProjectsHub />;
}
