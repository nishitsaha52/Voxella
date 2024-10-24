# <div align=center>🎙️✨ Deepgram Audio Transcriber ✨🎙️</div>

An intuitive **React** application that brings the power of **Deepgram's** real-time audio transcription to your fingertips. Featuring live transcription, customizable UI themes, and responsive design, the app provides an engaging user experience, perfect for seamless speech-to-text conversion.

---

## 🌟 Features
- 🎤 **Microphone Support**: Record live audio from the microphone and transcribe it in real-time with high accuracy.
- 🌙 **Theme Toggler**: Switch between dark and light modes for an optimal viewing experience based on your preference.
- 🚀 **Pre-loader**: Visually appealing pre-loader that ensures smooth transitions while the app is initializing.
- 🧑‍💻 **Custom Scrollbar**: Sleek and modern scrollbar design for a refined user interface.
- 🧪 **Robust Unit Testing**: Comprehensive unit tests using **Jest** and **React Testing Library** to ensure robust functionality.

---

## 🚀 Demo

Experience the live demo here: **[Live Demo](https://voxella.vercel.app/)**

---

## 🛠️ Installation and Setup

To get the project running on your local machine, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/nishitsaha52/Voxella.git
   cd deepgram-transcriber
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   - Create a `.env` file in the root directory and add your **Deepgram API key**:
     ```bash
     REACT_APP_DEEPGRAM_API_KEY=your-deepgram-api-key
     ```

4. **Start the development server**:
   ```bash
   npm start
   ```

The app will run locally on `http://localhost:3000`.

---

## 📦 Folder Structure

```
deepgram-transcriber/
│
├── public/                     # Static files
├── src/
│   ├── components/             # React components (MicrophoneButton, PastTranscriptions, DisplayTranscription, ThemeToggler, PreLoader)
│   ├── hooks/                  # Custom hooks (useRecorder)
│   ├── services/               # API service (deepgramServices)
│   ├── tests/                  # Unit tests
│   ├── styles/                 # CSS stylesheets including custom scrollbar and theming
│   ├── App.css
│   ├── App.js                  # Main App component
│   └── index.js                # Entry point
├── .env                        # Environment variables
├── README.md                   # Project documentation
├── package.json                # Project dependencies and scripts
└── ...
```

---

## 🎨 Theming & Design

The application supports **Dark🌙** and **Light themes☀️**. The **Theme Toggle Button** lets users switch between modes, providing a comfortable and customizable user experience. User preferences are saved in `localStorage`, ensuring that their selected theme persists across sessions.

### 🌟 Custom Scrollbar

The application features a **Custom Scrollbar** that enhances the visual experience, giving it a sleek and modern look, consistent with the overall design aesthetic.

---

## ✨ Usage

1. **Recording and Transcription**:
   - Click the microphone button to start/stop recording.
   - Live transcription will appear as the audio is processed.
   - Save transcription files locally to access later.

2. **Pre-loader**:
   - While the app is initializing, a beautiful pre-loader will appear to ensure seamless transitions.

3. **Theme Toggling**:
   - Use the theme toggle button (located in the top-right) to switch between dark and light modes.

4. **Custom Scrollbar**:
   - Experience smooth scrolling with a uniquely styled scrollbar that fits the app's modern design.

---

## 🧪 Running Tests

To ensure the application runs smoothly, we use **Jest** and **React Testing Library**. Run the tests using:

```bash
npm test
```

### 🧪 Test Cases Include:
- 📢 **MicrophoneButton**: Properly starts and stops audio recording.
- 🌗 **ThemeToggler**: Correctly switches between dark and light themes.
- 📜 **PastTranscription**: Displays previously saved transcriptions accurately.
- ✍️ **TranscriptionDisplay**: Shows real-time transcriptions correctly as audio is processed.
- ⏳ **PreLoader**: Appears during initialization and disappears once the app is ready.
  
---

## 👨‍💻 **Built With**

- **⚛️ React**: A JavaScript library for building user interfaces.
- **🎤 Deepgram API**: AI-powered speech recognition API for real-time transcription.
- **🧪 Jest**: A testing framework for JavaScript.
- **🖥️ React Testing Library**: A testing library for React components.
- **🎨 CSS**: Custom styling for themes and components.

---

## 📚 **Documentation & Resources**

- 📄 **[Deepgram API Documentation](https://developers.deepgram.com/)**: Explore the full potential of the Deepgram speech-to-text technology.
- 📘 **React**: Learn more about building UIs using [React](https://reactjs.org/).
- 🔍 **Jest & React Testing Library**: Check out the [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) documentation.
  
---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**.
2. **Create a new branch** (`git checkout -b feature-branch-name`).
3. **Make your changes** and commit (`git commit -m 'Add a new feature'`).
4. **Push to the branch** (`git push origin feature-branch-name`).
5. **Create a pull request**.

---

## 💬 **Contact & Support**

**Have questions? Feel free to reach out!**

<div align="center">
    <a href="mailto:nishitsaha62@gmail.com">
        <img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Gmail"/>
    </a>
    <a href="https://github.com/nishitsaha52">
        <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub"/>
    </a>
    <a href="https://www.linkedin.com/in/nishit-saha-8208151b9">
        <img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn"/>
    </a>
    <a href="https://www.instagram.com/nishitsaha/?hl=en">
        <img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white" alt="Instagram"/>
    </a>
    <a href="https://www.facebook.com/profile.php?id=100007266315713">
        <img src="https://img.shields.io/badge/Facebook-1877F2?style=for-the-badge&logo=facebook&logoColor=white" alt="Facebook"/>
    </a>
</div>


---

**Enjoy using Deepgram Audio Transcriber? Give this repo a ⭐ to show your support!**

--- 
