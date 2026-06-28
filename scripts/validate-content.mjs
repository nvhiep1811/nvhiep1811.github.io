import fs from 'fs';
import path from 'path';

const SRC_DIR = path.join(process.cwd(), 'src');
const PUBLIC_DIR = path.join(process.cwd(), 'public');
const PROFILE_PATH = path.join(SRC_DIR, 'data', 'profile.ts');
const PROJECTS_PATH = path.join(SRC_DIR, 'data', 'projects.ts');
const CV_PATH = path.join(PUBLIC_DIR, 'CV_NguyenVoHiep_BackendDeveloper.pdf');
const NOJEKYLL_PATH = path.join(PUBLIC_DIR, '.nojekyll');

const errors = [];

// 1. Check if public/.nojekyll exists
if (!fs.existsSync(NOJEKYLL_PATH)) {
  errors.push("Missing public/.nojekyll file.");
}

// 2. Check if CV PDF exists
if (!fs.existsSync(CV_PATH)) {
  errors.push(`Missing CV PDF at ${CV_PATH}`);
}

// 3. Read profile.ts to validate email
if (fs.existsSync(PROFILE_PATH)) {
  const profileContent = fs.readFileSync(PROFILE_PATH, 'utf-8');
  if (!profileContent.includes('nguyenvohiep.29122004@gmail.com')) {
    errors.push("Official email nguyenvohiep.29122004@gmail.com is missing in profile.ts");
  }
  if (profileContent.includes('@student.iuh.edu.vn') || profileContent.includes('university email')) {
    errors.push("Old university email found in profile.ts");
  }
  if (profileContent.includes('gmai.com')) {
    errors.push("Typo 'gmai.com' found in profile.ts");
  }
} else {
  errors.push("profile.ts is missing.");
}

// 4. Validate projects.ts
if (fs.existsSync(PROJECTS_PATH)) {
  const projectsContent = fs.readFileSync(PROJECTS_PATH, 'utf-8');
  if (projectsContent.includes('lorem ipsum') || projectsContent.includes('placeholder')) {
    errors.push("Placeholder text found in projects.ts");
  }
  if (projectsContent.includes('http://')) {
    errors.push("Insecure HTTP link found in projects.ts, HTTPS is required.");
  }
} else {
  errors.push("projects.ts is missing.");
}

if (errors.length > 0) {
  console.error("Content validation failed with the following errors:");
  errors.forEach(err => console.error(`- ${err}`));
  process.exit(1);
} else {
  console.log("Content validation passed!");
}
