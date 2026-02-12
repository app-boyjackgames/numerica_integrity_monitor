# 🧪 Numerical Integrity Monitor (Math Explorer)

A cyberpunk-themed web application that analyzes mathematical properties of numbers. Built with Flask and a "hacker" aesthetic.

## 🚀 Features

- **Real-time Analysis**: Enter a positive integer to get its properties instantly.
- **Mathematical Classifications**:
  - **Perfect/Abundant/Deficient**: Based on the sum of proper divisors.
  - **Prime/Composite/Unit**: Standard number theory classifications.
- **Detailed Stats**: View the list of divisors and their sum.
- **Scan History**: Keeps track of recent analysis during the session.
- **Cyber-Security Theme**: Neon green terminal UI with glitch effects.

## 🛠️ Tech Stack

- **Backend**: Python (Flask)
- **Frontend**: HTML5, CSS3 (Cyber-theme), JavaScript (Vanilla)
- **Deployment**: Replit / GitHub Actions (CI/CD)

## 📦 Installation & Run

1. **Clone the repository**:
   ```bash
   git clone https://github.com/app-boyjackgames/vigilant_complete_numbers.git
   ```
2. **Install dependencies**:
   ```bash
   pip install flask
   ```
3. **Run the application**:
   ```bash
   python main.py
   ```
   The app will be available at `http://0.0.0.0:5000`.

## 🤖 CI/CD (GitHub Actions)

This project includes a `.github/workflows/release.yml` file that automatically:
- Builds executables for **Windows**, **macOS**, and **Linux** using PyInstaller.
- Creates a GitHub Release when a new tag (e.g., `v1.0.0`) is pushed.

## 🎨 Branding

"Monitoring Numerical Integrity..." 
System Status: **VIGILANT**

---
*Developed for mathematical exploration and cyberpunk enthusiasts.*
