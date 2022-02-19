function getSchedule() {
  let time;
  let task;

  let schedule = {};

  do {
    time = prompt("Время");
    task = prompt("Задача");

    if (time === null || task === null) {
      break;
    }
    schedule[time] = task;
    
  } while (true);
  return schedule;

}

const schedule = getSchedule();
console.log(`schedule`, schedule)