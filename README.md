React Module Creator
=========

A small library that adds new module directory

## Installation

  `npm install react-module-creator`

## Usage

    var moduleCreator = require('react-module-creator');
    moduleCreator(directoryName);
  Output should be a new module directory with index.js

  For command line 
  `npm link react-module-creator`
  `create-react-module "{moduleName}"`

  Folder structure:
   module_name
     |--- components
     |    |---index.js
     |--- containers
     |     |---index.js
     |--- constant.js
     |--- reducer.js
     |--- saga.js
     |--- selector.js

## Tests

  `npm test`

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.