
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const footerSections = [
    {
      title: "روابط سريعة",
      links: [
        { name: "الرئيسية", path: "/" },
        { name: "المنتجات", path: "/products" },
        { name: "الفئات", path: "/categories" },
        { name: "من نحن", path: "/about" },
        { name: "اتصل بنا", path: "/contact" },
      ],
    },
    {
      title: "تواصل معنا",
      content: [
        "البريد الإلكتروني: info@crafts.example.com",
        "الجوال: +966 123 456 789",
        "العنوان: المملكة العربية السعودية، الرياض",
      ],
    },
    {
      title: "تابعنا",
      content: ["انستغرام", "تويتر", "فيسبوك", "يوتيوب"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.footer
      className="bg-muted/50 mt-16 py-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="craft-container">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {footerSections.map((section, index) => (
            <motion.div key={index} className="mb-6" variants={childVariants}>
              <h3 className="text-lg font-bold mb-4 text-craft-primary">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links &&
                  section.links.map((link, i) => (
                    <li key={i}>
                      <NavLink
                        to={link.path}
                        className="text-foreground/80 hover:text-craft-primary transition-colors"
                      >
                        {link.name}
                      </NavLink>
                    </li>
                  ))}
                {section.content &&
                  section.content.map((item, i) => (
                    <li
                      key={i}
                      className="text-foreground/80 hover:text-craft-primary transition-colors cursor-pointer"
                    >
                      {item}
                    </li>
                  ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          className="mt-12 pt-6 border-t border-border text-center text-foreground/70"
          variants={childVariants}
        >
          <p>© {currentYear} الحِرَف العربية - جميع الحقوق محفوظة</p>
        </motion.div>
      </div>
    </motion.footer>
  );
}
