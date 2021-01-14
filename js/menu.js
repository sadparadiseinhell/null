let buttonSidebar = document.querySelector('.btn_menu');
buttonSidebar.onclick = () => {
    let sidebar = document.querySelector('.sidebar-wrapper');
    sidebar.classList.toggle('show-sidebar');
};