// public/embed.js

(function() {
    const VERCEL_APP_URL = 'https://chat-bot-virid-two.vercel.app';
    const SCRIPT_ID = 'chatbot-embed-script'; // This can remain constant.

    // --- Find the script tag to read its parameters ---
    const scriptTag = document.getElementById(SCRIPT_ID);
    if (!scriptTag) {
        console.error(`Chatbot Error: Script tag with id="${SCRIPT_ID}" not found.`);
        return;
    }

    const scriptUrl = new URL(scriptTag.src);
    const clientId = scriptUrl.searchParams.get('clientId');
    
    // --- Get the target container ID from a new data attribute ---
    const targetId = scriptTag.getAttribute('data-target-id');

    if (!clientId) {
        console.error(`Chatbot Error: "clientId" not found in script tag URL.`);
        return;
    }

    if (!targetId) {
        console.error(`Chatbot Error: "data-target-id" attribute not found on script tag.`);
        return;
    }
    
    // --- Find Target Container ---
    const targetContainer = document.getElementById(targetId);
    if (!targetContainer) {
        console.warn(`Chatbot Warning: Target container with id="${targetId}" not found on this page.`);
        return;
    }
    
    // --- Create and Inject Iframe ---
    const iframe = document.createElement('iframe');
    iframe.src = `${VERCEL_APP_URL}?clientId=${clientId}`; 
    
    iframe.style.border = 'none';
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.minHeight = '750px';
    iframe.style.backgroundColor = 'transparent';

    targetContainer.appendChild(iframe);
})();