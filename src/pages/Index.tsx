import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const products = [
    {
      id: 1,
      name: 'VAPORIX Pro',
      description: 'Флагманская модель с керамическим испарителем',
      image: 'https://cdn.poehali.dev/projects/4eb27976-5867-4b9c-9bb5-115a82932ea4/files/79e110aa-b060-4c72-983e-03427472eab4.jpg',
      features: ['5000 затяжек', 'Быстрая зарядка', 'Премиум вкусы']
    },
    {
      id: 2,
      name: 'VAPORIX Compact',
      description: 'Компактное устройство для активного образа жизни',
      image: 'https://cdn.poehali.dev/projects/4eb27976-5867-4b9c-9bb5-115a82932ea4/files/3889d8c4-e6cd-4ca1-996a-4c5cdb01c889.jpg',
      features: ['3000 затяжек', 'Карманный размер', 'Яркие вкусы']
    },
    {
      id: 3,
      name: 'VAPORIX Elite',
      description: 'Премиум-линейка с уникальным дизайном',
      image: 'https://cdn.poehali.dev/projects/4eb27976-5867-4b9c-9bb5-115a82932ea4/files/b7bd3449-d0ac-438c-8a5d-3f9e504b4855.jpg',
      features: ['7000 затяжек', 'Регулировка мощности', 'Эксклюзив']
    }
  ];

  const technologies = [
    {
      icon: 'Zap',
      title: 'Керамический нагреватель',
      description: 'Равномерное испарение и чистый вкус'
    },
    {
      icon: 'Shield',
      title: 'Защита от перегрева',
      description: 'Многоуровневая система безопасности'
    },
    {
      icon: 'Battery',
      title: 'Быстрая зарядка',
      description: 'Полный заряд за 45 минут'
    },
    {
      icon: 'Sparkles',
      title: 'Инновационные жидкости',
      description: 'Собственная лаборатория разработки вкусов'
    }
  ];

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full bg-background/80 backdrop-blur-lg border-b border-border z-50">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            VAPORIX
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#home" className="hover:text-primary transition-colors">Главная</a>
            <a href="#products" className="hover:text-primary transition-colors">Продукция</a>
            <a href="#about" className="hover:text-primary transition-colors">О компании</a>
            <a href="#tech" className="hover:text-primary transition-colors">Технологии</a>
            <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
            Каталог
          </Button>
        </nav>
      </header>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Будущее вейпинга
            </span>
            <br />
            <span className="text-foreground">уже здесь</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in">
            Инновационные технологии производства электронных сигарет нового поколения. 
            Качество, безопасность и яркие впечатления в каждой затяжке.
          </p>
          <div className="flex gap-4 justify-center animate-slide-up">
            <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg px-8">
              Смотреть каталог
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 border-primary hover:bg-primary/10">
              О технологиях
            </Button>
          </div>
        </div>
      </section>

      <section id="products" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Наша продукция
            </span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Каждое устройство разработано с учетом последних технологических достижений
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card 
                key={product.id} 
                className="bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 animate-fade-in overflow-hidden group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground mb-4">{product.description}</p>
                  <div className="space-y-2 mb-4">
                    {product.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm">
                        <Icon name="CheckCircle2" size={16} className="text-primary" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="tech" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Наши технологии
            </span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Инновации в каждой детали для максимального комфорта и безопасности
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <Card 
                key={index}
                className="bg-card border-border hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center animate-glow">
                    <Icon name={tech.icon as any} size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{tech.title}</h3>
                  <p className="text-muted-foreground text-sm">{tech.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
              <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                О компании VAPORIX
              </span>
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                Мы — команда энтузиастов и профессионалов, объединенных общей целью: 
                создавать устройства нового поколения, которые сочетают инновационные технологии, 
                безопасность и стиль.
              </p>
              <p>
                С 2020 года наша компания разрабатывает и производит электронные сигареты, 
                которые отвечают самым высоким стандартам качества. Собственная лаборатория 
                позволяет нам контролировать весь процесс — от идеи до готового продукта.
              </p>
              <div className="grid md:grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                    500K+
                  </div>
                  <div className="text-sm">Довольных клиентов</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent mb-2">
                    50+
                  </div>
                  <div className="text-sm">Уникальных вкусов</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent mb-2">
                    15
                  </div>
                  <div className="text-sm">Стран присутствия</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Свяжитесь с нами
            </span>
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Остались вопросы? Мы всегда на связи!
          </p>

          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Имя</label>
                  <Input
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-background border-border focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-background border-border focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Сообщение</label>
                  <Textarea
                    placeholder="Расскажите, чем мы можем помочь..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-background border-border focus:border-primary"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg py-6"
                >
                  Отправить сообщение
                </Button>
              </form>

              <div className="mt-8 pt-8 border-t border-border">
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <Icon name="Mail" size={24} className="mx-auto mb-2 text-primary" />
                    <div className="text-sm text-muted-foreground">info@vaporix.com</div>
                  </div>
                  <div>
                    <Icon name="Phone" size={24} className="mx-auto mb-2 text-secondary" />
                    <div className="text-sm text-muted-foreground">+7 (800) 555-35-35</div>
                  </div>
                  <div>
                    <Icon name="MapPin" size={24} className="mx-auto mb-2 text-accent" />
                    <div className="text-sm text-muted-foreground">Москва, Россия</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-card border-t border-border py-8 px-4">
        <div className="container mx-auto text-center text-muted-foreground">
          <div className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-4">
            VAPORIX
          </div>
          <p className="text-sm">© 2024 VAPORIX. Все права защищены.</p>
          <p className="text-xs mt-2">Продукция предназначена для лиц старше 18 лет.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
