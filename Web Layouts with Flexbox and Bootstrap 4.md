# Web Layous with Flexbox and Bootstrap 4
>March 17, 22, 2020
> using "Bootstrap 4 for the Developer" by Mario Duilio Macari

This course actually requires some introductory Bootstrap knowledge, wihch is why I'm going through *some* of Macari's course:
# Introduction to Bootstrap

## Setting up Bootstrap
- (for today) Go to the boostrap site, click "Get started" and the quickstart template to get the JS needed to use BS's CDN (I'm using VS Code's extension Live Server to see immediate results)
- alternatively, you could just install BS's libary and add them to your project manually
- BS has a bunch of themes to purchase

## Graphic Design and Responsive Layout
- Four principles of Graphic Design ( :poop: )
    - Contrast = elements close to each should be different from each other
    - Repetition = having a repeting characteristic gives a unified look
    - Alignment = the page should look unified and elements shouldnt be placed randomly
    - Proximity = close-together objects are grouped together
- Bootstrap has a bunch of alternative names for colours (Danger is red, Info is cyan, Warning is amber, etc.). Label your class names with these names to access those colous
    `class = "myDiv bg-secondary text-light"`

### Containters, Rows and Columns
- BS has a *grid system* of rows and 12 columns contained in containers. Label your elements with class tags of `container-`, `row-` or `col-` to place content in that grid
     - not only are the layouts responsive on desktop, they also allow a seamless transition to mobile viewing
     - The grid system uses **Flexbox** (a tool that makes responsive sizing of items in a container much easier). You can use Flexbot's properties for containers and items to adjust the position, wrapping, stretching, and more of elements
- **Media Breakpoints** = BS has a set number of breakpoints (XL, L, MD, SM, and -) that allow you to have different styles depending on *how wide a window is*, allowing responsive layouts. In the background, BS uses CSS's conditional statements and your inputed breakpoint as the parameter for that
     - this is a feature of BS 4
     - the specific sizes for these breakpoints were determined for differently sized/oriented mobile devices. You can refer to these breakpoints as Sass mixins, to customize a page to display differently based on the size of the siplay/window
- **Containers** (required to ) keep block-level elements in BS's grid system. They provide horizontal padding and center the content in them.
    - three different kinds of containers
        - `container` - sets max-width to BS's breakpoints
        - `container-fluid` - sets max-width to be responsive to window width (width: 100%)
        - `container-[breakpoint]` - sets max width to be 100% until the specified breakpoint is reached, after which the content is horizontally wrapped instead of shrunk.
- Nest **Rows** within container element tags. Rows are wrappers for columns.
    - columns come with margins and padding between them, aka *gutters*. You can remove this with `.no-gutters`
- Nest **Columns** within Row element tags. *Content can only be placed in Columns*.
    - the columns will be automatically split evenly horizontally
    - you can set the column to take up that many of the 12 automatic columns. if your row adds up to more than 12 columns, it'll wrap around to multi-line row.
        - you can set the width of just one column in a row and the rest will automatically size around it (defaulting, again, to equal-width)
    - OR you can specify the column width with percentages
    - columns can also include breakpoint labels, so you can choose how they are sized to be responsive too
        - If you a multi-line row, aka equal-width column that spans miltiple lines, insert a break in your list of elemenets with `.w-100`
        - If you want the width of a column to vary with the width of the content, you can use `col-{breakpoint}-auto`
        - Once the breakpoint is reached, element will automaticaly stack up. You can customize what they look like stacked up by including multiple `col-{breakpoint}-{#}` labels in the class name


-Here's an example of one row in one container...
``` css
    <div class = "container"> 
        <div class  = "row">
            <div class="bg-primary col-4"> 
                Hello!
            </div>
            <div class="bg-secondary col-8"> 
                World!
        </div>
    </div>
```

- **Padding, Display and Margins**
    - use values of 1, 2, 3, 4, or 5 with m/mt/mb/mr/ml/my/mx or p/pt/pb/pl/pb/py/px in the div class name. Those values refer to ratios with the actual content of the elements
    - use d- in the div class name to change inline elements into block-level elements, or block-level elements into inline elements. 

-**Using flexbox with bootstrap**
    - all of the rules you would normally insert as css rules should go in the div class names
    - this includes the container display:flex tags- use "d-" in the class name, *not as a display:flex css rule*.
    - If you want a rule to only apply to certain breakpoints, include the breakpoint name in the class name rule

- Bootstrap uses CSS's **Z-index feature** (that allows elements to have a z-axis value and be more easily layered) by assigning specific (and high) z-index values to page features like dropdowns, navbars, and backdrops. It's recommended that those higher values not be touched. They also use lower z-index values (1, 2, 3) to bring an element forward and highlight its border based on it's status (between defualt/hover/active states).
