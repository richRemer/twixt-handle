/**
 * Attach event handler.
 * @param {EventTarget} target
 * @param {string} event
 * @param {function} handler
 */
function handle(target, event, handler) {
    target.addEventListener(event, handler);
}

module.exports = handle;

