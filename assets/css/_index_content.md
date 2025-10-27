---
layout: default_c
RefPages:
 - howto_create_A_dev_container
--- 

<script>
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.cp').forEach(function(el) {
    el.style.position = 'relative';
    var btn = document.createElement('button');
    btn.textContent = 'Copy';
    btn.style.color = '#2c8ac1ff';
    btn.style.position = 'absolute';
    btn.style.top = '8px';
    btn.style.right = '8px';
    btn.style.fontSize = '12px';
    btn.style.fontWeight = 'bold';
    btn.style.padding = '2px 6px';
    btn.style.borderRadius = '4px';
    btn.style.border = '1px solid #3077c8';
    btn.style.background = '#f5faff';
    btn.style.cursor = 'pointer';
    btn.onclick = function() {
      navigator.clipboard.writeText(el.textContent.replace('Copy','').trim());
    };
    el.appendChild(btn);
  });
});

</script>
<style>
pre.cp {
  margin-left: 36px;
  padding-top: 0px;
  padding-right: 6px;
  padding-bottom: 4px;
  padding-left: 6px;
  background: #111;
  color: #72b5dcff;
  border-radius: 10px;
  font-family: monospace;
  line-height: 1.2;
  white-space: pre;
}
</style>

**Contents**  
[Current](#custom-anchor1)  
[deprecated](#custom-anchor2)  
[template](#custom-anchor3)  

# Default 'nje_*' elements <span style="color: #409EFF; font-size: 0.6em; font-style: italic;"> -  Defined in CSS</span> <br>

<a name="custom-anchor1"></a>

## NEW Preferred

Preferrer these items  


<!-- markdownlint-disable  MD033 MD012                                                 -->
<!-- VSC:   Disable inconsistent annoying warning, in this case we don't want a empty line  -->
<!--        because the numbering will start over                                           -->
<!-- ************************************************************************************** -->

<span style="color: #409EFF; font-weight: bold;"> 1.CLI Command normal </span>

- ***Description***  
todo

- ***Usage***  

<pre class="cp"><xmp>
Text before 
<pre class="nje-cmd-one-line-sm-ident1" > docker-compose -f compose_cra_project.yml up -d  </pre>
</xmp></pre>

- ***Result***  

Text before 
<pre class="nje-cmd-one-line-sm" > docker-compose -f compose_cra_project.yml up -d  </pre>
Text after

---

<span style="color: #409EFF; font-weight: bold;"> 2.CLI Commands small below bullets (3 levels) </span>


- ***Description***  
todo

- ***Usage***  

<pre class="cp"><xmp>

Text before

- aa
  <pre class="nje-cmd-one-line-sm-ident1" > docker-compose -f compose_cra_project.yml up -d  </pre>
  - sadas
    <pre class="nje-cmd-one-line-sm-ident2" > docker-compose -f compose_cra_project.yml up -d </pre>
    - ss
      <pre class="nje-cmd-one-line-sm-ident3_red" > docker-compose -f compose_cra_project.yml up -d </pre>

</xmp></pre>

- ***Result***  

Text before 1

- aa
  <pre class="nje-cmd-one-line-sm-ident1" > docker-compose -f compose_cra_project.yml up -d  </pre>
  - sadas
    <pre class="nje-cmd-one-line-sm-ident2" > docker-compose -f compose_cra_project.yml up -d </pre>
    - ss
      <pre class="nje-cmd-one-line-sm-ident3_red" > docker-compose -f compose_cra_project.yml up -d </pre>

---

<span style="color: #409EFF; font-weight: bold;">3.Text block multiple lines </span>

- ***Description***  
Text block, default transparent, may have background color

- ***Usage***  

<pre class="cp"><xmp>
<div class="nje-text-block" style="background-color:blue; color:white">
line 1
line 2
line 3
line 4
</div>
</xmp></pre>

- ***Result***

Text before
<div class="nje-text-block" style="background-color:lightgray;">
Line 1  use 2 space for new line  
Line 2  
Line 3 no spaces
Line 4 no spaces
</div>

---

<span style="color: #409EFF; font-weight: bold;">4.Source Box, with copy button</span>

- ***Description***  
Text block Source block with copy function

- ***Usage***  

<pre class="cp"><xmp>
<pre class="nje-source-block" style="background-color:lightgray; ">
<!-- Alternative black yellow box -->
<!-- <div class="nje-text-block-"> -->

// Make sure
int main()
{
  int i=0;
}
</pre>
</xmp></pre>

- ***Result***

Text before2
<pre class="nje-source-block" style="background-color:lightgray; ">
// source code 1
int main()
{
  int i=0;
}
</pre>

Alternative
<pre class="nje-source-block-black">
// source code 2
int main()
{
  int i=0;
}

</pre>

---

<span style="color: #409EFF; font-weight: bold;">5  Text in default color line box (one line) </span>
**5.** **XXX Command**

- ***Description***  
todo

- ***Usage***  

<pre class="cp"><xmp>
<span class="nje-colored-block"> In Colored block 1 line </span>
</xmp></pre>

- ***Result***  
Text before  
<span class="nje-colored-block"> In Colored block 1 line </span>

---

<span style="color: #409EFF; font-weight: bold;">6.  Text in color line box (one line) </span>

- ***Description***  
todo

- ***Usage***  

<pre class="cp"><xmp>
<span class="nje-colored-block" style="--nje-bgcolor:red; --nje-textcolor:yellow; ">
Best used for one lin that fits
</span>
</xmp></pre>

- ***Result***  
Text before  
<span class="nje-colored-block" style="--nje-bgcolor:red; --nje-textcolor:yellow; ">
Best used for one lin that fits2
</span>

---


<span style="color: #409EFF; font-weight: bold;">7. Using tabs</span>

- ***Description***  
Indent a line and the wrapped text. Use ident: `nje-ident1` till `nje-ident8` every ident is about 2 chars

- ***Usage***  

<pre class="cp"><xmp>
Text before
Text before  
<div class="nje-ident4">
This is a sample text which show that the text, which does not carry any useful information at the moment, is indented also when the line breaks! That is exactly why I'm continue this line, as said Not very useful, I'm afraid you just wasted some time! Close the 'div' on newline 
</div>

ss
</xmp></pre>

- ***Result***  

Text before  
<div class="nje-ident4">
This is a sample text which show that the text, which does not carry any useful information at the moment, is indented also when the line breaks! That is exactly why I'm continue this line, as said Not very useful, I'm afraid you just wasted some time! Close the 'div' on newline 
</div>

text after

---







<!-- markdownlint-enable MD032 MD029 -->

<br><br><br>
[TO TEMPLATE](#custom-anchor3)  

<br><br><br><br><br><br>
---
---
<br>

<a name="custom-anchor2"></a>

# Appendix I  Deprecated

Elements still used (historical) but replaced by others  
[Switch to Current](#custom-anchor1)  


<!-- markdownlint-disable  MD033 MD012                                                 -->
<!-- VSC:   Disable inconsistent annoying warning, in this case we don't want a empty line  -->
<!--        because the numbering will start over                                           -->
<!-- ************************************************************************************** -->

<span style="color: #dd8c0aff; font-weight: bold;">1*.CMD command</span>

- ***Description***  
Displays code in black box. Uses a tab to right, starts on same line as previous needs br or 2 spaces (is on same line) or style property

- ***Usage***  

<pre class="cp"><xmp>
<span class="nje-cmd-one-line"> - command nje-cmd-one-line </span>
</xmp></pre>

- ***Result***  
Text before
<span class="nje-cmd-one-line"> - The command nje-cmd-one-line </span>

---

<span style="color: #dd8c0aff; font-weight: bold;">*2. CMD Command small (ver)</span>

- ***Description***  
Same as 1 but a smaller vertical box. Displays code in black box. Uses a tab to right, starts on same line as previous needs br or 2 spaces (is on same line) or style property

- ***Usage***  

<pre class="cp"><xmp>
<span class="nje-cmd-one-line-sm-ident"> - command nje-cmd-one-line-sm-ident </span>
</xmp></pre>

- ***Result***  
Text before
<span class="nje-cmd-one-line-sm-ident"> - command nje-cmd-one-line-sm-ident </span>

---

<span style="color: #dd8c0aff; font-weight: bold;">*3. CMD Command multiline</span>

- ***Description***  
todo

- ***Usage***  

<pre class="cp"><xmp>
<span class="nje-cmd-multi-line">
    #command 1   Add two spaces  
  command 2
</span>
</xmp></pre>

- ***Result***  
Text before
<span class="nje-cmd-multi-line">
    #command 1   Add two spaces  
  command 2
</span>

---

<span style="color: #dd8c0aff; font-weight: bold;">*4. Colored multiline box</span>

- ***Description***  
todo

- ***Usage***  

<pre class="cp"><xmp>
<div class="custom-style" style="background-color:blue; color:white">
Test 1 text class="custom-style" style="background-color:blue; color:white"
xxz  
zz  
s
</div>
</xmp></pre>

- ***Result***  
Text before
<div class="custom-style" style="background-color:blue; color:white">
Test 1 text class="custom-style" style="background-color:blue; color:white"
xxz  
zz  
s
</div>

---

<span style="color: #dd8c0aff; font-weight: bold;">*5. Alternative text color/style</span>

- ***Description***  
todo

- ***Usage***  

<pre class="cp"><xmp>
<div class="custom-style" style="--nje-color: red; --nje-size: 12px;">
 Test 2 text  
 a second line
</div>
</xmp></pre>

- ***Result***  
Text before  
<div class="custom-style" style="--nje-color: red; --nje-size: 12px;">
 Test 2 text  
 a second line
</div>


---

<span style="color: #dd8c0aff; font-weight: bold;">*6. Indent one line, customizable</span>

- ***Description***  
todo

- ***Usage***  

<pre class="cp"><xmp>
<span class="nje-ident" style="--nje-number-of-spaces: 80px;"></span>Tabbed Text  
 next line
</xmp></pre>

- ***Result***  

Text before  
<span class="nje-ident" style="--nje-number-of-spaces: 80px;"></span>Tabbed Text  
 next line




---
---
---
---


<a name="custom-anchor3"></a>

# Appendix II  Template

This template is used to describe the item and to display the syntax and result

<pre class="cp">

&lt;span style="color: #409EFF; font-weight: bold;"&gt; X. XXX Command &lt;/span&gt;

- ***Description***  
todo

- ***Usage***  

&lt;pre class="cp"&gt; &lt;xmp&gt;
Text before
The CSS Tag Command to explain
&lt;/xmp&gt; &lt;/pre&gt;

- ***Result***  

Text before  
The CSS Tag Command as an example

---
</pre>
