const paths = [{
    image: "/narrative.png",
    title: "Narrative and sentiment based trading"
},
{
    image: "https://www.investopedia.com/thmb/rsFvqfakNcjl-U2UHXMAfUJn0MY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Technical_Analysis_Final-4a96fc1863cf4dbc8a5c6f315ee49871.jpg",
    title: "Price action and technical analysis"
},
{
    image: "https://altrady-strapi.s3.eu-west-1.amazonaws.com/Strategies_For_Quantitative_Trading_Models_55dd4c1023.webp",
    title: "Quantitative trading"
}]

const courseOneModules = [
  {
    title: "Introduction to Sentiment Analysis for Traders",
    description:
      "Understand what sentiment analysis is, why markets are driven by emotions, and how sentiment creates opportunities before price moves.",
    hours: 2,
  },
  {
    title: "Market Psychology & Behavioral Finance",
    description:
      "Learn fear, greed, FOMO, herd behavior, reflexivity, and how crowd psychology influences market cycles.",
    hours: 3,
  },
  {
    title: "Identifying Market Narratives",
    description:
      "Discover how narratives form, spread, and eventually move capital. Analyze historical examples from crypto, stocks, and macro markets.",
    hours: 3,
  },
  {
    title: "News Analysis & Information Edge",
    description:
      "Learn to extract actionable insights from breaking news, earnings reports, macro announcements, and industry developments.",
    hours: 3,
  },
  {
    title: "Social Media Intelligence",
    description:
      "Use X, Reddit, Telegram, Discord, and online communities to identify sentiment shifts before they become obvious to the broader market.",
    hours: 4,
  },
  {
    title: "On-Chain & Community Sentiment",
    description:
      "Analyze wallet activity, community engagement, governance discussions, and ecosystem growth to gauge conviction and momentum.",
    hours: 4,
  },
  {
    title: "Building a Sentiment Framework",
    description:
      "Create a repeatable process for evaluating bullish, bearish, and neutral market sentiment across multiple data sources.",
    hours: 3,
  },
  {
    title: "AI-Powered Sentiment Analysis",
    description:
      "Use ChatGPT, LLMs, NLP tools, and automation to summarize discussions, classify sentiment, and track narrative changes at scale.",
    hours: 4,
  },
  {
    title: "Converting Sentiment Into Trade Ideas",
    description:
      "Learn entry triggers, confirmation methods, risk management, and how to combine sentiment with technical analysis.",
    hours: 4,
  },
  {
    title: "Capstone: Narrative-to-Trade Workflow",
    description:
      "Build a complete workflow from detecting a narrative to executing and managing a trade using real-world case studies.",
    hours: 5,
  },
];

const courseTwoModules = [
  {
    title: "Introduction to Technical Analysis",
    description:
      "Learn the foundations of technical analysis, market structure, and why price action reflects market psychology.",
    hours: 2,
  },
  {
    title: "Reading Candlestick Charts",
    description:
      "Understand candlestick formations, chart timeframes, and how traders interpret price behavior.",
    hours: 3,
  },
  {
    title: "Support, Resistance & Market Structure",
    description:
      "Identify key price levels, trend changes, breakouts, and market phases with confidence.",
    hours: 3,
  },
  {
    title: "Trend Analysis & Price Action",
    description:
      "Master trend identification, higher highs and lows, pullbacks, and momentum-based trading concepts.",
    hours: 4,
  },
  {
    title: "Technical Indicators",
    description:
      "Use moving averages, RSI, MACD, Bollinger Bands, and volume indicators to support trading decisions.",
    hours: 4,
  },
  {
    title: "Chart Patterns & Market Behavior",
    description:
      "Recognize continuation and reversal patterns such as triangles, flags, wedges, and head-and-shoulders formations.",
    hours: 3,
  },
  {
    title: "Volume Analysis",
    description:
      "Learn how volume confirms trends, breakouts, reversals, and institutional participation.",
    hours: 2,
  },
  {
    title: "Multi-Timeframe Analysis",
    description:
      "Combine higher and lower timeframes to improve trade selection, timing, and risk management.",
    hours: 3,
  },
  {
    title: "Risk Management & Trade Planning",
    description:
      "Develop a professional trading framework using position sizing, stop losses, and risk-to-reward principles.",
    hours: 3,
  },
  {
    title: "Building a Complete Trading Strategy",
    description:
      "Combine technical tools into a repeatable strategy and perform backtesting to evaluate performance.",
    hours: 5,
  },
];

const courseThreeModules = [
  {
    title: "Introduction to Quantitative Trading",
    description:
      "Understand the principles of data-driven trading, systematic strategies, and how quantitative funds approach the markets.",
    hours: 2,
  },
  {
    title: "Statistics for Traders",
    description:
      "Learn probability, distributions, correlation, variance, and other statistical concepts essential for quantitative analysis.",
    hours: 4,
  },
  {
    title: "Market Data & Data Engineering",
    description:
      "Collect, clean, and structure historical market data for research and strategy development.",
    hours: 3,
  },
  {
    title: "Python for Quantitative Finance",
    description:
      "Use Python to manipulate datasets, calculate indicators, and automate quantitative workflows.",
    hours: 5,
  },
  {
    title: "Factor Investing & Alpha Discovery",
    description:
      "Explore momentum, value, volatility, and custom factors used to identify market inefficiencies.",
    hours: 4,
  },
  {
    title: "Strategy Design & Signal Generation",
    description:
      "Transform market hypotheses into measurable trading signals and systematic strategies.",
    hours: 4,
  },
  {
    title: "Backtesting Frameworks",
    description:
      "Evaluate strategy performance using historical data while avoiding common pitfalls such as look-ahead bias.",
    hours: 5,
  },
  {
    title: "Portfolio Construction & Optimization",
    description:
      "Build diversified portfolios using position sizing, risk allocation, and optimization techniques.",
    hours: 3,
  },
  {
    title: "Risk Modeling & Performance Analysis",
    description:
      "Measure drawdowns, Sharpe ratio, volatility, and other key metrics used by professional quants.",
    hours: 3,
  },
  {
    title: "Algorithmic Trading Capstone",
    description:
      "Design, test, and present a complete quantitative trading strategy from research to deployment readiness.",
    hours: 6,
  },
];

export {paths , courseOneModules , courseTwoModules , courseThreeModules}