const menuData = {
  sidebarMenu: [
    { value: 'Inicio', icon: 'fa-home', route: '/', allowedRoles: ['Admin', 'Estudiante', 'Secretario'] },
    { value: 'Estudiantes', icon: 'fa-users', route: '/estudiantes', allowedRoles: ['Admin'] },
    { value: 'Usuarios', icon: 'fa-user-cog', route: '/usuarios', allowedRoles: ['Admin'] },
    { value: 'Certificados', icon: 'fa-file-alt', route: '/certificados', allowedRoles: ['Estudiante', 'Admin', 'Secretario'] },
    { value: 'Solicitudes', icon: 'fa-envelope', route: '/solicitudes', allowedRoles: ['Estudiante', 'Admin', 'Secretario'] },
    { value: 'Planes de estudio', icon: 'fa-pen-alt', route: '/plan-estudio', allowedRoles: ['Admin'] },
    { value: 'Programas de estudio', icon: 'fa-pen-alt', route: '/programa-estudio', allowedRoles: ['Admin'] },
    { value: 'Módulos formativos', icon: 'fa-pen-alt', route: '/modulo-formativo', allowedRoles: ['Admin'] },
    { value: 'Configuración', icon: 'fa-cog', route: '/modulo-formativo', allowedRoles: ['Admin'] },
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