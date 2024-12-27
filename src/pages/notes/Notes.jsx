import React from "react";
import ReactMarkdown from "react-markdown";

const notes = [
  {
    id: 1,
    title: "Github Commands",
    content: `# Git Commands
## Basic Commands
- **To create a directory**: 
  \`mkdir 'Directory name'\`
- **To open VS Code**: 
  \`code .\`

- **In VS Code terminal**:
  - \`git init\` — Initializes the current directory as a Git repository.
  - \`git diff\` — Shows what has changed in the repository.
  - \`git add <file name>\` — Adds specific files to track.
  - \`git add .\` — Adds all files to be tracked.
  - \`git commit -m "message"\` — Commits the changes with a message.
  - \`git log\` — Shows the commit history.
  - \`git log --oneline\` — Shows the commit history in a condensed format (commit ids).
  - \`git show <Commit id>\` — Shows details of a specific commit.
  - \`git blame <file name>\` — Shows who last modified each line of a file.
  - \`git rm <file path>\` — Removes a file from version control.
  - \`git status\` — Shows the current status of the repository.
  - \`git reset --hard <commit id>\` — Reverts to a previous commit and resets the working directory.
  - \`git revert <commit id>\` — Creates a new commit that undoes the changes of a previous commit.

## Connecting Local Code to GitHub

- **To connect your local code to a GitHub repository**:
  \`git remote add origin <GitHub repo link>\`

- **Branch Commands**:
  - \`git branch <branch name>\` — Creates a new branch.
  - \`git checkout <branch name>\` — Switches to the specified branch.
  - \`git push --set-upstream origin <branch name>\` — Pushes the branch to GitHub.
  - \`git merge origin/<branch name>\` — Merges the changes from the remote branch to your local branch.
  - \`git push -u <branch name>\` — Pushes the current branch to GitHub.

## Example Git Workflow

1. Create a new branch:
   \`git checkout -b jivisha2\`
2. Add changes to the staging area:
   \`git add .\`
3. Commit changes:
   \`git commit -m "message"\`
4. Push the branch to GitHub:
   \`git push --set-upstream origin jivisha2\`
5. Switch to the master branch:
   \`git checkout master\`
6. Merge the changes from the remote branch to master:
   \`git merge origin/jivisha2\`
`,
  },
  {
    id: 2,
    title: "React with TypeScript",
    content: `# React with TypeScript

- **Create a new Vite project**:
  \`npm create vite@latest\`
  - Give project name, select framework, select variant (js, ts)

- **Install dependencies**:
  \`npm i\`

- **Open project in VS Code**:
  \`code .\`

- **Project structure**:
  - \`node_modules\`: Contains all dependencies (no need to touch this file)
  - \`src\`: Contains \`App.tsx\` which is our main app
  - \`index.html\`: Main HTML file

- **Start the development server**:
  \`npm run dev\`
  - Run this command in VS Code terminal, this will start a localhost server

- **File extensions**:
  - \`.ts\` for plain TypeScript files
  - \`.tsx\` for React components
`,
  },
  {
    id: 3,
    title: "Golang Basics",
    content: "Golang basics notes here...",
  },
  // Add more notes as necessary
];

const Notes = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-8 text-stone-600">My Notes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {notes.map((note) => (
          <div key={note.id} className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-stone-700 mb-4">{note.title}</h2>
            <ReactMarkdown className="text-stone-600">{note.content}</ReactMarkdown>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notes;