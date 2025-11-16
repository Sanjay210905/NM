# Git Lab: Step-by-step + Screenshot Checklist

This guide maps exactly to `prompt.md` and tells you which terminal output to capture as screenshots for your lab submission.

> Use Windows PowerShell in this folder: `c:\Users\kings\OneDrive\Documents\NM projects\exp2`.

## 1) Install and Configure Git

```powershell
# Verify Git is installed
git --version

# Set your identity (replace with your real details)
git config --global user.name "<Your Name>"
git config --global user.email "<you@example.com>"

# Verify configuration
git config --list
```

Screenshot: the output of `git --version` and a snippet of `git config --list` showing `user.name` and `user.email`.

---

## 2) Create a Local Repository

```powershell
# Initialize repository (run inside the project folder)
git init

# Verify repo state
git status
```

Screenshot: `git init` confirming initialization and `git status` showing branch and file state.

---

## 3) Stage and Commit Files

A sample `index.html` is already provided. If you edit it, it will show up as modified.

```powershell
# Stage all files
git add .

# Commit the staged changes
git commit -m "Initial commit"

# Verify commit history
git log --oneline
```

Screenshot: `git add` (no output is fine), the successful `git commit`, and `git log --oneline` showing the commit hash and message.

---

## 4) Connect to a Remote Repository (GitHub)

First, create an empty repo on GitHub (no README). Then add its URL here.

```powershell
# Replace with your repo URL (HTTPS or SSH)
$REPO = "https://github.com/<you>/<repo>.git"

git remote add origin $REPO

# Verify remotes
git remote -v
```

Screenshot: `git remote -v` showing `origin` for fetch and push.

---

## 5) Push Local Code to GitHub

```powershell
# Ensure branch name is main
git branch -M main

# Push to GitHub (first push sets upstream)
git push -u origin main
```

Screenshot: the `git push` output ending with `main -> main` and the upstream set.

Finally, open your GitHub repo in the browser and capture a screenshot of the files and the latest commit message.

---

## Optional: Use the automation script

If you prefer a single command, the helper script can do most steps:

```powershell
./scripts/init-repo.ps1 -UserName "<Your Name>" -UserEmail "<you@example.com>" -RemoteUrl "https://github.com/<you>/<repo>.git" -Push
```

If PowerShell blocks execution, run once:

```powershell
Unblock-File -Path ./scripts/init-repo.ps1
```

---

## Troubleshooting

- Commit fails with identity error: run `git config --global user.name "<Your Name>"` and `git config --global user.email "<you@example.com>"` then retry `git commit`.
- Remote already exists: `git remote remove origin; git remote add origin <URL>`
- Non-empty remote history: run `git pull --rebase origin main` (or align branches) before pushing.
- Auth issues on push: ensure you are signed in to GitHub CLI or use a personal access token for HTTPS.
