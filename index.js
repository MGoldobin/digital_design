const upButton = document.querySelector('.upButton')

const handleUpButon = (e) => {
  e.preventDefault()
  scroll(0,0)
}

upButton.addEventListener("click", handleUpButon)


const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']
const month = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря']
const getDayInfo = (date) => {
  const myDate = new Date(date.split('.').reverse())
  console.log(`${days[myDate.getDay()]}, ${Math.floor(myDate.getDate()/7)+1} неделя ${month[myDate.getMonth()]} ${myDate.getFullYear()} года`)
}

getDayInfo("01.01.2022")
getDayInfo("15.12.2021")
getDayInfo("04.03.2022")