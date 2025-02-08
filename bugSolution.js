The solution depends on the root cause:

1. **Typographical Errors:** Double-check the spelling of all Tailwind classes in your components. Even a slight misspelling will cause the error.

2. **Missing Configuration:** Ensure that the utility class you are using is defined within your Tailwind configuration file (`tailwind.config.js`).  Check the `content` array to make sure it includes the files where your classes are defined.

```javascript
/** tailwind.config.js **/
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'], // Ensure this includes your component files
  theme: {
    extend: {},
  },
  plugins: [],
}
```

3. **Build Process Issues (Next.js, Nuxt.js, etc.):** If the error persists, investigate the build process of your framework. You might need to ensure that Tailwind CSS is correctly integrated with the build pipeline.  This often involves using the correct plugins or configuration settings provided by your framework's Tailwind integration.

4. **PurgeCSS (or similar):** If you're using PurgeCSS or a similar utility to remove unused CSS, confirm that the class isn't being unintentionally purged. You might need to adjust your PurgeCSS configuration to retain the class.

5. **Caching:** Clear your browser's cache and try rebuilding your project.  Sometimes stale build artifacts can cause these errors.

By systematically checking these points, you can pinpoint the issue and resolve the 'Invalid CSS class' error.