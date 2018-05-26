# daemonite-material-additions
Additional modules for Daemonite's Material Bootstrap. This repo exists because not all components in http://daemonite.github.io/material/docs/4.1/getting-started/introduction/ have JavaScript interfaces for them.

Current modules:
- Snackbar


## Module: Snackbar
The Snackbar module renders 'Snackbars' as demonstrated at http://daemonite.github.io/material/docs/4.1/material/snackbars/


### Usage
`import {Snackbar} from 'daemonite-material-additions';`

```
Snackbar.render({
   html: 'Some message you want to display',
   button: '<a href="#">Cool</a>',
   classes: 'additional classes you want to add',
   timeout: 10000, // Default = 4000ms
});
```
