import { title } from "@/components/primitives";

export default function DocsPage() {
  return (
    <div>
      <h1 className={`${title()} text-5xl font-bold text-gray-800 mb-12`}>
        Hizmetlerimiz
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-screen-xl">
        {[
          "Havalimanı – Otel Transferi",
          "Kıbrıs Şehir Turları",
          "Şoförlü Araç Kiralama",
          "MICE Organizasyonları",
          "Limuzin Kiralama",
          "VIP Hasta Transferi",
        ].map((service, index) => (
          <div
            key={index}
            className="p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow h-auto flex flex-col"
          >
            <img
              src="/vipTransfer.jpg"
              alt={`${service} görseli`}
              className="w-full h-40 object-cover rounded-t-lg mb-4"
            />
            <h2 className="text-2xl font-semibold text-gray-700 mb-3">
              {service}
            </h2>
            <p className="text-gray-600 flex-grow mb-6">
              {service} hakkında daha fazla bilgi almak için bizimle iletişime geçin. 
              Kaliteli ve profesyonel hizmet sunmak için buradayız.
            </p>
            <a
              href="#"
              className="mt-auto bg-blue-600 text-white text-center py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Daha Fazla Bilgi
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
