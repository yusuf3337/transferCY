import { title } from "@/components/primitives";
import React from "react";

const pricingOptions = [
  {
    name: "Vito (1-7 Kişi)",
    image: "/vito.png",
    prices: [
      { location: "ERCAN-GİRNE DOĞU", price: "1650 ₺" },
      { location: "ERCAN-GİRNE BATI", price: "2000 ₺" },
      { location: "ERCAN-KARŞIYAKA", price: "2500 ₺" },
      { location: "ERCAN-LEFKOŞA", price: "1250 ₺" },
      { location: "ERCAN-GÜZELYURT", price: "2250 ₺" },
      { location: "ERCAN-LEFKE", price: "2750 ₺" },
      { location: "ERCAN-MAĞUSA", price: "1750 ₺" },
      { location: "ERCAN-İSKELE", price: "2000 ₺" },
      { location: "ERCAN-BAFRA", price: "2250 ₺" },
      { location: "ERCAN-KARPAS", price: "4500 ₺" },
    ],
  },
  {
    name: "Sprinter (1-17 Kişi)",
    image: "/sprinter.png",
    prices: Array(10).fill({ location: "SORUNUZ", price: "SORUNUZ" }), // Placeholder for Sprinter
  },
  {
    name: "Minibüs (1-30 Kişi)",
    image: "/miniBus.png",
    prices: Array(10).fill({ location: "SORUNUZ", price: "SORUNUZ" }), // Placeholder for Minibüs
  },
  {
    name: "Otobüs (1-44 Kişi)",
    image: "/otobus.png",
    prices: Array(10).fill({ location: "SORUNUZ", price: "SORUNUZ" }), // Placeholder for Otobüs
  },
];

export default function PricingPage() {
  const commonPrices = [
    { location: "ERCAN-GİRNE DOĞU", price: "1650 ₺" },
    { location: "ERCAN-GİRNE BATI", price: "2000 ₺" },
    { location: "ERCAN-KARŞIYAKA", price: "2500 ₺" },
    { location: "ERCAN-LEFKOŞA", price: "1250 ₺" },
    { location: "ERCAN-GÜZELYURT", price: "2250 ₺" },
    { location: "ERCAN-LEFKE", price: "2750 ₺" },
    { location: "ERCAN-MAĞUSA", price: "1750 ₺" },
    { location: "ERCAN-İSKELE", price: "2000 ₺" },
    { location: "ERCAN-BAFRA", price: "2250 ₺" },
    { location: "ERCAN-KARPAS", price: "4500 ₺" },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className={`${title()} text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-12 text-center`}>ERCAN HAVALİMANI TRANSFER</h1>
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 flex flex-col items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-4">
          {pricingOptions.map((option, index) => (
            <div key={index} className="flex flex-col items-center">
              <img src={option.image} alt={option.name} className="w-32 h-auto mb-4" />
              <h2 className="font-bold text-lg text-center text-gray-800 dark:text-white">{option.name}</h2>
            </div>
          ))}
        </div>
        <div className="text-center">
          {commonPrices.map((priceOption, priceIndex) => (
            <div key={priceIndex} className="text-lg text-gray-800 dark:text-white">
              <span className="block">{priceOption.location}: {priceOption.price}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
