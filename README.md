## Code Testing
This project is a code test from [itemit](https://itemit.com), developed using Next.js by [Louis Tan Jia Suan](https://bit.ly/jiasuan).
This project features a simple demostration of a User Management module.
<br/>
<br/>Live Demo: https://jiasuan-code-test.vercel.app/users
<br/>Storybook Demo: https://user-management-storybook.vercel.app/

## Table of Contents

<details><summary>Click to expand</summary>

- [🚀Getting Started](#getting-started)
- [Features](#features)
- [Libraries](#libraries)
- [File Structure](#file-structure)
- [Components](#components)
- [Components File Structure](#components-file-structure)

</details>




## 🚀 Getting Started
1. Clone this repository or download the ZIP file
```sh
git clone https://github.com/jiasuan/user-management.git
```

2. Install the project dependencies from the package.json file:
```sh
npm install
# or
yarn
```


1. Build the application by running this following command:
```sh
npm run build
```

2. Launch the application local development on `localhost:3000` by running this following command:
```sh
npm run start
```

## Key Features
- **User Management**: User allow to create, view, modify, delete user.

## Libraries
This project utilizes the following libraries:
- **Tailwind CSS**: Utility-first CSS framework for styling
- **redux**: State Management libraryt for managing application state
- **react-query**: Data fetching and caching linraru for managing API data state. Integrate with axios.
- **axios**: HTTP vlient for making API request
- **formik**: Form library for handling forms.
- **yup**: Schema validation library used with formik for form validation.


## File Structure
    .
    ├── app
    │   ├── globals.css
    │   ├── layout.tsx
    │   ├── page.tsx
    │   └── users
    │       ├── create      ## create new user page
    │       │   └── page.tsx
    │       ├── [id]        ## edit/ view user details page
    │       │   └── page.tsx
    │       ├── error.tsx
    │       └── page.tsx
    ├── interfaces  # Typescript interfaces
    │   └── index.ts
    ├── lib
    │   ├── constants.ts    #Constant variables
    │   ├── data    #Fetch API hook
    │   │   └── index.tsx
    │   ├── redux   #Redux State Management
    │   │   ├── features
    │   │   │   ├── form
    │   │   │   │   └── formSlice.ts
    │   │   │   └── modal
    │   │   │       └── modalSlice.ts
    │   │   ├── hooks.ts
    │   │   ├── store.ts
    │   │   └── StoreProvider.tsx
    └── └── schema.ts   #Yup Form Validation Schema

## Components
Documentation of components can be found at [Storybook](https://user-management-storybook.vercel.app/).

## Components File Structure

    components
    ├── atoms
    │   ├── button
    │   │   ├── contained
    │   │   │   └── index.tsx
    │   │   └── outlined
    │   │       └── index.tsx
    │   ├── icons
    │   │   └── index.tsx
    │   └── input
    │       └── index.tsx
    ├── molecules
    │   ├── appbar
    │   │   └── index.tsx
    │   ├── button
    │   │   ├── cancel
    │   │   │   └── index.tsx
    │   │   ├── close
    │   │   │   └── index.tsx
    │   │   ├── create
    │   │   │   └── index.tsx
    │   │   ├── delete
    │   │   │   └── index.tsx
    │   │   ├── retry
    │   │   │   └── index.tsx
    │   │   └── submit
    │   │       └── index.tsx
    │   └── layout
    │       ├── error.tsx
    │       └── loading.tsx
    └── organisms
        ├── form
        │   └── userForm.tsx
        ├── modal
        │   ├── base
        │   │   └── index.tsx
        │   ├── create
        │   │   └── index.tsx
        │   ├── delete
        │   │   └── index.tsx
        │   ├── edit
        │   │   └── index.tsx
        │   └── index.tsx
        └── table
            ├── index.tsx
            └── tableRow.tsx