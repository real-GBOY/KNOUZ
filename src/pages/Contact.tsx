
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import ContactSection from "@/components/ContactSection";

const Contact = () => {
  return (
    <Layout>
      <motion.div
        className="craft-container py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">اتصل بنا</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            نحن هنا للإجابة على جميع استفساراتكم ومساعدتكم في اختيار المنتجات المناسبة
          </p>
        </div>

        <ContactSection />
      </motion.div>
    </Layout>
  );
};

export default Contact;
