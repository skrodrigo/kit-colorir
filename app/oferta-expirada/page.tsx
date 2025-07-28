
import Image from 'next/image';
import { CheckCircle, Star } from 'lucide-react';
import CountdownTimer from '@/components/ui/countdown-timer';

export default function OfertaExpirada() {
  return (
    <div className="bg-gray-100">
      {/* Timer Section */}
      <div className="bg-pink-600 text-white py-3 px-4 text-center sticky top-0 z-50 shadow-lg">
        <p className="font-semibold text-lg md:text-xl">Sua oferta exclusiva termina em:</p>
        <CountdownTimer />
      </div>

      <main className="py-12 md:py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-pink-600 mb-4">Você Chegou na Hora Certa!</h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8">A oferta do Kit Essencial acabou, mas liberamos para você uma oportunidade única e muito superior: o <strong>Kit Completo Premium</strong> com um <strong>desconto adicional de 25%</strong> que não se repetirá.</p>

          {/* Premium Card Section */}
          <div className="flex justify-center my-10">
            <div className="border-4 border-pink-500 rounded-lg p-6 md:p-8 w-full max-w-md text-center flex flex-col relative shadow-2xl bg-white">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-pink-500 text-white px-4 py-1 rounded-full text-sm font-bold">OFERTA EXCLUSIVA</div>
              <h3 className="text-2xl font-bold mb-2">Kit Completo Premium</h3>
              <p className="text-gray-500 line-through text-lg">De R$ 67,00</p>
              <p className="text-gray-500 line-through text-2xl">Por R$ 17,90</p>
              <p className="text-5xl font-bold my-2 text-pink-600">Hoje por R$ 13<span className="text-lg font-normal">,40</span></p>
              <ul className="text-left space-y-2 my-6 md:my-8 flex-grow">
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" /> <strong>300+</strong> Desenhos para Colorir</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" /> Acesso Imediato e Vitalício</li>
                <li className="flex items-center text-pink-600 font-bold"><CheckCircle className="w-5 h-5 mr-2 flex-shrink-0" /> Bônus #1: Atividades de Alfabetização</li>
                <li className="flex items-center text-pink-600 font-bold"><CheckCircle className="w-5 h-5 mr-2 flex-shrink-0" /> Bônus #2: Jogo da Memória para Imprimir</li>
              </ul>
              <a href="#" className="mt-auto bg-green-500 text-white font-bold py-3 px-8 rounded-full text-xl hover:bg-green-600 transition-transform transform hover:scale-105 shadow-lg">QUERO APROVEITAR A OFERTA!</a>
            </div>
          </div>

          {/* Testimonials Section */}
          <section className="bg-amber-50 py-16 px-4 -mx-4 mt-16 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-10 text-amber-800">Veja quem já está transformando o aprendizado:</h2>
            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                    <Image src="/prof1.png" alt="Professora Ana" width={50} height={50} className="rounded-full mr-4"/>
                    <div>
                      <p className="font-bold">Prof. Ana Clara</p>
                      <div className="flex text-yellow-400">{Array(5).fill(0).map((_, i) => <Star key={`t1-star-${i}`} size={18} className='fill-yellow-400'/>)}</div>
                    </div>
                </div>
                <p className='text-gray-700'>&quot;Uso o kit com meus alunos e com meu filho. É uma ferramenta incrível que economiza meu tempo e engaja as crianças!&quot;</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                    <Image src="/prof2.png" alt="Rafaela Pires" width={50} height={50} className="rounded-full mr-4"/>
                    <div>
                      <p className="font-bold">Rafaela Pires (Mãe)</p>
                      <div className="flex text-yellow-400">{Array(5).fill(0).map((_, i) => <Star key={`t2-star-${i}`} size={18} className='fill-yellow-400'/>)}</div>
                    </div>
                </div>
                <p className='text-gray-700'>&quot;Material de ótima qualidade e muito prático. Salvou nossas tardes de tédio aqui em casa. Valeu cada centavo!&quot;</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                    <Image src="/mae1.png" alt="Teresa Almeida" width={50} height={50} className="rounded-full mr-4"/>
                    <div>
                      <p className="font-bold">Teresa Almeida (Mãe)</p>
                      <div className="flex text-yellow-400">{Array(5).fill(0).map((_, i) => <Star key={`t3-star-${i}`} size={18} className='fill-yellow-400'/>)}</div>
                    </div>
                </div>
                <p className='text-gray-700'>&quot;Incrível! A qualidade dos desenhos é excelente e meu filho aprende enquanto brinca. A melhor compra que fiz.&quot;</p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
