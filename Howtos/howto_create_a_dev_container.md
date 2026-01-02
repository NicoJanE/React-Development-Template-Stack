---
layout: default_c
RefPages:
 - howto_create_a_dev_container
--- 

<!--

Author note — custom layout and navigation (I like it, and hate it perhaps more!)

This document intentionally uses a mix of Markdown and inline HTML to achieve a compact, interactive, and visually distinct layout. These choices are deliberate and will be kept, while there are a lott of thing I'm not happy with and are on my list for improvement:

- Bullets are sometimes used for indentation, but the real goal is to visually group or offset code blocks and commands. This can create extra bullets, but it helps with clarity and structure.
- Emojis are used in headings for fast visual scanning and section identification. This can complicate anchor links, so explicit HTML anchors (e.g., <a name="custom-anchor1"></a>) are added before headers to ensure reliable navigation.
- HTML <details> sections are used to hide optional or advanced content, letting readers expand for more information as needed. This keeps the main document readable and lets users dive deeper when they want.
- HTML details often use bullets inside for clarity, e.g., "> <small> ◉ Delete the container </small>". This is a practical workaround for presenting step-by-step or checklist items inside collapsible sections.
- Alternative layouts (like Gist) were considered, but this format best fits the project's needs for now.

Trade-offs and tips:
- Markdown linting may flag inline HTML, spacing, or anchor usage. These are accepted for the sake of layout and navigation.
- Anchor links: GitHub and some Markdown renderers may not generate reliable anchors for emoji headers. Use explicit <a name="..."> anchors or HTML headers with id attributes for stable links.
- Always preview changes on GitHub (or your, local, target renderer) to confirm layout and navigation work as intended.

SOLUTION for the issue
- Create more CSS elements and make a template page in which all available elements are use. This page is a good example use case

-->

# React Developer Container <span style="color: #409EFF; font-size: 0.6em; font-style: italic;"> -  Docker Setup & Usage Guide</span>

![MIT License](https://img.shields.io/badge/License-MIT-green) ![Commercial Services Available](https://img.shields.io/badge/Services-Optional-blue)

## 🎯 Introduction

This section describes how to create and start the React developer container, which enables you to immediately begin developing your applications within the container. Since React supports various project types (SPAs, MPAs, static sites, SSR, mobile PWAs, Electron), we will gradually provide additional Docker files to extend the container. The goal is to allow you to choose a project type by selecting the corresponding **docker-compose_\*** file, which will set up the required software and provide you with a template application. <br>

<details>  
  <summary class="clickable-summary">
  <span  class="summary-icon"></span> <!-- Square Symbol -->
  **Swarm support**{: style="color:#5491fa;font-size:13px; "}
  </summary> <!-- On same line is failure -->
> <small>
>This container supports Docker Swarm. For setup instructions, refer to the **PHP Development Template Stack**. See [this guide](https://nicojane.github.io/PHP-Development-Template-Stack/) and the ***howto_create_a_swarm*** link. The procedure is identical, so use that project for details if needed. </small>
</details>

<a name="custom-anchor1"></a>
### 🛠️ The Basic React Container Setup

This Docker React container consists of a couple of Dockerfile and Compose combinations. The first setup is needed to install Node.js, which also includes the npx program, allowing us to create a new React project. This step installs the basics, and afterward, we can run another Dockerfile/Compose combination to create the React project.

**To Setup** the basic React container in docker Desktop execute this command from the **[\*Service]**  directory:  
<pre class="nje-cmd-multi-line"> docker-compose -f compose_nodejs_react_cont.yml up -d --build --force-recreate </pre>

<details>  
  <summary class="clickable-summary">
  <span  class="summary-icon"></span> <!-- Square Symbol -->
   **Warning:**{: style="color: orange;font-size:15px; "} Regenerate the container
  </summary>
  
  > <small> When recreating the same container (service name), avoid subtle and annoying caching issues. To prevent irritation,  make sure to: </small>  
  > <div style="margin-left: 16px; margin-top:-20px">
  > <small> ◉ Delete the container </small>  
  > <small> ◉ Delete the volume  </small>  
  > <small> ◉ Use the Docker prune command  </small>  
  > <pre class="nje-cmd-one-line">docker system prune -a --volumes </pre>
  > </div>
</details>

### ✅ Setup Result

After running this command, you can open a terminal session in the container. By default: - you should be in the ***projects*** directory (pwd),

- This directory should be empty (ls). If it is not empty, you may be experiencing caching  issues!
- In the root of the **container** a directory **'shared-host'** is available which is mapped to the **host** in the directory: **NodeReactWebService\shared-host**. Use this to exchange files or create backup of your project (Example: `cp -r /projects/nextjs/myproject /shared-host)

---

## ⚙️ Creating React projects

This section includes several Dockerfile and Docker Compose combinations that you can choose from to create a startup project. All the procedures in these subsections assume a Windows host, but you should have no trouble adapting them for a Linux host. Also you should **first** have created the basic react container as described in: [The Basic React Container Setup](#custom-anchor1)

<details>  
  <summary class="clickable-summary">
  <span  class="summary-icon"></span> <!-- Square Symbol -->
   **Warning:**{: style="color: orange;font-size:15px; "} Running NPN server
  </summary>

  > <small> By default you can only start one NPN server with a project in a container, this means that only the last project created will be run with NPN. This can be changed using for example, **npn-run-all** or using a **Process Manager**. At the moment this is **not** part of this container stack! </small>
</details>

### ⚡ creating a React project app using **CRA**

This will create a basic Node.js traditional React project using the command **npx create-react-app(CRA)** in combination with React Routing. With this, you can create multiple default projects based on the standard ***cra-[\*]*** templates. Additionally, there are many community templates available; you can find examples [here](https://www.npmjs.com/search?q=cra-).The templates supported can be found in the '.env' file.
This type of project was declared deprecated since 2023 but is still used a lot, It uses **SPA** (Single Page Application) which is processed on the client side.

These day **Next.js** with (default) server page processing is preferred, this will be described in the next paragraph! 

<details>  
  <summary class="clickable-summary">
  <span  class="summary-icon"></span> <!-- Square Symbol -->
  ***Note:***{: style="color: Grey;font-size:13px; "} Traditional React
  </summary>

  > <small> The package **Next.js** (which is preferred these days) can also create a traditional React SPA.React Routing project; see paragraph [Creating a React Routing Project Application using Next.js](#custom-anchor2)</small>

</details>

**Create the React application project:**
1. Open the file: ***.env*** and choose one of the project types to use, remove the comments of one of the **PRJ_TYPE_ARG lines**
1. In the same ***.env*** file, set the variable **'PRJ_NAME_ARG'** to a value for your project. Optional you can also set the environment variable from the command line, This value will be used for the project name and the project directory.If you omit this step the **default** will be used (see variable: **PRJ_NAME_ARG** in the ***.env*** file)
- <pre class="nje-cmd-one-line-sm-ident" style="margin-left: 8px;margin-top:0px;margin-bottom:-10px;">$env:PRJ_NAME_ARG="my-project"  # From Command line </pre>

3. Then execute the docker command
- <pre class="nje-cmd-one-line-sm-ident" style="margin-left: 8px;margin-top:0px;margin-bottom:-10px;">docker  compose -f compose_cra_project.yml up -d  --remove-orphans --build --force-recreate </pre>
<br>

#### ✅ Setup result & possible customization's

After that you can open a terminal session in your container and you should fine your project at: **/projects/prjtype/[my-project]** <br>

- The nodeJs server is automatic started with your new created project, In the host you can surf to:

<pre class="nje-cmd-one-line-sm-ident" style="margin-left: 22px;margin-top:-20px;margin-bottom:0px;"> http://localhost:3002/			# The port can be different </pre>

- In the (container) file: **/projects/prjtype/[my-project]/.env** You can find the used variables, one of them is the **HOST** variable, the value 0.0.0.0 indicates that the site is available from any host, thus also our host, defining localhost as value, will have the result that the site is not available from the (Windows) host. 
- Also the **CONTAINER PORT** variable can be found in the **.env** file change this if you want(no direct need to), and restart the container <br>
- You need to using a different **HOST PORT**? If this is required you need the change the published port in the base compose file:
  - **compose_nodejs_react_cont.yml**, stop the container and start it  with:

 <pre class="nje-cmd-one-line-sm-ident" style="margin-left: 40px;margin-top:-20px;margin-bottom:15px;"> docker-compose -f compose_cra_project.yml up -d </pre>

 <details>  
  <summary class="clickable-summary" style="margin-left: 40px;margin-top:0px;margin-bottom:-20px;">
  <span  class="summary-icon"></span> <!-- Square Symbol -->
   **Warnings:**{: style="color: orange;font-size:15px; "} Ports
  </summary>

  > **Warning 1**{: style="color: orange;font-size:13px; "} <small>When you try to restart with Docker Desktop, it will use the old host port!</small>  
  > **Warning 2**{: style="color: orange;font-size:13px; "}  <small>Make **SURE** the container port in **compose_nodejs_react_cont.yml** is the SAME as in *.env* (/projects/prjtype/[your projects]) otherwise it **fails**
  >
  > **Limitation!**{: style="color:purple;font-size:13px; "}
  > <small>Currently, it is not possible to successfully run this Docker/Compose coordination multiple times with different project names (which was, and still is, the intention). When running it a second time, it creates a new, empty project. I believe this issue is related to Docker **caching** and the **nxp** command.<br> 
  > **Possible workaround** you could try to execute the following command in the projects directory of the container: </small>
  > <pre class="nje-cmd-one-line-sm-ident" style="margin-left: 1px;margin-top:-20px;margin-bottom:0px;" >npx create-react-app /projects/prjtype/default_project_name --template cra-template</pre>
</details>

- In **.env** file in the new directory, make sure to update the container port (should be different than other project) After that start the application with:

<pre class="nje-cmd-one-line-sm-ident" style="margin-left: 22px;margin-top:-20px;margin-bottom:0px;"> npm start </pre>
  
<br>

### ⚡ Building a Server-Rendered Next.js App with Automatic Routing (default)

The **Next.js** React framework package is since ~2023 the new preferred method to create an application.
Main changes compared to the default React framework include:

- No manual routing of components needed anymore, as routing is now automatically handled based on files and directory structure
- a page is rendered on the server(**Server-Side Rendering**) and not on the client, as is the case with  **client-side rendered** React applications. 
When creating a new application this should be the default choice, unless you have compelling reasons to do otherwise.

#### ⚡ creating a new project

1. In the 'NodeReactWebService' sub directory open the file **'.env'** in that file set:
   - Choose a unique port, this will be used for the container as well as for the host! 
   <pre class="nje-cmd-one-line-sm-ident"> PORT=3098</pre>
   - Update the target project name 
   <pre class="nje-cmd-one-line-sm-ident"> PRJ_NAME_ARG_NEXT=my-project </pre>
1. Execute the following:
<pre class="nje-cmd-one-line-sm-ident">
docker  compose -f compose_nextjs_cust_project.yml up -d  --remove-orphans --build --force-recreate 
</pre>

<br>

#### ✅ Setup result & possible customization's

- You should be able to open the browser in the host with this (change to your port) And the "React Template Website" should be displayed!

<pre class="nje-cmd-one-line-sm-ident">  http://localhost:3098/ </pre>

- In case something seems to be off first try to restart the Docker container!

---

<a name="custom-anchor2"></a>
### ⚡ Creating a React Routing Project App using **Next.js**

Since 2023, this is the preferred method for creating projects. In this Docker/Compose combination, we will create a project using the traditional React Routing method (the same as in 2.1 using the CRA method). However, this time we will use our own template. Because the Next.js environment does not support the React Routing method (which is characterized by rendering on the client side, while Next.js renders by default on the server), we may need to make some necessary changes in the **ClientRouter.js** file, where you should add your other **Link** and **Route** definitions.

#### ⚡ To create a new project

1. In the 'NodeReactWebService' sub directory open the file **'.env'** in that file set:
   - Choose a unique port, this will be used for the container as well as for the host! 
   <pre class="nje-cmd-one-line-sm-ident"> PORT=3098	</pre>
   -  Update the target project name 
   <pre class="nje-cmd-one-line-sm-ident"> PRJ_NAME_ARG_NEXT=my-project </pre>
1. Execute the following:
<pre class="nje-cmd-one-line-sm-ident">
docker  compose -f compose_nextjs_cust_cra_project.yml up -d  --remove-orphans --build --force-recreate
</pre>

#### ✅ Setup result & possible customization's

- You should be able to open the browser in the host with this (change to your port) And the "React Template Website" should be displayed!

<pre class="nje-cmd-one-line-sm-ident">  http://localhost:3098/ </pre>

- In case something seems to be off first try to restart the Docker container!

---

## 🗄️ Backup and restore project

You can backup a React project to your host, via the host share, and restore it later (possible in a other directory with running on other port)

- **💾 Backup the project**
  - In the directory where the project is execute:

    <pre class="nje-cmd-one-line-sm-ident" style="margin-left: 7px;margin-top:-12px;">
    rsync -av --exclude='node_modules' my-prj/ /shared-host/my-prj
    <!-- <button title="Select text and use control CTRL-C to copy the command">Copy tip</button>	  -->
    </pre>

    - After this the project can be found on the docker directory of your host **NodeReactWebService\shared-host\/**. you can than move it where ever you like of course.

- **🔄 Restore the project**  
To restore use the Power-Shell file: **Restore_project.ps1** in combination with the environment variables in **.env** and follow these steps:

  - Open the file: **Restore_project.ps1** to indicate the docker context and the folder to restore are located.
  - Change the variable: **$ProjectToDockerContext** this must point to your Docker context (where the 'compose_restore_project.yml' is located) change the variable: **ProjectToRestore** this must point to the React project to restore.
  - Optional(but recommenced) set the environment variable in .env
    - Set the base target directory in the container , example: /projects/myweb-sites
      <pre class="nje-cmd-one-line-sm-ident" style="margin-left: 0px;margin-top:0px;">PRJ_BASE_ARG_REST=/projects/myweb-sites  </pre>
    - Sets the target project name (dir) in the container, example: /mysite
      <pre class="nje-cmd-one-line-sm-ident" style="margin-left: 0px;margin-top:0px;">PRJ_TARGET_ARG_REST=/mysite	</pre>
      >The above example results in: **/projects/myweb-sites/mysite** 

  - Set the used port when running
    <pre class="nje-cmd-one-line-sm-ident" style="margin-left: 0px;margin-top:0px;">PORT=3072</pre>
  - Finally, run the Power-Shell file:
    <pre class="nje-cmd-one-line-sm-ident" style="margin-left: 0px;margin-top:0px;">./Restore_project.ps1 </pre>

This will call the ***'compose_restore_project.yml'***, when the **ProjectToRestore** directory is found and creates and starts the container with the restored React project.

### ✅ Result

This should have created the directories as displayed above and the web application should be available at:

<pre class="nje-cmd-one-line-sm-ident" style="margin-left: 4px;margin-top:-18px;">http://localhost:3097/ </pre>

---
<br>
## <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg" alt="VS Code" width="20" height="20"> Develop with VS Code

To develop in Visual Studio Code we advice the following method and Plugins.

### Open the container application

We have provide already a **'settings.json'** file with relevant settings in the .vscode directory these settings will be used when you open\load the container application. The **'settings.json'** requires some plugins to be installed make sure to install these **first**.

- **Required plugins** <br>
  <small>(*See code below to install them easily*)</small>
  - ESLint
  - Prettier
  - Path Intellisense
  - Bracket Pair Colorizer 2
  - Auto Rename Tag.

    <pre class="nje-cmd-multi-line">
    # Install required plugins
    code --install-extension ms-vscode-remote.remote-containers
    code --install-extension dbaeumer.vscode-eslint
    code --install-extension esbenp.prettier-vscode
    code --install-extension christian-kohler.path-intellisense
    code --install-extension coenraads.bracket-pair-colorizer-2
    code --install-extension formulahendry.auto-rename-tag
    </pre>

- **Optional plugins** <br>
  <small>(*See code below to install them easily*)</small>
  - VS Code Styled Components
  - Jest
  - GitLens

    <pre class="nje-cmd-multi-line">
    # Install required plugins
    code --install-extension dbaeumer.vscode-eslint
    code --install-extension esbenp.prettier-vscode
    code --install-extension christian-kohler.path-intellisense
    </pre>

### ▶️ Open the docker React app

- Open Visual Studio Code
- Open the docker Tab on the left
- In 'Containers' section, select your container and right click -> 'Attach Visual Studio Code'
- if the project directory is not opened automatically, choose: **'Open folder'** and select the folder ***/projects***
  - optional you can select the folder: ***/projects[type][project name]*** if you know the name of your project.

<details>  
  <summary class="clickable-summary">
  <span  class="summary-icon"></span> <!-- Square Symbol -->
   **Notes:**{: style="color: orange;font-size:15px; "} live reload and backup & restore
  </summary>
  > <div style="margin-left: 16px; margin-top:-20px">
  > <small> ◉ Changes you make in the code are applied immediately to the running site (live reload), if the site is open in your browser. </small>  
  > <small> ◉ Backup & restore: You can download the project to the host and restore it with the Docker restore compose. Before restoring, delete the project’s node_modules and .next directories (they will be regenerated during restore). Do not remove the .vscode folder. See the "Backup and restore project" section for full instructions.  </small>  
  > </div>
</details>
<br>

<span style="color: #6d757dff; font-size: 13px; font-style: italic;">
<i><b>License</b><br>This file is part of: **React Development Template Stack**  Copyright (c) 2025-2026 Nico Jan Eelhart.This repository is [MIT licensed](../MIT-license.md) and free to use. For optional commercial support, customization, training, or long-term maintenance, see [COMMERCIAL.md](../COMMERCIAL.md).</i>
</span>

<br><br>
<center>─── ✦ ───</center>
