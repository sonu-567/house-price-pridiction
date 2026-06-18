const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// House Price Prediction API
app.post("/predict", (req, res) => {
    const {
        MedInc,
        HouseAge,
        AveRooms,
        AveBedrms,
        Population,
        AveOccup,
        Latitude,
        Longitude
    } = req.body;

    // Simple prediction formula
    const predictedPrice =
        (Number(MedInc) * 50000) +
        (Number(HouseAge) * 1000) +
        (Number(AveRooms) * 10000) -
        (Number(AveBedrms) * 5000) +
        (Number(Population) * 2) +
        (Number(AveOccup) * 100) +
        (Number(Latitude) * 1000) -
        (Math.abs(Number(Longitude)) * 500);

    res.json({
        predicted_price: predictedPrice.toFixed(2)
    });
});

app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});
