'use client'

import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles, input as inputStyles, select as selectStyles } from "@heroui/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { useState } from "react";

// Remove incorrect imports
// import { Input, Select, Button } from "@heroui/form";

export default function Home() {
  const [step, setStep] = useState(1);

  const handleNextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handlePreviousStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <span className={title()}>KKTC&nbsp;</span>
        <span className={title({ color: "violet" })}>Transfer'e&nbsp;</span>
        <br />
        <span className={title()}>
          Hoşgeldiniz.
        </span>
        <div className={subtitle({ class: "mt-4" })}>
        Kuzey Kıbrıs'a gelen yolcularımızın, Ercan Havalimanı'ndan otellerine hızlı,
       konforlu ve güvenli bir şekilde ulaşmasını sağlıyoruz. Profesyonel şoförlerimiz ve VIP araçlarımız ile hizmetinizdeyiz.
        </div>
      </div>

      {/* Two-step reservation form */}
      <div className="flex flex-col gap-4 mt-8">
        {step === 1 && (
          <>
            <select className="border rounded-full p-2">
              <option value="">Nereden</option>
              <option value="ercan">Ercan Havalimanı</option>
              <option value="girne">Girne Limanı</option>
            </select>
            <select className="border rounded-full p-2">
              <option value="">Nereye</option>
              <option value="salamis">Salamis Bay Conti</option>
              <option value="merit">Merit Royale</option>
              <option value="chamada">Chamada Hotel</option>
            </select>
            <button
              className={buttonStyles({
                color: "primary",
                radius: "full",
                variant: "shadow",
              })}
              onClick={handleNextStep}
            >
              İleri
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <input
              type="date"
              className="border rounded-full p-2"
            />
            <select className="border rounded-full p-2">
              <option value="1">1 Yolcu</option>
              <option value="2">2 Yolcu</option>
              <option value="3">3 Yolcu</option>
              <option value="4">4 Yolcu</option>
            </select>
            <input
              type="time"
              className="border rounded-full p-2"
            />
            <div className="flex justify-between">
              <button
                className={buttonStyles({
                  color: "secondary",
                  radius: "full",
                  variant: "shadow",
                })}
                onClick={handlePreviousStep}
              >
                Geri
              </button>
              <button
                className={buttonStyles({
                  color: "primary",
                  radius: "full",
                  variant: "shadow",
                })}
              >
                Rezervasyon Yap
              </button>
            </div>
          </>
        )}
      </div>

      {/* Historical Places Section */}
      <div className="mt-12 w-full text-center bg-gray-200 dark:bg-gray-800 p-8 rounded-lg shadow-lg transition-colors duration-300">
        <h2 className={title({ color: "violet" })}>Mutlaka Görülmesi Gereken Tarihi Yerler</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="flex flex-col items-center bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <img src="/bellapisManastiri.jpg" alt="Bellapais Manastırı" className="w-full h-64 object-cover rounded-t-lg" />
            <h3 className="mt-2 font-semibold text-black dark:text-white">Bellapais Manastırı</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">Gotik mimarisiyle ünlü Bellapais Manastırı, huzur dolu atmosferi ve muhteşem manzarasıyla ziyaretçilerini büyüler.</p>
          </div>
          <div className="flex flex-col items-center bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <img src="/buyukHan.jpg" alt="Büyük Han" className="w-full h-64 object-cover rounded-t-lg" />
            <h3 className="mt-2 font-semibold text-black dark:text-white">Büyük Han</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">Kıbrıs'ın en büyük hanı olan Büyük Han, Osmanlı döneminden kalma tarihi bir yapıdır ve kültürel etkinliklere ev sahipliği yapar.</p>
          </div>
          <div className="flex flex-col items-center bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <img src="/salamisHarabe.jpg" alt="Salamis Harabeleri" className="w-full h-64 object-cover rounded-t-lg" />
            <h3 className="mt-2 font-semibold text-black dark:text-white">Salamis Harabeleri</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">Antik Roma dönemine ait Salamis Harabeleri, geniş alanı ve iyi korunmuş yapılarıyla tarih severler için bir cennettir.</p>
          </div>
          <div className="flex flex-col items-center bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <img src="/stHilCastle.jpg" alt="St. Hilarion Kalesi" className="w-full h-64 object-cover rounded-t-lg" />
            <h3 className="mt-2 font-semibold text-black dark:text-white">St. Hilarion Kalesi</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">St. Hilarion Kalesi, Kıbrıs'ın en iyi korunmuş kalelerinden biridir ve nefes kesen manzaralar sunar.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
