# Magic Box App

Welcome to the **Magic Box App** - a modern, feature-rich application built with **Ionic** and **Angular**. Styled beautifully using **Tailwind CSS**, the app is optimized for performance and responsiveness on both mobile and desktop devices.

---

## 🚀 Features
- **Ionic Framework**: Leverages the power of Ionic to deliver a seamless cross-platform experience.
- **Angular Integration**: A strong frontend framework to handle stand-alone components, routing, and data.
- **Tailwind CSS**: Custom, utility-first styling for rapid UI development.
- **Responsive Design**: Works flawlessly across devices, including mobile, tablets, and desktops.
- **Dynamic Content**: Supports interactive modals, inputs, dropdowns, and other dynamic components.

---

## 🛠️ Technologies Used

| Tech              | Description                           |
| ----------------- | --------------------------------      |
| **Ionic**         | Cross-platform mobile framework (V8)  |
| **Angular**       | Frontend framework (v18)              |
| **Tailwind CSS**  | Utility-first CSS framework  (3)      |
| **TypeScript**    | Typed JavaScript for Angular (latest) |
---

## 📦 Installation
Follow these steps to set up the project locally:

### Prerequisites
Make sure you have the following installed:
- **Node.js** (v18+)
- **Ionic CLI** (v8)
- **Angular CLI** (v18)

### Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/sabrymuhamad/magic-box.git
   cd magic-box
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Run the Application**
   ```bash
   ionic serve
   ```

4. **Open in Browser**
   The app will be available at `http://localhost:8100/`.

---

## 🎨 Tailwind CSS Configuration
The app uses **Tailwind CSS** for styling. Configuration details are as follows:

- Tailwind is configured in `tailwind.config.js`:
- prefix 'mag-'

- To add custom styles, use Tailwind's utility classes and make sure to use the prefix before any tailwind class:

   ```html
   <div class="mag-p-4 mag-text-white mag-rounded-lg">
       Welcome to Magic Box!
   </div>
   ```

- Tailwind builds are included individually in angular.json under path `assets/scss/tailwind.scss`:

   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

---

## 📁 Project Structure
Here's an overview of the folder structure:

```plaintext
magic-box-app/
├── src/
│   ├── app/                # Angular app modules/components/pages
│   ├── assets/             # Images, icons, etc.
│   ├── index.html          # Entry point
│   ├── main.ts             # Bootstrap file
│   ├── global.scss         # Global styles which includes another styles.scss import
│   └── tailwind.config.js  # Tailwind configuration
└── package.json            # Node dependencies
```

---

## ⚡ Full Documentation
- Please find the full documentation on the root folder under directory name `documentation`

---

## 📝 License
This project is licensed under the MIT License.

---

## ✨ Acknowledgements
- [Ionic Framework](https://ionicframework.com/)
- [Angular](https://angular.io/)
- [Tailwind CSS](https://tailwindcss.com/)

---

Made with ❤️ by [Sabry Muhamad].
