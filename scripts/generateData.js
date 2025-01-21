import { writeFileSync } from 'fs'
import { v4 as uuid } from 'uuid'

const generateTableData = () => {
  const tableData = []
  const statuses = ['Запланировано', 'Идет', 'Завершено']
  const types = ['Урок', 'Аккредитация', 'Экзамен']
  const names = [
    'Ультразвуковое исследование органов брюшной полости и забрюшинного пространства',
    'Ультразвуковое абдоминальное исследование мочевого пузыря (для мужчин) и предстательной железы',
    'Реанимация новорожденных',
    'Акушерство и гинекология',
    'Радиология: основные подходы и методы',
    'Техника проведения ЭКГ',
    'Основы интенсивной терапии',
    'Ультразвуковое исследование сердца',
    'Основы травматологии и ортопедии',
    'Эндокринология: современные подходы к лечению',
    'Кардиология: диагностика и лечение',
  ]
  const rooms = [
    'Комната 1',
    'Комната 2',
    'Комната 3',
    'Комната 4',
    'Комната 5',
    'Комната 6',
    'Комната 7',
  ]
  const groups = [
    'ТП-31',
    '420-11КС',
    '240011С',
    'КЛ-98',
    'МД-05',
    'НР-22',
    'ГР-43',
    'СП-77',
    'ФД-88',
    'ПТ-09',
  ]

  for (let i = 0; i < 110; i++) {
    const date = new Date(
      2023,
      Math.floor(Math.random() * 12),
      Math.floor(Math.random() * 28) + 1
    )
    const formattedDate = date.toLocaleDateString('ru-RU')
    const startHour = Math.floor(Math.random() * 8) + 9 // Часы от 9 до 16
    const endHour = startHour + 1
    const time = `${startHour}:00 - ${endHour}:00`

    tableData.push({
      id: uuid(),
      date: formattedDate,
      time: time,
      status: statuses[Math.floor(Math.random() * statuses.length)],
      name: names[Math.floor(Math.random() * names.length)],
      type: types[Math.floor(Math.random() * types.length)],
      room: Array.from(
        { length: Math.floor(Math.random() * 3) + 1 },
        () => rooms[Math.floor(Math.random() * rooms.length)]
      ),
      group: groups[Math.floor(Math.random() * groups.length)],
    })
  }

  return tableData
}

const tableData = generateTableData()

writeFileSync(
  'data/tableData.json',
  JSON.stringify(tableData, null, 2),
  'utf-8'
)
console.log('Данные успешно записаны в tableData.json')
