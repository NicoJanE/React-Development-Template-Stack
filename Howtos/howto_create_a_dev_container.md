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
<br><br><br>

# 1. Create and Start a React Developer Container
This section describes how to create and start the React developer container, which enables you to immediately begin developing your applications within the container. Since React supports various project types (SPAs, MPAs, static sites, SSR, mobile PWAs, Electron), we will gradually provide additional Docker files to extend the container. The goal is to allow you to choose a project type by selecting the corresponding docker-compose_* file, which will set up the required software and provide you with a template application. <br><br>

>**Swarm support** <br>
You can use this container in a Docker Swarm. This is not described here, as it is covered in the **PHP Development Template Stack**. See [here](https://nicojane.github.io/PHP-Development-Template-Stack/) check out the link ***howto_create_a_swarm***. Since you will need to follow the same procedure, please refer to that project.<br><br>

<details closed>  
  <summary class="clickable-summary">
  <span  class="summary-icon"></span> 
  **Side note**: Docker call syntax
  </summary> 	<!-- On same line is failure, Don't indent the following Markdown lines!  -->
  
>### Docker calling context 
<small> (***Skip this if you know Docker basics***) </small><br>
**Take note: Docker calling context**
Because we use Docker files (Dockerfile and compose) with descriptive names, such as **Dockerfile_Nodejs_React_Cont** instead of just **Dockerfile**, this affects how Docker commands are executed. For example, with a standard **Dockerfile**, we would use this command to reference  the Docker file in the **Docker Compose** file:
<br>
```
context: .
dockerfile: Dockefile
```
In our case, we cannot use the default name but have to specify the name we gave, thus:<br>
```     
build: 	    
context: .
dockerfile: Dockerfile_Nodejs_React_Cont	    
```
 The same applies for using the build command. With the default Dockerfile, you can use this:
```
 docker build 
 # This will assume a file: Dockerfile is available
```
With the named file, we have to use
```
 docker build -f MyDockerFileNameHere
```
The same applies for running the Compose file (use **-f** option)
</details>

## 1.1 The Basic React Container Setup
This Docker React container consists of a couple of Dockerfile and Compose combinations. The first setup is needed to install Node.js, which also includes the npx program, allowing us to create a new React project. This step installs the basics, and afterward, we can run another Dockerfile/Compose combination to create the React project.

<details closed>  
  <summary class="clickable-summary">
  <span  class="summary-icon"></span> 
  **Side note**: Create Project from Template
  </summary> 	<!-- On same line is failure, Don't indent the following Markdown lines!  -->
  
>### Create Project from Template
>>  <small> ***Skipp this if you known how to deal with copy\customize docker files*** </small> <br>
>
> To adapt the template directory for your project, follow these steps. This guide assumes you’re using the React stack; if you’re working with a different stack (e.g., PHP, Rust), simply replace “React” with the stack name your are using.
> 1. Copy the whole directory to your project name:
`copy "React Development Template Stack" MyReactStack` <br> <br>
> 1. within your **MyReactStack** open the ***[name]Service*** directory <br><br>
*Warning*{: style="color: red;font-size:13px; "} <small>When using multiple containers, it's a good idea to rename the directory (for example, by adding a number) before proceeding. Otherwise, the containers will be grouped together, which is generally helpful, but this can lead to caching issues in certain container stacks, such as React. These issues may manifest as the same directories appearing in the container from a previous instance after running the **compose_nodejs_react_cont.yml** command. Caching problems can be quite troublesome in some Docker stack configurations</small> <br><br>
> 3. Customize the Dockerfiles: Since most Docker Compose setups involve a parent-child relationship (i.e., chaining), a change in one Dockerfile may require updates to all related files. Follow these steps:<br><br>
3.1  In the first compose_\* file change the **services name** to an appropriate name: <br>
```services:
webserver-nodejs-react:  # Change this ```<br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <!-- sorry for this --> 	
<small> <sup>*</sup>Always use lowercase!</small> <br><br>
3.2 The above **service name** may appear more than once in the same file, update these service names as well! <br><br>
3.3 Changes the **service name**  from step 3.1 in the other **compose_\* files**  <br><br>
3.4 Check the compose_\* files when it contain a **image name** than update this to your own image name:<br>
`` build:`` <br>
``     context: .  ``<br>
``     dockerfile: Dockerfile_Nodejs_React_Cont`` <br>
``       image: eelhart/react-base:latest      `` <br>
``		# Update above. i.e: [yourname/react-prjx]`` <br><br>
3.5 This **image name** may appear in other compose_\* files and other Dockerfile_\* files, updates these image names as well.
>
> 4 Lastly, update the ports to ensure that each host port is unique across all running containers. In your Docker Compose file, you might see this configuration: <br>
``ports:`` <br>
``target: 3001        # Container port.`` <br> 
`` published: 3002    # Host port, Make SURE it is unique    `` <br>
<br><small> Alternatively, the syntax might look like this (achieving the same result): </small><br>
`` ports:`` <br>
`` - "3002:3001"      # host:container`` <br><br>
> **Make sure that Host port: 3002 is not used by any other docker container or other services on your host!**
<br> <br>
</details>

**To Setup** the basic React container in docker Desktop execute this command from the **[\*Service]**  directory:  
```
docker-compose -f compose_nodejs_react_cont.yml up -d --build --force-recreate
#
# To avoid caching issue, delete the container and use the Docker prune.    
# Command: 'docker system prune -a --volumes' 
```
> *Warning!*{: style="color: red;font-size:13px; "} <br>
> <small> When recreating the same container(service name) avoid subtle/annoying caching issues, to avoid irritation:</small>
> 
> - delete the container
> - delete the volume and 
> - use the Docker prune command,so: 
> ``docker system prune -a --volumes``<br><br>
> 


### Setup Result
After running this command, you can open a terminal session in the container. By default: - you should be in the ***projects*** directory (pwd), 
- This directory should be empty (ls). If it is not empty, you may be experiencing caching  issues!
- In the root of the **container** a directory **'shared-host'** is available which is mapped to the **host** in the directory: **NodeReactWebService\shared-host**. Use this to exchange files or create backup of your project (Example: `cp -r /projects/nextjs/myproject /shared-host)

--- 

# 2. Creating React projects 
This section includes several Dockerfile and Docker Compose combinations that you can choose from to create a startup project. All the procedures in these subsections assume a Windows host, but you should have no trouble adapting them for a Linux host


> *Warning!*{: style="color: red;font-size:13px; "} <br>
> By default you can only start one NPN server with a project this means that only the last project created will be run with NPN. This can be changed using for example, **npn-run-all** or using a **Process Manager**. At the moment this is **not** part of this stack!
<br>
<br>
> 


## 2.1 creating a React project app using **CRA**
This will create a basic Node.js React project using the command **npx create-react-app(CRA)**. With this, you can create several default projects based on the standard ***cra-[\*]*** templates. Additionally, there are many community templates available; you can find examples [here](https://www.npmjs.com/search?q=cra-).The templates I provide can be found in the .env file.
> *Remark:*{: style="color: Grey;font-size:13px; "}
> <small>During creating of this is discovered that this method is declared deprecated since 2023. It seems to work fine, but the next docker/compose project setup will be based on something more trending(2024) <br></small>
>
1. Open the file: ***.env*** and choose one of the project types to use, remove the comments of one of the PRJ_TYPE_ARG lines.<br><br>
1. In the same ***.env*** file, set the variable 'PRJ_NAME_ARG' to a value for your project. Optional you can also set the environment variable from the command line:
``$env:PRJ_NAME_ARG="my-project"`` <br>
the value will be used for the project name and the project directory.
If you omit this step the default will be used (see variable:PRJ_NAME_ARG in the ***.env*** file) <br><br>
2. Then execute the docker command:<br>
``` docker  compose -f compose_cra_project.yml up -d  --remove-orphans --build --force-recreate ``` <br><br>
### Setup result & possible customization's
After that you can open a terminal session in your container and you should fine your project at: **/projects/prjtype/[my-project]** <br>
- The nodeJs server is automatic started with your new created project, In the host you can surf to: **http://localhost:3002/** The port can be changed (.env, see next) <br>
- In the (container) file: **/projects/prjtype/[my-project]/.env** You can find the used variables, one of them is the **HOST** variable, the value 0.0.0.0 indicates that the site is available from any host, thus also our host, defining localhost as value, will have the result that the site is not available from the (Windows) host. 
- Also the **CONTAINER PORT** variable can be found in the **.env** file change this if you want(no direct need to), and restart the container <br>
- You need to using a different **HOST PORT**? If this is required you need the change the published port in the base compose file: **compose_nodejs_react_cont.yml**, stop the container and start it  with: ``docker-compose -f compose_cra_project.yml up -d`` <br><br> *Warning!*{: style="color: red;font-size:13px; "} <small>When you try to restart with Docker Desktop, it will use the old host port!</small> <br>

> *Warning!*{: style="color: red;font-size:13px; "}
> <small>Make **SURE** the container port in **compose_nodejs_react_cont.yml** is the SAME as in *.env* (/projects/prjtype/[your projects]) otherwise it will **FAIL!!**</small>
<br>

> *Limitation!*{: style="color:purple;font-size:13px; "}
> <small>Currently, it is not possible to successfully run this Docker/Compose coordination multiple times with different project names (which was, and still is, the intention). When running it a second time, it creates a new, empty project. I believe this issue is related to Docker **caching** and the **nxp** command.<br><br> As **workaround** you could try to execute the following command in the projects directory of the container: 
``npx create-react-app /projects/prjtype/default_project_name --template cra-template``
In **.env** file in the new directory, make sure to update the container port (should be different than other project) After that start the application with: `npm start`<br> </small>
<br>

--- 
<br>

## 2.2 Creating a React Routing Project App using **Next.js** 
Since 2023, this is the preferred method for creating projects. In this Docker/Compose combination, we will create a project using the traditional React Routing method (the same as in 2.1 using the CRA method). However, this time we will use our own template. Because the Next.js environment does not support the React Routing method (which is characterized by rendering on the client side, while Next.js renders by default on the server), we may need to make some necessary changes in the **ClientRouter.js** file, where you should add your other **Link** and **Route** definitions.


to create a project:

1. In the 'NodeReactWebService' sub directory open the file **'.env'** in that file set:
	- PORT=3096	# Choose a unique port, this will be used foir the container as well as for the host! 
	- PRJ_NAME_ARG_NEXT=project3 # Update the project name 
1. Execute the following:
``` docker  compose -f compose_nextjs_cust_cra_project.yml up -d  --remove-orphans --build --force-recreate ``` <br><br>


### Setup result & possible customization's
- You should be able to open the browser in the host with this (change to your port)
``` http://localhost:3096/```
And the "React Template Website" should be displayed!
- In case something seems to be off first try to restart the Docker container!