import { CheckCircle, Star, Zap, Palette, Heart } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-gray-50 text-gray-800 font-sans">
      {/* Hero Section */}
      <header className="bg-amber-100 text-center py-12 px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-pink-600 mb-4">🎨 Kit com +300 Desenhos Para Colorir</h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-700">A ferramenta ideal para pais e professores! Atividades educativas que desenvolvem a coordenação motora, concentração e criatividade em casa ou na sala de aula.</p>
        <div className="my-8 flex justify-center">
          <Carousel className="w-full max-w-lg">
            <CarouselContent>
              {['/bo-g-1.png', '/bo-g-2.png', '/bo-g-3.png', '/bo-g-4.png'].map((src, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Image
                      src={src}
                      alt={`Imagem do kit de atividades ${index + 1}`}
                      width={600}
                      height={400}
                      className="mx-auto rounded-lg shadow-lg"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </div>
        <a href="#precos" className="bg-pink-500 text-white font-bold py-3 px-8 rounded-full text-xl hover:bg-pink-600 transition-transform transform hover:scale-105 shadow-lg ">QUERO O KIT COMPLETO!</a>
      </header>

      <main>
        {/* Benefits Section */}
        <section id="beneficios" className="py-16 px-4">
          <h2 className="text-3xl font-bold text-center mb-10 text-cyan-600">Perfeito para Pais e Professores</h2>
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <span className="text-5xl mx-auto text-yellow-500 mb-4">🚀</span>
              <h3 className="font-bold text-xl mb-2">Desenvolvimento Acelerado</h3>
              <p>Estimula a coordenação motora fina e a concentração das crianças de forma lúdica e eficaz.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <span className="text-5xl mx-auto text-blue-500 mb-4">📚</span>
              <h3 className="font-bold text-xl mb-2">Ferramenta Pedagógica</h3>
              <p>Um recurso versátil para professores aplicarem em sala de aula e pais reforçarem o aprendizado em casa.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <span className="text-5xl mx-auto text-red-500 mb-4">❤️</span>
              <h3 className="font-bold text-xl mb-2">Aprendizado com Afeto</h3>
              <p>Cria momentos de conexão e aprendizado entre pais e filhos, e torna a aula mais divertida.</p>
            </div>
          </div>
        </section>

        {/* Objection Handling Section */}
        <section className="bg-teal-50 py-16 px-4">
           <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-teal-700 mb-6">A Solução para o Aprendizado Criativo</h2>
              <p className="text-lg mb-4">&quot;<span className="font-bold text-pink-600">Meus filhos perdem o foco facilmente.</span>&quot; - Nosso kit foi criado para capturar a atenção com desenhos envolventes, transformando o aprendizado em uma brincadeira que eles não querem largar.</p>
              <p className="text-lg">&quot;<span className="font-bold text-pink-600">Falta tempo para preparar atividades de qualidade.</span>&quot; - Nós já fizemos o trabalho por você! São mais de 300 atividades prontas para imprimir, economizando tempo precioso de pais e professores.</p>
           </div>
        </section>

        {/* Pricing Section */}
        <section id="precos" className="py-16 px-4">
          <h2 className="text-3xl font-bold text-center mb-10 text-pink-600">Escolha o Plano Ideal para Você</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {/* Basic Plan */}
            <div className="border-2 border-gray-200 rounded-lg p-8 w-full max-w-sm text-center flex flex-col opacity-70">
              <h3 className="text-2xl font-bold mb-2">Kit Essencial</h3>
              <p className="text-gray-500 line-through">De R$ 37,00</p>
              <p className="text-4xl font-bold my-2">Por R$ 9<span className="text-lg font-normal">,90</span></p>
              <ul className="text-left space-y-2 mb-8 flex-grow">
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-2" /> 50 Desenhos para Colorir</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-2" /> Acesso Imediato</li>
              </ul>
              <a href="/oferta-expirada" className="mt-auto bg-gray-100 border text-gray-950 font-bold py-3 px-8 rounded-full hover:bg-gray-200 transition-colors">Escolher Essencial</a>
            </div>

            {/* Premium Plan */}
            <div className="border-4 border-pink-500 rounded-lg p-8 w-full max-w-sm text-center flex flex-col relative shadow-2xl">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-pink-500 text-white px-4 py-1 rounded-full text-sm font-bold">MAIS POPULAR</div>
              <h3 className="text-2xl font-bold mb-2">Kit Completo Premium</h3>
              <p className="text-gray-500 line-through">De R$ 67,00</p>
              <p className="text-5xl font-bold my-2 text-pink-600">Por R$ 17<span className="text-lg font-normal">,90</span></p>
              <ul className="text-left space-y-2 mb-8 flex-grow">
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-2" /> <strong>300+</strong> Desenhos para Colorir</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-2" /> Acesso Imediato e Vitalício</li>
                <li className="flex items-center text-pink-600 font-bold"><CheckCircle className="w-5 h-5 mr-2" /> Bônus #1: Atividades de Alfabetização</li>
                <li className="flex items-center text-pink-600 font-bold"><CheckCircle className="w-5 h-5 mr-2" /> Bônus #2: Jogo da Memória para Imprimir</li>
              </ul>
              <a href="https://pay.cakto.com.br/mixvq2u_499173" className="mt-auto bg-pink-500 text-white font-bold py-3 px-8 rounded-full text-xl hover:bg-pink-600 transition-transform transform hover:scale-105">QUERO O KIT COMPLETO!</a>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-amber-50 py-16 px-4">
          <h2 className="text-3xl font-bold text-center mb-10 text-amber-800">O que Nossos Clientes Dizem</h2>
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                  <Image src="/prof1.png" alt="Professora Ana" width={50} height={50} className="rounded-full mr-4"/>
                  <div>
                    <p className="font-bold">Professora Ana Clara (Mãe e Pedagoga)</p>
                    <div className="flex text-yellow-400">{Array(5).fill(0).map((_, index) => <Star key={`ana-star-${index}`} size={18} className='fill-yellow-400'/>)}</div>
                  </div>
              </div>
              <p>&quot;Uso o kit com minhas crianças. É uma ferramenta incrível que economiza meu tempo e engaja as crianças de um jeito único!&quot;</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                  <Image src="/prof2.png" alt="Rafael Pires" width={50} height={50} className="rounded-full mr-4"/>
                  <div>
                    <p className="font-bold">Rafaela Pires (Mãe)</p>
                    <div className="flex text-yellow-400">{Array(5).fill(0).map((_, index) => <Star key={`rafael-star-${index}`} size={18} className='fill-yellow-400'/>)}</div>
                  </div>
              </div>
              <p>&quot;Material de ótima qualidade e muito prático. Salvou nossas tardes de tédio aqui em casa. Valeu cada centavo!&quot;</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                  <Image src="/mae1.png" alt="Teresa Almeida" width={50} height={50} className="rounded-full mr-4"/>
                  <div>
                    <p className="font-bold">Teresa Almeida (Mãe)</p>
                    <div className="flex text-yellow-400">{Array(5).fill(0).map((_, index) => <Star key={`lucas-star-${index}`} size={18} className='fill-yellow-400'/>)}</div>
                  </div>
              </div>
              <p>&quot;Incrível! A qualidade dos desenhos é excelente e meu filho aprende enquanto brinca. A melhor compra que fiz.&quot;</p>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="text-center py-16 px-4 bg-pink-500 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Transforme o Aprendizado Hoje Mesmo!</h2>
            <p className="max-w-3xl mx-auto text-lg mb-8">Ofereça a melhor ferramenta de desenvolvimento para seus alunos ou filhos. Praticidade para pais e professores, diversão garantida para as crianças.</p>
            <a href="#precos" className="bg-white text-pink-600 font-bold py-4 px-10 rounded-full text-xl hover:bg-amber-100 transition-transform transform hover:scale-105 shadow-lg">GARANTIR MEU KIT COMPLETO!</a>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-8 px-4">
        <p>&copy; {new Date().getFullYear()} Kit de Atividades Criativas. Todos os direitos reservados.</p>
        <p className="text-sm text-gray-400 mt-2">Uma ferramenta para inspirar a próxima geração de artistas e estudantes.</p>
      </footer>
    </div>
  );
}

