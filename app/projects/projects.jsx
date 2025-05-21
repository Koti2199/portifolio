import ProjectCard from "../components/projectCard";

function ProjectsComponent() {
  const projects = [
    {
      name: "Intelligent Medical Blog Generation and Classification Using Clinical Records",
      imageUrl:
        "/assets/images/nlp.jpeg",
      link: "https://huggingface.co/spaces/KOTI614/Medical_text_Analyser",
      techStack: "Hugging Face Transformers, Scikit-learn, spaCy, Pandas, Flask",
      description:
        "This project focuses on using NLP and machine learning to convert complex clinical notes from the MIMIC dataset into easy-to-read medical blog posts, while classifying them into relevant medical specialties. It combines statistical methods like TF-IDF and SVM with advanced transformer models such as T5, BART, and ClinicalBERT for summarization and classification.",
    },
    {
      name: " Classification of Plant Leaf Health Diagnosis",
      imageUrl:
      "/assets/images/patternrecog.png",
      link: "https://github.com/Koti2199/LeafCare-CNN_Based-Plant-Disease-Detection",
      techStack: "Python, TensorFlow, Keras (CNN),OpenCV / PIL (for image processing),Jupyter Notebook / PyCharm (IDE)",
      description:
        "The Leaf Care project leverages deep learning to classify plant leaves as healthy or diseased using image-based analysis. It aims to support early detection of plant diseases, enhancing crop yield and reducing pesticide usage, which contributes to sustainable agriculture.",
    },
    {
      name: "Cinematic Trends Global Box Office Genre Insights",
      imageUrl:
        "/assets/images/cinema.png",
      link: "https://github.com/Koti2199/CinematicTrends-Global-Box-Office-Genre-Insights",
      techStack: "Python, Pandas, NumPy, Matplotlib, Seaborn, Tableau, Jupyter Notebook, HTML, CSS, Bootstrap",
      description: "An end-to-end data visualization project analyzing over 45,000 global movies from 1960–2018. Leveraged Python and Tableau to uncover trends in budgets, revenues, genres, and geographic performance. Built an interactive web dashboard to help filmmakers and studios explore patterns in critical vs. commercial success, production strategies, and audience preferences.",
    },
    {
      name: "Sleep Health Lifestyle Visulaization Dashboard",
      imageUrl: "/assets/images/data_viz.png",
      link: "https://koti2199.github.io/website_for_data_visualization/",
      techStack: "Python, Pandas, NumPy, Matplotlib, Seaborn, D3.js",
      description: "Developed a comprehensive data visualization dashboard using Python, Matplotlib, and Seaborn to explore correlations between sleep patterns, lifestyle factors, and health metrics. Leveraged statistical plots and interactive visuals to uncover insights from the Sleep Health and Lifestyle dataset.",
    },
    {
      name: "Smog Sense Air Pollution Analysis Forecasting in India",
      imageUrl: "/assets/images/airpollution.png",
      link: "https://github.com/Koti2199/SmogSense-Air-Pollution-Analysis-Forecasting-in-India",
      techStack:
        "Python, Pandas, NumPy, Matplotlib, Seaborn, Scikit-learn, Statsmodels, Jupyter Notebook",
      description:
        "A comprehensive data analytics project examining over 400,000 air quality records from major Indian cities. Using Python-based EDA, hypothesis testing, and regression modeling, the project explores pollutant interactions (PM2.5, NO₂, SO₂, CO, O₃) and their impact on AQI. It uncovers significant statistical trends, evaluates normality, and identifies the strongest AQI predictors, laying the groundwork for environmental policy and advanced pollution forecasting.",
    },
    {
      name: "Traffic Flow Prediction System using LSTM",
      // imageUrl: "https://www.gradshack.com/static/media/logo.f7bc2da5.svg",
      imageUrl: "/assets/images/traffic.png",
      link: "https://github.com/Koti2199/Traffic-Flow-Prediction",
      techStack: "Python, TensorFlow, Keras, Pandas, NumPy, Matplotlib, Seaborn, Jupyter Notebook, Metro Interstate Traffic Dataset (UCI), Scikit-learn",
      description:
        "A time series forecasting project leveraging LSTM-based RNN models to predict hourly traffic volume 2 hours into the future using a 6-hour historical window. Based on the Metro Interstate dataset (2012–2018), the project integrates weather, temporal, and event features with feature engineering and deep learning to address urban congestion. Includes comparative analysis with CNNs and highlights the role of data preprocessing and periodic signal encoding for traffic flow prediction",
    },
  ];
  return (
    <>
      <h2 className="text-3xl mx-auto max-w-6xl font-bold mt-4 py-2 sm:text-2xl">
        Projects
      </h2>
      <div className="mx-auto max-w-6xl lg:max-w-6xl flex justify-center flex-wrap sm:flex-nowrap sm:flex-col">
        {projects.map((project, index) => {
          return <ProjectCard key={index} projectDetails={project} />;
        })}
      </div>
    </>
  );
}

export default ProjectsComponent;
