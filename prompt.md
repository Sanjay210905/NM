AIM:
To understand and perform essential Git operations such as configuring Git, creating a local repository, staging files, committing changes, connecting to a remote repository, and pushing code to GitHub for version control in the DevOps workflow.

PROCEDURE:

1. Installing and Configuring Git:
   a. Git installation was verified using the command git --version.
   b. The global username and email required for commit identification were configured using:
   • git config --global user.name "<username>"
   • git config --global user.email "<email>"
   c. Configuration was checked by executing git config --list.

---

2. Creating a Local Repository:
   a. A new project directory was created and navigated into using the command prompt.
   b. Git initialization was performed using the command git init, which created a hidden .git folder enabling version control.
   c. Repository status was checked using git status.

---

3. Staging and Committing Files:
   a. A sample file (e.g., index.html or main.java) was created inside the project directory.
   b. The file was added to the staging area using git add <filename>.
   c. The changes were committed to the repository with the command:
   git commit -m "Initial commit"
   d. The commit was verified using git log.

---

4. Connecting to a Remote Repository:
   a. A new empty repository was created in GitHub.
   b. The remote URL was added to the local repository using:
   git remote add origin <GitHub-repo-URL>
   c. The connection was confirmed with:
   git remote -v

---

5. Pushing Local Code to GitHub:
   a. The branch name was set to main if required using git branch -M main.
   b. The local commit was pushed to GitHub using the command:
   git push -u origin main
   c. GitHub was opened to confirm that all files were successfully uploaded.

RESULT:
The basic Git workflow was successfully demonstrated. The local repository was created, files were staged and committed, a remote GitHub repository was linked, and the project files were pushed successfully. This completes the version control setup required for the DevOps lab environment.
