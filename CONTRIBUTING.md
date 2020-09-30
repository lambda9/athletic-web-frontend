# Contributing to athletic-web-frontend

The following is a set of guidelines for contributing.

#### Table Of Contents

[Code of Conduct](#code-of-conduct)

[What should I know before I get started?](#what-should-i-know-before-i-get-started)

## Code of Conduct

The following are set of rules which every contributor has to follow

#### Local Environment

- VS code to be used as text editor
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) extension must be installed for code formatting
  * trailing commas should be configured
- **TABSIZE SHOULD BE OF 2 SPACE**

#### Directory Structure

- Every component should be placed in Component Directory in its own folder.
- Every service should be placed in Services Directory.
- Hooks to be placed in hooks directory.

## Code Style

#### Javascript style guide

- ES6 syntax to be used every where.
- Arrow function should be used whenever applicable.
- function, variables name should readable, concise and clear and in CamelCase.
- Don't create mess refactor your code regularly.
- Anything which is not used should not be present in file. (import statements)
- All errors and warning should be treated equally.
- Code should be formated acc to prettier extension.

#### CSS style guide

- class name should be in written lowercase seperated by hyphen(-) ex. carousel-main-container
- class name should be acc to component, you can use ids.
- for class name you can see [Footer.css](https://github.com/lambda9/athletic-web-frontend/blob/master/src/Components/Footer/Footer.css)
- css should be as close as to the component or its parent if component is too small and in same component directory.
- color variables are defined in App.css and should be used from their, any new variable should be defined in App.css.

#### React style guide

- Component name should be Capitalised.
- Large components should be broken into smaller components.
- Whenever possible create funtional component with hooks.
- Library imports should be on top and local imports should be placed after it.

## Colaboration 

- **Nobody will work on master branch directly**.
- Everyone should work on his/her own branch.
- Check your branch before commiting and pushing.
- **Branch** name should be acc to feature you are working or bug you're solving.
- **Branch** name should be in lowercase seperated with hyphen(-).
- **Pull request** to be made after completing feature.
  * Pull request should specify what you have done, with a clear title and description.
  * We should be assigned for reviews, without review no pull request should be merged.
  * After getting permission to merge it should be merged.
  * You can ask anything in discussion.
- If you are working on setup your [terminal](https://medium.com/@thucnc/how-to-show-current-git-branch-with-colors-in-bash-prompt-380d05a24745).
- **commit messages** [how to write good commit messages](https://www.freecodecamp.org/news/writing-good-commit-messages-a-practical-guide/).
- Issues should be created for every bug you encounter, and feature you'll be working.

## You should follow our code of conduct. But don't panic we are here to help you out in any problem.	:heart:





