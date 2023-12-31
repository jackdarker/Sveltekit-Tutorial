/** call this to make resizers moveable via mouse. use data-direction like so:
 *<div style="display: flex; border: 1px solid #cbd5e0;">
    <div>Left</div>
    <div style="width: 4px; border: 2px solid #cbd5e0;" class="resizer" data-direction="horizontal"></div>
    <div style="display: flex; flex: 1 1 0%; flex-direction: column">
        <div>Top</div>
        <div style="height: 4px; border: 2px solid #cbd5e0;" class="resizer" data-direction="vertical"></div>
        <div style="flex: 1 1 0%">Bottom</div>
    </div>
</div>
 * source: https://htmldom.dev/create-resizable-split-views/
 * @export
 */
export function bindResizers() {
    const resizable = function (resizer) {
        const direction = resizer.getAttribute('data-direction') || 'horizontal';
        const prevSibling = resizer.previousElementSibling;
        const nextSibling = resizer.nextElementSibling;
        const cursortype = (direction==='horizontal')?"col-resize":"row-resize";
        // The current position of mouse
        let x = 0;
        let y = 0;
        let prevSiblingHeight = 0;
        let prevSiblingWidth = 0;

        // Handle the mousedown event
        // that's triggered when user drags the resizer
        const mouseDownHandler = function (e) {
            // Get the current mouse position
            x = e.clientX;
            y = e.clientY;
            const rect = prevSibling.getBoundingClientRect();
            prevSiblingHeight = rect.height;
            prevSiblingWidth = rect.width;

            // Attach the listeners to `document`
            document.addEventListener('mousemove', mouseMoveHandler);
            document.addEventListener('mouseup', mouseUpHandler);
        };

        const mouseMoveHandler = function (e) {
            // How far the mouse has been moved
            const dx = e.clientX - x;
            const dy = e.clientY - y;

            switch (direction) {
                case 'vertical':
                    const h = ((prevSiblingHeight + dy) * 100) /
                        resizer.parentNode.getBoundingClientRect().height;
                    prevSibling.style.height = `${h}%`;
                    break;
                case 'horizontal':
                default:
                    const w = ((prevSiblingWidth + dx) * 100) / resizer.parentNode.getBoundingClientRect().width;
                    prevSibling.style.width = `${w}%`;
                    break;
            }

            //const cursor = direction === 'horizontal' ? 'col-resize' : 'row-resize';
            //resizer.style.cursor = cursortype;
            //document.body.style.cursor = cursortype;

            prevSibling.style.userSelect = 'none';
            prevSibling.style.pointerEvents = 'none';

            nextSibling.style.userSelect = 'none';
            nextSibling.style.pointerEvents = 'none';
        };

        const mouseUpHandler = function () {
            //resizer.style.removeProperty('cursor');
            //document.body.style.removeProperty('cursor');

            prevSibling.style.removeProperty('user-select');
            prevSibling.style.removeProperty('pointer-events');

            nextSibling.style.removeProperty('user-select');
            nextSibling.style.removeProperty('pointer-events');

            // Remove the handlers of `mousemove` and `mouseup`
            document.removeEventListener('mousemove', mouseMoveHandler);
            document.removeEventListener('mouseup', mouseUpHandler);
        };

        // Attach the handler
        resizer.addEventListener('mousedown', mouseDownHandler);
        resizer.style.cursor=cursortype;
    };

    // Query all resizers
    document.querySelectorAll('.resizer').forEach(function (ele) {
        resizable(ele);
    });
}