var elements = document.getElementsByClassName("pie-chart");

// Khai báo một mảng để chứa tên của các phần tử
var yValues = [];
const pieChartElements = document.querySelectorAll('.pie-chart');
var xValues = [];

// Lặp qua từng phần tử và thêm tên vào mảng
for (const element of pieChartElements) {
    const name = element.getAttribute('name');
    xValues.push(name);
}
// Duyệt qua tất cả các phần tử để lấy tên của chúng
for (var i = 0; i < elements.length; i++) {
    // Lấy giá trị của thuộc tính "name"
    var value = elements[i].getAttribute("value")
    // Thêm tên vào mảng
    yValues.push(value);
}
var barColors = [
  "#b91d47",
  "#00aba9",
  "#2b5797",
  "#e8c3b9",
  "#1e7145"
];

new Chart("myChart", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    title: {
      display: true,
      text: "Biểu đồ số lượng hàng bán của các hãng"
    }
  }
});