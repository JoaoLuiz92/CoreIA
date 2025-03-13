import { motion } from 'framer-motion';
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { useInView } from 'react-intersection-observer';
import { Brain, Code, Layout, Bot, MessageSquare, Users, Building, BarChart as ChartBar, Rocket, Shield, Globe, Workflow,Phone,Linkedin,Mail } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import joao from './public/img/joao.png';
import augusto from './public/img/augusto.png';
import coreia from './public/img/coreia.jpeg';


function App() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: <Bot className="h-8 w-8" />,
      title: 'Automação com IA',
      description: 'Soluções inteligentes para otimizar seus processos empresariais.',
      examples: [
        {
          icon: <MessageSquare className="h-6 w-6" />,
          title: 'Marketing Digital',
          description: 'Chatbots inteligentes para atendimento 24/7, análise de sentimentos em redes sociais, e personalização de campanhas com IA.'
        },
        {
          icon: <Users className="h-6 w-6" />,
          title: 'SDRs Automatizados',
          description: 'Qualificação automática de leads, agendamento inteligente de reuniões e follow-up personalizado.'
        },
        {
          icon: <ChartBar className="h-6 w-6" />,
          title: 'Análise Preditiva',
          description: 'Previsão de tendências de mercado e comportamento do consumidor.'
        }
      ]
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: 'CRMs Personalizados',
      description: 'Sistemas sob medida para seu negócio.',
      examples: [
        {
          icon: <Building className="h-6 w-6" />,
          title: 'CRM Imobiliário',
          description: 'Gestão completa de imóveis, leads e contratos com automação de processos.'
        },
        {
          icon: <Rocket className="h-6 w-6" />,
          title: 'CRM para Startups',
          description: 'Sistema ágil e escalável com métricas específicas para startups.'
        },
        {
          icon: <Shield className="h-6 w-6" />,
          title: 'CRM Seguro',
          description: 'Conformidade com LGPD e recursos avançados de segurança.'
        }
      ]
    },
    {
      icon: <Layout className="h-8 w-8" />,
      title: 'Landing Pages',
      description: 'Páginas estratégicas para destacar sua marca e atrair clientes.',
      examples: [
        {
          icon: <Globe className="h-6 w-6" />,
          title: 'Design Atraente',
          description: 'Experiência visual impactante para engajar visitantes.'
        },
        {
          icon: <Rocket className="h-6 w-6" />,
          title: 'Alto Desempenho',
          description: 'Carregamento rápido e otimização para resultados eficientes.'
        }
      ]
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: 'Consultoria Tecnológica',
      description: 'Orientação especializada para transformação digital.',
      examples: [
        {
          icon: <Workflow className="h-6 w-6" />,
          title: 'Automação de Processos',
          description: 'Análise e implementação de soluções para otimizar fluxos de trabalho.'
        },
        {
          icon: <Rocket className="h-6 w-6" />,
          title: 'Transformação Digital',
          description: 'Planejamento estratégico para modernização tecnológica.'
        }
      ]
    }
  ];

  const [state, handleSubmit] = useForm("xwplkjan");

  return (
    <div className="bg-black text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section id="início" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${coreia})` }}>
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Soluções Tecnológicas para o seu Negócio
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-8"
          >
            Transformando ideias em realidade através da inovação
          </motion.p>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Sobre a Core.IA</h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div className="text-left">
                <p className="text-gray-300 text-lg mb-6">
                  A Core.IA Technologies nasceu da visão de transformar o cenário tecnológico brasileiro,
                  oferecendo soluções inovadoras que combinam expertise técnica com um profundo
                  entendimento das necessidades empresariais modernas.
                </p>
                <p className="text-gray-300 text-lg">
                  Nossa missão é democratizar o acesso à tecnologia de ponta, permitindo que empresas
                  de todos os portes possam se beneficiar das mais recentes inovações em IA e
                  automação.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 p-8 rounded-2xl backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-6">Nossa História</h3>
                <p className="text-gray-300 text-lg">
                  Fundada por visionários da tecnologia, a Core.IA tem se destacado no mercado
                  por sua abordagem única que combina inovação técnica com resultados práticos
                  para nossos clientes.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-8">Nossos Fundadores</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="bg-gray-800/50 backdrop-blur-lg rounded-lg p-6"
              >
                <img
                  src={joao}
                  alt="João Luiz"
                  className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
                />
                <h4 className="text-xl font-semibold mb-2">João Luiz</h4>
                <p className="text-gray-400">
                Formado em Análise e Desenvolvimento de Sistemas, João é especialista em desenvolvimento web e automações com IA. 
                Com um olhar estratégico para as necessidades do cliente, ele identifica desafios e transforma problemas em soluções eficientes.
                Sua expertise permite entregar inovação e automação que agregam valor real aos negócios, otimizando processos, aumentando a 
                produtividade e impulsionando resultados </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="bg-gray-800/50 backdrop-blur-lg rounded-lg p-6"
              >
                <img
                  src= {augusto}
                  alt="Augusto"
                  className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
                />
                <h4 className="text-xl font-semibold mb-2">Augusto César</h4>
                <p className="text-gray-400">
                Com mais de 30 anos de experiência em desenvolvimento de software e automação, Augusto é um especialista
                em transformar desafios tecnológicos em soluções eficientes. 
                Sua ampla vivência no setor permite criar sistemas inteligentes que otimizam processos,
                aumentam a produtividade e impulsionam o crescimento dos negócios, sempre com foco na inovação e 
                nas reais necessidades dos clientes.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="serviços" className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Nossos Serviços</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-lg rounded-lg p-8 hover:bg-gray-700/50 transition-colors"
              >
                <div className="flex items-center mb-6">
                  <div className="text-blue-400 mr-4">{service.icon}</div>
                  <div>
                    <h3 className="text-2xl font-semibold">{service.title}</h3>
                    <p className="text-gray-400 mt-1">{service.description}</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {service.examples?.map((example, idx) => (
                    <div key={idx} className="bg-gray-900/50 rounded-lg p-4">
                      <div className="flex items-center mb-2">
                        <div className="text-blue-400 mr-3">{example.icon}</div>
                        <h4 className="text-lg font-medium">{example.title}</h4>
                      </div>
                      <p className="text-gray-400 text-sm">{example.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="contato" className="py-20 bg-gradient-to-b from-black to-gray-900">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">Entre em Contato</h2>
      <p className="text-gray-300 text-lg">
        Vamos transformar sua empresa juntos
      </p>
    </div>
    <div className="flex flex-col md:flex-row gap-2">
      <div className="space-y-4 flex-1 pl-6">
        <div className="flex items-center space-x-4">
            <a href="https://wa.me/5553999037382" className="hover:underline" target="_blank" rel="noopener noreferrer">
            <Phone className="h-10 w-10 text-blue-400" />
            </a>
          <span>(53) 99903-7382</span>
        </div>
        <div className="flex items-center space-x-4">
          <a href="mailto:" className="hover:underline">
          <Mail className="h-10 w-10 text-blue-400" />
          </a>
          <span>techcoreia@gmail.com</span>
        </div>
        <div className="flex items-center space-x-4">
          <Linkedin className="h-10 w-10 text-blue-400" />
          <a href="https://www.linkedin.com/in/joaoluiz92/" target="_blank" rel="noopener noreferrer" className="hover:underline">
            LinkedIn
          </a>
        </div>
      </div>
      <div className="flex-1">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Nome"
              className="w-full px-4 py-3 bg-gray-800/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <input
              type="phone"
              name="phone"
              placeholder="Telefone/Whatsapp"
              className="w-full px-4 py-3 bg-gray-800/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full px-4 py-3 bg-gray-800/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <ValidationError 
              prefix="Email" 
              field="email"
              errors={state.errors}
            />
          </div>
          <div>
            <textarea
              name="message"
              placeholder="Mensagem"
              rows={4}
              className="w-full px-4 py-3 bg-gray-800/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
            <ValidationError 
              prefix="Message" 
              field="message"
              errors={state.errors}
            />
          </div>
          <button
            type="submit"
            disabled={state.submitting}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            Enviar Mensagem
          </button>
          {state.succeeded && <p className="text-white-500 mt-4 font-bold">Obrigado por enviar sua mensagem. Entraremos em contato !</p>}
        </form>
      </div>
    </div>
  </div>
</section>
      <Footer />
    </div>
  );
}
export default App;