# Portfolio Template

A clean, free portfolio website template with a storytelling-style layout. Add your own details, projects and experience in just in **one main configuration file**, then publish your portfolio on GitHub Pages and you have a portfolio online.

Built with plain **HTML, CSS and JavaScript** plus Bootstrap 5. No frameworks, no build step, no database, no Node.js required.

`**[Live demo →](https://nester09.github.io/portfolio-template/)**`

**What you get**

- Fixed navbar that highlights the section you are reading and collapses on mobile
- Hero, About (with education card and skills), Projects, Resume timeline and Contact sections
- Fully responsive: desktop, tablet and phone
- About, Projects and Resume sections can be hidden when not needed, along with their menu links
- Works without images: coloured placeholders and your initials are shown until you add your own

---

## What to edit, what to leave alone

| File or folder  | What to do                                                                        |
| --------------- | --------------------------------------------------------------------------------- |
| `js/config.js`  | **Edit.** Your name, text, skills, projects, links: Most content lives here.      |
| `images/`       | **Add** your profile photo and project screenshots.                               |
| `assets/`       | **Add** your CV as a PDF (optional).                                              |
| `index.html`    | **Edit two lines only:** the `<title>` and the `description` near the top.        |
| `css/style.css` | Optional. Change colours and fonts at the top (see below).                        |
| `favicon.svg`   | Optional. Replace with your own icon, keeping the same file name.                 |
| `js/script.js`  | **Leave alone.** It builds the page from `config.js`.                             |
| `LICENSE`       | **Leave in place.** See "License" at the bottom.                                  |
| `.gitignore`    | **Leave alone.**                                                                  |
| `README.md` (this file) | **Replace** with a short description of your own portfolio, or delete it. |
| `images/README.md`, `assets/README.md` | **Delete** once you have read them. They are only notes.   |

---

## Quick start

1. **Get your own copy.** At the top of this repository click the green **Use this template** button, then **Create a new repository**. (Or click **Code → Download ZIP** and unzip it.)
2. **Open `js/config.js`** in any editor (VS Code, Notepad, anything).
3. **Replace the sample content with yours.** The comments inside the file explain the available fields and how to customize them.
4. **Update the page title and description** in both `js/config.js` and `index.html`.
5. **Open `index.html` in your browser** to preview. Refresh after every change.

> The page loads Bootstrap and fonts from the internet, so you need to be online while previewing.

---

## Adding your pictures and CV

| What                | Where to put it | Where to point to it in `config.js`              |
| ------------------- | --------------- | ------------------------------------------------ |
| Profile photo       | `images/`       | `about.image: "images/profile.jpg"`              |
| Project screenshots | `images/`       | `image: "images/my-project.png"` on each project |
| CV / resume PDF     | `assets/`       | `resume.cvFile: "assets/my-cv.pdf"`              |

Leave these empty (`""`) and the site still looks complete.
File names are case sensitive once online: `Profile.jpg` and `profile.jpg` are different files.

---

## Adding, removing and hiding things

- **Add a project:** copy one `{ ... }` project block in `projects.items`, paste it below with a comma, and edit it.
- **Hide a project or social link:** leave its `url` empty (`""`). To hide a *Home button*, leave its label empty.
- **Hide a whole section:** set `about.show` to `false`, or set `projects.items` / `resume.items` to `[]`.
- **Hide skills:** set `skills.groups` to `[]`.
- **Text styling:** In supported headline and title fields in `js/config.js`, use `<em>your words</em>` for coloured italics and `<br>` to start a new line. Replace the words inside `<em>` with your own. These styles are optional.

Project icons and social icons use [Bootstrap Icons](https://icons.getbootstrap.com). Search the name there (for example `bi-github`) and paste it into `icon`.

---

## Changing colours and fonts

Open `css/style.css`. The colours are at the top in the `:root` block:

| Variable  | Used for                                 |
| --------- | ---------------------------------------- |
| `--ink`   | Dark green: text, dark sections, buttons |
| `--paper` | Cream page background                    |
| `--coral` | Accent: italic words, active link, hover |
| `--ochre` | Secondary accent: lines, icons on dark   |
| `--muted` | Softer grey-green text                   |

If you change colours, keep text easy to read: dark text on light backgrounds, light text on dark ones.

To change the fonts, edit `--serif` and `--sans` in the same block **and** the Google Fonts `<link>` in `index.html`.

---

## Publish for free with GitHub Pages

1. Make sure your files are in a GitHub repository (the **Use this template** button does this for you).
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, pick `main` and `/ (root)`, then **Save**.
4. After a minute your site is live at `https://YOUR-USERNAME.github.io/REPOSITORY-NAME/`.

### Before you publish, check:

- [ ] Search `js/config.js` for `example.com` and `your-username`. Replace every match with your real link, or empty the field (`""`)
- [ ] Replace the sample email (`you@example.com`) and phone number, or empty the phone
- [ ] Update the `<title>` and `description` in `index.html`. Search engines and link previews read these
- [ ] Add your photo and project screenshots, or accept the placeholders
- [ ] Open your live site and click every button and menu link once

---

## Project structure

```
portfolio-template/
├── index.html        Page shell (edit only the title and description)
├── favicon.svg       Browser tab icon
├── css/style.css     Colours, spacing, layout
├── js/
│   ├── config.js     ← YOUR CONTENT: edit this file
│   └── script.js     Builds the page from config.js (leave alone)
├── images/           Your photos and screenshots
└── assets/           Your CV PDF
```

---

## Troubleshooting

**The page shows "The page could not be built".** There is a typing mistake in `js/config.js`, usually a missing comma, quotation mark or bracket. Press `F12` in your browser and open the **Console** tab; it names the line with the problem.

**My image does not show.** Check the file name and capitals match exactly, and that the file is inside `images/`.

**A button or link is missing.** Check that its label and destination are filled in. Project and social links need a `url`, the Home buttons need a label and a valid section target, and the CV download button needs `resume.cvFile`.

**My email address is public.** Anything in `config.js` is visible to everyone who visits the site. If you do not want a public email or phone number, leave them empty and use the social links instead.

---

## License

This template is released under the [MIT License](LICENSE): free to use, change and share, including for your own portfolio. The license asks that the copyright notice stays in copies of the template, so keep the `LICENSE` file in your repository. You may add your own name on a new line under the existing one.

Uses [Bootstrap](https://getbootstrap.com) and [Bootstrap Icons](https://icons.getbootstrap.com) (both MIT) and Google Fonts (DM Sans, Fraunces).