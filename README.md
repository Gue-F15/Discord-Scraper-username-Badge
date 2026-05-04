# Scrapper.js

## 📌 Introduction

**Scrapper.js** is a selfbot-based tool that scans users in Discord voice channels and analyzes their data, such as usernames, badges, and channel members. It then sends the collected information to a specified **Webhook**.

🔹 **Developer:** [@Gue1337](https://github.com/gue1337)\
🔹 **Repository:** [GitHub Repo](https://github.com/gue1337)\
🔹 **Language:** JavaScript (Node.js)

## ⚙️ Features

✅ **Scans users when they join a voice channel**\
✅ **Analyzes user data, including badges and usernames**\
✅ **Detects rare badges like Early Supporter and HypeSquad Events**\
✅ **Identifies users with two-letter and three-letter usernames**\
✅ **Sends results to a Discord Webhook**\
✅ **Displays results in the console**\
✅ **Runs via Discord Token without requiring a bot**\
✅ **Simple and easy to use**
![1](image.png)
![2]()
## 🔧 Requirements

Make sure you have the following before running the tool:

- Node.js **(version 16 or later)** → [Download Node.js](https://nodejs.org/)
- npm or yarn for package management
- A Discord account with **Selfbot** access (**Your Discord Token is required**)

## 🚀 Usage Instructions

### 1️⃣ **Download the Project**

```bash
git clone https://github.com/gue1337/discord-bot-scraper.git
cd discord-bot-scraper
```

### 2️⃣ **Install Dependencies**

```bash
npm install
```

### 3️⃣ **Set Up Environment Variables**

Create a `.env` file in the project folder and add the following:

```
DISCORD_TOKEN=your_discord_token
WEBHOOK_URL=your_webhook_url
```

✅ **Replace **``** with your Webhook URL (without quotation marks).**

### 4️⃣ **Run the Tool**

```bash
node scrapper.js
```

🔹 The tool will automatically start scanning users in voice channels. If it detects rare badges (Early Supporter, HypeSquad Events) or short usernames (2-3 characters), it will send the data to the configured **Webhook**.

## 📜 Important Notes

🔹 This tool uses **Selfbot**, which may violate Discord's Terms of Service. Use at your own risk.\
🔹 Do not use this tool for illegal or unethical activities.\
🔹 The source code is open and can be modified as needed.

## 👤 Developer

🔹 **Developer:** Gue1337\
🔹 **GitHub:** [@Gue1337](https://github.com/gue1337)\
🔹 **Project Repo:** [Discord Bot Scraper](https://github.com/gue1337/Discord-Scraper-username-Badge)\
🔹 **Discord:** fzrawy

## 📝 License

This project is open-source under the **MIT License**, allowing free use and modification.

---

⭐ **If you find this tool useful, consider starring the repository on GitHub!**


