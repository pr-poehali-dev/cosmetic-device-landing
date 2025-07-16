import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  
  const equipmentTypes = [
    { value: 'all', label: 'Все аппараты' },
    { value: 'rf', label: 'RF-лифтинг' },
    { value: 'laser', label: 'Лазерные аппараты' },
    { value: 'ultrasound', label: 'Ультразвуковые' },
    { value: 'mesotherapy', label: 'Мезотерапия' },
    { value: 'photorejuvenation', label: 'Фотоомоложение' }
  ];

  const equipment = [
    {
      id: 1,
      name: 'RF-лифтинг аппарат ProSkin',
      type: 'rf',
      price: 'от 350 000 ₽',
      image: '/img/26422ead-0db7-440f-b623-f0ac13ee6779.jpg',
      features: ['Сертификат CE', 'Гарантия 2 года', 'Обучение включено'],
      description: 'Профессиональный RF-лифтинг для коррекции овала лица и тела',
      contraindications: ['Беременность', 'Металлические импланты', 'Онкология']
    },
    {
      id: 2,
      name: 'Лазерный аппарат MedLaser Pro',
      type: 'laser',
      price: 'от 450 000 ₽',
      image: '/img/1bf7ad05-d876-48ba-b83c-d4fb28cdebec.jpg',
      features: ['FDA одобрен', 'Гарантия 3 года', 'Техподдержка 24/7'],
      description: 'Диодный лазер для эпиляции и омоложения кожи',
      contraindications: ['Загар', 'Воспаления кожи', 'Прием фотосенсибилизаторов']
    },
    {
      id: 3,
      name: 'УЗ-аппарат UltraBeauty',
      type: 'ultrasound',
      price: 'от 280 000 ₽',
      image: '/img/268ada62-2253-49b0-aaa9-3539e030a501.jpg',
      features: ['Сертификат РЗН', 'Гарантия 2 года', 'Бесплатная доставка'],
      description: 'Ультразвуковой аппарат для лифтинга и моделирования',
      contraindications: ['Кардиостимулятор', 'Беременность', 'Острые заболевания']
    }
  ];

  const filteredEquipment = selectedFilter === 'all' 
    ? equipment 
    : equipment.filter(item => item.type === selectedFilter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-3">
              <Icon name="Sparkles" className="text-pink-500" size={32} />
              <h1 className="text-2xl font-bold text-gray-900">AesthetiX</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#catalog" className="text-gray-700 hover:text-pink-500 transition-colors">Каталог</a>
              <a href="#about" className="text-gray-700 hover:text-pink-500 transition-colors">О нас</a>
              <a href="#contacts" className="text-gray-700 hover:text-pink-500 transition-colors">Контакты</a>
            </nav>
            <Button className="bg-pink-500 hover:bg-pink-600 text-white">
              <Icon name="Phone" size={16} className="mr-2" />
              Консультация
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Инновационные решения<br />
            <span className="text-pink-500">для эстетической</span> медицины
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
            Передовое оборудование для косметологических процедур. 
            Высокие технологии, надежность и профессиональная поддержка.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center space-x-2">
              <Icon name="ShieldCheck" className="text-blue-500" size={24} />
              <span className="text-gray-700">Сертификаты CE/FDA</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Headphones" className="text-green-500" size={24} />
              <span className="text-gray-700">Техподдержка 24/7</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="GraduationCap" className="text-purple-500" size={24} />
              <span className="text-gray-700">Обучение персонала</span>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Каталог оборудования</h3>
          
          {/* Filter */}
          <div className="mb-8 flex justify-center">
            <Select value={selectedFilter} onValueChange={setSelectedFilter}>
              <SelectTrigger className="w-64">
                <SelectValue placeholder="Выберите тип аппарата" />
              </SelectTrigger>
              <SelectContent>
                {equipmentTypes.map(type => (
                  <SelectItem key={type.value} value={type.value}>
                    {type.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Equipment Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEquipment.map(item => (
              <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-pink-100 to-blue-100 overflow-hidden">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{item.name}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                  <div className="text-2xl font-bold text-pink-500">{item.price}</div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Особенности:</h4>
                      <div className="flex flex-wrap gap-2">
                        {item.features.map(feature => (
                          <Badge key={feature} variant="secondary" className="bg-green-100 text-green-800">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Противопоказания:</h4>
                      <div className="flex flex-wrap gap-2">
                        {item.contraindications.map(contra => (
                          <Badge key={contra} variant="outline" className="border-red-200 text-red-700">
                            {contra}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <Button className="w-full bg-blue-500 hover:bg-blue-600">
                      Подробнее
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Свяжитесь с нами</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h4 className="text-xl font-semibold mb-6">Консультация и заказ</h4>
              <form className="space-y-4">
                <div>
                  <Input placeholder="Ваше имя" />
                </div>
                <div>
                  <Input placeholder="Телефон" />
                </div>
                <div>
                  <Input placeholder="Email" />
                </div>
                <div>
                  <Textarea placeholder="Сообщение" />
                </div>
                <Button className="w-full bg-pink-500 hover:bg-pink-600">
                  Отправить заявку
                </Button>
              </form>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-6">Контактная информация</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" className="text-pink-500" />
                  <span>+7 (495) 789-01-23</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Mail" className="text-pink-500" />
                  <span>info@aesthetix.ru</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="MapPin" className="text-pink-500" />
                  <span>г. Москва, ул. Красная, д. 123</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Clock" className="text-pink-500" />
                  <span>Пн-Пт: 9:00-18:00</span>
                </div>
              </div>
              <div className="mt-8 p-6 bg-gradient-to-r from-pink-50 to-blue-50 rounded-lg">
                <h5 className="font-semibold mb-2">Гарантии и сервис</h5>
                <ul className="space-y-2 text-sm">
                  <li>• Гарантия до 3 лет на все аппараты</li>
                  <li>• Бесплатное обучение персонала</li>
                  <li>• Техподдержка 24/7</li>
                  <li>• Сертификаты CE, FDA, РЗН</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Icon name="Sparkles" className="text-pink-500" size={24} />
            <h5 className="text-xl font-bold">AesthetiX</h5>
          </div>
          <p className="text-gray-400">
            Инновационное косметологическое оборудование нового поколения
          </p>
          <div className="mt-6 text-sm text-gray-500">
            © 2024 AesthetiX. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;