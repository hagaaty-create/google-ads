# Firebase Studio

This is a NextJS starter in Firebase Studio.

To get started, take a look at src/app/page.tsx.

## Pushing to GitHub

Here are the commands to push your code to your GitHub repository from your command line (CMD).

### For the first time

```bash
git remote add origin https://github.com/hagaaty-create/google-ads.git
git branch -M main
git push -u origin main
```

### For future updates

```bash
git add .
git commit -m "A short description of my changes"
git push origin main
```

### Troubleshooting: "Repository not found" error

If you see an error like `fatal: repository '.../hagaaty-creat/...' not found`, it's likely due to a typo in the remote URL. To fix it, run this command:

```bash
git remote set-url origin https://github.com/hagaaty-create/google-ads.git
```

Then try to `git push` again.
