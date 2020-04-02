# The Bootstrap 4 Bootcamp
>March 29 2020
> using "The Bootstrap 4 Bootcamp" by Colt Steele

- Bootstrap comes in tree parts;
    - **Components** (buttons, forms, navbars, etc.)
    - **The Grid System**
    - **Utilities** (shortcuts for padding, margins, borders, colors, etc.) = classes with prewritten formatting to help do common operations in CSS

- Some ppl think that all Bootstrap websites look the same, but it's totally possible to customize and add custom css elements for a more unique look

## Bootstrap Components and Utilities

- This course will just go through componenets and utilities one after another. So this just follows that order;

### Buttons
- you can make pre-padded-rounded-corner buttons using `type=button` and the class name `btn` 
- include a colour by following `btn-` with a colour name (or `btn-outline-[colour]`)
- change size with `btn-lg` or `btn-sm`
- have disabled or active states by incl the class name `active` or the attribute `disabled`
- make regular links into butttons by incl the button class names after `a href="" `

### Typography
- use the utility classes `h1`-`h6` to get differently sized font-sizes and paddings
- use the utility classes `display-1`-`display-6` to get differently sized font-sizes and paddings (this is for more central-looking headings)

- there are tags for in-line styling (mark, del, s, ins, u, small, strong and em)

- the utility class `text-muted` to give secondary heading looks, `lead` can make a para text look more important (bigger, more spaced out)

- to have blockquotes, use the blockquote elements with the class name blockquote, and the footer class with the blockquote-foote for a quote name looking text

- use `text-right` (-left and -center) to align text on any text element

### Jumbotrons
- to include "hero-unit" text (think of a homepage title block)
- use `class=jumbotron1` on the larger div, and incl headings, paras, horizontal lines, btns, etc. inside that
- a fluid jumbotrol (`class = "jumbotron jumbotron-fluid"`) goes all the way across the page, and put a content inside that for all the content

### Responsive Design
- the breakpoints are also utilities. They're set to fit different screen sizes (starting with mobile-porttrait) with different media queries (`@media (min-width: 576 px){...}`) labeled as `xs` , `sm`, `md`, `lg`, `xl` 
    - remember that xs is the default value, bc rules with the "xs" rule applies to everything. Once you include a breakpoint, that is overiden for the applicable size (for example, `class= "display-none display-sm-block"` means that the element will not be displayed, *until* the size is *at least sm*, from where it's displayed block)
- you can use the display utility like the `display:...` rule from CSS, and if you include breakpoints (`class = "d-{value}-none/inline/block/fle/etc.`) you can have elements appear/disappear at those breakpoints. For example, a sidebar appearing only at sm, and staying as a hanburger before that

### Borders and shadows
- use `class = "border"` to include a border on any element
- use `border-top/-bottom/-left/-right` to select sides. Or, you can use border-{size}-0 to remove a border on the respective side.
- you can include a colour on a border
- use the class name rounded to make the respective side's corner rounded, or rounded-circle
- use `class="shadow-sm//lg` to include shadows. 

### Forms
- use the `form-control` class in the input element tag (in the form element) for pretty styling. Don't forget a label for, type and placeholder
    - if you want the input to include multiple elements (icons or buttons) use `input-group`
    - if you want multiple inputs and inline forms, use `form-inline`, 
    - add `form-control-sm/lg` for different sizes
- use the `form-group` classs name on a div element for nice pretty spacing 
- with these two classes you can make any kind of form you want to (input, select, multipleselect, text area, range) and whatnot. The bs documentatin has a very handy guide.
- use the classes `form-check`, `form-check-input`, and `form-check-label` (on the div, input and label elements) for each checkbox on a check-box of radio form (use `type=radio/check` to differentiate them, and if you want a raio form that only allows one selection give all the options identical `name` values)
    - use `form-check-inline` for inline options

- you can customize certain visual elements of different forms to switch from the browser default visuals to a prettier bs verson with the class name `custom-control`. Add  `custom-checkbox` or `custom-radio` or `custom-file` or `custom-range`. *Look at the docs for full details*

- you can make forms responsive; use the grid system, but use `form-ro` in place of `row` (form row keeps the form-specific formatting and spacing). Each form question element would go in a seperate col. For example...
``` html
<div class="container">
		<form>
			<div class="form-row">
				<div class="col-md-5">
					<label for="hours">How many hours did you sleep last night?</label>
					<input type="number" id="hours" class = "form-control" placeholder="hours slept"/>
				</div>
				<div class="col-md-7">
					<label for="description">How well did you sleep?</label>
					<input type="text" id="description" class = "form-control" placeholder="description of sleep"/>
				</div>
			</div>
			
		</form>
	</div>
```


### Navs and Navbars 
- #### Making Navs
    - navs are elements anywhere in the page
     - start with a ul element with class `nav`. Each tab should be a child li element with `nav-item`, and a links with `nav-link`
     - if you want the tabs to have an actual tab look, use `nav-tabs`, or `nav-pills` for a pill look
     - use an `active` class on the active item to differentiate in tab/pill looks
     - you can use the flexbox utilities on the tabs (left/right allign, vertically stack, spread out, etc.)
     - you can also add `nav-fill` or `nav-justify` to make each tab take up all the available space or take up equal amt of space, respectively
- #### Making Navbars
    - navbars are the element at the top of a site, across every page, and can collapse into a hamburger
    - start with a nav element with a class `navbar` (and corresponding colours and text-colours - navbar-dark create light text and navbar-light creates dark text)
    - you can include a "brand" on the end of your navbar
    - if you want the navbar to have be collapsable to a hamburger, you need to make a button to toggle that with `class="navbar-toggler"` and `data-toggle="collapse"` and `data-target="[id]"`, and then another div element with `collapse navrbar-collapse`, and inside that another class with `navbar-nav`. you can also have this collapsing happen at certain breakpoints! (*just look at the documentation omg*)
    - you can add a button in the navbar, or an inline form or text. If you want it to collapse with the links, incl in the collapsing div. You can aso use flex utilities within a navbar. 
    - you can put the content of a navbar into a div for a neater lewk
    - positioning navbars; you can have a navbar be at the top (which is default), `fixed-top` (be sure to account for the space it takes up by putting a mt on the rest of the content's container), `fixed-bottom`, or `sticky-top` (which can allow content above it when scrolled to the top)


### The Grid System
- = easy way to make responsive layout
- containers are required (can be fluid), and so are rows. Elements will be arranged into columns
- if you define a row with multiple columns, they will automatically be assigned to the same widths. To specify differnt widths, include `col-{width}`, where width in an int bween 1-12. Each row has 12 cols (if you have multiple undefined cols in a row with one col of specified width, the rest will split up evenly)
- to make a row responsive, include a breakpoint in `col-{breakpoint}-{width}` - remember, this reads as "once {breakpoint} is hit, apply his rule", and that no breakpoints defaults to 'xs'
- to **align an element**( = col/content), use the same flexbox rules: `align-items-` applied on the row aligns elementa vertically (`-stretch` is the default, other options are start and end) and `align-self` applies on each col independently, while `justify-content-` applied on the row alligns the cols horizontally (-`start` is the default, other options are end, center, between and around). Don't forget to use `d-flex` on whatver enveloping item necessary
- if you include `offset{width}` on the class name of a col, it **offsets** the beginning of the element by that width. You can add breakpoins to these rules too. (This is the equivalent of having just an empty col to take up space)
- you can **nest grids**, or put rows into col elements to further divide space. Remember, each *row* has 12 divisible units, not each display window


### List Groups
- use class `list-group`, and each li element will have `list-group-item`, or put `list-group-elemnt` and `list-group-item-action` on a tags to have an actionable list

### Cards
- = components that easily display info in a container
- basic card structure:
``` html
<div class="card">
    <div class="card-body">
        <h5 class="card-title">some title</h5>
        <h6 class="card-subtitle text-muted mb-2">some subtitle</h6>
        <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam expedita laborum facilis nesciunt voluptatibus omnis suscipit veritatis reprehenderit veniam delectus.</p>
        <a href="" class="card-link">some link</a>
    </div>
</div>
```
- you can include images to be either in the top or bottom of the card (just insert the image tag right above the card body), or have it overlay the whole card (`use card-img-overlay` instead pf card-body)

- you can render multiple cards into one element with split up space with card-groups or card-decks, but the responsivity isn't very customisable. There's also card-columns that uses Masonry


## Javascript Components
- **Alerts** = use the class `alert` and `role="alert"` to create a pop-up. If you want it dismissable, include `alert-dismissible` and a button with class set to `close` and `data-dismiss="alert" and html entity &times;  
- **Modals** = a popup that can come in different styles. Use `modal` class, with `modal-dialog` and modal-content` in that. Also include a button trigger linked to it. 


## Customizing Bootstrap
- SASS/SCSS is a CSS compiler that allows you to write stylesheets in easier syntax and it will just spit out an uglier CSS file to work with. You can include vars and nesting structures in SCSS.
- The Bootstrap source SCSS files can be found in the scss folder in the bootsrap folder if you install using the "Source Files" button from getbootstrap. Compiling the bootstrap.scss file compiles everything imported into it
- create a custom scss file outside the bootstrap folder, and then use `@import: "../bootstrap/scc/bootstrap"` to import all of bootstrap. Now you can override certain properties (bc in the bs source code each element is set to !default! which means that the rule only applies if nothing else has been define yet). For example, if you want to customize the colours
```css
$theme-colors:{
    "primary": #4whkj3h4,
    "success": fiosdfoiud
}
@import: "../bootstrap/scc/bootstrap"
```