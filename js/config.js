/* =====================================================================
   YOUR PORTFOLIO CONTENT
   ---------------------------------------------------------------------
   This is the only file you need to edit to make the portfolio yours.

   How to edit:
   - Replace the sample personal information, descriptions, skills and project details with your own.
   - Keep the commas and brackets exactly as they are.
   - STORYTELLING HEADINGS: The section headings and labels use a storytelling
     style rather than conventional portfolio headings such as "About Me",
     "My Skills" or "My Projects". These headings are part of the template's
     design. You can keep them to maintain its storytelling style or replace
     them with your own wording. Changing them is optional.
   - PERSONAL CONTENT: Replace the sample information with your own details,
     background, skills, projects and experience. You do not need to change
     the storytelling headings unless you want to.
   - Navigation labels (navLabel) are separate from the section headings.
     They control the names displayed in the navigation menu.
   - To HIDE something, follow the instructions provided for that section.
   - OPTIONAL TEXT STYLING: Some headings/headlines support two simple HTML styles/tricks:
       <br>                  starts a new line
       <em>your words</em>   displays your words in coloured italics
     Replace "your words" with the words you want to emphasise.
     Keep the tags if you want those styles/tricks; remove them if you do not.
     You can use these styles/tricks in the headings where they are demonstrated
     in this file. They are optional, not required.
   - Before publishing, search this file for "example.com" and
     "your-username" so you do not leave any sample links behind.
   ===================================================================== */

const portfolio = {

  /* ---------- Basics ---------- */
  // Replace the sample name and location with your own details.
  // initials can be left empty to generate them from your name.
  name: "Your Name",
  initials: "",                       // Leave empty to build them from your name (e.g. "YN")
  location: "City, Country",

  // Shown in the browser tab and in search results
  // Browser tab title. Replace "Your Name" with your name.
  pageTitle: "Your Name | Portfolio",
  // Short description of your portfolio, used by search engines and link previews.
  pageDescription: "Portfolio of Your Name. Add one short sentence about what you do.",


  /* ---------- Home (hero) section ---------- */
  hero: {
    // Small text above the main headline, such as your status or location.
    eyebrow: "Your status or availability · City, Country",
    // Your main introduction headline. You can use the optional text styles/tricks explained above.
    headline: "A short headline<br>about <em>you.</em>",
    // A short introduction that expands on your main headline.
    intro: "Write one or two sentences introducing yourself: who you are and what you enjoy working on.",
    // Main button. Keep the sample label and destination, or change both to suit your portfolio.
    primaryButton: { label: "A little about me", target: "#about" },
    // Secondary button. Keep the sample label and destination, or change both as needed.
    secondaryLink: { label: "See my projects", target: "#projects" },

    // The small note box on the right side of the hero
    noteLabel: "CURRENT FOCUS",                       // Maintain or change it
    noteText: "Say what you are looking for right now, such as a job, an internship or freelance work.",
    // Two short details displayed below the note, such as your qualification and school.
    noteSmall: ["Your degree or job title", "Your school or company · Year"],

    scrollText: "Scroll to explore"
  },


  /* ---------- About section ---------- */
  // "The person behind the work" is a storytelling heading.
  // You can keep it to maintain the style or replace it with your own wording.
  about: {
    show: true,                       // Set to false to remove this section
    navLabel: "About",
    eyebrow: "The person behind the work",
    title: "A short title<br>about <em>you.</em>",
    kicker: "One short line that sums up your approach.",

    image: "",                        // e.g. "images/profile.jpg"  (empty shows your initials)

    // Your opening introduction. Use a short summary of who you are.
    lead: "Open with one strong sentence about who you are and what you do.",
    // Add more detail about your background, interests and goals.
    text: "Use this paragraph for the details: your background, what you enjoy, what you are learning, and what you want to do next. Keep it honest and in your own voice.",

    // Optional education card. Replace the sample details or set education to null to hide it.
    education: {
      label: "EDUCATION",
      title: "Your Degree or Qualification",
      place: "Your School or University, City, Country",
      note: "Graduation or completion year"
    }
  },


  /* ---------- Skills (shown inside the About section) ---------- */
  // "What I work with" and "My toolkit" are storytelling headings.
  // Keep them to maintain the style, or replace them with your own wording.
  skills: {
    eyebrow: "What I work with",
    title: "My<br>toolkit.",
    // Brief introduction to your skills or how you approach your work.
    text: "A short sentence about how you describe your skills.",

    // Add, remove or rename groups freely. Leave groups: [] to hide the skills area.
    // Each group represents a skill category. Replace the sample titles and skills with your own.
    groups: [
      { title: "Category One",   items: ["Skill 1", "Skill 2", "Skill 3"] },
      { title: "Category Two",   items: ["Skill 4", "Skill 5", "Skill 6"] },
      { title: "Category Three", items: ["Skill 7", "Skill 8"] },
      { title: "Category Four",  items: ["Skill 9", "Skill 10", "Skill 11"] },
      { title: "Category Five",  items: ["Skill 12", "Skill 13"] },
      { title: "Category Six",   items: ["Skill 14", "Skill 15", "Skill 16"] }
    ]
  },


  /* ---------- Projects section ---------- */
  // "Selected project work" and "Things I've made" are storytelling headings.
  // You can keep them or replace them with your own wording.
  projects: {
    navLabel: "Projects",
    eyebrow: "Selected project work",
    title: "Things I’ve<br><em>made.</em>",
    kicker: "One short line about your projects.",

    // Add as many projects as you like. Copy one block, paste it, and edit it.
    // Remove all of them (items: []) to hide the whole Projects section.
    //
    // featured: true  -> wide card (best for your main project)
    // image:    ""    -> shows a coloured block with the icon instead
    // icon:     any name from https://icons.getbootstrap.com  (e.g. "bi-code-slash")
    // links:    a button only appears when its url is filled in
    //           (give it an icon like "bi-github" or leave icon empty for an arrow)
    // note:     optional small line at the bottom of the card
    items: [
      {
        featured: true,
        type: "Project type",
        title: "Project One",
        badge: "",
        description: "Describe what this project does and why you built it. Two or three sentences is plenty.",
        features: [
          "A key feature or thing you learned",
          "Another key feature",
          "A third key feature"
        ],
        tech: ["Tech 1", "Tech 2", "Tech 3"],
        image: "",
        icon: "bi-code-slash",
        links: [
          { label: "GitHub",     url: "https://example.com/your-username/project-one", icon: "bi-github" },
          { label: "How to run", url: "",                                             icon: "" }
        ],
        note: ""
      },
      {
        featured: false,
        type: "Project type",
        title: "Project Two",
        badge: "",
        description: "Describe this project in a sentence or two.",
        features: [],
        tech: ["Tech 1", "Tech 2"],
        image: "",
        icon: "bi-diagram-3",
        links: [
          { label: "GitHub",    url: "https://example.com/your-username/project-two", icon: "bi-github" },
          { label: "Live demo", url: "https://example.com/your-username/project-two-demo",  icon: "" }
        ],
        note: ""
      },
      {
        featured: false,
        type: "Project type",
        title: "Project Three",
        badge: "",
        description: "Describe this project in a sentence or two.",
        features: [],
        tech: ["Tech 1", "Tech 2"],
        image: "",
        icon: "bi-keyboard",
        links: [
          { label: "GitHub",    url: "https://example.com/your-username/project-three", icon: "bi-github" },
          { label: "Live demo", url: "",                                                icon: "" }
        ],
        note: ""
      }
    ]
  },


  /* ---------- Resume section ---------- */
  // "Resume notes" and "Where I am, so far" are storytelling headings.
  // You can keep them to maintain the style or replace them with your own wording.
  resume: {
    navLabel: "Resume",
    eyebrow: "Resume notes",
    title: "Where I am,<br><em>so far.</em>",
    kicker: "A short record of your education, work and projects.",

    // Path to your CV PDF. Add the file to your project and enter its path here.
    // Leave empty to hide the download button.
    cvFile: "",                       // e.g. "assets/my-cv.pdf"
    // Text displayed on the CV download button.
    cvLabel: "Download CV",

    // Add, remove or reorder entries. Remove all of them (items: []) to hide the section.
    // upcoming: true gives the entry a dashed "still to come" look.
    items: [
      {
        date: "Year – Year",
        title: "Education, job or achievement",
        text: "One or two sentences describing it.",
        upcoming: false
      },
      {
        date: "Year",
        title: "Another entry",
        text: "One or two sentences describing it.",
        upcoming: false
      },
      {
        date: "To be added",
        title: "Something coming soon",
        text: "Use this for a certificate or role you will add later. Delete it if you do not need it.",
        upcoming: true
      }
    ]
  },


  /* ---------- Contact section and footer ---------- */
  // "Start a conversation" and "Let's talk" are storytelling headings.
  // You can keep them to maintain the style or replace them with your own wording.
  contact: {
    navLabel: "Contact",
    navButton: "Let's talk",          // Label for the highlighted contact button in the navigation menu at the end.
    eyebrow: "Start a conversation",
    title: "Let’s <em>talk.</em>",
    text: "Say what kind of opportunities or messages you would like to receive.",
    
    // Replace the sample contact details and social links with your own.
    email: "you@example.com",
    phone: "+000 000 000 000",        // Leave "" to hide

    // Any link with an empty url is hidden. Icons: https://icons.getbootstrap.com
    socials: [
      { label: "GitHub",   icon: "bi-github",   url: "https://example.com/your-username" },
      { label: "LinkedIn", icon: "bi-linkedin", url: "https://example.com/your-username" }
    ]
  }
};