---
layout: default_c
RefPages:
 - howto_create_a_dev_container
--- 

<small>
<br><br>
_This file is part of: **React Development Template Stack**_
_Copyright (c) 2024 Nico Jan Eelhart_
_This source code is licensed under the MIT License found in the  'LICENSE.md' file in the root directory of this source tree._
</small>
<br><br>

# What
This is a Docker template container for React development across different projects. It contains:
- Node.js (required for React) supported and tested versions (as of July '24)
	- Node.js version 16
	- Node.js version 18
	- Node.js version 20
	- Node.js version 22 (**default**) <br>
	<sup>*To change the version, update the 'FROM node' line in Dockerfile_Nodejs_React_Cont</sup>
	
- React itself
	- Next.js (preferred method to create React apps)
- Project-specific Docker Compose files to create different types of start-up projects. Currently:<br><br>
	- A project created with the legacy tool 'npx create-react-app' (CRA), known as the traditional React model, where rendering always occurs on the client. This tool offers many templates that can be used (you can indicate which to use in the .env file).
		- **Configure:** ***.env***
		- **Execute:** ***compose_cra_project.yml***
	- A project created with Next.js, the now-preferred tool, using 'npx create-next-app'. This project is still a traditional React routing-based application (à la CRA), but this time it is based on our own template, which will give you a push in the right direction. Note that for this project, Next.js needs a specific configuration (which has been done in: **ClientRouter.js** )   
		- **Configure:** ***.env***
		- **Execute:** ***compose_nextjs_cust_cra_project.yml***
	- Another project created with Next.js, but this time using the preferred Next.js routing method.
		- **Configure:** ***TODO***
		- **Execute:** ***TODO***

You can use this container to start programming locally for development and testing purposes. I recommend opening the Docker container in Visual Studio Code and starting development from there.

# Where to find more information
To create and run a development container, open the [how to create a development container](./Howtos/howto_create_a_dev_container) guide in the Howtos subdirectory. This explains the basic installation of the React container and the additional projects that can be created.


<details closed>  
  <summary class="clickable-summary">
  <span  class="summary-icon"></span> 
  **Side note**: Personal maintenance instructions
  </summary> 	<!-- On same line is failure, Don't indent the following Markdown lines!  -->
  
>### Personal maintenance instructions
>The template containers are **maintained** only in the **DTS**. I copy these to a project directory and customize them there for the project. If the customization is generic, I will merge it into the DTS template project
>
> <small style="display: block; margin-bottom: -18px;"><b><i>Personal project structure</i></b></small> 
>
>  <small> **Docker-Template-Stacks (DTS)**</small> | <small> **Project Location** </small> | 
> :-------------- | :-------------------- |
> <small>DTS\PHP Development Template Stack\\ </small> | <small> \Php\Projects\projectX  </small>
> <small>DTS\Rust Template Stack\\ </small> 	| <small> \Rust\Projects\ProjectY </small>
>
><br>
> *Update:*{: style="color: Grey;font-size:13px; "} <small> these template central!</small>
</details>