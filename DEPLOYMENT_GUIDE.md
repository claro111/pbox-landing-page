# Vercel Deployment Guide

## Prerequisites
- A Vercel account (sign up at https://vercel.com)
- Git repository (GitHub, GitLab, or Bitbucket)

## Method 1: Deploy via Vercel Dashboard (Recommended)

### Step 1: Push to Git Repository
```bash
# Initialize git if not already done
git init

# Add all files
git add .

# Commit changes
git commit -m "Ready for deployment"

# Add remote repository (replace with your repo URL)
git remote add origin https://github.com/yourusername/pbox-landing-page.git

# Push to repository
git push -u origin main
```

### Step 2: Import to Vercel
1. Go to https://vercel.com/dashboard
2. Click **"Add New..."** → **"Project"**
3. Import your Git repository
4. Vercel will auto-detect the Vite framework

### Step 3: Configure Project (Auto-detected)
Vercel should automatically detect these settings:
- **Framework Preset:** Vite
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Install Command:** `npm install`

### Step 4: Deploy
1. Click **"Deploy"**
2. Wait for the build to complete (2-3 minutes)
3. Your site will be live at `https://your-project-name.vercel.app`

---

## Method 2: Deploy via Vercel CLI

### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

### Step 2: Login to Vercel
```bash
vercel login
```

### Step 3: Deploy
```bash
# Navigate to project directory
cd pbox-landing-page

# Deploy to production
vercel --prod
```

Follow the prompts:
- **Set up and deploy?** → Yes
- **Which scope?** → Select your account
- **Link to existing project?** → No (first time) or Yes (subsequent deploys)
- **Project name?** → pbox-landing-page (or your preferred name)
- **Directory?** → ./ (current directory)

---

## Environment Variables (If Needed)

If you need to add environment variables:

### Via Dashboard:
1. Go to your project in Vercel Dashboard
2. Click **Settings** → **Environment Variables**
3. Add your variables

### Via CLI:
```bash
vercel env add VARIABLE_NAME
```

---

## Custom Domain Setup

### Step 1: Add Domain in Vercel
1. Go to your project in Vercel Dashboard
2. Click **Settings** → **Domains**
3. Add your custom domain (e.g., `pboxconstruction.com`)

### Step 2: Configure DNS
Add these records to your domain provider:

**For root domain (pboxconstruction.com):**
- Type: `A`
- Name: `@`
- Value: `76.76.21.21`

**For www subdomain:**
- Type: `CNAME`
- Name: `www`
- Value: `cname.vercel-dns.com`

### Step 3: Wait for DNS Propagation
- Usually takes 5-60 minutes
- Vercel will automatically provision SSL certificate

---

## Automatic Deployments

Once connected to Git:
- **Production:** Every push to `main` branch deploys to production
- **Preview:** Every push to other branches creates a preview deployment
- **Pull Requests:** Automatic preview deployments for PRs

---

## Build Optimization

The project is already optimized with:
- ✅ Code splitting
- ✅ Asset optimization
- ✅ Lazy loading
- ✅ Production build configuration

---

## Troubleshooting

### Build Fails
1. Check build logs in Vercel Dashboard
2. Ensure all dependencies are in `package.json`
3. Test build locally: `npm run build`

### 404 Errors on Routes
- The `vercel.json` already includes rewrites for React Router
- All routes will redirect to `index.html`

### Node Version Issues
If you get Node version errors, add to `package.json`:
```json
"engines": {
  "node": ">=20.19.0"
}
```

---

## Post-Deployment Checklist

- [ ] Test all pages (Home, About, Projects, Contact)
- [ ] Test navigation and routing
- [ ] Test contact form
- [ ] Test on mobile devices
- [ ] Check Google Maps embed
- [ ] Verify logo displays correctly
- [ ] Test all links and buttons
- [ ] Check performance with Lighthouse

---

## Useful Commands

```bash
# Deploy to production
vercel --prod

# Deploy preview
vercel

# View deployment logs
vercel logs

# List all deployments
vercel ls

# Remove deployment
vercel rm [deployment-url]

# Open project in browser
vercel open
```

---

## Support

- Vercel Documentation: https://vercel.com/docs
- Vercel Support: https://vercel.com/support
- Community: https://github.com/vercel/vercel/discussions

---

## Quick Deploy Button

After first deployment, you can add this to your README:

```markdown
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/pbox-landing-page)
```
