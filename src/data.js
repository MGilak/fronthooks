export const newest = [
  {
    id: 1,
    img: "./images/courses/responsive-web.svg",
    students: "۲۳۹۱",
    likes: 1,
    name: "دوره طراحی ریسپانسیو",
    time: "۱۳:۳۴:۰۰",
    free: false,
    price: 498000,
    isBuy: true,
    discount: 20,
  },
  {
    id: 2,
    img: "./images/courses/reactjs.svg",
    students: "۱۷۴۲",
    likes: "۱۵۶",
    name: "دوره متخصص ریکت و ریداکس",
    time: "۴۸:۲۴:۰۰",
    free: false,
    price: 2989000,
    isBuy: true,
    discount: 0,
  },
  {
    id: 3,
    img: "./images/courses/nextjs.svg",
    students: "۶۶۵",
    likes: "۱۱۳",
    name: "دوره متخصص Next.js",
    time: "۴۴:۱۱:۰۰",
    free: false,
    price: 2589000,
    isBuy: false,
    discount: 0,
  },
  {
    id: 4,
    img: "./images/courses/vscode.svg",
    students: "۶۸۸۳",
    likes: "۱۲۸",
    name: "دوره vs code",
    time: "۰۱:۱۹:۰۰",
    free: true,
    price: 98000,
    isBuy: false,
    discount: 100,
  },
  {
    id: 5,
    img: "./images/courses/tailwind.svg",
    students: "۱۰۵۵",
    likes: "۱۱۴",
    name: "دوره جامع و پیشرفته تیلویند",
    time: "۱۲:۱۳:۰۰",
    free: false,
    price: 598000,
    isBuy: true,
    discount: 20,
  },
  {
    id: 6,
    img: "./images/courses/git.svg",
    students: "۱۶۱۷",
    likes: "۸۶",
    name: "دوره گیت و گیت‌هاب",
    time: "۰۲:۱۱:۰۰",
    free: false,
    price: 359000,
    isBuy: true,
    discount: 0,
  },
  {
    id: 7,
    img: "./images/courses/flex-grid.svg",
    students: "۷۱۳۵",
    likes: "۱۲۵",
    name: "دوره پروژه‌محور فلکس گرید",
    time: "۰۲:۰۷:۰۰",
    free: true,
    price: 190000,
    isBuy: false,
    discount: 100,
  },
  {
    id: 8,
    img: "./images/courses/freelancering.svg",
    students: "۳۰۵۶",
    likes: "۱۰۵",
    name: "دوره در مسیر فریلنسری",
    time: "۰۳:۳۴:۰۰",
    free: false,
    price: 439000,
    isBuy: false,
    discount: 0,
  },
  {
    id: 9,
    img: "./images/courses/javascript.svg",
    students: "۱۹۱۲",
    likes: "۱۶۴",
    name: "دوره جامع و پیشرفته جاوااسکریپت",
    time: "۳۴:۰۷:۰۰",
    free: false,
    price: 1829000,
    isBuy: false,
    discount: 0,
  },
];

// convert numbers
export function toFarsiNumber(n) {
  const farsiDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

  return n
    .toString()
    .split("")
    .map((x) => farsiDigits[x])
    .join("");
}

export function replace(n) {
  const number = parseInt(
    n.replace(/[۰-۹]/g, (d) => String.fromCharCode(d.charCodeAt(0) - 1728))
  );
  const separatedNumbers = number.toLocaleString("fa-IR");
  return separatedNumbers;
}

// comments
export const comments = [
  {
    id: 1,
    title: "به‌شدت مفید و کاربردی",
    content:
      "توصیه میکنم حتما دوره رو تهیه کنید عالییه.توی 2 ساعت کامل به گیت مسلط میشید.خسته نباشید و دست مریزاد به آقا صاحب عزیز",
    note1: "تسلط استاد",
    note2: "مختصر و مفید",
    note3: "انتقال نفاهیم در زمان کوتاه",
    img: "",
    course: "دانشجوی دوره گیت و گیت‌هاب",
    date: "(۱۴۰۲/۴/۷)",
    name: "Alireza",
  },
  {
    id: 2,
    title: "دوره در مسیر فریلنسری",
    content:
      "صداقت و سادگی از ویژگی های خوبیه که استاد محمدی دارن که این موضوع کمک خیلی بزرگی می کنه در مسیری که می خواییم قدم بزاریم روشن بینی خوبی رو داشته باشیم ",
    note1: "",
    note2: "",
    note3: "",
    img: "./images/comments/1.jpg",
    course: "دانشجوی دوره در مسیر فریلنسری",
    date: "(۱۴۰۲/۴/۲)",
    name: "mohammad",
  },
  {
    id: 3,
    title: "درجه یک",
    content: "بسیار عالی. ممنون ازت صاحب‌جان. خدا قوت.",
    note1: "",
    note2: "",
    note3: "",
    img: "./images/comments/2.jpg",
    course: "دانشجوری دوره vs code",
    date: "(۱۴۰۲/۴/۲)",
    name: "پوریا نیشابوری",
  },
  {
    id: 4,
    title: "بهترین دوره",
    content:
      "سلام استاد گرامی. کاش یک آپدیت خفن به دوره ری‌اکت اضافه می‌کردید که شامل یک پروژ] کاربردی باشه. با تشکر.",
    note1: "فن بیان خوب",
    note2: "جامعیت اطلاعات",
    note3: "",
    img: "./images/comments/3.jpg",
    course: "دانشجوی دوره متخصص ری‌اکت و ریداکس",
    date: "(۱۴۰۲/۴/۲)",
    name: "",
  },
  {
    id: 5,
    title: "تدریس عالی و پروژه‌محور",
    content:
      "دوره بسیار خوبی بود واقعاً و تدریس آقای محمدی همراه ارائه تجربه و پروژه‌محور هست. توصیه میکنم قبل از دیدن این دوره حتماً مفاهیم HTML و CSS مخصوصاً flex و grid رو به خوبی یاد بگیرید  و تمرین کنید چون این تا این مفاهیم رو ندونید این دوره رو متوجه نمیشید. همچنین بهتره یه آشنایی با js داشته باشید.",
    note1: "پروژه‌محور",
    note2: "مختصر و مفید",
    note3: "ارائه تجربه و تریک‌ها",
    img: "./images/comments/4.jpg",
    course: "دانشجوی دوره جامع و پیشرفته تیلویند",
    date: "(۱۴۰۲/۴/۲)",
    name: "احمد اسماعیلی",
  },
  {
    id: 6,
    title: "شروع فصل جدیدی در زندگی",
    content:
      "برای کسی که بخواد کدنویسی رو یاد بگیره بهترین نقطه شروع این دوره هستش، من از حرفه و شغل خودم راضی نبودم و از زمانی که با ایشون آشنا شدم با جرات میتونم بگم که مسیر جدیدی با کمک ایشون تو زندگیم شکل گرفته است و این تغییری که درون من بوجود اومده رو سخت میشه توصیف کرد اما شخصا خیلی خوشحالم که با صاحب جان آشنا شدم. پس وقت رو از دست ندید و حتما برای شروع از این دوره استارت بزنید.",
    note1: "",
    note2: "",
    note3: "",
    img: "./images/comments/5.png",
    course: "دانشجوی دوره طراحی وب ریسپانسیو",
    date: "(۱۴۰۲/۴/۲)",
    name: "Shahram Shakiba",
  },
];

export const comments_title = [
  "نظرات دانشجویان",
  "اینا فقط بخش کوچکی از تجربه دانشجویان فرانت هوکس است",
];

// Employment of students
export const employment_title = [
  "استخدامی دانشجویان",
  "بخش کوچکی از دانشجویان استخدام‌شده فرانت هوکس",
];

export const employment = [
  {
    id: 1,
    image: "./images/employment/1.webp",
    video: "./videos/",
    title: "رضا فروزنده - ساکن آلمان",
    name: "رضا فروزنده",
    course: "دانشجوی همه دوره‌ها",
    img: "",
    note1: "آپدیت‌های رایگان",
    note2: "پشتیبانی و پیگیربودن دانشجویان",
    note3: "سرفصل‌های جامع و کاربردی",
  },
  {
    id: 2,
    image: "./images/employment/2.webp",
    video: "./videos/",
    title: "الهام بناگذار - ساکن فرانسه",
    name: "الهام بناگذار",
    course: "دانشجوی همه دوره‌ها",
    img: "",
    note1: "وجود مربی",
    note2: "نقشه راه در طی مسیر",
    note3: "همراهی دانشجو تا استخدامی",
  },
  {
    id: 3,
    image: "./images/employment/3.webp",
    video: "./videos/",
    title: "محدثه کرامت‌فر - فرانت‌اند استارتاپ برنده",
    name: "محدثه کرامت‌فر",
    course: "دانشجوی همه دوره‌ها",
    img: "",
    note1: "تمرین و پروژه‌های دوره",
    note2: "تسلط و قدرت بیان مدرس",
    note3: "پیوستگی بین جلسات",
  },
  {
    id: 4,
    image: "./images/employment/4.webp",
    video: "./videos/",
    title: "محمد آشتیانی - 789نت‌اند آکادمی آمانج",
    name: "محمد آشتیانی",
    course: "دانشجوی دوره ری‌اکت",
    img: "",
    note1: "پشتیبانی مادام‌العمر",
    note2: "تمرین‌های داخل دوره",
    note3: "",
  },
  {
    id: 5,
    image: "./images/employment/5.webp",
    video: "./videos/",
    title: "فرانت‌ان استارتاپ ایرانی",
    name: "میلاد راستگو",
    course: "دانشجوی دوره ری‌اکت و نکست",
    img: "",
    note1: "انتقال درک عمیق ری‌اکت",
    note2: "پشتیبانی دانشجویان",
    note3: "سرفصل‌های کاربردی",
  },
];

// Challenges
export const Challenges_title = [
  "چالش دوره‌ها",
  "در فرانت هوکس برای دانشجویان سیستم ایجاد و بررسی چالش ها رو راه اندازی کردیم. بر اساس UI/UX واقعی به دانشجو پروژه داده میشه و بهشون امتیاز میدیم. دانشجویان برتر برای انجام پروژه ها و معرفی به بازار کار الویت دارند.",
];

export const Challenges = [
  { id: 1, title: "پیاده‌سازی پروژه فروشگاهی", students: 231 },
  { id: 2, title: "پیاده‌سازی پروژه فروشگاهی", students: 231 },
  { id: 3, title: "پیاده‌سازی پروژه فروشگاهی", students: 231 },
  { id: 4, title: "پیاده‌سازی پروژه فروشگاهی", students: 231 },
  { id: 5, title: "پیاده‌سازی پروژه فروشگاهی", students: 231 },
];

// History
export const history_title = [
  "سابقه فرانت هوکس",
  "آمارها باعث افتخار ما هستند.",
];

export const history = [
  { id: 1, num: "۷+", info: "سال سابقه فعالیت حرفه‌ ای" },
  { id: 2, num: "۷,۵۰۰+", info: "دانشجوی خصوصی و آنلاین" },
  { id: 3, num: "٪ ۹۷+", info: "رضایت از آموزش" },
];

// Road map
export const road_map = [
  "HTML CSS",
  "جاوااسکریپت",
  "گیت",
  "ری اکت",
  "تیلویند",
  "نکست",
];
