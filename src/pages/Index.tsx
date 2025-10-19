import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Index = () => {
  const attractions = [
    {
      id: 1,
      name: 'Остров Веры',
      description: 'Уникальный остров с древними мегалитами и археологическими находками',
      image: 'https://cdn.poehali.dev/projects/ac486fde-6b1b-4c17-a70f-22a32ee162d1/files/8a669dd9-0bc6-44d6-8644-90bf855a7b70.jpg',
      distance: '12 км от Златоуста',
      type: 'Культурное наследие'
    },
    {
      id: 2,
      name: 'Золотой пляж',
      description: 'Чистейший песчаный пляж с прозрачной водой и живописными видами',
      image: 'https://cdn.poehali.dev/projects/ac486fde-6b1b-4c17-a70f-22a32ee162d1/files/a68b8c76-df77-4511-9411-c5691c596e0d.jpg',
      distance: '15 км от Златоуста',
      type: 'Пляжный отдых'
    },
    {
      id: 3,
      name: 'Гора Заозёрная',
      description: 'Смотровая площадка с панорамным видом на озеро и окрестности',
      image: 'https://cdn.poehali.dev/projects/ac486fde-6b1b-4c17-a70f-22a32ee162d1/files/44589105-eb54-4c07-8a31-8b16e44f1207.jpg',
      distance: '18 км от Zlatousta',
      type: 'Активный отдых'
    }
  ];

  const [selectedDestination, setSelectedDestination] = useState(attractions[0]);

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon name="Waves" className="text-primary" size={28} />
            <span className="font-bold text-xl">Озеро Тургояк</span>
          </div>
          <div className="flex gap-6">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Главная
            </button>
            <button 
              onClick={() => scrollToSection('routes')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Карта
            </button>
            <button 
              onClick={() => scrollToSection('attractions')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Достопримечательности
            </button>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-20 min-h-screen flex items-center">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Озеро Тургояк
                <span className="block text-primary mt-2">Младший брат Байкала</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Одно из чистейших озёр России с уникальной прозрачной водой, 
                окружённое живописными горами Южного Урала. Место силы и невероятной красоты.
              </p>
              <div className="flex gap-4">
                <Button 
                  onClick={() => scrollToSection('routes')}
                  size="lg" 
                  className="gap-2"
                >
                  <Icon name="Map" size={20} />
                  Построить маршрут
                </Button>
                <Button 
                  onClick={() => scrollToSection('attractions')}
                  variant="outline" 
                  size="lg"
                  className="gap-2"
                >
                  <Icon name="Mountain" size={20} />
                  Посмотреть места
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/ac486fde-6b1b-4c17-a70f-22a32ee162d1/files/44589105-eb54-4c07-8a31-8b16e44f1207.jpg"
                alt="Озеро Тургояк"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-3">
                  <Icon name="Droplet" className="text-primary" size={32} />
                  <div>
                    <div className="font-bold text-2xl">19.8 м</div>
                    <div className="text-sm text-muted-foreground">Прозрачность воды</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mt-20">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 text-center">
                <Icon name="Sparkles" className="text-primary mx-auto mb-3" size={40} />
                <h3 className="font-semibold mb-2">Чистейшая вода</h3>
                <p className="text-sm text-muted-foreground">Прозрачность до 19.8 метров</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 text-center">
                <Icon name="Landmark" className="text-secondary mx-auto mb-3" size={40} />
                <h3 className="font-semibold mb-2">Остров Веры</h3>
                <p className="text-sm text-muted-foreground">Древние мегалиты и артефакты</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 text-center">
                <Icon name="Fish" className="text-primary mx-auto mb-3" size={40} />
                <h3 className="font-semibold mb-2">Эндемичный сиг</h3>
                <p className="text-sm text-muted-foreground">Уникальные виды рыб</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 text-center">
                <Icon name="Sun" className="text-secondary mx-auto mb-3" size={40} />
                <h3 className="font-semibold mb-2">Круглый год</h3>
                <p className="text-sm text-muted-foreground">Отдых в любой сезон</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="routes" className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Интерактивная карта маршрутов</h2>
            <p className="text-lg text-muted-foreground">
              Постройте удобный маршрут из Златоуста до любой точки озера
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 space-y-4">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <Icon name="MapPin" className="text-primary" size={20} />
                    Выберите место назначения
                  </h3>
                  <div className="space-y-2">
                    {attractions.map((attraction) => (
                      <button
                        key={attraction.id}
                        onClick={() => setSelectedDestination(attraction)}
                        className={`w-full text-left p-4 rounded-lg border transition-all ${
                          selectedDestination.id === attraction.id
                            ? 'border-primary bg-primary/5'
                            : 'border-border hover:border-primary/50'
                        }`}
                      >
                        <div className="font-medium">{attraction.name}</div>
                        <div className="text-sm text-muted-foreground mt-1">{attraction.distance}</div>
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-primary text-primary-foreground">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <Icon name="Navigation" size={24} />
                    <div>
                      <h4 className="font-semibold mb-2">Маршрут из Златоуста</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Расстояние:</span>
                          <span className="font-medium">{selectedDestination.distance.split(' ')[0]} км</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Время в пути:</span>
                          <span className="font-medium">~25 минут</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Тип дороги:</span>
                          <span className="font-medium">Асфальт</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-2">
              <Card className="h-full">
                <CardContent className="p-0 h-full min-h-[500px] relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-green-100 rounded-lg flex items-center justify-center">
                    <div className="text-center p-8">
                      <Icon name="Map" className="text-primary mx-auto mb-4" size={64} />
                      <h3 className="text-xl font-semibold mb-2">Карта маршрута</h3>
                      <p className="text-muted-foreground mb-4">
                        Маршрут: Златоуст → {selectedDestination.name}
                      </p>
                      <div className="bg-white p-6 rounded-lg max-w-md mx-auto text-left space-y-3">
                        <div className="flex items-start gap-3">
                          <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">
                            1
                          </div>
                          <p className="text-sm">Выезжайте из Златоуста по трассе М-5</p>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">
                            2
                          </div>
                          <p className="text-sm">Поверните направо на указателе "Тургояк"</p>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">
                            3
                          </div>
                          <p className="text-sm">Следуйте по главной дороге до {selectedDestination.name}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="attractions" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Достопримечательности</h2>
            <p className="text-lg text-muted-foreground">
              Откройте для себя уникальные места озера Тургояк
            </p>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-4 mb-8">
              <TabsTrigger value="all">Все</TabsTrigger>
              <TabsTrigger value="culture">Культура</TabsTrigger>
              <TabsTrigger value="beach">Пляжи</TabsTrigger>
              <TabsTrigger value="active">Активный</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-8">
              {attractions.map((attraction, index) => (
                <Card key={attraction.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                  <div className={`grid md:grid-cols-2 gap-6 ${index % 2 === 1 ? 'md:grid-flow-dense' : ''}`}>
                    <div className={index % 2 === 1 ? 'md:col-start-2' : ''}>
                      <img 
                        src={attraction.image}
                        alt={attraction.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="p-8 flex flex-col justify-center">
                      <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 w-fit">
                        {attraction.type}
                      </div>
                      <h3 className="text-3xl font-bold mb-4">{attraction.name}</h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {attraction.description}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                        <div className="flex items-center gap-2">
                          <Icon name="MapPin" size={16} />
                          <span>{attraction.distance}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Icon name="Clock" size={16} />
                          <span>~25 минут</span>
                        </div>
                      </div>
                      <Button 
                        onClick={() => {
                          setSelectedDestination(attraction);
                          scrollToSection('routes');
                        }}
                        className="w-fit gap-2"
                      >
                        <Icon name="Navigation" size={16} />
                        Построить маршрут
                      </Button>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="culture">
              <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="grid md:grid-cols-2 gap-6">
                  <img 
                    src={attractions[0].image}
                    alt={attractions[0].name}
                    className="w-full h-full object-cover"
                  />
                  <CardContent className="p-8 flex flex-col justify-center">
                    <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 w-fit">
                      {attractions[0].type}
                    </div>
                    <h3 className="text-3xl font-bold mb-4">{attractions[0].name}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {attractions[0].description}
                    </p>
                    <Button 
                      onClick={() => {
                        setSelectedDestination(attractions[0]);
                        scrollToSection('routes');
                      }}
                      className="w-fit gap-2"
                    >
                      <Icon name="Navigation" size={16} />
                      Построить маршрут
                    </Button>
                  </CardContent>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="beach">
              <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="grid md:grid-cols-2 gap-6">
                  <img 
                    src={attractions[1].image}
                    alt={attractions[1].name}
                    className="w-full h-full object-cover"
                  />
                  <CardContent className="p-8 flex flex-col justify-center">
                    <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 w-fit">
                      {attractions[1].type}
                    </div>
                    <h3 className="text-3xl font-bold mb-4">{attractions[1].name}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {attractions[1].description}
                    </p>
                    <Button 
                      onClick={() => {
                        setSelectedDestination(attractions[1]);
                        scrollToSection('routes');
                      }}
                      className="w-fit gap-2"
                    >
                      <Icon name="Navigation" size={16} />
                      Построить маршрут
                    </Button>
                  </CardContent>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="active">
              <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="grid md:grid-cols-2 gap-6">
                  <img 
                    src={attractions[2].image}
                    alt={attractions[2].name}
                    className="w-full h-full object-cover"
                  />
                  <CardContent className="p-8 flex flex-col justify-center">
                    <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 w-fit">
                      {attractions[2].type}
                    </div>
                    <h3 className="text-3xl font-bold mb-4">{attractions[2].name}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {attractions[2].description}
                    </p>
                    <Button 
                      onClick={() => {
                        setSelectedDestination(attractions[2]);
                        scrollToSection('routes');
                      }}
                      className="w-fit gap-2"
                    >
                      <Icon name="Navigation" size={16} />
                      Построить маршрут
                    </Button>
                  </CardContent>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Waves" size={24} />
                <span className="font-bold text-lg">Озеро Тургояк</span>
              </div>
              <p className="text-sm opacity-80">
                Жемчужина Урала — откройте для себя одно из чистейших озёр России
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Полезные ссылки</h4>
              <div className="space-y-2 text-sm opacity-80">
                <div>Как добраться</div>
                <div>Где остановиться</div>
                <div>Правила посещения</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-sm opacity-80">
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <span>info@turgoyak.ru</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (000) 000-00-00</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-background/20 mt-8 pt-8 text-center text-sm opacity-60">
            © 2024 Озеро Тургояк. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
