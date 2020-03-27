# Web Layous with Flexbox and Bootstrap 4
>March 25, 26 2020
> using "Web Layous with Flexbox and Bootstrap 4" by Jeff Batt

## Creating Flexbox Layouts
- this module should show how to use _just_ flexboxes to design a page, without using BS columns or grids
    - the problems with BS columns is that you can't have a number of evenly divided elements in a row that isn't divisible by 12. Flex containers, on the other hand, can have any number of elements that aren't defined as traditional columns
- this module uses Sample Files (the folders labeled 02-05)

- to start using flexbox in a bs div, use `class="d-flex"` in the div tag
- there are two different kinds of flex containters; **FlexRows** and **Flexcolumns**
    - flex row is the default
    - use `flex-column` or `flex-row`, respectively, in the class name of the "container" div tag
- to change the *direction* of the flex container, just use `-reverse` at the end of row/column tag. This can be helpful if you have some list of items that you want to reverse

- to get a responsive layout with this method, you have to specify the sizing of an element to be mobile-friendly, and then *use media queries* to overide that small size for greater display widths... wait why is this method better then? high key sus
- to change the width to have a ratio with nearby elements, you need to use the `width:x%` rule in the css file, and be sure to add `!important`. To make things a little easier, Batt made classes called w-20, w-60, etc. to mimic bs's formatting. 

- you can change an in-line element to a block element or vise-versa using `d-block`/`d-inline` respectively 

- you can have *nested flex containers*; for example, if you wanted a list of cards with content that are centered, make each of them a container

## Adjusting Alignmen, Margins and Display Order
- Flxbox uses two axes to align elements; main and cross. The **main** axis follows the direction of the container (left/x-direction for rows and down/y-direction for columns), while the **cross** axis goes in the opposite directions.  