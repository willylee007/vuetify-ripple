Thanks to [vuetify](https://github.com/vuetifyjs/vuetify). 

This is a custom directive which extracts from [vuetify's ripple directive](https://github.com/vuetifyjs/vuetify/blob/be8e7a77eafad8925432a4a3abf22f3b8e6f04f8/packages/vuetify/src/directives/ripple/index.ts). 

## Features
- There is no dependence.
- Mobile and PC friendly.
- Tiny and stable.
  
## Requirement
- Vue 2.x
## How to install
```
npm install vuetify-ripple
```

## How to use
Import and registers Ripple globally in your main.js file
```
import Ripple from 'vuetify-ripple';

Vue.directive('ripple', Ripple);
```
Then you can use 'v-ripple' in block element.For example:
```
<div v-ripple>Test div</div>
```
or
```
<button v-ripple>Test Btn</button>
```


## LICENSE
MIT
