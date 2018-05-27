/**
 *
 */
export default class Element {

    /**
     * Create a DOM element and returns a Element Module instance
     * @param tagName
     * @param innerHTML
     * @param attributes
     * @returns {Element}
     */
    constructor(tagName, innerHTML, attributes) {

        // Spawn it
        this.el = document.createElement(tagName);

        // Add the HTML to it
        if (innerHTML) {
            this.el.innerHTML = innerHTML;
        }

        // Set all the attributes to the element
        if (typeof attributes === 'object') {
            for (var attrName in attributes) {
                if (attributes.hasOwnProperty(attrName)) {
                    this.el.setAttribute(attrName, attributes[attrName]);
                }
            }
        }

        // Return class instance
        return this;
    }


    /**
     * Append the element to a querySelector or Element element
     * @param selector
     */
    appendTo(selector) {

        if (selector.constructor === HTMLBodyElement || selector.constructor === HTMLDivElement) {
            selector.appendChild(this.el);
            return this;
        }

        if (selector instanceof Element) {
            selector.get().appendChild(this.el);
            return this;
        }

        let nodeList = document.querySelectorAll(selector);
        nodeList.foreach(node => node.appendChild(this.el));

        return this;
    }

    /**
     * Prepend the element to a querySelector element
     * @param selector
     */
    prependTo(selector) {

        if (selector instanceof Element) {
            selector.get().insertBefore(this.el, this.el.firstChild);
        } else {

            let nodeList = document.querySelectorAll(selector);
            nodeList.foreach(node => node.insertBefore(this.el, node.firstChild));

        }

        return this;
    }

    /**
     * Add one or more classes to the element
     * @param className
     * @returns {Element}
     */
    addClass(className) {
        // No can do with an object
        if (typeof className === 'object') {
            console.error('Cannot use Element.addClass with an object as classname');
            return this;
        }

        // If we passed a string, make it an array split on a space
        if (typeof className === 'string') {
            className = className.split(' ');
        }

        // Loop through the classNames and add them to the element
        className.forEach(cls => this.el.classList.add(cls));

        return this;
    }

    /**
     * Removes one or more classes from the element
     * @param className
     * @returns {Element}
     */
    removeClass(className) {
        // No can do with an object
        if (typeof className === 'object') {
            console.error('Cannot use Element.removeClass with an object as classname');
            return this;
        }

        // If we passed a string, make it an array split on a space
        if (typeof className === 'string') {
            className = className.split(' ');
        }

        // Loop through the classNames and add them to the element
        className.forEach(cls => this.el.classList.remove(cls));

        return this;
    }

    /**
     * Set or get the innerhtml of the element
     * @param html
     * @returns {*}
     */
    html(html) {

        // No html passed? return the innerhtml
        if (!html) {
            return this.el.innerHTML;
        }

        // Set the innerhtml
        this.el.innerHTML = html;

        // Return class instance
        return this;
    }

    /**
     * Append an HTML string to the element
     * @param html
     * @returns {Element}
     */
    appendHtml(html) {
        this.el.innerHTML += html;
        return this;
    }

    /**
     * Prepend an HTML string to the element
     * @param html
     */
    prependHtml(html) {
        let prevHtml = this.html();
        this.el.innerHTML = html + prevHtml;
    }


    /**
     * Remove the element
     * @returns {Element}
     */
    remove() {
        this.el.remove();
        return this;
    }

    get() {
        return this.el;
    }

}