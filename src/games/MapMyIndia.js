import React, { useState, useEffect, useRef } from "react";

const IndiaMap = () => {
  const [score, setScore] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [questionIndex, setQuestionIndex] = useState(0); // Track current question
  const [isInteractive, setIsInteractive] = useState(true); // Track if map is interactive
  const [isQuizOver, setIsQuizOver] = useState(false); // Track if quiz is over
  const chartRef = useRef(null);

  const questions = [
    { state: "Karnataka", correctMessage: "Correct state selected!" },
    { state: "Kerala", correctMessage: "Great job! Correct state selected!" },
    { state: "Tamil Nadu", correctMessage: "Well done! Correct state selected!" },
    // Add more questions as needed
  ];

  useEffect(() => {
    const loadGoogleCharts = () => {
      const script = document.createElement("script");
      script.src = "https://www.gstatic.com/charts/loader.js";
      script.onload = () => {
        initializeChart();
      };
      document.body.appendChild(script);
    };

    const initializeChart = () => {
      window.google.charts.load("current", {
        packages: ["geochart"],
        mapsApiKey: "YOUR_GOOGLE_MAPS_API_KEY",
      });
      window.google.charts.setOnLoadCallback(drawRegionsMap);
    };

    if (!window.google || !window.google.charts) {
      loadGoogleCharts();
    } else {
      initializeChart();
    }
  }, [questionIndex]); // Redraw map when the question changes

  const drawRegionsMap = () => {
    const data = window.google.visualization.arrayToDataTable([
      ["State", "Color"],
      ["Andaman and Nicobar Islands", 0],
      ["Andhra Pradesh", 0],
      ["Arunachal Pradesh", 0],
      ["Assam", 0],
      ["Bihar", 0],
      ["Chandigarh", 0],
      ["Chhattisgarh", 0],
      ["Delhi", 0],
      ["Goa", 0],
      ["Gujarat", 0],
      ["Haryana", 0],
      ["Himachal Pradesh", 0],
      ["Jharkhand", 0],
      [questions[questionIndex].state, 0],
      ["Karnataka", 0],
      ["Kerala", 0],
      ["Ladakh", 0],
      ["Lakshadweep", 0],
      ["Madhya Pradesh", 0],
      ["Maharashtra", 0],
      ["Manipur", 0],
      ["Meghalaya", 0],
      ["Mizoram", 0],
      ["Nagaland", 0],
      ["ODISHA", 0],
      ["Puducherry", 0],
      ["Punjab", 0],
      ["Rajasthan", 0],
      ["Sikkim", 0],
      ["Tamil Nadu", 0],
      ["Telangana", 0],
      ["Tripura", 0],
      ["Uttar Pradesh", 0],
      ["Uttarakhand",0],
      ["West Bengal", 0],
      ["Ladakh",0],
      ["Jammu and Kashmir",0]
    ]);

    const options = {
      region: "IN",
      displayMode: "regions",
      resolution: "provinces",
      colorAxis: { colors: ["#ffffff"] },
      tooltip: { trigger: "none" },
    };

    const chart = new window.google.visualization.GeoChart(chartRef.current);

    window.google.visualization.events.addListener(chart, "select", function () {
      if (isInteractive) {
        const selection = chart.getSelection();
        if (selection.length > 0) {
          const state = data.getValue(selection[0].row, 0);
          handleStateSelection(state);
        }
      }
    });

    chart.draw(data, options);
  };

  const handleStateSelection = (selectedState) => {
    const isCorrect = selectedState === questions[questionIndex].state;
    updateMapColors(selectedState, isCorrect);
    setScore((prevScore) => (isCorrect ? prevScore + 1 : prevScore));
    showModal(isCorrect ? questions[questionIndex].correctMessage : "Wrong state selected!");
    setIsInteractive(false); // Disable further clicks
  };

  const updateMapColors = (selectedState, isCorrect) => {
    const updatedData = window.google.visualization.arrayToDataTable([
      ["State", "Color"],
      ["Andaman and Nicobar Islands", 0],
      ["Andhra Pradesh", 0],
      ["Arunachal Pradesh", 0],
      ["Assam", 0],
      ["Bihar", 0],
      ["Chandigarh", 0],
      ["Chhattisgarh", 0],
      ["Delhi", 0],
      ["Goa", 0],
      ["Gujarat", 0],
      ["Haryana", 0],
      ["Himachal Pradesh", 0],
      ["Jharkhand", 0],
      [questions[questionIndex]?.state || "", isCorrect ? 1 : 2],
      ["Karnataka", 0],
      ["Kerala", 0],
      ["Lakshadweep", 0],
      ["Madhya Pradesh", 0],
      ["Maharashtra", 0],
      ["Manipur", 0],
      ["Meghalaya", 0],
      ["Mizoram", 0],
      ["Nagaland", 0],
      ["Odisha", 0],
      ["Puducherry", 0],
      ["Punjab", 0],
      ["Rajasthan", 0],
      ["Sikkim", 0],
      ["Tamil Nadu", 0],
      ["Telangana", 0],
      ["Tripura", 0],
      ["Uttar Pradesh", 0],
      ["Uttarakhand", 0],
      ["West Bengal", 0],
      ["Ladakh",0],
      ["Jammu and Kashmir",0]
    ]);

    if (!isCorrect) {
      const rowIndex = updatedData.getFilteredRows([{ column: 0, value: selectedState }])[0];
      if (rowIndex !== undefined) {
        updatedData.setValue(rowIndex, 1, 2); // Red color code for wrong answer
      }
    } else {
      const rowIndex = updatedData.getFilteredRows([{ column: 0, value: selectedState }])[0];
      if (rowIndex !== undefined) {
        updatedData.setValue(rowIndex, 1, 1); // Green color code for correct answer
      }
    }

    const options = {
      region: "IN",
      displayMode: "regions",
      resolution: "provinces",
      colorAxis: { colors: ["#ffffff", "#00FF00", "#FF0000"], minValue: 0, maxValue: 2 },
      tooltip: { trigger: "none" },
    };

    const chart = new window.google.visualization.GeoChart(chartRef.current);
    chart.draw(updatedData, options);
  };

  const showModal = (message) => {
    setModalMessage(message);
    setModalVisible(true);
  };

  const nextQuestion = () => {
    if (questionIndex + 1 >= questions.length) {
      setIsQuizOver(true); // End the quiz
      setIsInteractive(false);
      setModalMessage(`Quiz Over! Your final score is ${score}.`);
    } else {
      setModalVisible(false);
      setIsInteractive(true); // Enable clicks for the next question
      setQuestionIndex((prevIndex) => (prevIndex + 1)); // Move to the next question
    }
  };

  return (
    <div style={{ position: "relative" }}>
      <h1>Pinpoint the state "{questions[questionIndex].state}" in the Indian map below</h1>
      <div
        id="regions_div"
        ref={chartRef}
        style={{ width: "100%", height: "600px" }}
      ></div>
      <div
        id="score-table"
        style={{
          position: "absolute",
          top: "20px",
          right: "20px",
          backgroundColor: "white",
          padding: "10px",
          border: "1px solid #ccc",
          borderRadius: "5px",
          boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h2>Score Table</h2>
        <div id="score" style={{ fontSize: "24px", fontWeight: "bold", textAlign: "center" }}>
          {score}
        </div>
      </div>

      {modalVisible && (
        <div
          style={{
            display: "block",
            position: "fixed",
            top: "30%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "white",
            padding: "20px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
            zIndex: 1000,
          }}
        >
          <p id="modal-message">{modalMessage}</p>
          <button onClick={nextQuestion}>Next</button>
        </div>
      )}
    </div>
  );
};

export default IndiaMap;

