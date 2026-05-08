-- 📌Insert Customers (20 Realistic Customers)📌
INSERT INTO
  customers (customer_name, email, city, state, signup_date)
VALUES
  (
    'Amit Sharma',
    'amit.sharma@email.com',
    'Mumbai',
    'Maharashtra',
    '2023-01-10'
  ),
  (
    'Priya Verma',
    'priya.verma@email.com',
    'Delhi',
    'Delhi',
    '2023-02-15'
  ),
  (
    'Rahul Mehta',
    'rahul.mehta@email.com',
    'Bangalore',
    'Karnataka',
    '2023-03-12'
  ),
  (
    'Sneha Iyer',
    'sneha.iyer@email.com',
    'Chennai',
    'Tamil Nadu',
    '2023-04-01'
  ),
  (
    'Vikram Singh',
    'vikram.singh@email.com',
    'Jaipur',
    'Rajasthan',
    '2023-05-20'
  ),
  (
    'Anjali Gupta',
    'anjali.gupta@email.com',
    'Kolkata',
    'West Bengal',
    '2023-06-11'
  ),
  (
    'Rohit Nair',
    'rohit.nair@email.com',
    'Hyderabad',
    'Telangana',
    '2023-07-09'
  ),
  (
    'Karan Patel',
    'karan.patel@email.com',
    'Ahmedabad',
    'Gujarat',
    '2023-08-03'
  ),
  (
    'Neha Kapoor',
    'neha.kapoor@email.com',
    'Pune',
    'Maharashtra',
    '2023-09-14'
  ),
  (
    'Arjun Rao',
    'arjun.rao@email.com',
    'Bangalore',
    'Karnataka',
    '2023-10-02'
  ),
  (
    'Meera Das',
    'meera.das@email.com',
    'Kochi',
    'Kerala',
    '2023-11-18'
  ),
  (
    'Sahil Khan',
    'sahil.khan@email.com',
    'Lucknow',
    'Uttar Pradesh',
    '2023-12-01'
  ),
  (
    'Riya Malhotra',
    'riya.malhotra@email.com',
    'Delhi',
    'Delhi',
    '2024-01-10'
  ),
  (
    'Aditya Joshi',
    'aditya.joshi@email.com',
    'Indore',
    'Madhya Pradesh',
    '2024-02-14'
  ),
  (
    'Pooja Reddy',
    'pooja.reddy@email.com',
    'Hyderabad',
    'Telangana',
    '2024-03-09'
  ),
  (
    'Manish Yadav',
    'manish.yadav@email.com',
    'Patna',
    'Bihar',
    '2024-04-05'
  ),
  (
    'Divya Menon',
    'divya.menon@email.com',
    'Chennai',
    'Tamil Nadu',
    '2024-05-22'
  ),
  (
    'Nikhil Bansal',
    'nikhil.bansal@email.com',
    'Chandigarh',
    'Punjab',
    '2024-06-18'
  ),
  (
    'Simran Kaur',
    'simran.kaur@email.com',
    'Amritsar',
    'Punjab',
    '2024-07-07'
  ),
  (
    'Yash Agarwal',
    'yash.agarwal@email.com',
    'Noida',
    'Uttar Pradesh',
    '2024-08-01'
  );

-- 📌Insert Products (With Cost + Selling Price)📌
INSERT INTO
  products (product_name, category, cost_price, selling_price)
VALUES
  ('Laptop Pro 15', 'Electronics', 55000, 72000),
  ('Wireless Mouse', 'Electronics', 500, 1200),
  ('Office Chair', 'Furniture', 4000, 8500),
  ('Standing Desk', 'Furniture', 12000, 20000),
  ('Water Bottle', 'Accessories', 150, 400),
  ('Backpack', 'Accessories', 800, 1800),
  ('Smartphone X', 'Electronics', 25000, 35000),
  ('Bluetooth Speaker', 'Electronics', 1500, 3200),
  ('Notebook Pack', 'Stationery', 100, 300),
  ('Pen Set', 'Stationery', 50, 200),
  ('Monitor 24"', 'Electronics', 8000, 12500),
  ('Keyboard Mechanical', 'Electronics', 2000, 4500),
  ('Desk Lamp', 'Furniture', 700, 1600),
  ('USB-C Hub', 'Electronics', 900, 2500),
  ('Gaming Headset', 'Electronics', 1800, 4200);

-- 📌Insert Orders (Generate 100 Orders Automatically)📌
INSERT INTO orders (customer_id, order_date, region)
SELECT
    FLOOR(RANDOM() * 20 + 1)::INT,
    ('2024-01-01'::DATE + FLOOR(RANDOM() * 365)::INT),
    (ARRAY['North','South','East','West'])[FLOOR(RANDOM()*4 + 1)]
FROM generate_series(1,100);

-- 📌Insert Order Details (This Unlocks Everything)📌
INSERT INTO order_details (order_id, product_id, quantity)
SELECT
    o.order_id,
    FLOOR(RANDOM() * 15 + 1)::INT,   -- random product (1–15)
    FLOOR(RANDOM() * 5 + 1)::INT     -- quantity (1–5)
FROM orders o,
generate_series(1,3);
