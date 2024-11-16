"use client";

import Layout from '../layout';
import { motion } from 'framer-motion';
import { FaMoneyBillWave, FaAppleAlt, FaTshirt } from 'react-icons/fa';

export default function Doacoes() {
  return (
    <Layout>
      <section className="min-h-screen bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          <motion.h2
            className="text-4xl font-bold text-[#89b72d]"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Como Fazer uma Doação
          </motion.h2>
          <motion.p
            className="text-lg max-w-xl mx-auto mt-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.3 }}
          >
            Sua doação é fundamental para nós! Aqui estão algumas maneiras de contribuir.
          </motion.p>
        </div>

        {/* Seções de Doações */}
        <div className="container mx-auto mt-10 px-4">
          <div className="flex flex-col md:flex-row justify-around items-center">
            {/* Primeira Opção de Doação: Doação Financeira */}
            <motion.div
              className="bg-white shadow-lg rounded-lg p-6 m-4 flex-1 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <FaMoneyBillWave className="w-16 h-16 mx-auto text-[#89b72d] mb-4" />
              <h3 className="text-xl font-bold">Doação Financeira</h3>
              <p>
                Contribua com doações financeiras seguras através do nosso site.
              </p>
            </motion.div>

            {/* Segunda Opção de Doação: Doações de Alimentos */}
            <motion.div
              className="bg-white shadow-lg rounded-lg p-6 m-4 flex-1 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <FaAppleAlt className="w-16 h-16 mx-auto text-[#89b72d] mb-4" />
              <h3 className="text-xl font-bold">Doações de Alimentos</h3>
              <p>
                Doe alimentos não perecíveis para ajudar aqueles que mais precisam.
              </p>
            </motion.div>

            {/* Terceira Opção de Doação: Doações de Roupas */}
            <motion.div
              className="bg-white shadow-lg rounded-lg p-6 m-4 flex-1 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <FaTshirt className="w-16 h-16 mx-auto text-[#89b72d] mb-4" />
              <h3 className="text-xl font-bold">Doações de Roupas</h3>
              <p>
                Aceitamos doações de roupas e calçados para distribuir a quem precisa.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Informações Bancárias e PIX */}
        <div className="container mx-auto mt-10 text-center">
          <h3 className="text-2xl font-bold text-[#89b72d]">Informações Bancárias</h3>
          <p className="text-lg mt-2">Banco: SICOOB (756)</p>
          <p className="text-lg">Agência: 4379</p>
          <p className="text-lg">Conta Corrente: 4586-1</p>
          <p className="text-lg">CNPJ: 05.509.404/0001-29</p>
          <p className="text-lg">Titular: Associação Assistencial e Promocional Casa da Paz</p>
          <p className="text-lg mt-6 font-bold">Ou faça sua doação através do nosso PIX:</p>
          <p className="text-lg">Chave PIX: 05.509.404/0001-29</p>
        </div>
      </section>
    </Layout>
  );
}
