export interface IMenuItem {
  name: string
  url: string
  icon: string
}

export const MENU_DATA: IMenuItem[] = [
  {
    icon: 'ph:calendar-blank',
    name: 'Расписание',
    url: '/schedule',
  },
  {
    icon: 'ph:graduation-cap-light',
    name: 'Учебные сессии',
    url: '/',
  },
  {
    icon: 'ph:door',
    name: 'Список комнат',
    url: '/rooms',
  },
  {
    icon: 'ph:student-light',
    name: 'Пользователи',
    url: '/users',
  },
  {
    icon: 'ph:user-list',
    name: 'Учебные группы',
    url: '/groups',
  },
  {
    icon: 'ph:video-camera',
    name: 'Список устройств',
    url: '/devices',
  },
  {
    icon: 'ph:gear',
    name: 'Настройки системы',
    url: '/settings',
  },
  {
    icon: 'ph:archive',
    name: 'Архив',
    url: '/archive',
  },
]
