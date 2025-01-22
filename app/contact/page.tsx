"use client"

import { title } from "@/components/primitives"
import { useState } from "react"
import { InboxIcon, PhoneIcon, MapPinIcon } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("Form data submitted:", formData)
    // Burada form verilerini işleyebilir veya bir API'ye gönderebilirsiniz
  }

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className={`${title({ color: "violet" })} text-4xl font-extrabold mb-4 text-gray-900 dark:text-white`}>İletişime Geçin</h1>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
            Sorularınız mı var? Bize ulaşın, size yardımcı olmaktan mutluluk duyarız.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden">
            <div className="px-6 py-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Bize Mesaj Gönderin</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 text-sm font-semibold mb-2">
                    İsim
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Adınız"
                    required
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 text-sm font-semibold mb-2">
                    E-posta
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="ornek@email.com"
                    required
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 text-sm font-semibold mb-2">
                    Mesaj
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Mesajınızı buraya yazın..."
                    required
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    rows={4}
                  />
                </div>
                <div className="flex items-center justify-center">
                  <button
                    type="submit"
                    className="w-full bg-violet-600 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
                  >
                    Gönder
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden">
            <div className="px-6 py-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">İletişim Bilgilerimiz</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <InboxIcon className="h-6 w-6 text-violet-600 mr-3 mt-1" />
                  <div>
                    <p className="text-gray-900 dark:text-gray-300 font-semibold">E-posta</p>
                    <p className="text-gray-600 dark:text-gray-400">iletisim@sirketiniz.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <PhoneIcon className="h-6 w-6 text-violet-600 mr-3 mt-1" />
                  <div>
                    <p className="text-gray-900 dark:text-gray-300 font-semibold">Telefon</p>
                    <p className="text-gray-600 dark:text-gray-400">+90 (212) 123 45 67</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPinIcon className="h-6 w-6 text-violet-600 mr-3 mt-1" />
                  <div>
                    <p className="text-gray-900 dark:text-gray-300 font-semibold">Adres</p>
                    <p className="text-gray-600 dark:text-gray-400">Örnek Mahallesi, Örnek Sokak No:1, 34000 İstanbul, Türkiye</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

