# Ghostelli

📽️ Video Tutorial: coming soon!

Ghost uses a simple templating language called [Handlebars](http://handlebarsjs.com/) for its themes.

I developed this theme using this tutorial: https://dev.to/mattlehrer/how-to-setup-tailwindcss-with-a-custom-ghost-theme-5hmk

&nbsp;

# Customization

The image used in the homepage is the `Publication Cover` setting in Ghost.

- `tailwind.config.js` - used to set the colors, fonts and xs (extra small) viewport.
- `package.json` - defines the id of the video in the homepage, the image to use as a placeholder when you don't have one. You can access this in /ghost -> Design.
    - `homepage_layout` - you can choose between the layout with 2 YouTube videos or a full-page. You can also show just 1 video, remember to change the default value!
    - `youtube_video_1_id` `youtube_video_2_id` - id of the video(s). You can find the id after the `watch?=` in the url, and eventually before a &.
    - `homepage_text_with_html` - Enter the text shown in the homepage. You can also enter html! Try the link anchor: `<a href="#" title="link">MyLink</a>`. Unfortunately Ghost doesn't provide a textarea, so it's a little uncomfortable to write here.
    - `homepage_gray_text` - text shown in gray, the one on top in the youtube layout, or on the left in the full-width.
    - `homepage_green_text` - text shown in light green, the one on the bottom in the youtube layout, or on the right in the full-width.
    - `sub_homepage_text` - subscribe text shown in the homepage above the form.
    - `theme_creator_attribution` - decide if you want to link my website or not, your choice!
    - `default_image_posts` - insert your default image for the posts used in tags or favorite.

# Custom pages
- `subscribe.hbs` - contains the buttons used in the homepage "Login - Subscribe".
- `featured.hbs` - show your featured on the tag page, filtered by that tag, or in any page, including all the featured.
- `pagination.hbs` - custom pagination, show only next and previous.