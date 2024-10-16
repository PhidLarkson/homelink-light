

document.addEventListener('DOMContentLoaded', function () {
    // Profile Popover
    const button = document.getElementById('profile-button');
    const profilePopover = document.getElementById('profile-popover');
    const closeProfilePopover = document.getElementById('close-profile-popover');

    button.addEventListener('click', function () {
        profilePopover.classList.toggle('hidden');
    });

    closeProfilePopover.addEventListener('click', function () {
        profilePopover.classList.add('hidden');
    });

    //Ai popover
    const aibutton = document.getElementById('ai-button');
    const aiPopover = document.getElementById('ai-popover');
    const closeaiPopover = document.getElementById('close-ai-popover');

    aibutton.addEventListener('click', function () {
        aiPopover.classList.toggle('hidden');
    });

    closeaiPopover.addEventListener('click', function () {
        aiPopover.classList.add('hidden');
    });

    // Wallet Popover
    const walletButton = document.getElementById('wallet-button');
    const walletPopover = document.getElementById('wallet-popover');
    const closeWalletPopover = document.getElementById('close-wallet-popover');

    const metamaskButton = document.getElementById('metamask-button');
    const walletAddress = document.getElementById('wallet-address');
    const walletAddressPill = document.getElementById('wallet-address-pill');

    walletButton.addEventListener('click', function () {
        walletPopover.classList.toggle('hidden');
    });

    closeWalletPopover.addEventListener('click', function () {
        walletPopover.classList.add('hidden');
    });

    // Metamask connection (assuming Web3.js is included)
    metamaskButton.addEventListener('click', async function () {
        if (window.ethereum) {
            try {
                const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
                walletAddress.textContent = accounts[0];
                walletAddressPill.textContent = "Metamask Wallet connected";
            } catch (error) {
                console.error("User denied wallet access", error);
            }
        } else {
            console.log('MetaMask is not installed!');
        }
    });

    // Sidebar visibility on hover
    const leftSidebar = document.getElementById('left-sidebar');

    document.addEventListener('mousemove', function (event) {
        if (event.clientX < 50) {
            leftSidebar.classList.remove('hidden');
        } else if (event.clientX > 150) { // Adjust this value based on sidebar width
            leftSidebar.classList.add('hidden');
        }
    });

    // CCTV Popover
    const cctvPopover = document.getElementById('cctv-popover');
    const closeCCTVPopover = document.getElementById('close-cctv-popover');
    const cctvButton = document.getElementById('cctv-button');

    cctvButton.addEventListener('click', function () {
        cctvPopover.classList.toggle('hidden');
    });

    closeCCTVPopover.addEventListener('click', function () {
        cctvPopover.classList.add('hidden');
    });

    // Edit Profile Modal
    const editbutton = document.getElementById('edit-profile-btn');
    const editProfileModal = document.getElementById('edit-profile-modal');
    const closeEditProfileModal = document.getElementById('close-edit-profile-modal');

    editbutton.addEventListener('click', function () {
        editProfileModal.classList.toggle('hidden');
    });

    closeEditProfileModal.addEventListener('click', function () {
        editProfileModal.classList.add('hidden');
    });
});
