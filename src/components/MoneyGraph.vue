<script setup lang="ts">
import { onMounted, ref } from "vue";
import {
  Chart,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Filler,
  Legend,
  Tooltip,
} from "chart.js";

// Register Chart.js components
Chart.register(
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Filler,
  Legend,
  Tooltip
);

const chartCanvas = ref<HTMLCanvasElement>();
let chart: Chart | null = null;

onMounted(() => {
  if (!chartCanvas.value) return;

  const ctx = chartCanvas.value.getContext("2d");
  if (!ctx) return;

  // Generate stock-like data with Brownian motion
  const numPoints = 100;
  const labels: string[] = [];
  const data: number[] = [];
  const startValue = 1000; // Start from a high value like a stock price

  let currentPrice = startValue;
  for (let i = 0; i < numPoints; i++) {
    labels.push("");

    // Trend component (slower growth)
    const trend = 1 + (i / numPoints) * 0.8; // 80% growth over the period

    // Volatility component (Brownian motion)
    const volatility = (Math.random() - 0.5) * 30;

    // Small random jumps
    const jump = Math.random() > 0.95 ? (Math.random() - 0.5) * 50 : 0;

    currentPrice = currentPrice * 1.005 + volatility + jump; // 0.5% average growth per step
    currentPrice = Math.max(currentPrice, startValue * 0.9); // Prevent going too low

    data.push(currentPrice);
  }

  // Animation data
  const animationDuration = 3000;
  const animatedData: number[] = new Array(numPoints).fill(null);
  let currentIndex = 0;

  // Find the max value to set fixed scale
  const maxValue = Math.max(...data);

  chart = new Chart(ctx, {
    type: "line",
    data: {
      labels: labels,
      datasets: [
        {
          label: "",
          data: animatedData,
          borderColor: "#FFD700",
          backgroundColor: (context) => {
            const chart = context.chart;
            const { ctx, chartArea } = chart;
            if (!chartArea) return "transparent";

            const gradient = ctx.createLinearGradient(
              0,
              chartArea.bottom,
              0,
              chartArea.top
            );
            gradient.addColorStop(0, "rgba(255, 215, 0, 0.1)");
            gradient.addColorStop(0.5, "rgba(255, 178, 44, 0.4)");
            gradient.addColorStop(1, "rgba(255, 140, 0, 0.7)");
            return gradient;
          },
          fill: true,
          borderWidth: 3,
          pointRadius: 0,
          tension: 0.1, // Less smooth for stock-like appearance
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      animation: {
        duration: 0,
      },
      interaction: {
        intersect: false,
      },
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          enabled: false,
        },
      },
      scales: {
        x: {
          display: true,
          title: {
            display: true,
            text: "JA",
            color: "#888",
            font: {
              size: 16,
              weight: "bold",
            },
          },
          grid: {
            display: false,
          },
          ticks: {
            display: false,
          },
        },
        y: {
          display: true,
          title: {
            display: true,
            text: "PENGE",
            color: "#888",
            font: {
              size: 16,
              weight: "bold",
            },
          },
          grid: {
            display: false, // Remove horizontal grid lines
          },
          ticks: {
            display: false,
          },
          min: startValue * 0.8, // Start below the initial value
          max: maxValue * 1.2, // Leave room at the top
        },
      },
    },
  });

  // Animate the line
  const startTime = Date.now();
  const animate = () => {
    const elapsed = Date.now() - startTime;
    const progress = Math.min(elapsed / animationDuration, 1);

    // Update data points progressively
    const targetIndex = Math.floor(progress * numPoints);
    while (currentIndex < targetIndex && currentIndex < numPoints) {
      animatedData[currentIndex] = data[currentIndex];
      currentIndex++;
    }

    if (chart) {
      chart.update();
    }

    if (progress < 1) {
      requestAnimationFrame(animate);
    }
  };

  requestAnimationFrame(animate);
});
</script>

<template>
  <div class="graph-container">
    <div class="chart-wrapper">
      <canvas ref="chartCanvas"></canvas>
    </div>
  </div>
</template>

<style scoped>
.graph-container {
  width: 100%;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.chart-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 1200px;
}

canvas {
  width: 100% !important;
  height: 100% !important;
}
</style>
