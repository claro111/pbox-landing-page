# Performance Audit Guide - PBOX Landing Page

## Build Analysis

### Production Build Results
```
dist/index.html                          0.93 kB │ gzip:  0.47 kB
dist/assets/index-DdSOFyZx.css          29.09 kB │ gzip:  5.84 kB
dist/assets/react-vendor-CUQuvVI4.js     3.66 kB │ gzip:  1.38 kB
dist/assets/lucide-react-B_TcrKDU.js     4.11 kB │ gzip:  1.90 kB
dist/assets/framer-motion-_-M4hzNA.js  130.86 kB │ gzip: 43.43 kB
dist/assets/index-DUoTDdR2.js          209.51 kB │ gzip: 64.64 kB
```

### Bundle Size Summary
- **Total JavaScript (gzipped):** ~111 KB
  - React vendor: 1.38 KB
  - Lucide icons: 1.90 KB
  - Framer Motion: 43.43 KB
  - Application code: 64.64 KB
- **Total CSS (gzipped):** 5.84 KB
- **HTML:** 0.47 KB

### Optimization Status
✅ Code splitting implemented (vendor chunks separated)
✅ Minification enabled (esbuild)
✅ Gzip compression applied
✅ Tree shaking enabled
✅ CSS optimized with TailwindCSS purge

## Running Lighthouse Audit

### Method 1: Chrome DevTools (Recommended)

1. **Build the production version:**
   ```bash
   npm run build
   ```

2. **Preview the production build:**
   ```bash
   npm run preview
   ```
   This will start a local server (usually at http://localhost:4173)

3. **Open Chrome DevTools:**
   - Open the preview URL in Chrome
   - Press F12 or right-click > Inspect
   - Go to the "Lighthouse" tab

4. **Configure Lighthouse:**
   - Select "Desktop" or "Mobile" device
   - Check all categories: Performance, Accessibility, Best Practices, SEO
   - Click "Analyze page load"

5. **Review Results:**
   - Performance score should be > 90
   - Check Core Web Vitals:
     - FCP (First Contentful Paint) < 1.5s
     - LCP (Largest Contentful Paint) < 2.5s
     - TTI (Time to Interactive) < 3s
     - CLS (Cumulative Layout Shift) < 0.1
     - TBT (Total Blocking Time) < 300ms

### Method 2: Lighthouse CLI

1. **Install Lighthouse globally:**
   ```bash
   npm install -g lighthouse
   ```

2. **Build and preview:**
   ```bash
   npm run build
   npm run preview
   ```

3. **Run Lighthouse:**
   ```bash
   lighthouse http://localhost:4173 --view
   ```

4. **Generate report for mobile:**
   ```bash
   lighthouse http://localhost:4173 --preset=mobile --view
   ```

### Method 3: PageSpeed Insights (Production Only)

1. Deploy the site to a hosting service
2. Visit https://pagespeed.web.dev/
3. Enter your deployed URL
4. Review both mobile and desktop scores

## Performance Targets

### Core Web Vitals
- ✅ **FCP (First Contentful Paint):** < 1.5s
- ✅ **LCP (Largest Contentful Paint):** < 2.5s
- ✅ **TTI (Time to Interactive):** < 3s
- ✅ **CLS (Cumulative Layout Shift):** < 0.1
- ✅ **TBT (Total Blocking Time):** < 300ms
- ✅ **FID (First Input Delay):** < 100ms

### Lighthouse Scores (Target: > 90)
- Performance: > 90
- Accessibility: > 90
- Best Practices: > 90
- SEO: > 90

## Performance Optimizations Implemented

### 1. Code Splitting
- ✅ React vendor bundle separated
- ✅ Framer Motion in separate chunk
- ✅ Lucide icons in separate chunk
- ✅ Enables better caching

### 2. Asset Optimization
- ✅ CSS minified and purged (TailwindCSS)
- ✅ JavaScript minified (esbuild)
- ✅ Gzip compression enabled
- ✅ No inline styles (all TailwindCSS classes)

### 3. Image Optimization
- ⚠️ **Action Required:** Replace placeholder images with optimized WebP/AVIF formats
- ⚠️ **Action Required:** Implement lazy loading for below-fold images
- ⚠️ **Action Required:** Add responsive image srcsets

### 4. Animation Performance
- ✅ Framer Motion uses GPU-accelerated transforms
- ✅ Animations use transform and opacity (not layout properties)
- ✅ IntersectionObserver for scroll-triggered animations
- ✅ Reduced motion preferences can be respected

### 5. Font Loading
- ⚠️ **Action Required:** Implement font-display: swap for Google Fonts
- ⚠️ **Action Required:** Consider self-hosting fonts for better control

### 6. Third-Party Scripts
- ✅ No external analytics or tracking scripts
- ⚠️ Google Maps iframe may impact performance (consider lazy loading)

## Performance Checklist

### Before Audit
- [ ] Build production version (`npm run build`)
- [ ] Preview production build (`npm run preview`)
- [ ] Clear browser cache
- [ ] Use incognito/private browsing mode
- [ ] Disable browser extensions

### During Audit
- [ ] Run Lighthouse in Chrome DevTools
- [ ] Test both mobile and desktop
- [ ] Run multiple times for consistency
- [ ] Test with throttled network (Fast 3G)
- [ ] Test with throttled CPU (4x slowdown)

### After Audit
- [ ] Document scores in this file
- [ ] Identify performance bottlenecks
- [ ] Prioritize optimizations
- [ ] Re-test after optimizations

## Common Performance Issues & Solutions

### Issue: Large JavaScript Bundle
**Solution:**
- Implement dynamic imports for below-fold content
- Remove unused dependencies
- Use lighter alternatives for heavy libraries

### Issue: Slow Image Loading
**Solution:**
- Convert images to WebP/AVIF format
- Implement lazy loading with `loading="lazy"`
- Use responsive images with srcset
- Compress images (TinyPNG, Squoosh)

### Issue: Render-Blocking Resources
**Solution:**
- Inline critical CSS
- Defer non-critical JavaScript
- Use font-display: swap for fonts
- Preload critical resources

### Issue: Layout Shifts (CLS)
**Solution:**
- Set explicit width/height on images
- Reserve space for dynamic content
- Avoid inserting content above existing content
- Use CSS aspect-ratio for responsive images

### Issue: Long Tasks (TBT)
**Solution:**
- Break up long JavaScript tasks
- Use code splitting
- Defer non-critical JavaScript
- Optimize third-party scripts

## Optimization Recommendations

### High Priority
1. **Optimize Images:**
   - Convert to WebP/AVIF format
   - Implement lazy loading
   - Add responsive srcsets
   - Compress all images

2. **Font Loading:**
   - Add font-display: swap
   - Consider self-hosting fonts
   - Preload critical fonts

3. **Lazy Load Google Maps:**
   - Load iframe only when Contact section is visible
   - Use IntersectionObserver

### Medium Priority
4. **Implement Service Worker:**
   - Cache static assets
   - Enable offline functionality
   - Improve repeat visit performance

5. **Preload Critical Resources:**
   - Preload hero image
   - Preload critical fonts
   - Preconnect to external domains

6. **Optimize Animations:**
   - Ensure all animations use transform/opacity
   - Add will-change hints sparingly
   - Respect prefers-reduced-motion

### Low Priority
7. **HTTP/2 Server Push:**
   - Push critical CSS
   - Push critical JavaScript

8. **Resource Hints:**
   - Add dns-prefetch for external domains
   - Add preconnect for critical origins

## Monitoring Performance

### Development
```bash
# Build and analyze bundle
npm run build

# Preview production build
npm run preview

# Run Lighthouse
lighthouse http://localhost:4173 --view
```

### Production
- Set up Real User Monitoring (RUM)
- Monitor Core Web Vitals in Google Search Console
- Use PageSpeed Insights regularly
- Set up performance budgets in CI/CD

## Performance Budget

### JavaScript
- Total JS (gzipped): < 150 KB ✅ (Currently ~111 KB)
- Main bundle: < 100 KB ✅ (Currently ~64 KB)
- Vendor bundles: < 50 KB ✅ (Currently ~47 KB)

### CSS
- Total CSS (gzipped): < 10 KB ✅ (Currently ~6 KB)

### Images
- Hero image: < 100 KB
- Section images: < 50 KB each
- Icons: < 10 KB each

### Total Page Weight
- Initial load: < 500 KB (gzipped)
- Full page: < 1 MB (gzipped)

## Audit Results Template

### Desktop Results
```
Date: [DATE]
URL: [URL]
Device: Desktop

Performance: [SCORE]/100
- FCP: [TIME]s
- LCP: [TIME]s
- TTI: [TIME]s
- CLS: [SCORE]
- TBT: [TIME]ms

Accessibility: [SCORE]/100
Best Practices: [SCORE]/100
SEO: [SCORE]/100

Issues Found:
- [LIST ISSUES]

Recommendations:
- [LIST RECOMMENDATIONS]
```

### Mobile Results
```
Date: [DATE]
URL: [URL]
Device: Mobile (Moto G4)

Performance: [SCORE]/100
- FCP: [TIME]s
- LCP: [TIME]s
- TTI: [TIME]s
- CLS: [SCORE]
- TBT: [TIME]ms

Accessibility: [SCORE]/100
Best Practices: [SCORE]/100
SEO: [SCORE]/100

Issues Found:
- [LIST ISSUES]

Recommendations:
- [LIST RECOMMENDATIONS]
```

## Next Steps

1. **Run Lighthouse Audit:**
   - Follow instructions above
   - Document results in this file

2. **Address Critical Issues:**
   - Fix any performance issues with score < 50
   - Optimize images
   - Implement lazy loading

3. **Implement Recommendations:**
   - Follow high-priority optimizations
   - Re-test after each optimization
   - Document improvements

4. **Set Up Monitoring:**
   - Deploy to production
   - Monitor Core Web Vitals
   - Set up alerts for performance regressions

## Resources

- [Web.dev Performance](https://web.dev/performance/)
- [Lighthouse Documentation](https://developers.google.com/web/tools/lighthouse)
- [Core Web Vitals](https://web.dev/vitals/)
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [WebPageTest](https://www.webpagetest.org/)
