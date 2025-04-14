# Rails Portfolio Website  
## COM214 Programming Assignment 4  

**Course:** COM214 – Spring 2025  
**Author:** Liana Bourdon  
**Submission:** Programming Assignment 4 (PA4)  
**Date:** April 13, 2025  
**Github Repository Name:** COM214-PA4  
**Github Repository Link** [https://github.com/lianabourdon/COM214-PA4](https://github.com/lianabourdon/COM214-PA4)

## Overview  

This project is a Ruby on Rails implementation of my multi-page personal portfolio website from Programming Assignment 2 (PA2). It maintains the same high-quality design, content depth, and interactive elements, now enhanced by Rails' MVC architecture, gem-managed assets (Bootstrap, FontAwesome), and a custom dark/light mode feature implemented in JavaScript.

---

## 1. Rails Structure  

### Controllers and Routing:  

- Implemented a dedicated ProfileController with multiple actions: index (home), coding, design, photography, and music.
- Routes properly set for each page within Rails' `config/routes.rb`.

### Views:  

- All views placed in the `app/views/profile/` directory.
- Structured MVC implementation, exceeding the minimum required pages.

---

## 2. Content  

- **Comprehensive Pages:** Home, Coding, Design, Photography, Music.
- **Detailed Content:** Textual descriptions, resume details, educational background, and professional experiences.
- **Portfolio Items:** Design examples, photography galleries, coding projects, and music interests.

---

## 3. Custom CSS  

- Use of custom CSS styles in `app/assets/stylesheets/_styles.scss`.
- CSS variables for theme management and responsive design adjustments via media queries.

---

## 4. Icons  

- FontAwesome icons used throughout navigation, contact sections, and various UI components.
- Integrated via Rails gem: `font-awesome-sass`.

---

## 5. Images  

- Use of images: Profile picture, banner images, design thumbnails, photography gallery, music album covers.
- Images managed through Rails' asset pipeline (`app/assets/images/`).

---

## 6. Bootstrap Styling  

- Fully bootstrapped site using the Bootstrap gem (`bootstrap 5.3.0`), managed through the Rails asset pipeline.
- All layouts, navbars, buttons, alerts, and responsive grids fully utilize Bootstrap classes.

---

## 7. Bonus  

- Dark mode toggle implemented using custom JavaScript, enhancing user interaction and accessibility.
- Preference persistence via `localStorage`.

---

## 8. Project Structure  

- `app/controllers/profile_controller.rb` – Controls page actions.
- `app/views/profile/` – Contains HTML/ERB files for each page.
- `app/assets/stylesheets/_styles.scss` – Custom CSS.
- `app/assets/javascripts/` – Custom JavaScript and Bootstrap JS.
- `app/assets/images/` – Images used across the website.
- `config/routes.rb` – Defines URL routes.

---

## 9. Usage  

### Running the Project Locally  


bundle install
rails assets:precompile
rails server

Visit [http://localhost:3000](http://localhost:3000) to explore the website.

---

## 10. Navigation

Use the top fixed navbar and the "Explore More" buttons located at the bottom of each page.

### Dark Mode

Click the moon icon in the navbar to toggle between dark and light modes. Your preference is saved in `localStorage`.

### Gems & Libraries Used

- Ruby on Rails
- Bootstrap 5.3 (via `bootstrap` gem)
- FontAwesome (via `font-awesome-sass` gem)

---

**END OF `README.md`**