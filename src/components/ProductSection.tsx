
import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import { Folder } from "lucide-react";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

interface ProductSectionProps {
  category: string;
  products: Product[];
}

export default function ProductSection({ category, products }: ProductSectionProps) {
  return (
    <motion.div
      className="mb-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center gap-2 mb-6">
        <Folder className="h-5 w-5 text-craft-primary" />
        <h2 className="text-2xl font-bold">{category}</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <ProductCard {...product} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
