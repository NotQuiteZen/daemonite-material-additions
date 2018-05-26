# daemonite-material-additions
Additional modules for Daemonite's Material Bootstrap

Current modules:
- Snackbar


# Module: Snackbar

### Usage
`import {Snackbar} from 'daemonite-material-additions';`

```Snackbar.render({
   html: 'Some message you want to display',
   button: '<a href="#">Cool</a>',
   classes: 'additional classes you want to add',
   timeout: 10000, // Default = 4000ms
});```
