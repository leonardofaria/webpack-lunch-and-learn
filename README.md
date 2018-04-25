# webpack-lunch-and-learn

This is a step by step webpack setup. You can check the [history of commits](https://github.com/leonardofaria/webpack-lunch-and-learn/commits/master) to see what is going on.

## [Step 1 - Add lodash](https://github.com/leonardofaria/webpack-lunch-and-learn/commit/e79aa1a8c294c9830e88a2e1fb743cda63e4d133)

Adding the whole lodash will make your bundle huge (69.9 KiB).

## [Step 2 - Add lodash/uniq](https://github.com/leonardofaria/webpack-lunch-and-learn/commit/8db0fbe2c016bde6bc9f3e177a7fac2d92f5cfbe)

Adding the specific function function from lodash can decrease the bundle size (7.5 KiB)

## [Step 3 - Add lodash-es](https://github.com/leonardofaria/webpack-lunch-and-learn/commit/7c524e08a77f692ca56159de72125ce54345ce28)

Adding the specific version of lodash using modules can make things even better (5.9 KiB)

## [Step 4: Add webpack-bundle-analyzer](https://github.com/leonardofaria/webpack-lunch-and-learn/commit/3602077390a6ebec42cb001626863272664af1c9)

webpack-bundle-analyzer details what is inside your bundle

## [Step 5: Add performance warnings](https://github.com/leonardofaria/webpack-lunch-and-learn/commit/8f7f2c32da7894a4276fe37107918d23d4866160)

It is possible to set warning and errors when you file reaches a specific size.

## [Step 6: Add button - Pre Code Splitting](https://github.com/leonardofaria/webpack-lunch-and-learn/commit/83ea79adc6c6d0959e001b8878f262b4d9b9afaf)

Let's add a button in the screen to show the unique elements of an array.

## [Step 7: Add Code Splitting](https://github.com/leonardofaria/webpack-lunch-and-learn/commit/ea16b4ea125dac11f5988e1acb458e7daaa00cd7)

We can assign an import to a variable and load the module on demand.

## [Step 8: Refactor Code Splitting](https://github.com/leonardofaria/webpack-lunch-and-learn/commit/1f0ae5c55153dc2a4f1c58a0e01cfa8fc1788906)

A quick refactor to move the default export.

## [Step 9: Add another Code Splitting example](https://github.com/leonardofaria/webpack-lunch-and-learn/commit/6889f33c30a942c849028f97c823975e0d10d6db)

Let's add another example using the date-fns package.

## [Step 10: Add another Code Splitting example (themes)](https://github.com/leonardofaria/webpack-lunch-and-learn/commit/ddbe5511e189970cc0d9f074192574af00a05463)

Let's style the app - and use more code splitting.

## [Step 11A: Add jQuery](https://github.com/leonardofaria/webpack-lunch-and-learn/commit/31bda8854abc45ec6999e0918274c4c95400cff7)

Let's add jQuery and some interaction.

## [Step 11B: Use external jQuery](https://github.com/leonardofaria/webpack-lunch-and-learn/commit/95b39c57757a9fccd0adf4c80ab52e210b1d9328)

Adding jQuery increased our bundle. We can use `externals` to exclude a import from the bundle and then revert this situation.
