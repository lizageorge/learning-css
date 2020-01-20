# Learning CSS

## Introduction to CSS

 - controls the style, formating of a webpage in an *external style sheet* that replaces a `<style>` tag
    - now use a ```<link>``` tag instead, that can be put on any html file
    ``` html
    <head>
        <link rel="stylesheet" href="style.css"/>
    </head>
    ```
 - allows you to seperate the content and presentation of webpage = **single responsibility principle**

 - Imma make a site using github pages!

### Basic Style Rules
 - the basic principle for each **rule** in your stylesheet is to selet an html element, and then apply a style to it
    ``` css
        body{
            background-color: blue;
        }
    ```

    - the "body" bit will select the body element in the html file to apply this to
    - the next line is called a **propertyname-value pair**. 
    - types of selectors;
        - **simple selectors** will select all the elemtns on the specified type
        - **id-selectors** will select all elements with the #id you use in your html file
        - **class selectors** selects everything of a certain class
    - you can select multiple elements by seperating a list with commas at the top of the block
    - selectors follow the *cascading rules*



### Specific styles to add
- these are all from css 2.1, supported on most browsers (according to the pluralsight course I'm following, which is high key old). look in www.w3.org site for more.
- colors are specified in hexadecimal codes, but there are some standardized color names
    - you can either type in the hexadecimal value straight, or use the rgb function notation ( `rgb(0,0,0)`)




