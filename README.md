##### Table of Contents  

- [Ghostelli](#ghostelli)
  - [Featured articles](#featured-articles)
  - [Tag Image and Page Image](#tag-image-and-page-image)
- [Customization](#customization)
- [Custom pages](#custom-pages)
- [Misc](#misc)
  - [Ghost General information](#ghost-general-information)
  - [Contributing](#contributing)
  - [Security](#security)
  - [Credits](#credits)
  - [License](#license)

## Ghostelli

The Ghostelli project is a higly customizable theme for the Ghost framework. The theme's design and is designed to be easily customizable, starting with the homepage's layout:

Following, on the left you can see the `Full Width` layout, on the right the `With Video(s)` layout:

![2 layout ghostelli](https://user-images.githubusercontent.com/3796324/177175374-7e86832c-f2db-4626-a06e-049cfe359a8b.png)

When using the `With Video(s)`  layout, you can add max 2 videos, but the theme works well also with 1 video, vertical centered on the right.

### Featured articles

When you feature an article, you'll see it in the homepage as well as on top of the `Tag` page.

### Tag Image and Page Image

On the Tag and generally in pages the image is set as [Hero Section](https://www.awebco.com/blog/hero-section/#:~:text=your%20own%20webpages.-,What%20is%20a%20Hero%20Section%3F,What%20you%20have%20to%20offer). You can see an example here:
![Hero Section](https://user-images.githubusercontent.com/3796324/177176739-22b94829-89a5-4ddf-ade7-e1222cf04090.png)

Without the image, the same example looks like this:

![Without Hero Section](https://user-images.githubusercontent.com/3796324/177176852-6272011c-0fdd-4c1e-a0bc-15bf9ecb49cd.png)

## Customization

The image used in the homepage is the `Publication Cover` setting in Ghost.

- `tailwind.config.js` - used to set the colors, fonts and xs (extra small) viewport.
- `package.json` - defines the id of the video in the homepage, the image to use as a placeholder when you don't have one. You can access this in /ghost -> Design.
    - `homepage_layout` - you can choose between the layout with 2 YouTube videos or a full-page. You can also show just 1 video, remember to change the default value!
    - `youtube_video_1_id` `youtube_video_2_id` - id of the video(s). You can find the id after the `watch?=` in the url, and eventually before a &.
    - `homepage_text_with_html` - Enter the text shown in the homepage. You can also enter html! Try the link anchor: `<a href="#" title="link">MyLink</a>`. Unfortunately Ghost doesn't provide a textarea, so it's a little uncomfortable to write here.
    - `homepage_gray_text` - text shown in gray, the one on top in the youtube layout, or on the left in the full-width. In full-width, you can omit this to place the `homepage_green_text` on the left.
    - `homepage_green_text` - text shown in light green, the one on the bottom in the youtube layout, or on the right in the full-width.
    - `sub_homepage_text` - subscribe text shown in the homepage above the form.
    - `theme_creator_attribution` - decide if you want to link my website or not, your choice!
    - `default_image_posts` - insert your default image for the posts used in tags or favorite.
    - `featured_posts_style` - Full Width is ideal for 1/2 featured articles, cards is the best when you have (max) 3.

If you don't set `default_image_posts`, Ghost will use the image `ghostelli_default_cover.png`, stored in `assets\images\`.

## Custom pages
- `subscribe.hbs` - contains the buttons used in the homepage "Login - Subscribe".
- `featured.hbs` - show your featured on the tag page, filtered by that tag, or in any page, including all the featured.
- `featured_content.hbs` - contains the actual loop for the featured posts.
- `pagination.hbs` - custom pagination, show only next and previous.


## Misc

### Ghost General information
[Ghost](https://ghost.org/) uses a simple templating language called [Handlebars](http://handlebarsjs.com/) for its themes.

I developed this theme using this tutorial: https://dev.to/mattlehrer/how-to-setup-tailwindcss-with-a-custom-ghost-theme-5hmk

### Contributing

Please see [CONTRIBUTING](CONTRIBUTING.md) for details.

### Security

If you discover any security related issues, please email info@alessandrobelli.it instead of using the issue tracker.


### Credits

- [Alessandro Belli](https://github.com/AlessandroBelli)
- [All Contributors](../../contributors)

### License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
