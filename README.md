# Ghostelli

📽️ Video Tutorial: coming soon!

I developed this theme using this tutorial: https://dev.to/mattlehrer/how-to-setup-tailwindcss-with-a-custom-ghost-theme-5hmk

&nbsp;

# Customization

The image used in the homepage is the `Publication Cover`.

- `tailwind.config.js` - used to set the colors, fonts and xs (extra small) viewport.
- `package.json` - defines the id of the video in the homepage, the image to use as a placeholder when you don't have one. You can access this in /ghost -> Design.

Ghost uses a simple templating language called [Handlebars](http://handlebarsjs.com/) for its themes.

# Custom pages
- `index-text.hbs` - just contains the tag define in package.json for the text in the index page.
- `subscribe.hbs` - contains the buttons used in the homepage "Login - Subscribe".