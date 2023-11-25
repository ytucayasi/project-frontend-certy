const menuData = {
  sidebarMenu: [
    { value: 'Inicio', icon: 'fa-home', route: '/' },
    { value: 'Usuarios', icon: 'fa-users', route: '/usuarios' },
    { value: 'Solicitudes', icon: 'fa-file', route: '/solicitudes' }
  ],
  sidebarFooter: [
    { value: 'Cerrar sesión', icon: 'fa-right-from-bracket', color: 'bg-first', hoverColor: 'hover:bg-second' },
  ],
  navbarMenu: [
    { icon: 'fa-message', link: 'asda', active: true },
    { icon: 'fa-bell', link: 'asda', active: false },
  ]
};

export default menuData;