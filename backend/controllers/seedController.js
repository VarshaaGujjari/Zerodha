const { StocksModel } = require("../model/StocksModel");

const seedStocks = async (req, res) => {
  try {
    // Delete old stocks (optional)
    await StocksModel.deleteMany({});

    const stocks = [
      {
        symbol: "TCS",
        companyName: "Tata Consultancy Services",
        sector: "IT",
        exchange: "NSE",
        currentPrice: 3580,
        dayChange: 24,
        dayChangePercent: 0.67,
        marketCap: 13000000000000,
        peRatio: 31.5,
        dividendYield: 1.3,
        week52High: 4250,
        week52Low: 3312,
        logo: "",
        description: "India's largest IT services company."
      },

      {
        symbol: "INFY",
        companyName: "Infosys",
        sector: "IT",
        exchange: "NSE",
        currentPrice: 1625,
        dayChange: -12,
        dayChangePercent: -0.73,
        marketCap: 6700000000000,
        peRatio: 28.7,
        dividendYield: 2.1,
        week52High: 1903,
        week52Low: 1385,
        logo: "",
        description: "Global IT consulting company."
      },

      {
        symbol: "RELIANCE",
        companyName: "Reliance Industries",
        sector: "Oil & Gas",
        exchange: "NSE",
        currentPrice: 2950,
        dayChange: 18,
        dayChangePercent: 0.61,
        marketCap: 20000000000000,
        peRatio: 26.4,
        dividendYield: 0.4,
        week52High: 3200,
        week52Low: 2520,
        logo: "",
        description: "India's largest private sector company."
      },

      {
        symbol: "HDFCBANK",
        companyName: "HDFC Bank",
        sector: "Banking",
        exchange: "NSE",
        currentPrice: 1780,
        dayChange: 8,
        dayChangePercent: 0.45,
        marketCap: 14000000000000,
        peRatio: 20.8,
        dividendYield: 1.1,
        week52High: 1880,
        week52Low: 1450,
        logo: "",
        description: "India's largest private bank."
      },

      {
        symbol: "ICICIBANK",
        companyName: "ICICI Bank",
        sector: "Banking",
        exchange: "NSE",
        currentPrice: 1412,
        dayChange: -5,
        dayChangePercent: -0.35,
        marketCap: 10000000000000,
        peRatio: 21.7,
        dividendYield: 0.8,
        week52High: 1480,
        week52Low: 1105,
        logo: "",
        description: "Leading private sector bank."
      }
    ];

    await StocksModel.insertMany(stocks);

    res.status(201).json({
      message: "Stocks seeded successfully"
    });

  } catch (err) {

    res.status(500).json({
      message: err.message
    });

  }
};

module.exports = {
  seedStocks,
};