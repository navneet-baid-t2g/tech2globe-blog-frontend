# 🌐 Tech2Globe Blog Website

This is a private blog platform built for internal use at **Tech2Globe**, using:

- 💡 **Next.js** for the frontend
- 🚀 **Node.js + Express** for the API layer
- 📝 **WordPress (Headless CMS)** for content management

---

## 🧩 Features

- SEO-friendly blog layout
- Author profiles and categories
- Custom API integration with WordPress REST API
- Fast and scalable architecture
- Clean and modern UI

---

## 🛠️ Tech Stack

| Layer       | Technology         |
|-------------|--------------------|
| Frontend    | Next.js, Tailwind CSS |
| Backend API | Node.js, Express    |
| CMS         | WordPress (Headless via REST API) |

---

## 🔧 Setup Instructions

### 1. Clone the repository
```bash
git clone <private-repo-url>
```

### 2. Install frontend dependencies
```bash
cd frontend
npm install
```

### 3. Install backend dependencies
```bash
cd ../api
npm install
```

### 4. Configure environment variables
Create `.env.local` files in both `frontend/` and `api/` with required keys.

### 5. Start development
```bash
# Start API server
cd api
npm run dev

# Start frontend
cd ../frontend
npm run dev
```

---

## 📌 Notes

- WordPress should be self-hosted and REST API enabled.
- Ensure CORS is properly configured on the API layer.
- Only for internal Tech2Globe use.

