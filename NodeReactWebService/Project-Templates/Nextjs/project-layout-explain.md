---
layout: default_c
RefPages:
--- 
<br><br><br>
# The default project explained
This directory conatains different directories and files by default, here we explain shortly how these relate.
The created folder is based on this React command to build the project

``` npx create-next-app YourProject --typescript --tailwind --src-dir --app --import-alias --eslint "@/components" ```

|  **Directory**                        | **Explanation**  
| :-----                                | :----      
| /public                               | Your static files, that can be directly accesed. Example: /logo.png 
| /src                                  | Your Core application source code
| /src/pages                            | your pages. Defines routes and corresponding componnents
| /src/components                       | Your Reusable components
| /src/styles                           | Your CSS global styles or Tailwind CSS
| /src/app                              | Your 'main' app definition
| /node_mdules                          | Installed 'npm install' dependencies (system)

<br>

|  **Files**                            | **Explanation**  
| :-----                                | :----      
| next-env.d.ts                         | Makes Typescript types available (auto generated)
| tsconfig.json                         | Typescript configuration file, changes Typescrip settings
| tailwind.config.ts                    | Tailwind configuration, used to customize
| postcss.config.mjs                    | Configuration for PostCSS, tool used by Tailwind
| package.json                          | Metadata  for your React project, use this to manage dependencies and scripts    
| package-lock.json                     | Unsures project dependencies are of same version
| .env                                  | Environment variables, Port, API Keys ...

<br>
<details closed>  
  <summary class="clickable-summary">
  <span  class="summary-icon"></span> 
Side note: Pages (React Router) or App Router?
  </summary> 	<!-- On same line is failure, Don't indent the following Markdown lines!  -->


### Pages (React Router) or App Router?
> - **Pages** for traditional, no Next,js applications. Each route corresponds to component. Not using the App directorie but just the src Appropriate: <br><br>
>    - SPA (Single Page Apps)
>    - Custom Configurations, high level of routing control
>    - No SSR (Server-Side Rendering)
> - **App Router**, Next.js 13: <br>
> Each file in the App directory automatically becomes a route. This approach integrates with SSR (Server-Side Rendering) and SSG >(Static Site Generation.
><br>
</details>