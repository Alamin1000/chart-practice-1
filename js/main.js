(function ($) {
  "use strict";
})(jQuery);

$(document).ready(function () {
  // preloader
  $("#preloader").fadeOut(500);

  // chart
  const ctx = document.getElementById("myChart");
  Chart.defaults.backgroundColor = "red";
  Chart.defaults.borderColor = "#092532";
  Chart.defaults.color = "#fff";
  new Chart(ctx, {
    type: "bar",
    data: {
      labels: [
        "Mon",
        "Tue",
        "Wed",
        "Thru",
        "Fri",
        "Sat",
        "Sun",
        "mon",
        "Tue",
        "Wed",
      ],
      datasets: [
        {
          label: "# of Votes",
          data: [10, 15, 14, 12, 13, 16, 18, 20, 32, 42],
          borderWidth: 0,
          backgroundColor: "#ED7D31",
          stack: "Stack 0",
          borderRadius: 15,
          // borderSkipped: false,
          borderColor: "#36A2EB",
          barPercentage: 1,
        },
        {
          label: "#2 of Votes",
          data: [20, 13, 8, 5, 8, 8, 11, 18, 16, 17],
          borderWidth: 0,
          backgroundColor: "#0A2EF2",
          stack: "Stack 0",
          borderRadius: 5,
          borderColor: "#36A2EB",
          barPercentage: 1,
        },
      ],
    },
    options: {
      layout: {
        padding: {
          left: 50,
        },
      },
      scales: {
        x: {
          stacked: true,
          grid: {
            display: "none",
            color: "transparent",
          },
        },
        y: {
          stacked: true,
          min: 0,
          suggestedMax: 60,
          ticks: {
            // forces step size to be 50 units
            stepSize: 10,
          },
        },
      },
    },
  });

  // chart2
  const ctx2 = document.getElementById("myChart2");
  Chart.defaults.backgroundColor = "red";
  Chart.defaults.borderColor = "#092532";
  Chart.defaults.color = "#fff";
  new Chart(ctx2, {
    type: "doughnut",
    defaults: {
      backgroundColor: "#9BD0F5",
    },
    data: {
      labels: ["1", "2", "3", "4"],
      datasets: [
        {
          label: "# pai 1",
          data: [20, 52, 12, 30],
          backgroundColor: ["#F8833E", "#0B2EF3", "#6D83FF", "#45CCC2"],
          borderWidth: 0,
          borderRadius: 0,
          borderSkipped: false,
        },
      ],
    },
    options: {
      plugins: {
        legend: {
          display: false,
          position: "top",
        },
        title: {
          display: false,
          text: "Chart.js Doughnut Chart",
        },
      },
      layout: {
        padding: 0,
      },
      cutout: "75%",
      circumference: 360,
      rotation: -100,
      scales: {},
    },
  });

  // chart3
  const ctx3 = document.getElementById("myChart3");
  Chart.defaults.backgroundColor = "red";
  Chart.defaults.borderColor = "#092532";
  Chart.defaults.color = "#fff";
  new Chart(ctx3, {
    type: "doughnut",
    defaults: {
      backgroundColor: "#9BD0F5",
    },
    data: {
      labels: ["1", "2", "3"],
      datasets: [
        {
          label: "# pai 1",
          data: [1, 1, 1],
          backgroundColor: ["#45CCC2", "#F8833E", "#0B2EF3"],
          borderWidth: 0,
          offset: 12,
          borderRadius: 0,
          borderSkipped: false,
        },
      ],
    },
    options: {
      plugins: {
        legend: {
          display: false,
          position: "top",
        },
        title: {
          display: false,
          text: "Chart.js Doughnut Chart",
        },
      },
      layout: {
        padding: 0,
      },
      cutout: "75%",
      circumference: 180,
      rotation: -90,

      scales: {},
    },
  });

  // end
});
