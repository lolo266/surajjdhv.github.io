# surajjadhav.me
> The source code for my personal website

[![Build Status](https://travis-ci.org/surajjdhv/surajjdhv.github.io.svg?branch=dev)](https://travis-ci.org/surajjdhv/surajjdhv.github.io)
[![license: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![eleventy](https://img.shields.io/badge/staticgen-eleventy-%23707070.svg)](https://11ty.io)

## Install

Just like any other node packages :
```sh
yarn # or npm i
```

## Usage

### Build the source into .build/ folder

```sh
yarn build
```

### Run local web server for testing

```sh
yarn serve
```

### Fetching twitter feeds
1. Create `.env` file and add your twitter token and information to it, you can look at the [`.env-sample`](.env-sample) for the references.
2. Run build script again (`yarn build`) to fetch and generate the source

## Credits

Special thanks to @okitavera who kept her project public and under MIT License.

## License

Apart from the dependencies, OFL Fonts, and Creative Common's assets like images and articles, this code is available under [MIT License](LICENSE)
