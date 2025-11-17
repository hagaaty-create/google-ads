# Firebase Studio

This is a NextJS starter in Firebase Studio.

To get started, take a look at src/app/page.tsx.

## Pushing to GitHub

Here are the commands to push your code to your GitHub repository from your command line (CMD).

### For the First Time

If this is the first time you are pushing the project, follow these steps in order.

1.  **Initialize Git in your project directory:**
    ```bash
    git init -b main
    ```

2.  **Add all your project files to be tracked:**
    ```bash
    git add .
    ```

3.  **Create a commit to save your changes:**
    ```bash
    git commit -m "Initial commit of the project"
    ```

4.  **Connect your local project to your GitHub repository:**
    (If you get an error saying `remote origin already exists`, you can skip this step).
    ```bash
    git remote add origin https://github.com/hagaaty-create/google-ads.git
    ```

5.  **Push your code to the `main` branch on GitHub:**
    ```bash
    git push -u origin main
    ```

### For Future Updates

After the first push, you only need to run the following commands to save and upload your new changes:

1.  **Add the new changes:**
    ```bash
    git add .
    ```

2.  **Create a commit:**
    ```bash
    git commit -m "Describe your new changes here"
    ```

3.  **Push the changes:**
    ```bash
    git push origin main
    ```

### Fixing a Wrong Remote URL

If you get an `Authentication failed` error and see a placeholder URL like `YOUR_USERNAME/YOUR_REPOSITORY.git`, it means the remote URL is incorrect. To fix it, run this command:

```bash
git remote set-url origin https://github.com/hagaaty-create/google-ads.git
```
After that, try to push your code again.
