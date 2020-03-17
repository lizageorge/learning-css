# Learning CSS
>January 19, March 16, 2020
> using the "HTML&CSS" book by Jon Duckett and the "Introduction to CSS" course by Scott Allen

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
- You add **rules** to specify values for the properties every html element has 
- the basic principle for each **rule** in your stylesheet is to selet an html element, and then apply a style to it

	```css
	body{
		background-color: blue;
	}
	```

	- the "body" bit will select the body element in the html file to apply this to
- the next line is called a **propertyname-value pair**. 

### Types of selectors
- **simple selectors** will select all the elements on the specified type
- **id-selectors** will select all elements with the #id you use in your html file
- **class selectors** selects everything of a certain class 

	```html
	<div>
		<p class="testClass"> eenie menie minie moe</p>
	</div>
	```

	```css
	.testClass{
		background-color: coral;
	}
	```

	- you can also use `. {}` or `# {}` to reach all elements that have any class/id at all
- **descendent selector** will target descendents in the html file

		```css
		div p {}
		```
- **child selector** will target child elements ""
		
	```css
	div > p {}
	```
		
- **adjacent sibling selector** 

	```css
	h1 + h2 {}
	```

```html
<div>
	<form>
		<p> I'm a descendent</p>
	</form>
	<p> I'm a child>
</div>
```

- attribute selectors
- psuedo classes (`:first-letter` or `:visited`)
- star selector = using "*" will select just everything applicable

	```css 
	* {
		color: white;
	}
	``` 

- you can select multiple elements by seperating a list with commas at the top of the block
- selectors follow the *cascading rules*


### Specifying Property Values
- css has a *lot* of ways to specify what you want a value to be
	- for example, you can say `font-size: x-large` or `font-size: 28pt` or `font-size: 1.5em`

- keywords (thin, thick, larger) = reserved words
- physical measurements (points - pt, picas - pc, mm/cm/in)
- screen measurements (pixels - px)
- relative measurements (%, em = of default size)
- color codes (#rrggbb, rbg(r, g, b))
- fonts (helvetica, sans-seriff)
- functional notation (specifying urls for background images)

	``` css
	body{
		background-color: white;
		background-image: url("https://i.pinimg.com/originals/ba/0e/fa/ba0efaf6042fa4b279a36f343dac19fc.jpg");
	}
	```

### Specific styles to add
- these are all from css 2.1, supported on most browsers (according to the pluralsight course I'm following, which is high key old). look in www.w3.org site for more.
- *colors* are specified in hexadecimal codes, but there are some standardized color names
	- you can either type in the hexadecimal value straight, or use the rgb function notation ( `rgb(0,0,0)`)
	- you can also change the opacity of an object

- *text*
	- you can change the positions of the baseline, ascender, etc.
	- you can (obvs) chane the font, font-family, and size of your text
	- you can add underlines, strikethrough, bold italics
	- you can change the spacing, allignennts, and indenting 
	- you can use `:link`, `:visited`, `:hover`, `:active` and `:focus` psuedo-classes as selectors to change what the link button text looks like    


## Cascading and Inheritance

- How browser picks style for an element *from different sources*...
	- the Author stylesheet ( <link> and @import) that the webpage creater makes
	- User style sheet (no one really uses this anymore)
	- Default styel sheet / User-agent stylesheets that come with the browser
	- The browser *weights* the author > user > default stylesheet
		 - The one exception to this is when `!important` is used (placed right before `;`). But this is high-key bad practice
		 - Or if the html file has an in-line style statement that will override any linked stylesheet, but that's bad practice anyways

- How browser picks style for an element from conflicting rules *in one style sheet*
	- **the order in which you specify your rules** will change what the computer will display in case any of those rules overlap on any one property. The last rule specified wins (if you link multiple stylesheets into the html file, the last linked ss overrides)
	- but over that, **specificity** wins 
		- browsers give a speceficity rating to a rule based on whether you select using an id/class, div, *, etc. selector.
		- (` p {}` < `p.testClass {}`)
		- this only applied on a rule-to-rule basis; if you have one rule changing the background-colour and text-size with a selector `p` and another rule changing the background-colour with a `p.testClass` selector, the background color from the `p.testclass` rule and the text-size from the `p` rule.

- Nested elements `inherit` styles from the nesting element as a default
	- this will be overridden by rules for the nested element
	- certain properties aren't inheritable, like border widths (usually font-related properties are inherited, but margins/padding/borders and stuff won't be inherited, duh)

- If you look at the Developer Tools of a browser, overridden styles will have the strikethrough font

### CSS Reset 
	- = a way to override the user-agent stylesheet entirely so that a page can look the page between all browsers and browser versions
	- every CSS framework (Bootstrap) includes a CSS Reset Stylesheet


## The Box Model
- Each visual elemenent renders in a box that has a margin, border, and padding (each of which can be specified differently for each side)
	 - **margin** = space seperarting a box from the edge of the browser and other boxes
	 - **border** = the edge of the box, can have a colour and a width
	 - **padding** = the space between the inside edge of the box and the content

- Each side of the margin/border/padding can have different property values
	- there's a shortcut you can use for padding and margin where the values listed apply to the top, right, bottom and left sides respectively
	- similarily, the border specifications apply to width, style and colour respectively
	```css
	ul{
		padding-left: 10 px;
		border-bottom-colour: 3px solid Black;
		margin: 0 10 px 0 10 px;
	}
	```
- when boxes are alligned vertically, they overlap 
- Box width defaults to the whole window, but you can change the content size (with pixel specifications or percentages)
	- this width applies to the *content* of the box, so margins/padding will add on to the specified width

- Boxes can have a Diplay property (which can be block, inline, or none) and visibility (can be hidden )
