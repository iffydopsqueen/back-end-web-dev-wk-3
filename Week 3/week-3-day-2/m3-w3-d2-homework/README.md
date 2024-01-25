# Week 3 Day 2 Homework

**Table of Contents**

- [Task](#task)
- [SASS Principles](#sass-principles)
  * [1. Variables](#1-variables)
  * [2. Nesting](#2-nesting)
  * [3. `@import`](#3---import-)
  * [4. `@mixin`](#4---mixin-)
- [Conversion to CSS using Node-Sass](#conversion-to-css-using-node-sass)
- [Extras](#extras)

## Task 

The task for this week is to use the SASS priniciples in the our code. So, we will just utilize these 4: ***variables, nesting, @import, and @mixin***. 

We would also show the steps for converting these SASS files (`.scss`) to CSS files (`.css`) using `node-sass`.

## SASS Principles

### 1. Variables 

SASS allows you to define variables to store reusable values throughout your stylesheets. This promotes consistency and makes it easier to update styles across your project.

Go ahead and create a `colors.scss`. We will be using variables for our colors.

Content of the `colors.scss` file:

```scss
// Variables

$page-color: #f7eb80;
$dark-column-color: #6e7a5b;
$faded-column-color: #a6ad80;
$text-color: #fff;
$btn-color: #dcf829;
```

These variables will be used throughout our code. We will be creating another `.scss` file for other styling. This is to maintain consistency and make it easier to update styles globally.

### 2. Nesting

Nesting allows you to nest CSS selectors within one another, following the hierarchy of your HTML structure. This improves readability and reduces repetition in your stylesheets.

Let's create our second file named `styles.scss`. 

Content of the `styles.scss` file: 

```scss
//Global
* {
    color: ;
    font-size: 1.2rem;
}

.container {
    background-color: ;
    border: 1px solid #000;
    display: flex;
    height: 500px;
    justify-content: space-between;
    margin: 0 auto;
    padding: 1em;
    width: 50%;

    .left {
        background-color: ;
        height: 100%;
        width: 69%;
        position: relative;
    }

    .right {
        background-color: ;
        height: 100%;
        position: relative;
        width: 29%;

        .button {
            background-color: ;
            color: ;
            border: 0;
            border-radius: 10px;
            cursor: pointer;
            width: 7em;
            height: 2.5em;
            font-size: 1rem;
            font-weight: bold;
            padding: 0.5em 2em;

            //this is to center content vertically
            position: absolute;
            top: 100%;
            left: 50%;
            transform: translate(-50%, -120%);
        }
    }

}
```

Here's a breakdown of the content: 

- `.container` contains nested selectors `.left` and `.right`.

- `.right` contains a nested selector `.button`.

Nesting helps in organizing and visualizing the CSS structure, making it more readable and maintainable.

### 3. `@import`

The `@import` directive allows you to import SASS files into other SASS files. This facilitates modularization and organization of your stylesheets.

The `@import` directive will be used in the `styles.scss` file to import the content of the `colors.scss` file. This allows you to share variables defined in `colors.scss` across multiple SASS files, promoting code reuse and modularity.

Here's the updated content of the `styles.scss` file: 

```scss
// Importing the content of the "colors.scss" file 
@import "colors.scss";

//Global
* {
    color: $text-color;
    font-size: 1.2rem;
    // text-align: center;
}

.container {
    background-color: $page-color;
    border: 1px solid #000;
    display: flex;
    height: 500px;
    justify-content: space-between;
    margin: 0 auto;
    padding: 1em;
    width: 50%;

    .left {
        background-color: $dark-column-color;
        width: 69%;
        height: 100%;
        position: relative;
    }

    .right {
        background-color: $faded-column-color;
        width: 29%;
        height: 100%;
        position: relative;

        .button {
            background-color: $btn-color;
            color: $dark-column-color;
            border: 0;
            border-radius: 10px;
            cursor: pointer;
            width: 7em;
            height: 2.5em;
            font-size: 1rem;
            font-weight: bold;
            padding: 0.5em 2em;

            //this is to center content vertically
            position: absolute;
            top: 100%;
            left: 50%;
            transform: translate(-50%, -120%);
        }
    }
}
```

Make sure your path in the `@import` directive is correct else you can encounter problems during conversion. 

### 4. `@mixin`

The `@mixin` directive in Sass is used for creating reusable blocks of CSS styles that can be included in multiple selectors or rulesets throughout your stylesheet. 

It allows you to define a set of styles once and then include those styles wherever needed, reducing redundancy and making your code more maintainable.

**Here's how `@mixin` works:**

- You define a mixin using the `@mixin` directive followed by a name and a block of CSS styles

- You can include the mixin within any selector or ruleset using the `@include` directive followed by the mixin name

- When the Sass compiler processes the styles, it replaces `@include` whatever-name; with the styles defined in the mixin.

**Updated content of the `styles.scss` file:**

```scss
// Importing the content of the "colors.scss" file 
@import "colors.scss";

// Creating reusable blocks of CSS styles
@mixin col-position-and-height {
    position: relative;
    height: 100%;
}

@mixin center-content {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translate(-50%, -120%);
}

//Global
* {
    color: $text-color;
    font-size: 1.2rem;
    // text-align: center;
}

.container {
    background-color: $page-color;
    border: 1px solid #000;
    display: flex;
    height: 500px;
    justify-content: space-between;
    margin: 0 auto;
    padding: 1em;
    width: 50%;

    .left {
        background-color: $dark-column-color;
        width: 69%;
        @include col-position-and-height;    // include those block of styles defined above
    }

    .right {
        background-color: $faded-column-color;
        width: 29%;
        @include col-position-and-height;    // include those block of styles defined above

        .button {
            background-color: $btn-color;
            color: $dark-column-color;
            border: 0;
            border-radius: 10px;
            cursor: pointer;
            width: 7em;
            height: 2.5em;
            font-size: 1rem;
            font-weight: bold;
            padding: 0.5em 2em;

            //this is to center content vertically
            @include center-content;
        }
    }

}
```

From the code above you see that the `styles.scss` file defines mixins `col-position-and-height` and `center-content`. 

- These mixins encapsulate sets of CSS styles that can be reused across different selectors or rulesets.

## Conversion to CSS using Node-Sass

To convert SASS files to CSS, you can use `node-sass`. 

I will be providing a `package.json` file that already contains the modules we need. We will just need to run the `npm install` to install everything in the package file. 

**Content of the `package.json` file:** 

```json
{
  "name": "sass-homework",
  "version": "1.0.0",
  "description": "Using SASS principles",
  "main": "index.html",
  "scripts": {
    "lite": "lite-server",
    "scss": "node-sass -o css/ scss/",
    "start": "npm run watch:scss",
    "test": "echo \"Error: no test specified\" && exit 1",
    "watch:scss": "onchange \"scss/*.scss\" -- npm run scss"
  },
  "author": "Your name",
  "license": "ISC",
  "dependencies": {
    "lite-server": "^2.6.1",
    "node-sass": "^9.0.0",
    "onchange": "^7.1.0"
  }
}
```

I have some optional packages that are not needed, some of them are just for convenience. 

- The `watch` and the `onchange` packages are to watch out for our `.scss` and make changes. 
    
    - So whenever there's a code change in any of the `.scss` files, it goes ahead and automatically implement that change to your already converted `.css` file(s). 

**Note:** You need to run the `npm install` command, so those packages get installed to your project directory. 

Now we can compile our SASS files to CSS. 

- Run this command in your terminal to compile the SASS files (***.scss**) located in the `scss/` directory. Make sure to be in the directory where the `package.json` file resides when running the command.

    ```bash
    npm run scss

    # OR 

    npm start
    ```

- In our case, our compiled CSS files will be outputted to the CSS directoy. [Check your `package.json`]

## Extras

- [Markdown TOC](https://ecotrust-canada.github.io/markdown-toc/)
