"use client"

import { motion } from "framer-motion"
import { ChevronRight, Phone, Mail, MapPin } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.h1
        className="text-4xl font-bold mb-8 text-center text-gray-900 dark:text-white"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Hakkımızda
      </motion.h1>

      <motion.div
        className="mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
          <p className="text-lg text-center text-gray-900 dark:text-gray-200">
            Projemizin amacı, KKTC'ye yani Ercan Havalimanı'na inen yolculara konaklayacakları otele kadar eşlik
            etmektir. Yolcularımızın seyahat deneyimlerini en üst düzeye çıkarmak için buradayız.
          </p>
        </div>
      </motion.div>

      <motion.div
        className="grid md:grid-cols-2 gap-8 mb-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Hizmetlerimiz</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Havalimanı transfer hizmetimiz, yolcuların konforlu ve güvenli bir şekilde otellerine ulaşmalarını
              sağlamak için tasarlanmıştır. Profesyonel sürücülerimiz, yolcularımızı zamanında ve güvenli bir şekilde
              hedeflerine ulaştırmak için eğitimlidir.
            </p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Araç Çeşitlerimiz</h2>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
              Farklı ihtiyaçlara uygun geniş bir araç yelpazesi sunuyoruz. Araçlarımız, konfor ve güvenlik ön planda
              tutularak seçilmiştir.
            </p>
            <ul className="space-y-2">
              {["Minivan - 8 Kişilik", "SUV - 5 Kişilik", "Limuzin - 4 Kişilik", "Otobüs - 20 Kişilik"].map(
                (item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center text-gray-900 dark:text-gray-200"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.3 }}
                  >
                    <ChevronRight className="mr-2 h-4 w-4" />
                    {item}
                  </motion.li>
                ),
              )}
            </ul>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <h2 className="text-3xl font-semibold mb-6 text-gray-900 dark:text-white">Bizimle İletişime Geçin</h2>
        <p className="mb-6 text-gray-700 dark:text-gray-300">
          Daha fazla bilgi almak veya rezervasyon yapmak için bizimle iletişime geçmekten çekinmeyin. Müşteri
          memnuniyetini önceliğimiz olarak görüyoruz ve her zaman yardımcı olmaktan mutluluk duyarız.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300">
            <Phone className="mr-2 h-4 w-4" /> Bizi Arayın
          </button>
          <button className="flex items-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300">
            <Mail className="mr-2 h-4 w-4" /> E-posta Gönderin
          </button>
          <button className="flex items-center px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition duration-300">
            <MapPin className="mr-2 h-4 w-4" /> Konum
          </button>
        </div>
      </motion.div>
    </div>
  )
}

