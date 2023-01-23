const butInstall = document.getElementById('buttonInstall');

window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    deferredPrompt = event;
    butInstall.hidden = false;
});

butInstall.addEventListener('click', async () => {
    butInstall.hidden = true;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    console.log(`User response to the install prompt: ${outcome}`);
    deferredPrompt = null;
});

window.addEventListener('appinstalled', (event) => {
    console.log('INSTALL: Success');
});
