# Learning CSS
>January 19, 2020
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


## Inheritence
- the order in which you specify your rules will change what the computer will display in case any of those rules overlpa on any one property
- basically, the last rule specified wins
- but over that, specificity wins (` p {}` < `p.testClass {}`)





