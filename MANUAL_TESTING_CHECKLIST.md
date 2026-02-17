# Manual Testing Checklist - PBOX Landing Page

## Overview
This document provides a comprehensive manual testing checklist for the PBOX Creative Advertising landing page. Complete each test item and mark with ✓ when passed.

## Browser Testing

### Chrome
- [ ] Page loads without errors
- [ ] All images display correctly
- [ ] Animations work smoothly
- [ ] Navigation links scroll to correct sections
- [ ] Mobile menu opens/closes properly
- [ ] Form validation works
- [ ] Form submission succeeds
- [ ] Project filtering works
- [ ] Responsive layouts at all breakpoints

### Firefox
- [ ] Page loads without errors
- [ ] All images display correctly
- [ ] Animations work smoothly
- [ ] Navigation links scroll to correct sections
- [ ] Mobile menu opens/closes properly
- [ ] Form validation works
- [ ] Form submission succeeds
- [ ] Project filtering works
- [ ] Responsive layouts at all breakpoints

### Safari (if available)
- [ ] Page loads without errors
- [ ] All images display correctly
- [ ] Animations work smoothly
- [ ] Navigation links scroll to correct sections
- [ ] Mobile menu opens/closes properly
- [ ] Form validation works
- [ ] Form submission succeeds
- [ ] Project filtering works
- [ ] Responsive layouts at all breakpoints

## Mobile Device Testing

### iOS (iPhone/iPad)
- [ ] Page loads and renders correctly
- [ ] Touch interactions work (tap, scroll)
- [ ] Mobile menu opens/closes with touch
- [ ] Navigation scrolls smoothly
- [ ] Form inputs work with mobile keyboard
- [ ] All sections stack properly on mobile
- [ ] Images load and display correctly
- [ ] No horizontal scrolling issues

### Android
- [ ] Page loads and renders correctly
- [ ] Touch interactions work (tap, scroll)
- [ ] Mobile menu opens/closes with touch
- [ ] Navigation scrolls smoothly
- [ ] Form inputs work with mobile keyboard
- [ ] All sections stack properly on mobile
- [ ] Images load and display correctly
- [ ] No horizontal scrolling issues

## Navigation Testing

### Navbar Links
- [ ] "Home" link scrolls to hero section
- [ ] "Projects" link scrolls to projects section
- [ ] "About" link scrolls to about section
- [ ] "Contact" link scrolls to contact section
- [ ] "Get a Quote" button scrolls to contact form
- [ ] Active section highlighting works during scroll
- [ ] Navbar becomes sticky after scrolling
- [ ] Navbar has backdrop blur when scrolled

### Mobile Menu
- [ ] Hamburger icon appears on mobile (< 768px)
- [ ] Clicking hamburger opens menu with animation
- [ ] Menu slides in from right
- [ ] Clicking a link closes menu and scrolls
- [ ] Clicking outside menu closes it
- [ ] Body scroll is locked when menu is open

### Hero CTAs
- [ ] "Request a Quote" button scrolls to contact
- [ ] "View Projects" button scrolls to projects
- [ ] Buttons have hover effects

### CTA Banner
- [ ] "Get Started" button scrolls to contact form
- [ ] Button has hover effect

## Form Testing

### Contact Form Validation
- [ ] Empty name field shows error on submit
- [ ] Empty email field shows error on submit
- [ ] Invalid email format shows error
- [ ] Empty message field shows error on submit
- [ ] Error messages display below fields
- [ ] Error styling (red border) appears on invalid fields

### Form Submission
- [ ] Valid form submits successfully
- [ ] Success message displays after submission
- [ ] Form resets after successful submission
- [ ] Console logs form data (check browser console)

### Form Interactions
- [ ] Real-time validation on blur works
- [ ] Typing in fields updates state
- [ ] Tab navigation between fields works
- [ ] Enter key submits form

## Project Filtering

### Filter Buttons
- [ ] "All" button shows all projects
- [ ] "Signage" button shows only signage projects
- [ ] "Branding" button shows only branding projects
- [ ] "Printing" button shows only printing projects
- [ ] Active filter button has different styling
- [ ] Filter transitions are animated smoothly

### Project Cards
- [ ] All project cards display image and title
- [ ] Hover effect works on project cards
- [ ] Cards have proper spacing in grid
- [ ] Grid layout adapts to viewport width

## Responsive Layout Testing

### Mobile (< 768px)
- [ ] Mobile menu button visible
- [ ] Hero section stacks vertically
- [ ] Services display in 1 column
- [ ] Projects display in 1 column
- [ ] About section stacks vertically
- [ ] Equipment displays in 2 columns
- [ ] Contact section stacks vertically
- [ ] Footer columns stack vertically
- [ ] No horizontal overflow

### Tablet (768px - 1024px)
- [ ] Navigation links visible (no hamburger)
- [ ] Hero displays in 2 columns
- [ ] Services display in 2 columns
- [ ] Projects display in 2 columns
- [ ] About displays in 2 columns
- [ ] Equipment displays in 3 columns
- [ ] Contact displays in 2 columns
- [ ] Footer displays in 2-3 columns

### Desktop (> 1024px)
- [ ] Full navigation visible
- [ ] Hero displays in 2 columns (wider)
- [ ] Services display in 3 columns
- [ ] Projects display in 3 columns
- [ ] About displays in 2 columns (wider)
- [ ] Equipment displays in 4 columns
- [ ] Contact displays in 2 columns (wider)
- [ ] Footer displays in 3-4 columns
- [ ] Content is centered with max-width

### Breakpoint Transitions
- [ ] Resize from desktop to mobile works smoothly
- [ ] Resize from mobile to desktop works smoothly
- [ ] No layout breaks during resize
- [ ] All functionality maintained across breakpoints

## Keyboard Navigation

### Tab Navigation
- [ ] Tab key moves focus through interactive elements
- [ ] Focus visible on all interactive elements
- [ ] Tab order is logical (top to bottom, left to right)
- [ ] Can navigate entire page with keyboard

### Keyboard Interactions
- [ ] Enter key activates buttons
- [ ] Enter key submits form
- [ ] Escape key closes mobile menu (if implemented)
- [ ] Arrow keys work in form inputs

### Focus Management
- [ ] Focus visible styles are clear
- [ ] Focus doesn't get trapped
- [ ] Focus returns to trigger after closing mobile menu

## Animation Testing

### Entrance Animations
- [ ] Hero section animates on page load
- [ ] Services cards animate when scrolling into view
- [ ] Projects cards animate when scrolling into view
- [ ] About section animates when scrolling into view
- [ ] Equipment cards animate when scrolling into view
- [ ] Testimonial animates when scrolling into view
- [ ] Contact section animates when scrolling into view
- [ ] CTA banner animates when scrolling into view

### Interaction Animations
- [ ] Buttons have hover animations
- [ ] Cards have hover animations
- [ ] Mobile menu has slide-in animation
- [ ] Project filter changes are animated
- [ ] Smooth scroll animations work

### Performance
- [ ] Animations are smooth (no jank)
- [ ] No performance issues on lower-end devices
- [ ] Reduced motion preferences respected (if implemented)

## Content Verification

### Text Content
- [ ] No "lorem ipsum" placeholder text
- [ ] All text is readable and professional
- [ ] No spelling or grammar errors
- [ ] Company information is accurate

### Images
- [ ] All images load correctly
- [ ] Images have appropriate alt text
- [ ] Images are properly sized (no distortion)
- [ ] Images are optimized (reasonable file sizes)

### Links
- [ ] All internal links work
- [ ] Social media links in footer work
- [ ] Links open in appropriate target (same/new window)

## Visual Design

### Colors
- [ ] Primary red (#E10600) used consistently
- [ ] Text colors are readable
- [ ] Background colors are consistent
- [ ] Color contrast meets accessibility standards

### Typography
- [ ] Heading hierarchy is clear (h1 > h2 > h3)
- [ ] Font sizes are appropriate
- [ ] Line heights are comfortable
- [ ] Text is readable on all backgrounds

### Spacing
- [ ] Consistent padding and margins
- [ ] Sections have proper spacing
- [ ] No elements touching edges
- [ ] White space is balanced

### Components
- [ ] Buttons have rounded corners
- [ ] Cards have shadows
- [ ] Components have consistent styling
- [ ] Hover states are clear

## Accessibility

### Screen Reader
- [ ] Page structure makes sense with screen reader
- [ ] All images have alt text
- [ ] Form labels are associated with inputs
- [ ] ARIA labels present on icon buttons
- [ ] Heading hierarchy is logical

### Semantic HTML
- [ ] Proper use of header, nav, main, section, footer
- [ ] Buttons use <button> elements
- [ ] Links use <a> elements
- [ ] Form uses proper form elements

## Performance

### Load Time
- [ ] Page loads in under 3 seconds
- [ ] First Contentful Paint (FCP) < 1.5s
- [ ] Largest Contentful Paint (LCP) < 2.5s
- [ ] Time to Interactive (TTI) < 3s

### Runtime Performance
- [ ] Smooth scrolling (60fps)
- [ ] No layout shifts during load
- [ ] Animations don't cause jank
- [ ] Form interactions are responsive

## Cross-Browser Issues

### Known Issues
- [ ] Document any browser-specific issues found
- [ ] Note any workarounds needed
- [ ] Report any critical bugs

## Testing Notes

### Issues Found
```
[Document any issues discovered during testing]
```

### Browser Versions Tested
- Chrome: [version]
- Firefox: [version]
- Safari: [version]
- Mobile Safari: [version]
- Chrome Mobile: [version]

### Devices Tested
- Desktop: [OS and screen size]
- Mobile: [Device model and OS]
- Tablet: [Device model and OS]

## Sign-off

- [ ] All critical tests passed
- [ ] All browsers tested
- [ ] Mobile devices tested
- [ ] Accessibility verified
- [ ] Performance acceptable

**Tester Name:** _______________
**Date:** _______________
**Signature:** _______________
