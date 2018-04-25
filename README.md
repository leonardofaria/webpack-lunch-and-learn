# webpack-lunch-and-learn

This is a step by step webpack setup. You can check the history of commits to see what is going on.

## Step 1 - Add lodash

Adding the whole lodash will make your bundle huge (69.9 KiB).

## Step 2 - Add lodash/uniq

Adding the specific function function from lodash can decrease the bundle size (7.5 KiB)

## Step 3 - Add lodash-es

Adding the specific version of lodash using modules can make things even better (5.9 KiB)

## Step 4: Add webpack-bundle-analyzer

webpack-bundle-analyzer details what is inside your bundle

## Step 5: Add performance warnings

It is possible to set warning and errors when you file reaches a specific size.

## Step 6: Add button - Pre Code Splitting

Let's add a button in the screen to show the unique elements of an array.

## Step 7: Add Code Splitting

We can assign an import to a variable and load the module on demand.

## Step 8: Refactor Code Splitting

A quick refactor to move the default export.

## Step 9: Add another Code Splitting example

Let's add another example using the date-fns package.

## Step 10: Add another Code Splitting example (themes)

Let's style the app - and use more code splitting.

## Step 11A: Add jQuery

Let's add jQuery and some interaction.

## Step 11B: Use external jQuery

Adding jQuery increased our bundle. We can use `externals` to exclude a import from the bundle and then revert this situation.
