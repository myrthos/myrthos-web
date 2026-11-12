# Readme

## Start a new site

Execute the following:

```shell
hugo new project myrthos-web
cd myrthos-web
git init
```

Install the Minimal-Black theme.

```shell
git submodule add https://gitlab.com/jimchr12/hugo-minimal-black.git themes/hugo-minimal-black
echo "theme = 'hugo-minimal-black'" >> hugo.toml
mkdir -p config/_default
mv hugo.toml config/_default

```

## Install dependencies

To use this site make sure [Hugo extended](https://github.com/goHugoio/Hugo/releases) is installed.

For development, node modules are used. These are not required to run the site, they only make development easier, like running npm scripts and linters, and to process modifications to CSS. To use this, make sure [node.js](https://nodejs.org) with [npm](https://www.npmjs.com/) and npx are installed.

The node_modules are not part of the repository. To install the node modules, execute the below.

```shell
# Initialize the site for npm
npm init -y

#----------------------
# Optional node modules
#----------------------

# npm-run all
npm install npm-run-all2 --save-dev

# Markdown linter
npm install markdownlint-cli2 --save-dev

# CSS linter
npm create stylelint@latest

# JavaScript linter
npm init @eslint/config@latest

# Rimraf: rm -rf in a node implementation
npm install rimraf --save-dev

# Tailwind CSS and postcss
npm install tailwindcss@3 postcss autoprefixer @tailwindcss/typography --save-dev
```

These modules are needed to run the scripts in `package.json`.
