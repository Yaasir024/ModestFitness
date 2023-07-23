import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useScheduleStore = defineStore("counter", () => {
  const sevenDaySchedule = ref([]);
  const twoDaySchedule = ref([]);

  function getSevenDaySchedule() {
    const currentDate = new Date();
    const sixDaysLater = new Date();
    sixDaysLater.setDate(currentDate.getDate() + 6);

    // Array of special opening hours for specific dates
    const specialOpeningHours = [
      { date: "2023-07-25", openingTime: "9:30am", closingTime: "6:30pm" },
      { date: "2023-07-23", openingTime: "10:00am", closingTime: "4:30pm" },
      // Add more special opening hours as needed
    ];

    const openingHours = [];

    // Loop through the dates from today to 6 days later
    for (
      let date = currentDate;
      date <= sixDaysLater;
      date.setDate(date.getDate() + 1)
    ) {
      const dateString = date.toISOString().split("T")[0]; // Get the date in 'YYYY-MM-DD' format

      // Check if the date has a special opening hour
      const specialHour = specialOpeningHours.find(
        (special) => special.date === dateString
      );

      // If there's a special opening hour, use it. Otherwise, use the default hours.
      const openingTime = specialHour ? specialHour.openingTime : "8:00am";
      const closingTime = specialHour ? specialHour.closingTime : "5:00pm";

      openingHours.push({ date: dateString, openingTime, closingTime });
    }

    sevenDaySchedule.value = openingHours;
  }

  function formatDate(dateString) {
    const date = new Date(dateString);
    const currentDate = new Date();

    // Check if the date is today
    if (date.toDateString() === currentDate.toDateString()) {
      return "today";
    }

    // Format the date as 'DD MMM'
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "short" });
    return `${day} ${month}`;
  }

  return { sevenDaySchedule, twoDaySchedule, getSevenDaySchedule, formatDate };
});
