
import Layout from "@/components/Layout";
import { motion } from "framer-motion";

const About = () => {
  const features = [
    {
      title: "التراث والأصالة",
      description: "نحرص على الحفاظ على الأساليب التقليدية في صناعة الحرف اليدوية مع لمسة عصرية",
    },
    {
      title: "الجودة العالية",
      description: "كل منتج يمر بمراحل تدقيق صارمة لضمان تقديم أعلى مستويات الجودة",
    },
    {
      title: "الاستدامة",
      description: "نستخدم مواد صديقة للبيئة ونتبع ممارسات مستدامة في جميع مراحل الإنتاج",
    },
    {
      title: "دعم الحرفيين",
      description: "نعمل مع حرفيين محليين موهوبين ونساهم في الحفاظ على الحرف التقليدية",
    },
  ];

  return (
    <Layout>
      <motion.div
        className="craft-container py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold mb-6">من نحن</h1>
            <p className="text-muted-foreground">
              شغف بالحرف اليدوية وتراث عريق نحافظ عليه
            </p>
          </motion.div>

          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden mb-8">
              <img
                src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=1200&q=80"
                alt="فريقنا"
                className="w-full h-[400px] object-cover rounded-lg"
              />
            </div>

            <div className="prose max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                مرحبًا بكم في عالم الحِرَف العربية، حيث يلتقي التراث الأصيل بالإبداع المعاصر. نحن شركة متخصصة في صناعة وتسويق الحرف اليدوية العربية التقليدية، نعمل بشغف للحفاظ على هذا التراث الثقافي العريق ونقله إلى الأجيال القادمة.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                تأسست شركتنا عام 2010 على يد مجموعة من عشاق الحرف اليدوية وخبراء الفنون التقليدية، بهدف إحياء الحرف اليدوية العربية وتطويرها لتناسب الذوق المعاصر مع الحفاظ على أصالتها وعراقتها.
              </p>
              <p className="text-lg leading-relaxed">
                نعمل مع أمهر الحرفيين في مختلف أنحاء الوطن العربي، الذين يضعون خبرتهم وإبداعهم في كل قطعة يصنعونها. نحرص على استخدام المواد الخام عالية الجودة والأساليب التقليدية في الصناعة، مما يضمن تقديم منتجات فريدة وأصيلة تعكس عراقة التراث العربي.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-2xl font-bold mb-8">قيمنا</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="p-6 bg-muted/30 rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                >
                  <h3 className="text-xl font-semibold mb-3 text-craft-primary">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </Layout>
  );
};

export default About;
