import { BaseOrder } from "./contexts/OrderStateContext";

export type disheshType = {
  id: number;
  name: string;
  thumbnail: string;
  ordered: number;
  category: string;
  price: number;
  status: string;
};

const food: BaseOrder[] = [
  {
    name: "Martabak",
    qty: 1,
    price: 10000,
  },
  {
    name: "Nasi Goreng",
    qty: 1,
    price: 10000,
  },
  {
    name: "Nasi Uduk",
    qty: 1,
    price: 10000,
  },
];

const dishes: disheshType[] = [
  {
    id: 1,
    name: "Martabak",
    thumbnail: "https://i.ibb.co/7bQQYkX/martabak.jpg",
    ordered: 0,
    category: "appetizer",
    price: 10000,
    status: "available",
  },
  {
    id: 2,
    name: "Nasi Goreng",
    thumbnail: "https://i.ibb.co/7bQQYkX/martabak.jpg",
    ordered: 0,
    category: "main-course",
    price: 10000,
    status: "available",
  },
  {
    id: 3,
    name: "Nasi Uduk",
    thumbnail: "https://i.ibb.co/7bQQYkX/martabak.jpg",
    ordered: 0,
    category: "main-course",
    price: 10000,
    status: "available",
  },
  {
    id: 4,
    name: "Es Teh",
    thumbnail: "https://i.ibb.co/7bQQYkX/martabak.jpg",
    ordered: 0,
    category: "drink",
    price: 5000,
    status: "available",
  },
  {
    id: 5,
    name: "Es Jeruk",
    thumbnail: "https://i.ibb.co/7bQQYkX/martabak.jpg",
    ordered: 0,
    category: "drink",
    price: 5000,
    status: "available",
  },
  {
    id: 6,
    name: "Es Campur",
    thumbnail: "https://i.ibb.co/7bQQYkX/martabak.jpg",
    ordered: 0,
    category: "drink",
    price: 5000,
    status: "available",
  },
  {
    id: 7,
    name: "Bakwan",
    thumbnail:
      "https://cdn.idntimes.com/content-images/community/2022/04/resep-bakwan-sayur-bakwan-bala-bala-ote-ote-bakwan-sayur-resep-bakwan-gorengan-favorit-gorengan-enak-menu-buka-puasa-9cde86371d7fc78c91ae80a6ffab250e-33735aeeb1e3581e4b3f63867beff706.jpg",
    ordered: 1,
    category: "appetizer",
    price: 10000,
    status: "available",
  },
  {
    id: 8,
    name: "Bakwan Jagung",
    thumbnail:
      "https://img-global.cpcdn.com/recipes/73aa11aa09973c59/680x482cq70/perkedel-jagung-tuna-corn-tuna-fritters-foto-resep-utama.webp",
    ordered: 1,
    category: "appetizer",
    price: 10000,
    status: "available",
  },
  {
    id: 9,
    name: "Kolak Pisang",
    thumbnail:
      "https://cdn.tasteatlas.com//images/dishes/68db49db650f488ab9a37eb4403b1447.jpg?w=905&h=510",
    ordered: 1,
    category: "dessert",
    price: 5000,
    status: "available",
  },
  {
    id: 10,
    name: "Getuk",
    thumbnail:
      "https://cdn.tasteatlas.com//images/dishes/2d1a9b548ac6431c91b6d78e70b2bef1.jpg?w=905&h=510",
    ordered: 1,
    category: "dessert",
    price: 5000,
    status: "available",
  },
  {
    id: 11,
    name: "Kue Putu",
    thumbnail:
      "https://cdn.tasteatlas.com//images/dishes/c0f06a746a794632838700a17666dc0b.jpg?w=905&h=510",
    ordered: 1,
    category: "dessert",
    price: 5000,
    status: "available",
  },
  {
    id: 12,
    name: "Sup Buntut",
    thumbnail:
      "https://o-cdn-cas.sirclocdn.com/parenting/images/Resep_Sup_Buntut.width-800.format-webp.webp",
    ordered: 1,
    category: "soup-and-salad",
    price: 10000,
    status: "available",
  },
  {
    id: 13,
    name: "Sup Iga",
    thumbnail:
      "https://o-cdn-cas.sirclocdn.com/parenting/images/Resep_Sup_Iga1.width-800.format-webp.webp",
    ordered: 1,
    category: "soup-and-salad",
    price: 10000,
    status: "available",
  },
  {
    id: 14,
    name: "Gado-Gado",
    thumbnail:
      "https://sgp1.digitaloceanspaces.com/tz-mag-id/wp-content/uploads/2019/06/080806061818/gado-gado-1-823x1024.jpg",
    ordered: 1,
    category: "soup-and-salad",
    price: 10000,
    status: "available",
  },
  {
    id: 15,
    name: "Roti Buaya",
    thumbnail:
      "https://cdn.idntimes.com/content-images/community/2021/12/fromandroid-282ce284974aeae24f7d4dc535faac52.jpg",
    ordered: 1,
    category: "bread-and-jam",
    price: 5000,
    status: "available",
  },
  {
    id: 16,
    name: "Roti Gambang",
    thumbnail:
      "https://cdn.idntimes.com/content-images/community/2021/12/fromandroid-48f860ee8aa1c9a89b5e64cca6484b3e.jpg",
    ordered: 1,
    category: "bread-and-jam",
    price: 5000,
    status: "available",
  },
  {
    id: 17,
    name: "Selai Coklat",
    thumbnail:
      "https://images.tokopedia.net/blog-tokopedia-com/uploads/2019/07/1.-Selai-Chocomaltine-300x300.jpg",
    ordered: 1,
    category: "bread-and-jam",
    price: 5000,
    status: "available",
  },
  {
    id: 18,
    name: "Selai Kacang",
    thumbnail:
      "https://images.tokopedia.net/blog-tokopedia-com/uploads/2019/07/5.-Selai-Kacang-Skippy-300x300.jpg",
    ordered: 1,
    category: "bread-and-jam",
    price: 5000,
    status: "available",
  },
  {
    id: 19,
    name: "Kerupuk Udang",
    thumbnail:
      "https://www.ngopibareng.id/images/uploads/2022/2022-02-23/22-aneka-kerupuk-cocok-jadi-teman-makan--03.webp",
    ordered: 1,
    category: "others",
    price: 5000,
    status: "available",
  },
  {
    id: 20,
    name: "Kerupuk Mawar",
    thumbnail:
      "https://www.ngopibareng.id/images/uploads/2022/2022-02-23/22-aneka-kerupuk-cocok-jadi-teman-makan--01.webp",
    ordered: 1,
    category: "others",
    price: 5000,
    status: "available",
  },
  {
    id: 21,
    name: "Kerupuk Bawang",
    thumbnail:
      "https://www.ngopibareng.id/images/uploads/2022/2022-02-23/22-aneka-kerupuk-cocok-jadi-teman-makan--02.webp",
    ordered: 5,
    category: "others",
    price: 5000,
    status: "available",
  },
];

export { dishes };
