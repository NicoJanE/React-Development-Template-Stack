---
layout: default_c
RefPages:
 - howto_create_a_dev_container
--- 

<small>
_This file is part of: **React Development Template Stack**_
_Copyright (c) 2024 Nico Jan Eelhart_
_This source code is licensed under the MIT License found in the  'LICENSE.md' file in the root directory of this source tree._
</small>
<br><br>

# What
This is an Docker template container for **React** development, of different projects, it contains:
- Nodjes (required for React)
- React it self
- Project specific Docker compose files, to create different types of start-up projects 

You can use container to start programming in your local container for development and test purpose.

# Where more information
1. To create and run a development container document: open [how to create a development container](./Howtos/howto_create_a_dev_container) 


<br>
### My personal folder concept structure
The containers are **maintained only here**. After creation or updating of the container, the container is copy to the program language folder inside the   **\_docker-template** folder. From there it can be used in projects, example:

<small style="display: block; margin-bottom: -18px;"><b><i>Folder concept</i></b></small>

|language| Copy to Template Location | Us at project location|
|--------| -------------- | -------------------- |-----------------|
|React     | \React\\_docker-template\ 		| \React\Projects\projectX |
|Python  | \Python\\_docker-template\ 	| \Python\Projects\ProjectY |

<small><i>Check the version of the template in the 'README.md' (root)</i></small> <br><br>


> *Remark:*{: style="color: Grey;font-size:13px; "} 
> <small>Of course, you may change the container docker templates files for specific reasons but do this than in the specific project folder! When a change is generic it should be added (merged) into the development container here </small>

