# **CommunityCloset**
A modern, full-stack, React + Supabase web application that allows users to **donate clothing**, **shop for donated items**, and **manage a cart + checkout flow** — all built as an online nonprofit shopping experience.

CommunityCloset was designed to simulate a production-ready donation and shopping platform with user-generated content, image uploads, database storage, and dynamic UI components.

---

## 🚀 **Features**

### **Donation System**
- Multi-step donation form  
- Upload up to **5 images**  
- Images stored in **Supabase Storage**  
- Item + donor records stored in **Supabase Postgres**  
- “Processing…” alert during upload  
- Redirect to **Donation Successful** page with:
  - Donation ID  
  - Item name  
  - Preview image  

### **Item Browsing & Filters**
- Fully responsive Shop page  
- Items pulled live from `items` table  
- Color, size, and condition filters  
- Search bar  
- Full item detail page with:
  - Dynamic images  
  - Descriptions  
  - Quantity select  
  - Add-to-cart success alert  

### **Shopping Cart System**
- Global cart stored with React Context  
- Add / remove items  
- Quantity support  
- Clear Cart button  
- Subtotal + item count  
- “Go to checkout” disabled when cart empty  

### **Checkout Flow**
- Pickup information form  
- Confirm/edit state toggle  
- Review cart items  
- Place order workflow  
- Successful Checkout page clears cart  

### **UI / UX**
- Mobile-first  
- Slideout menu with overlay  
- Bootstrap forms/buttons/carousel  
- Clean semantic layout  

---

## 🧰 **Tech Stack**

### **Frontend**
- React  
- Vite  
- React Router  
- Bootstrap  

### **Backend / Cloud**
- Supabase (Postgres + Storage + RLS)

### **Other Tools**
- GitHub Pages  
- gh-pages deployment  
- React Context API  

---

## 📦 **Installation & Setup**

Clone the repository:

```bash
git clone https://github.com/mfandohan05/CommunityCloset.git
cd CommunityCloset

Install dependencies:

npm install

Create a .env file:

VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key

Run locally:

npm run dev


⸻

🌐 Deployment (GitHub Pages)

This project is already configured with:
	•	vite.config.js → base: '/CommunityCloset/'
	•	gh-pages for publishing

Build:

npm run build

Deploy:

npm run deploy

Your site will be available at:

https://mfandohan05.github.io/CommunityCloset/


⸻

📁 Project Structure

src/
  components/
    donation-components/
    shop-components/
    layout/
    cart/
  context/
    CartContext.jsx
  App.jsx
  main.jsx
  supabaseClient.js
public/
  img/


⸻

🗄 Database Schema (Supabase)

items table

Column	Type	Description
item_id	int	Primary key
item_name	text	Name of item
item_condition	text	Condition category
item_quantity	int	Available quantity
item_size	text	Clothing size
item_color	text	Color
item_brand	text	Brand name
donor_name	text	Donor full name
donor_email	text	Donor email
image_url_1–5	text	Image URLs stored in storage
created_at	timestamp	Upload time


⸻

🎯 Future Improvements
	•	User authentication
	•	Admin dashboard
	•	Email confirmations (Resend, EmailJS)
	•	Multi-image gallery on item detail
	•	More advanced filters

⸻

📃 License

MIT License.

⸻

🙌 Acknowledgments

This project demonstrates a full-stack, cloud-integrated, nonprofit-themed web application using modern React, Supabase, and GitHub Pages deployment workflows.

---
