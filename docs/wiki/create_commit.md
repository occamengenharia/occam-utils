# Create new commits

## What information to include on the commit message

The information bellow should be include on the commit message.

- **Category**: what's inside this commit. You can choose between one of these categories:
    - **feat**: feature
    - **fix**: fixing an implemented feature
    - **docs**: additional documentation
    - **ci**: changes on the pipeline
    - [other categories](https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-conventional#type-enum)
- **Brief title**: a small title about the changes _(max 70 characters)_
- **Brief explanation**: a small explanation of these changes _(max 140 characters | optional)_

> If you can't fit all the required information inside these limits, maybe it's a good idea to break your changes
into smaller commits to keep the Git history more organized.


## How to add that information on the commit message

You can add that information on the message by either sending the content as parameters on the commit command:

```sh
# Commit with a message on a single command
git commit -m "category: Brief title" -m "Brief explanation"
```

or using an external editor:

```sh
# Edit commit message on an external editor
git commit

# Inside the editor, the first line is the
# title and the next lines are the explanation
> category: Brief title
>
> Brief explanation
```

### Example

```sh
git commit -m "feat: Create new model on TypeORM for user" -m "This module will be responsible for keeping information about contacts and user login credentials"
```

> Category and brief title are mandatory. The pre-commit hook won't allow you to commit if the message
is not following that pattern.
