<div align='center'>

<img src=https://github.com/deadlock-mv/3d_portfolio_project/blob/master/public/Site_demo.png alt="logo" width=1680 height=800 />

<h1>3D Portofolio Project</h1>
<p>A 3-D interactive project which showcases my skills, my projects, my experiences along with the ability to contact via mail service.</p>

<h4> <a href=https://mvlander.netlify.app/>View Demo</a> <span> · </span> <a href="https://github.com/deadlock-mv/3d_project_portofolio/blob/master/README.md"> Documentation </a> <span> · </span> <a href="https://github.com/deadlock-mv/3d_project_portofolio/issues"> Report Bug </a> <span> · </span> <a href="https://github.com/deadlock-mv/3d_project_portofolio/issues"> Request Feature </a> </h4>


</div>

# :notebook_with_decorative_cover: Table of Contents

- [About the Project](#star2-about-the-project)
- [Roadmap](#compass-roadmap)
- [FAQ](#grey_question-faq)
- [Contact](#handshake-contact)
- [Acknowledgements](#gem-acknowledgements)


## :star2: About the Project
### :space_invader: Tech Stack
<details> <summary>Client</summary> <ul>
<li><a href="">Nodejs</a></li>
<li><a href="">Reactjs</a></li>
<li><a href="">Threejs</a></li>
</ul> </details>

### :dart: Features
- 3D Models
- Interactive Design
- Mail Service
- Live Links


### :art: Color Reference
| Color | Hex |
| --------------- | ---------------------------------------------------------------- |
| Primary Color | ![#3562a0](https://via.placeholder.com/10/3562a0?text=+) #3562a0 |
| Secondary Color | ![#246d95](https://via.placeholder.com/10/246d95?text=+) #246d95 |
| Accent Color | ![#00ADB5](https://via.placeholder.com/10/00ADB5?text=+) #00ADB5 |
| Text Color | ![#f2b188](https://via.placeholder.com/10/f2b188?text=+) #f2b188 |

### :key: Environment Variables
To run this project, you will need to add the following environment variables to your .env file
`VITE_APP_EMAILJS_SERVICE_ID`

`VITE_APP_EMAILJS_TEMPLATE_ID`

`VITE_APP_EMAILJS_PUBLIC_KEY`



## :toolbox: Getting Started

### :bangbang: Prerequisites

- Nodejs 18 or above
```bash
nvm install 18
```


### :gear: Installation

Set the Nodejs version to 18
```bash
nvm use 18
```
Install all the requirements dependencies
```bash
npm i
```


### :running: Run Locally

Clone the project

```bash
https://github.com/deadlock-mv/3d_portfolio_project
```
After running all the commands related to setup, run the server locally
```bash
npm run dev
```


## :compass: Roadmap

* [x] Firstly, we design the navbar with three pages mainly - home, about, projects
* [x] Then, we dive into homepage, wherein we define island model and its related animation controls. Later we define the bird as well as plane models and their respective actions
* [x] We add refs on island model to showcase different links to different pages
* [x] Next, dive into the projects page, wherein we showcase the different projects we have made till now
* [x] Next, we define the about page where we list our skills as well as the experience
* [x] We make contact page, where mail service is available using the emailjs api. Also we define the fox model
* [x] We add the contact page links to the footer of about and project pages. Voilla!!! You just completed building a portfolio site.


## :grey_question: FAQ

- How to change the skillset, projectset, experienceset?
- Just change the values accordingly in constant.jsx present in constant folder
- How to change the camera angles?
- You can play with camera angles by just giving different input to the camera attribute inside the mesh and get the suitable angle.


## :handshake: Contact

Abhishek - - abmath374@gmail.com

Project Link: [https://github.com/deadlock-mv/3d_portfolio_project](https://github.com/deadlock-mv/3d_portfolio_project)

## :gem: Acknowledgements

Use this section to mention useful resources and libraries that you have used in your projects.

- [for svgs, icons ](https://uxwing.com/data-management-icon/)
