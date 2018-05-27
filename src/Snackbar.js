import Element from './Inc/Element';

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
        snackbar.appendTo(document.body);

        // Added the show class for the animation
        // Delegation because
        setTimeout(() => {
            snackbar.addClass('show');
        }, 1);

        // Do we have a timeout?
        if (settings.timeout !== 'Infinity' && !isNaN(settings.timeout)) {

            // Set the timeout to remove the snackbar
            setTimeout(() => {
                snackbar.removeClass('show');
                setTimeout(() => snackbar.remove(), 200);
            }, settings.timeout);
        }
    }

    /**
     * @param settings
     * @returns {*}
     */
    static generateSnackbarComponent(settings) {

        let snackbar = new Element('div', null, {class: 'snackbar'});
        let snackbarBody = new Element('div', settings.html, {class: 'snackbar-body'});

        // Add classes
        if (settings.classes) {
            snackbar.addClass(settings.classes);
        }

        snackbarBody.appendTo(snackbar);

        // Add the button
        if (settings.button) {
            snackbar.appendHtml(settings.button);
        }

        return snackbar;
    }
}