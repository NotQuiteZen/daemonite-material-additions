/**
 *
 */
export default class Snackbar {

    /**
     *
     * @param settings_
     */
    static render(settings_) {


        // Set defaults
        let settings = Object.assign({}, {
            timeout: 4000,
            html: '',
        }, settings_);

        // Generate the div
        let snackbar = this.generateSnackbarComponent(settings);

        // Append it to the body
        document.body.appendChild(snackbar);

        // Added the show class for the animation
        // Delegation because
        setTimeout(() => {
            snackbar.classList.add('show');
        }, 1);

        // Do we have a timeout?
        if (settings.timeout !== 'Infinity' && !isNaN(settings.timeout)) {

            // Set the timeout to remove the snackbar
            setTimeout(() => {
                snackbar.classList.remove('show');
                setTimeout(() => snackbar.remove(), 200);
            }, settings.timeout);
        }
    }

    /**
     * @param settings
     * @returns {*}
     */
    static generateSnackbarComponent(settings) {

        // Build the main div
        let snackbar = document.createElement('div');
        snackbar.classList.add('snackbar');

        // Build the body div
        let snackbarBody = document.createElement('div');
        snackbarBody.classList.add('snackbar-body');
        snackbarBody.innerHTML = settings.html;

        // Add classes
        if (settings.classes) {

            // Normalize to an array
            if (typeof settings.classes === 'string') {
                settings.classes = settings.classes.split(' ');
            }

            // Iterate
            settings.classes.forEach(function (className) {
                snackbar.classList.add(className);
            });

        }

        // Add snackbarBody to the snackbar
        snackbar.appendChild(snackbarBody);

        // Add the button
        if (settings.button) {
            snackbar.innerHTML += settings.button;
        }

        return snackbar;
    }
}