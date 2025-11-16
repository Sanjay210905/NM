# Git Workflow Lab Helper

This repository includes a small PowerShell script and sample files to implement the steps described in `prompt.md`.

## What it does

- Verifies Git is installed
- (Optional) Configures global `user.name` and `user.email`
- Initializes a repository if needed
- Ensures `index.html` and `.gitignore` exist
- Stages and commits files
- (Optional) Adds a remote and pushes to `main`

## Requirements

- Windows PowerShell 5.1 or PowerShell 7+
- Git installed and available on PATH

## Usage

Run from the project root (same folder as this README):

```powershell
# Configure identity, init, add+commit only
./scripts/init-repo.ps1 -UserName "Your Name" -UserEmail "you@example.com"

# Also add a remote and push to GitHub
./scripts/init-repo.ps1 -UserName "Your Name" -UserEmail "you@example.com" -RemoteUrl "https://github.com/<you>/<repo>.git" -Push
```

If you created your GitHub repo as empty (no README), pushing should work directly. If it already has commits, you may need to fetch and reconcile history.

> Note: If you encounter an execution policy error, you can temporarily unblock just this script:
>
> ```powershell
> Unblock-File -Path ./scripts/init-repo.ps1
> ```

## Manual commands (for learning)

The script mirrors these commands:

```powershell
git --version
git config --global user.name "<username>"
git config --global user.email "<email>"

# Initialize and check status
git init
git status

# Stage, commit
git add <filename>
git commit -m "Initial commit"

git log

# Remote + push
git remote add origin <GitHub-repo-URL>
git remote -v
git branch -M main
git push -u origin main
```

## Next steps

- Edit `index.html` and commit again to practice
- Create a new branch and open a pull request on GitHub
- Try `git log --oneline --graph --decorate --all` to visualize history
