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
This section describes how to create and start the React developer container, which enables you to immediately begin developing your applications within the container. Since React supports various project types (SPAs, MPAs, static sites, SSR, mobile PWAs, Electron), we will gradually provide additional Docker files to extend the container. The goal is to allow you to choose a project type by selecting the corresponding **docker-compose_\*** file, which will set up the required software and provide you with a template application. <br><br>


>**Swarm support** <br>
You can use this container in a Docker Swarm. This is not described here, as it is covered in the **PHP Development Template Stack**. See [here](https://nicojane.github.io/PHP-Development-Template-Stack/) check out the link ***howto_create_a_swarm***. Since you will need to follow the same procedure, please refer to that project.<br><br>

<details closed>  
  <summary class="clickable-summary">
  <span  class="summary-icon"></span> 
  **Side note**: Docker call syntax
  </summary> 	<!-- On same line is failure, Don't indent the following Markdown lines!  -->
  
>### Docker calling context <small> (***Skip this if you know Docker basics***) </small><br>
**Docker calling context**
Because we use Docker files (Dockerfile and compose) with descriptive names, such as **Dockerfile_Nodejs_React_Cont** instead of just **Dockerfile**, this affects how Docker commands are executed. For example, with a standard **Dockerfile**, we would use this command to reference  the Docker file in the **Docker Compose** file:
><pre class="nje-cmd-multi-line">
context: .
dockerfile: Dockefile	
></pre>
In our case, we cannot use the default name but have to specify the name we gave, thus:<br>
><pre class="nje-cmd-multi-line">
build: 	    
context: .
dockerfile: Dockerfile_Nodejs_React_Cont	    
></pre>
 The same applies for using the build command. With the default Dockerfile, you can use this:
 ><pre class="nje-cmd-multi-line">
docker build 
# This will assume a file: Dockerfile is available
></pre>
With the named file, we have to use
><pre class="nje-cmd-one-line">docker build -f MyDockerFileNameHere </pre> <br>
The same applies for running the Compose file (use **-f** option) 

<br>
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
> - Copy the whole directory to a new directory (MyReactStack) for your project:
><pre class="nje-cmd-one-line"> copy "React Development Template Stack" MyReactStack </pre>
> - Within your **MyReactStack** open the ***[name]Service*** directory <br><br>
>**Warning**{: style="color: red;font-size:13px; "} <small>When using multiple containers, it's a good idea to rename this ***[name]Service*** directory (for example, by adding a number) before proceeding. Otherwise, the containers will be grouped together, which is generally helpful, but this can lead to caching issues in certain container stacks, such as React. These issues may manifest as the same directories appearing in the container from a previous instance after running the **compose_nodejs_react_cont.yml** command. Caching problems can be quite troublesome in some Docker stack configurations</small> 
>
> - Customize the Dockerfiles: Since most Docker Compose setups involve a parent-child relationship (i.e., chaining), a change in one Dockerfile requires updates to all related docker files.**Follow these steps:**
>> - In the first compose_\* file change the **'services name'** to an appropriate name for you:
>> <pre class="nje-cmd-one-line"> services: webserver-nodejs-react:	# Us always lowercase! </pre>
>> - The **'service name'** may appear more than once in the same file, update these as well!
>> - Changes the **'service name'** from step 1 in the other 'compose_\* files' 
>> - Check the compose_\* files when it contain a **image name** than update this to your own image name:
>><pre class="nje-cmd-multi-line">
context: .
	dockerfile: Dockerfile_Nodejs_React_Cont
	image: eelhart/react-base:latest  # i.e: [yourname/react-prjx]
>>
>></pre>
>  - Lastly, update the ports to ensure that each host port is unique across all running containers. In your Docker Compose file, you might see this configuration: <br>
><pre class="nje-cmd-multi-line">
ports:
  target: 3001        # Container port.
  published: 3002     # Host port, Make SURE it is unique	
>  
# Alternatively, the syntax might look like this (achieving the same result): 
ports:
  - "3002:3001"      # host:container  
>
></pre>
> **Make sure that Host port: 3002 is not used by any other docker container or other services on your host!**
<br><br>
</details>


**To Setup** the basic React container in docker Desktop execute this command from the **[\*Service]**  directory:  
<pre class="nje-cmd-multi-line">
docker-compose -f compose_nodejs_react_cont.yml up -d --build --force-recreate
</pre>
> *Warning!*{: style="color: red;font-size:13px; "} <br>
> <small> When recreating the same container(service name) avoid subtle/annoying caching issues, to avoid irritation, make sure to:</small>
> - <small> delete the container</small>
> - <small> delete the volume and </small
> - <small> use the Docker prune command,so: </small
><pre class="nje-cmd-one-line-sm-ident"> docker system prune -a --volumes</pre>
> 


### Setup Result
After running this command, you can open a terminal session in the container. By default: - you should be in the ***projects*** directory (pwd), 
- This directory should be empty (ls). If it is not empty, you may be experiencing caching  issues!
- In the root of the **container** a directory **'shared-host'** is available which is mapped to the **host** in the directory: **NodeReactWebService\shared-host**. Use this to exchange files or create backup of your project (Example: `cp -r /projects/nextjs/myproject /shared-host)
<br><br>


# 2. Creating React projects 
This section includes several Dockerfile and Docker Compose combinations that you can choose from to create a startup project. All the procedures in these subsections assume a Windows host, but you should have no trouble adapting them for a Linux host. Also you should **first** have created the basic react container as described in: ***'1.1 The Basic React Container Setup'***


> *Warning!*{: style="color: red;font-size:13px; "} <br>
> By default you can only start one NPN server with a project in a container, this means that only the last project created will be run with NPN. This can be changed using for example, **npn-run-all** or using a **Process Manager**. At the moment this is **not** part of this container stack!
<br>
<br>
> 


## 2.1 creating a React project app using **CRA**
This will create a basic Node.js traditional React project using the command **npx create-react-app(CRA)** in combination with React Routing. With this, you can create multiple default projects based on the standard ***cra-[\*]*** templates. Additionally, there are many community templates available; you can find examples [here](https://www.npmjs.com/search?q=cra-).The templates supported can be found in the '.env' file.
This type of project was declared deprecated since 2023 but is still used a lot, It uses **SPA** (Single Page Application) which is processed on the client side. 

These day **Next.js** with (default) server page processing is preferred, this will be described in the next paragraph! 

> *Note:*{: style="color: Grey;font-size:13px; "}
> <small> The package **Next.js** (which is preferred these days) can also create a traditional React SPA.React Routing project; see paragraph 2.3 ***"Creating a React Routing Project Application using Next.js"*** <br></small><br> 

**Create the React application project:** 
1. Open the file: ***.env*** and choose one of the project types to use, remove the comments of one of the **PRJ_TYPE_ARG lines**
1. In the same ***.env*** file, set the variable **'PRJ_NAME_ARG'** to a value for your project. Optional you can also set the environment variable from the command line, This value will be used for the project name and the project directory.If you omit this step the **default** will be used (see variable: **PRJ_NAME_ARG** in the ***.env*** file) 
<pre class="nje-cmd-one-line">$env:PRJ_NAME_ARG="my-project"		# From Command line </pre>


3 Then execute the docker command
<pre class="nje-cmd-one-line">docker  compose -f compose_cra_project.yml up -d  --remove-orphans --build --force-recreate </pre>
<br>

### Setup result & possible customization's
After that you can open a terminal session in your container and you should fine your project at: **/projects/prjtype/[my-project]** <br>
- The nodeJs server is automatic started with your new created project, In the host you can surf to: 
<pre class="nje-cmd-one-line">http://localhost:3002/			# The port can be different </pre>
- In the (container) file: **/projects/prjtype/[my-project]/.env** You can find the used variables, one of them is the **HOST** variable, the value 0.0.0.0 indicates that the site is available from any host, thus also our host, defining localhost as value, will have the result that the site is not available from the (Windows) host. 
- Also the **CONTAINER PORT** variable can be found in the **.env** file change this if you want(no direct need to), and restart the container <br>
- You need to using a different **HOST PORT**? If this is required you need the change the published port in the base compose file: **compose_nodejs_react_cont.yml**, stop the container and start it  with:
 <pre class="nje-cmd-one-line"> docker-compose -f compose_cra_project.yml up -d </pre> 

> *Warning 1*{: style="color: red;font-size:13px; "} <small>When you try to restart with Docker Desktop, it will use the old host port!</small> <br>
> *Warning 2*{: style="color: red;font-size:13px; "}
> <small>Make **SURE** the container port in **compose_nodejs_react_cont.yml** is the SAME as in *.env* (/projects/prjtype/[your projects]) otherwise it will **FAIL!!**</small>
<br>

> *Limitation!*{: style="color:purple;font-size:13px; "}
> <small>Currently, it is not possible to successfully run this Docker/Compose coordination multiple times with different project names (which was, and still is, the intention). When running it a second time, it creates a new, empty project. I believe this issue is related to Docker **caching** and the **nxp** command.<br> 
**Possible workaround** you could try to execute the following command in the projects directory of the container: </small> 
<pre class="nje-cmd-one-line-sm-ident"> npx create-react-app /projects/prjtype/default_project_name --template cra-template</pre>

- In **.env** file in the new directory, make sure to update the container port (should be different than other project) After that start the application with:
<pre class="nje-cmd-one-line"> npm start </pre>
  
<br>

## 2.2 Building a Server-Rendered Next.js App with Automatic Routing (default)
The **Next.js** React framework package is since ~2023 the new preferred method to create an application.
Main changes compared to the default React framework include:
- No manual routing of components needed anymore, as routing is now automatically handled based on files and directory structure
- a page is rendered on the server(**Server-Side Rendering**) and not on the client, as is the case with  **client-side rendered** React applications. 
When creating a new application this should be the default choice, unless you have compelling reasons to do otherwise.

### To create a new project:

1. In the 'NodeReactWebService' sub directory open the file **'.env'** in that file set:
	- Choose a unique port, this will be used for the container as well as for the host! 
	<pre class="nje-cmd-one-line"> PORT=3098	</pre>
	-  Update the target project name 
	<pre class="nje-cmd-one-line"> PRJ_NAME_ARG_NEXT=my-project </pre>
1. Execute the following:
<pre class="nje-cmd-one-line"> 
docker  compose -f compose_nextjs_cust_project.yml up -d  --remove-orphans --build --force-recreate 
</pre>

### Setup result & possible customization's
- You should be able to open the browser in the host with this (change to your port)
``` http://localhost:3098/```
And the "React Template Website" should be displayed!
- In case something seems to be off first try to restart the Docker container!
<br><br>


## 2.3 Creating a React Routing Project App using **Next.js** 
Since 2023, this is the preferred method for creating projects. In this Docker/Compose combination, we will create a project using the traditional React Routing method (the same as in 2.1 using the CRA method). However, this time we will use our own template. Because the Next.js environment does not support the React Routing method (which is characterized by rendering on the client side, while Next.js renders by default on the server), we may need to make some necessary changes in the **ClientRouter.js** file, where you should add your other **Link** and **Route** definitions.


### To create a new project:

1. In the 'NodeReactWebService' sub directory open the file **'.env'** in that file set:
	- Choose a unique port, this will be used for the container as well as for the host! 
	<pre class="nje-cmd-one-line"> PORT=3098	</pre>
	-  Update the target project name 
	<pre class="nje-cmd-one-line"> PRJ_NAME_ARG_NEXT=my-project </pre>
1. Execute the following:
<pre class="nje-cmd-one-line"> 
docker  compose -f compose_nextjs_cust_cra_project.yml up -d  --remove-orphans --build --force-recreate 
</pre>


### Setup result & possible customization's
- You should be able to open the browser in the host with this (change to your port)
``` http://localhost:3098/```
And the "React Template Website" should be displayed!
- In case something seems to be off first try to restart the Docker container!
<br><br>


## 2.4 Backup and restore project
You can backup a React project to your host, via the host share, and restore it later (possible in a other directory with running on other port)

- **Backup the project**
	- In the directory where the project is execute:
	
	<pre class="nje-cmd-one-line">
	rsync -av --exclude='node_modules' my-prj/ /shared-host/my-prj
		<!-- <button title="Select text and use control CTRL-C to copy the command">Copy tip</button>	  -->
	</pre>
	
	- After this the project can be found on the docker directory of your host **NodeReactWebService\shared-host\/**. you can than move it where ever you like of course.

- **Restore the project**<br>
To restore use the Power-Shell file: **Restore_project.ps1** in combination with the environment variables in **.env** and follow these steps:

	- Open the file: **Restore_project.ps1** to indicate the docker context and the folder to restore are located.
	- Change the variable: **$ProjectToDockerContext** this must point to your Docker context (where the 'compose_restore_project.yml' is located) change the variable: **ProjectToRestore** this must point to the React project to restore.
	- Optional(but recommenced) set the environment variable in .env
		- Set the base target directory in the container , example: /projects/myweb-sites
		<pre class="nje-cmd-one-line"> PRJ_BASE_ARG_REST=/projects/myweb-sites  </pre>
		- Sets the target project name (dir) in the container, example: /mysite
		<pre class="nje-cmd-one-line">PRJ_TARGET_ARG_REST=/mysite	</pre>
>The above example results in: **/projects/myweb-sites/mysite** 

		- Set the used port when running 
		<pre class="nje-cmd-one-line"> PORT=3072	</pre>
- Finally, run the Power-Shell file:
<pre class="nje-cmd-one-line">./Restore_project.ps1 </pre>
This will call the ***'compose_restore_project.yml'***, when the **ProjectToRestore** directory is found and creates and starts the container with the restored React project.

### Result
This should have created the directories as displayed above and the web application should be available at: `https://localhost:3097` 
<br><br>
# 3 Develop with VSC
To develop in **V**isual **S**tudio **C**ode we advice the following method and Plugins.

### 3.1. Open the container application
We have provide already a **'settings.json'** file with relevant settings in the .vscode directory these settings will be used when you open\load the container application. The **'settings.json'** requires some plugins to be installed make sure to install these **first**. 
- **Required plugins** <br>	
	<small>(*See code below to install them easily*)</small>
	- ESLint
	- Prettier
	- Path Intellisense 
	- Bracket Pair Colorizer 2 
	- Auto Rename Tag. 
	
	
	<pre class="nje-cmd-multi-line">
	<!--	<button title="Select text and use control CTRL-C to copy the command">Copy tip</button>	  -->
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
	# Install required plugins` 
	code --install-extension dbaeumer.vscode-eslint
	code --install-extension esbenp.prettier-vscode
	code --install-extension christian-kohler.path-intellisense
	</pre>


### After this open the docker React app as follow
- Open Visual Studio Code
- Open the docker Tab on the left
- In 'Containers' section, select your container and right click -> 'Attach Visual Studio Code'
- if the project directory is not opened automatically, choose: **'Open folder'** and select the folder ***/projects***
	- optional you can select the folder: ***/projects[type][project name]*** if you know the name of your project.

Note 1 that changes my in the code are direct updated in the web page, if it is open (auto update)
Note 2 also that you can download the project to your host as a Backup, this download can be restored with the restore Docker compose file, **but** when using this download as restore make sure the **node_modules** is removed(this will be regenerated during restore) and also the **.next**(don't remove **.vscode**) See the paragraph 'Backup and restore project' in this document for more instructions and an alternative method of backup the project.


