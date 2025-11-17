# Hagaaty AI Landing

This is a Next.js starter project for Hagaaty AI Landing.

## Pushing to GitHub

### For the first time or if you have problems

If you are facing "Repository not found" error, run these commands in order.

1.  Remove the old remote link:
    ```bash
    git remote remove origin
    ```
2.  Add the correct remote link:
    ```bash
    git remote add origin https://github.com/hagaaty-create/google-ads.git
    ```
3.  Set the main branch:
    ```bash
    git branch -M main
    ```
4.  Push your code:
    ```bash
    git push -u origin main
    ```

### For future updates

After the first successful push, you only need these commands:

```bash
git add .
git commit -m "A short description of my changes"
git push origin main
```

## Deploying to Vercel

After you have successfully pushed your code to GitHub, you can deploy it to Vercel by following these steps:

1.  **Sign up or Log in to Vercel:** Go to [vercel.com](https://vercel.com) and create a free account, preferably using your GitHub account.
2.  **Import Project:** From your Vercel dashboard, click on "Add New..." -> "Project".
3.  **Connect to GitHub:** Vercel will ask you to connect to your Git provider. Choose GitHub and authorize it.
4.  **Select Your Repository:** Find and select your `google-ads` repository from the list and click "Import".
5.  **Configure and Deploy:** Vercel will automatically detect that it's a Next.js project. You don't need to change any settings. Just click the **"Deploy"** button.

Vercel will build and deploy your site. Once it's done, you will get a public URL for your live project.
