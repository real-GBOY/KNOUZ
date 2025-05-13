
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent } from "@/components/ui/card";
import { Play, Video } from "lucide-react";
import Layout from "@/components/Layout";
import { mockProducts } from "@/lib/mock-data";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    const fetchProduct = () => {
      setIsLoading(true);
      try {
        const foundProduct = mockProducts.find(item => item.id === id);
        
        if (!foundProduct) {
          console.error(`404 Error: User attempted to access non-existent route: /products/${id}`);
          navigate("/products");
          return;
        }
        
        setProduct(foundProduct);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [id, navigate]);

  if (isLoading) {
    return (
      <Layout>
        <div className="craft-container py-16">
          <div className="flex justify-center items-center h-[300px]">
            <div className="relative w-12 h-12">
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-craft-primary"
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{
                  duration: 1,
                  ease: "linear",
                  repeat: Infinity,
                }}
              />
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  if (!product) {
    return (
      <Layout>
        <div className="craft-container py-16 text-center">
          <h2 className="text-2xl font-semibold">المنتج غير موجود</h2>
          <button 
            onClick={() => navigate("/products")} 
            className="mt-6 px-6 py-2 bg-craft-primary text-white rounded-full hover:opacity-90 transition"
          >
            العودة إلى المنتجات
          </button>
        </div>
      </Layout>
    );
  }

  // Add mock sections data
  const productSections = [
    {
      id: "materials",
      title: "المواد المستخدمة",
      content: "تم استخدام مجموعة من المواد عالية الجودة في صناعة هذا المنتج، بما في ذلك النسيج الطبيعي والخشب المعالج والصبغات الطبيعية المستخرجة من أعشاب محلية.",
    },
    {
      id: "craftsmanship",
      title: "الحرفية والصناعة",
      content: "صنع هذا المنتج بعناية فائقة من قبل حرفيين ذوي خبرة تمتد لعقود، باستخدام تقنيات تقليدية متوارثة عبر الأجيال مع الحفاظ على الأصالة والدقة في التفاصيل."
    },
    {
      id: "history",
      title: "التاريخ والأصل",
      content: "ينبع تصميم هذا المنتج من تقاليد فنية عريقة تعود لمئات السنين، وتعكس الزخارف والنقوش المستخدمة تراث المنطقة وثقافتها الغنية بالتفاصيل الفنية الدقيقة."
    }
  ];

  // Add mock videos data
  const productVideos = [
    {
      id: "vid1",
      title: "عرض تفصيلي للمنتج",
      thumbnail: product.image,
      url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
      id: "vid2",
      title: "كيفية صناعة المنتج",
      thumbnail: "https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop&w=800&q=80",
      url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
      id: "vid3",
      title: "استخدامات المنتج",
      thumbnail: "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?auto=format&fit=crop&w=800&q=80",
      url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    }
  ];

  return (
    <Layout>
      <div className="craft-container py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {/* Product Image */}
          <motion.div 
            className="relative rounded-lg overflow-hidden shadow-lg"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute top-4 right-4 bg-craft-primary text-white px-4 py-2 rounded-full text-sm">
              {product.category}
            </div>
          </motion.div>

          {/* Product Info */}
          <div>
            <div className="mb-6">
              <motion.h1 
                className="text-3xl font-bold mb-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {product.name}
              </motion.h1>
              <motion.p 
                className="text-muted-foreground mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {product.description}
              </motion.p>
              <motion.div 
                className="text-2xl font-bold text-craft-primary mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                {product.price} ريال
              </motion.div>
            </div>

            <Tabs 
              value={activeTab} 
              onValueChange={setActiveTab} 
              className="w-full"
            >
              <TabsList className="w-full grid grid-cols-3 mb-6">
                <TabsTrigger value="overview">نظرة عامة</TabsTrigger>
                <TabsTrigger value="sections">الأقسام</TabsTrigger>
                <TabsTrigger value="videos">فيديوهات</TabsTrigger>
              </TabsList>

              <TabsContent value="overview">
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-4"
                >
                  <p className="mb-4">
                    هذا المنتج مصنوع يدويًا بواسطة حرفيين مهرة باستخدام تقنيات تقليدية متوارثة عبر الأجيال. يتميز بتفاصيل دقيقة وجودة عالية تعكس روح الحرف اليدوية العربية الأصيلة.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="border rounded-lg p-4">
                      <h3 className="font-semibold mb-2">المواد</h3>
                      <p className="text-muted-foreground text-sm">مواد طبيعية عالية الجودة</p>
                    </div>
                    <div className="border rounded-lg p-4">
                      <h3 className="font-semibold mb-2">الحجم</h3>
                      <p className="text-muted-foreground text-sm">متوسط، مناسب للاستخدام المنزلي</p>
                    </div>
                    <div className="border rounded-lg p-4">
                      <h3 className="font-semibold mb-2">الوزن</h3>
                      <p className="text-muted-foreground text-sm">خفيف وسهل الحمل</p>
                    </div>
                    <div className="border rounded-lg p-4">
                      <h3 className="font-semibold mb-2">الضمان</h3>
                      <p className="text-muted-foreground text-sm">ضمان سنة كاملة</p>
                    </div>
                  </div>
                </motion.div>
              </TabsContent>
              
              <TabsContent value="sections">
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  {productSections.map((section) => (
                    <motion.div 
                      key={section.id}
                      className="border rounded-lg p-6"
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="text-lg font-semibold mb-3">{section.title}</h3>
                      <p className="text-muted-foreground">{section.content}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>
              
              <TabsContent value="videos">
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {productVideos.map((video) => (
                      <motion.div
                        key={video.id}
                        className="relative rounded-lg overflow-hidden group cursor-pointer"
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="aspect-w-16 aspect-h-9">
                          <AspectRatio ratio={16 / 9}>
                            <img 
                              src={video.thumbnail} 
                              alt={video.title} 
                              className="w-full h-full object-cover"
                            />
                          </AspectRatio>
                        </div>
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center group-hover:bg-opacity-50 transition-all duration-300">
                          <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                            <Play className="h-8 w-8 text-white" />
                          </div>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                          <div className="flex items-center gap-2">
                            <Video className="h-4 w-4 text-white" />
                            <p className="text-white font-medium">{video.title}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </TabsContent>
            </Tabs>

            <motion.div 
              className="mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <button className="bg-craft-primary text-white px-8 py-3 rounded-full text-lg hover:opacity-90 transition-opacity w-full">
                أضف إلى السلة
              </button>
            </motion.div>
          </div>
        </motion.div>

        {/* Related Products */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold mb-8 text-center">منتجات ذات صلة</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {mockProducts
              .filter(p => p.category === product.category && p.id !== product.id)
              .slice(0, 4)
              .map(relatedProduct => (
                <Card 
                  key={relatedProduct.id}
                  className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => navigate(`/products/${relatedProduct.id}`)}
                >
                  <div className="relative h-64">
                    <img 
                      src={relatedProduct.image} 
                      alt={relatedProduct.name} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 right-3 bg-craft-primary text-white px-3 py-1 rounded-full text-sm">
                      {relatedProduct.category}
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-2">{relatedProduct.name}</h3>
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-craft-primary">
                        {relatedProduct.price} ريال
                      </span>
                      <motion.button
                        className="text-sm bg-craft-primary text-white py-1 px-3 rounded-full"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        عرض التفاصيل
                      </motion.button>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetails;
