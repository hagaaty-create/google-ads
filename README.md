This is a Next.js starter project for Hagaaty AI Landing.

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:9002](http://localhost:9002) with your browser to see the result.

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
