---
layout: default_c
RefPages:
 - howto_create_a_dev_container
--- 


# React <span style="color: #409EFF; font-size: 0.6em; font-style: italic;"> -  Docker container</span>

## ℹ️ Introduction

This is a Docker template container for React development projects.
You can use this container to start programming locally for development and testing purposes. I recommend opening the Docker container in Visual Studio Code.

### ⚡🏃‍♂️Quick Setup

This stack **contains:**

1. **Node.js** (required for React) supported and tested versions (as of July '24)
    - Node.js version 16
    - Node.js version 18
    - Node.js version 20
    - Node.js version **22** (**default**) <br> <sup>*To change the version, update the 'FROM node' line in Dockerfile_Nodejs_React_Cont</sup>

2. The **core Node.js** Docker compose file with the  **React** and **Next.js** packages. This is required to create the projects mentioned in the next paragraph.
   - **Quick setup:**
     - *Configure file:* ***.env***
     - *Execute docker file:* `compose -f compose_nodejs_react_cont.yml up -d  --build`

3. Project-specific Docker Compose files to create different types of **start-up projects** based on templates. Currently:
   - A project created with the legacy tool **'npx create-react-app'** (CRA), known as the traditional React model, where rendering always occurs on the client. This tool offers many templates that can be used (you can indicate which to use in the .env file).
     - **Quick setup2:**
       - *Configure file:* ***.env***
       - *Execute docker file:*
       <pre class="nje-cmd-one-line-sm-ident" style="margin-left: 190px;margin-top:-40px;margin-bottom:20px;">compose -f compose_cra_project.yml up -d  --build</pre>

   - Project created with **Next.js**, the now **preferred package**, using **'npx create-next-app'**.This project is still a **traditional React** routing-based application (à la CRA), but this time it is based on our own template, which will give you a push in the right direction. Note that for this project, Next.js needs a specific configuration (which has been done in: ***ClientRouter.js*** )
     - **Quick setup3:**
       - *Configure file:* ***.env***
       - *Execute docker file:*
       <pre class="nje-cmd-one-line-sm-ident" style="margin-left: 190px;margin-top:-40px;;margin-bottom:20px;">compose -f compose_nextjs_cust_cra_project.yml up -d  --build</pre>

     - The **preferred Next.js** project using the (default) automatic routing and the server rendering feature.
       - **Quick setup3:**
         - *Configure file:* ***.env***
         - *Execute docker file:*
        <pre class="nje-cmd-one-line-sm-ident" style="margin-left: 190px;margin-top:-40px;;margin-bottom:20px;">compose -f compose_nextjs_cust_project.yml up -d  --build</pre>
        <sup>*Please see next paragraph for reference to more details configuration information </sup>

## 🛠️  Setup instruction and usage

While the above **Quick setup** will make you get started I recommend to open the [**Setup & Usage Guide**](./Howtos/howto_create_a_dev_container) guide in the Howtos subdirectory. This explains the basic installation of the React container and the additional projects that can be created.

<span style="color: #6d757dff; font-size: 10px; font-style: italic;"> <br>
This file is part of: **React Development Template Stack**
Copyright (c) 2025 Nico Jan Eelhart. This source code is licensed under the MIT License found in the  'LICENSE.md' file in the root directory of this source tree.</span>

<center>─── ✦ ───</center>
