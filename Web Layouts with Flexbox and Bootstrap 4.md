# Web Layous with Flexbox and Bootstrap 4
>March 17, 2020
> using "Bootstrap 4 for the Developer" by Mario Duilio Macari

## How to install Bootstrap
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
- BS has a *grid system* of containers, rows and 12 columns. Label your elements with class tags of `container-`, `row-` or `col-` to place content in that grid
- **Media Breakpoints** = BS has a set number of breakpoints (XL, L, MD, SM, and -) that allow you to have different styles depending on *how wide a window is*, allowing responsive layouts. In the background, BS uses CSS's conditional statements and your inputed breakpoint as the parameter for that
     - this is a feature of BS 4
- **Containers** keep block-level elements in BS's grid system. They provide horizontal padding and center the content in them.
    - three different kinds of containers
        - `container` - sets max-width to BS's breakpoints
        - `container-fluid` - sets max-width to be responsive to window width (width: 100%)
        - `container-[breakpoint]` - sets max width to be 100% until the specified breakpoint is reached, after which the content is horizontally wrapped instead of shrunk.
- Nest **Rows** within container element tags
- Nest **Columns** within Row element tags
    - the columns will be automatically split evenly horizontally
    - OR you can set the column to take up that many of the 12 automatic columns. if your row adds up to more than 12 columns, it'll wrap around to multi-line row.
    - columns can also include breakpoint labels
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

- You can use `align-self-` to use different allignments for columns vertically (start, center, end), and `justify-content-` to use different justifications within a row horizonally (right, center, left). 
- 