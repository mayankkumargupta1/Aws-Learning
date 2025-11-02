# ⚡️ React + Vite Static Website Deployment with GitHub Actions & AWS S3

This project demonstrates a fully automated **CI/CD pipeline** for deploying a **React + Vite** static website to **Amazon S3** using **GitHub Actions**.

## 🧠 Overview

Each time you push code to the `main` branch:
1. **GitHub Actions** installs dependencies and builds the project using **Vite**.  
2. The compiled files (`dist/`) are automatically **uploaded to an S3 bucket**.  
3. The website becomes publicly accessible via **AWS S3 static hosting**.

This setup ensures **zero manual deployment steps** — everything happens automatically once you commit and push.

---

## 🧰 Tech Stack

| Component | Purpose |
|------------|----------|
| ⚛️ **React + Vite** | Frontend framework & bundler |
| ☁️ **AWS S3** | Static site hosting |
| 🔐 **IAM** | Access control & permissions |
| 🤖 **GitHub Actions** | CI/CD automation |
| 🐰 **Bun** | Fast JavaScript package manager |

---

## ⚙️ Setup Guide

### 1️⃣ Create an S3 Bucket
1. In AWS Console → **S3 → Create Bucket**
2. Under **Properties**, enable **Static website hosting**
3. Set:
   - Index document → `index.html`
   - Error document → `index.html`
4. Under **Permissions**, disable “Block all public access”
5. Add this **Bucket Policy** under *Permissions → Bucket Policy*:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "AllowGitHubActionsDeploy",
      "Effect": "Allow",
      "Principal": { "AWS": "<IAM user ARN>" },
      "Action": "s3:*",
      "Resource": "<Bucket ARN>"
    },
    {
      "Sid": "PublicReadAccess",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::production-bucket-aaryankumar19/*"
    }
  ]
}

# Aws-Learning
