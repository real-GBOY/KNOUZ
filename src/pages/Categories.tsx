
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { mockCategories, mockProducts } from "@/lib/mock-data";
import { useNavigate } from "react-router-dom";

const Categories = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="craft-container py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">تصفح الفئات</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              استكشف مجموعتنا المتنوعة من الحرف اليدوية مصنفة حسب الفئات
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {mockCategories.map((category, index) => (
              <motion.div
                key={category.id}
                className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => navigate(`/categories/${category.id}`)}
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-2/5 h-60">
                    <img 
                      src={category.image} 
                      alt={category.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:w-3/5 p-6">
                    <div className="flex justify-between items-start">
                      <h2 className="text-2xl font-bold">{category.name}</h2>
                      <span className="px-3 py-1 bg-muted rounded-full text-sm">
                        {category.count} منتج
                      </span>
                    </div>
                    <p className="my-4 text-muted-foreground">{category.description}</p>
                    <div className="flex justify-end">
                      <button 
                        className="px-4 py-2 bg-craft-primary text-white rounded-md hover:bg-craft-primary/90 transition-colors"
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate(`/categories/${category.id}`);
                        }}
                      >
                        استكشف الفئة
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default Categories;
