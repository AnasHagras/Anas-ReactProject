import "./components/courses.css";
import Section from "./components/Section";

function App() {
  const desc =
    "Take one of Udemy’s range of Python courses and learn how to code using this incredibly useful language. Its simple syntax and readability makes Python perfect for Flask, Django, data science, and machine learning. You’ll learn how to build everything from games to sites to apps. Choose from a range of 'courses' that will appeal to...";
  const courses = [
    {
      id: 1,
      link: "https://www.udemy.com/course/pythonforbeginners/",
      title: "Learn Python: The Complete Python Programming Course",
      author: "Avinash Jain,The Codex",
      image: "https://img-c.udemycdn.com/course/240x135/394676_ce3d_5.jpg",
      price: "679.99",
      rating: 4.4,
      people: "2,948",
      bestSeller: false,
    },
    {
      id: 2,
      link: "https://www.udemy.com/course/learning-python-for-data-analysis-and-visualization/",
      title: "Learning Python for Data Analysis and Visualization",
      author: "Jose Portilla",
      image: "https://img-c.udemycdn.com/course/240x135/396876_cc92_7.jpg",
      price: "1,599.99",
      rating: 4.4,
      people: "17,999",
      bestSeller: true,
    },
    {
      id: 3,
      link: "https://www.udemy.com/course/python-for-beginners-learn-programming-from-scratch/",
      title: "Python for Beginners - Learn Programming from scratch",
      author: "Edwin Diaz, Coding FAcutly Solutaions",
      image: "https://img-c.udemycdn.com/course/240x135/405878_e5a0_3.jpg",
      price: "679.99",
      rating: 4.4,
      people: "1,781",
      bestSeller: false,
    },
    {
      id: 4,
      link: "https://www.udemy.com/course/learn-python/",
      title: "Learn Python: Python for Beginners",
      author: "Abrar Hussain",
      image: "https://img-c.udemycdn.com/course/240x135/426570_1b91_3.jpg",
      price: "319.99",
      rating: 4.3,
      people: "2,773",
      bestSeller: false,
    },
    {
      id: 5,
      link: "https://www.udemy.com/course/python-beyond-the-basics-object-oriented-programming/",
      title: "Python Beyond the Basics - Object-Oriented Programming",
      author: "Infinite Skills",
      image: "https://img-c.udemycdn.com/course/480x270/449532_2aa9_7.jpg",
      price: "519.99",
      rating: 4.4,
      people: "2,930",
      bestSeller: true,
    },
    {
      id: 6,
      link: "https://www.udemy.com/course/selenium-webdriver-and-python/",
      title: "Python From Scratch & Selenium WebDriver QA Automation 2022",
      author: "Admas Kinfu",
      image: "https://img-c.udemycdn.com/course/480x270/482754_7146_6.jpg",
      price: "1,299.99",
      rating: 4.7,
      people: "1,813",
      bestSeller: false,
    },
    {
      id: 7,
      link: "https://www.udemy.com/course/teach-your-kids-to-code/",
      title: "Teach Your Kids to Code: Learn to Program Python at Any Age!",
      author: "Bryson Payne",
      image: "https://img-c.udemycdn.com/course/480x270/519554_da68_6.jpg",
      price: "319.99",
      rating: 4.5,
      people: "8,809",
      bestSeller: false,
    },
    {
      id: 8,
      link: "https://www.udemy.com/course/python-for-data-structures-algorithms-and-interviews/",
      title: "Python for Data Structures, Algorithms, and Interviews!",
      author: "Jose Portilla",
      image: "https://img-c.udemycdn.com/course/480x270/535622_3bc0.jpg",
      price: "1,299.99",
      rating: 4.5,
      people: "10.701",
      bestSeller: false,
    },
    {
      id: 9,
      link: "https://www.udemy.com/course/automate/",
      title: "Automate the Boring Stuff with Python Programming",
      author: "Al Sweigart",
      image: "https://img-c.udemycdn.com/course/480x270/543600_64d1_4.jpg",
      price: "519.99",
      rating: 4.7,
      people: "101,703",
      bestSeller: false,
    },
    {
      id: 10,
      link: "https://www.udemy.com/course/complete-python-bootcamp/",
      title: "2022 Complete Python Bootcamp From Zero to Hero in Python",
      author: "Jose Portilla",
      image: "https://img-c.udemycdn.com/course/480x270/567828_67d0.jpg",
      price: "729.99",
      rating: 4.6,
      people: "427,994",
      bestSeller: false,
    },
  ];
  const title = "Expand your career opportunities with Python";

  return (
    <div className="App">
      <Section courses={courses} desc={desc} title={title}></Section>
    </div>
  );
}

export default App;
