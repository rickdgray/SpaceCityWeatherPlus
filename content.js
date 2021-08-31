(() => {
    'use strict';

    document.getElementById('right-sidebar').remove();
    document.getElementById('primary').style.width = '100%';
    document.querySelectorAll('img').forEach((img) => { img.style.width = '100%'; });
    document.querySelectorAll('footer').forEach((footer) => { footer.remove(); });
    document.querySelectorAll('.sharedaddy').forEach((sharedaddy) => {
        sharedaddy.previousSibling.previousSibling.previousSibling.previousSibling.remove();
        sharedaddy.remove();
    });
})();