
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  className?: string;
}

export default function ProductCard({
  id,
  name,
  description,
  price,
  image,
  category,
  className,
}: ProductCardProps) {
  const navigate = useNavigate();

  const handleProductClick = () => {
    navigate(`/products/${id}`);
  };

  return (
    <motion.div
      className={cn(
        "craft-card h-full flex flex-col overflow-hidden cursor-pointer hover:shadow-lg",
        className
      )}
      whileHover={{ y: -5 }}
      onClick={handleProductClick}
    >
      <div className="relative overflow-hidden">
        <motion.img
          src={image}
          alt={name}
          className="w-full h-64 object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
        <div className="absolute top-3 right-3 bg-craft-primary text-white px-3 py-1 rounded-full text-sm">
          {category}
        </div>
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-muted-foreground text-sm mb-3 flex-grow">
          {description.length > 100
            ? `${description.substring(0, 100)}...`
            : description}
        </p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-craft-primary">
            {price} ريال
          </span>
          <motion.button
            className="bg-craft-primary text-white py-1 px-4 rounded-full text-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            عرض التفاصيل
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
