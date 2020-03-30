# The Bootstrap 4 Bootcamp
>March 29 2020
> using "The Bootstrap 4 Bootcamp" by Colt Steele

- Bootstrap comes in tree parts;
    - **Components** (buttons, forms, navbars, etc.)
    - **The Grid System**
    - **Utilities** (shortcuts for padding, margins, borders, colors, etc.) = classes with prewritten formatting to help do common operations in CSS

- Some ppl think that all Bootstrap websites look the same, but it's totally possible to customize and add custom css elements for a more unique look

- This course will just go through componenets and utilities one after another. So this just follows that order;

## Buttons
- you can make pre-padded-rounded-corner buttons using `type=button` and the class name `btn` 
- include a colour by following `btn-` with a colour name (or `btn-outline-[colour]`)
- change size with `btn-lg` or `btn-sm`
- have disabled or active states by incl the class name `active` or the attribute `disabled`
- make regular links into butttons by incl the button class names after `a href="" `

## Typography
- use the utility classes `h1`-`h6` to get differently sized font-sizes and paddings
- use the utility classes `display-1`-`display-6` to get differently sized font-sizes and paddings (this is for more central-looking headings)

- there are tags for in-line styling (mark, del, s, ins, u, small, strong and em)

- the utility class `text-muted` to give secondary heading looks, `lead` can make a para text look more important (bigger, more spaced out)

- to have blockquotes, use the blockquote elements with the class name blockquote, and the footer class with the blockquote-foote for a quote name looking text

- use `text-right` (-left and -center) to align text on any text element

## Jumbotrons
- to include "hero-unit" text (think of a homepage title block)
- use `class=jumbotron1` on the larger div, and incl headings, paras, horizontal lines, btns, etc. inside that
- a fluid jumbotrol (`class = "jumbotron jumbotron-fluid"`) goes all the way across the page, and put a content inside that for all the content

## Responsive Design
- the breakpoints are also utilities. They're set to fit different screen sizes (starting with mobile-porttrait) with different media queries (`@media (min-width: 576 px){...}`) labeled as `xs` , `sm`, `md`, `lg`, `xl` 
    - remember that xs is the default value, bc rules with the "xs" rule applies to everything. Once you include a breakpoint, that is overiden for the applicable size (for example, `class= "display-none display-sm-block"` means that the element will not be displayed, *until* the size is *at least sm*, from where it's displayed block)
- you can use the display utility like the `display:...` rule from CSS, and if you include breakpoints (`class = "d-{value}-none/inline/block/fle/etc.`) you can have elements appear/disappear at those breakpoints. For example, a sidebar appearing only at sm, and staying as a hanburger before that

## Borders and shadows
- use `class = "border"` to include a border on any element
- use `border-top/-bottom/-left/-right` to select sides. Or, you can use border-{size}-0 to remove a border on the respective side.
- you can include a colour on a border
- use the class name rounded to make the respective side's corner rounded, or rounded-circle
- use `class="shadow-sm//lg` to include shadows. 

## Forms
- use the `form-control` class in the input element tag (in the form element) for pretty styling. Don't forget a label for, type and placeholder
    - add `form-control-sm/lg` for different sizes
- use the `form-group` classs name on a div element for nice pretty spacing 
- with these two classes you can make any kind of form you want to (input, select, multipleselect, text area, range) and whatnot. The bs documentatin has a very handy guide.
- use the classes `form-check`, `form-check-input`, and `form-check-label` (on the div, input and label elements) for each checkbox on a check-box of radio form (use `type=radio/check` to differentiate them, and if you want a raio form that only allows one selection give all the options identical `name` values)
    - use `form-check-inline` for inline options

- you can customize certain visual elements of different forms to switch from the browser default visuals to a prettier bs verson with the class name `custom-control`. Add  `custom-checkbox` or `custom-radio` or `custom-file` or `custom-range`. *Look at the docs for full details*
    - 