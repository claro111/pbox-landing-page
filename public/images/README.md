# Logo Images

## How to Add Your PBOX Logo

1. **Prepare your logo image:**
   - Recommended format: PNG with transparent background
   - Recommended size: 200-400px width (height will auto-scale)
   - File name: `pbox-logo.png`

2. **Add the logo file:**
   - Place your logo image in this folder: `public/images/`
   - Name it: `pbox-logo.png`

3. **Enable the image logo:**
   - The Logo component will automatically use the text logo by default
   - To use your image logo, update the Logo component usage with `useImage={true}`

## Example Usage

### Using Text Logo (Current Default)
```tsx
<Logo size="md" />
```

### Using Image Logo
```tsx
<Logo size="md" useImage={true} />
```

### Using Custom Image Path
```tsx
<Logo size="md" useImage={true} imagePath="/images/custom-logo.png" />
```

## Logo Sizes
- `sm`: Small (h-8 / 32px height)
- `md`: Medium (h-10 / 40px height) - Default
- `lg`: Large (h-12 / 48px height)

## Where the Logo is Used
- Navbar (top navigation)
- Footer
- Any other component that imports the Logo component

## To Switch All Logos to Image

Update these files to add `useImage={true}`:
1. `src/features/navigation/Navbar.tsx`
2. `src/features/footer/Footer.tsx`
