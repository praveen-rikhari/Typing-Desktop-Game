# Typing Speed Challenger (Electron + React Desktop App)

Typing Speed Challenger is a beautiful, minimal, and fully working cross-platform desktop application built with **React (Vite)** and **Electron.js**. It allows users to test their typing speed and get real-time WPM (Words Per Minute) feedback. It works completely offline and is available for **Linux**, with easy packaging options for **Windows** and **macOS**.

---

## 🚀 Features

- 🧠 Random typing paragraph generation
- ⌨️ Realtime typing speed tracking (WPM and time)
- 🚫 Paste detection to prevent cheating
- 🎯 Accurate sentence match logic
- 🌈 Beautiful custom CSS (no frameworks used)
- 🖥️ Packaged for Linux using AppImage (runs without installation)

---

## 🛠 Tech Stack Used

| Layer           | Technology Used           |
| --------------- | ------------------------- |
| Frontend        | React (Vite)              |
| Desktop Runtime | Electron.js               |
| Styling         | Pure CSS (custom-written) |
| Packaging Tool  | electron-builder          |
| Dev Tools       | concurrently, wait-on     |

---

## 📁 Folder Structure

```
keyboard-challenger-app/
├── client/            # React frontend (Vite)
│   └── dist/          # Production build of React
│
├── electron/
│   └── main.js        # Electron entry point
│
├── dist/              # Built desktop apps (AppImage)
│
├── package.json       # Root - Electron + Build setup
└── README.md
```

---

## 🧑‍💻 How to Set Up the Project Locally

### ✅ 1. Clone the repo

```bash
git clone https://github.com/praveen-rikhari/Typing-Desktop-Game.git
cd Typing-Desktop-Game
```

### ✅ 2. Install dependencies

```bash
npm install
```

> This will also automatically install dependencies inside `client/`

### ✅ 3. Start the app in development mode

```bash
npm run start
```

This will:

- Start the React dev server
- Wait for it to be ready
- Launch Electron window loading the React app

---

## 📦 How to Build the App for Linux (AppImage)

### ✅ 1. Build the React app

```bash
npm run build
```

This creates the `client/dist/` folder with production React files.

### ✅ 2. Build the full desktop app

```bash
npm run dist
```

This uses **electron-builder** to package everything into:

```
dist/Typing Speed Challenger-1.0.0.AppImage
```

---

## 🧑‍🏫 How to Share the App with a Linux User

You only need to send **one file**:

```
dist/Typing Speed Challenger-1.0.0.AppImage
```

### 🧾 Instructions for your friend:

1. Save the `.AppImage` file
2. Right-click → Properties → Permissions → ✅ Check "Allow executing file as program"
3. Double-click to run it!

### OR via Terminal:

```bash
chmod +x "Typing Speed Challenger-1.0.0.AppImage"
./Typing\ Speed\ Challenger-1.0.0.AppImage
```

That’s it! No install needed, no terminal experience required after making it executable.

---

## ⚙️ Scripts Reference

| Command         | What it Does                              |
| --------------- | ----------------------------------------- |
| `npm install`   | Installs root + client dependencies       |
| `npm run start` | Runs React + Electron in development mode |
| `npm run build` | Builds React app in `client/dist`         |
| `npm run dist`  | Packages app using electron-builder       |

---

## 🛠 Future Improvements (Ideas)

- Add accuracy and mistake count
- Add high score history
- Include dark/light mode toggle
- Use real APIs for dynamic paragraphs
- Add `.deb` installer for easier Ubuntu install

---

## 🧑‍🎓 Author

Made with 💻 by **Praveen Rikhari**

GitHub: [https://github.com/praveen-rikhari](https://github.com/praveen-rikhari)

---

## 📄 License

This project is open-source and available under the [ISC License](LICENSE).
