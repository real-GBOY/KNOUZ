
import { useState } from "react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes("@")) {
      toast({
        title: "خطأ",
        description: "يرجى إدخال بريد إلكتروني صحيح",
        variant: "destructive",
      });
      return;
    }
    
    // In a real app, you'd submit this to your backend
    toast({
      title: "تم الاشتراك بنجاح!",
      description: "شكراً لاشتراكك في نشرتنا البريدية",
    });
    
    setEmail("");
  };

  return (
    <section className="py-16 bg-craft-primary text-white">
      <div className="craft-container">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4">انضم إلى نشرتنا البريدية</h2>
          <p className="text-white/80 mb-8">
            اشترك للحصول على آخر أخبارنا والعروض الخاصة والتخفيضات الحصرية
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="أدخل بريدك الإلكتروني"
              className="flex-grow py-3 px-4 rounded-md text-craft-text bg-white focus:outline-none focus:ring-2 focus:ring-white/50"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              dir="rtl"
            />
            <motion.button
              type="submit"
              className="bg-white text-craft-primary py-3 px-6 rounded-md font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              اشترك الآن
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
