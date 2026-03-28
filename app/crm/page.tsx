'use client';
import { motion } from 'motion/react';
import Sidebar from '@/components/Sidebar';
import TopBar from '@/components/TopBar';
import Image from 'next/image';

const leads = [
  { id: 1, name: 'Mariana Silva', phone: '(11) 98765-4321', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAdlhwnBCN2QdbDnxsFril3r4xZYDWk3enCBNZZEk9sbLwcGyKAc9SUdTjpZ8-dakUI1_RTGcYs40P0_Vkqse1uXeoCI66YBZZwWaP37IwVDQToZW6ZrTFbXL0gTB9iHz4ExU85v3ySCtFtm2xrgfh82dtMWmwu5URfbqpfDafHjJbi0d8Asi3IlMdFkfKOIvbnVwy80ifgPL9J6YHyoXfyPba8UTlo01JAMwwSuhB9tQ-Lcs-eXsjWPm4XhPT77-gMNMSxL4-Vw_TD', status: 'Novo' },
  { id: 2, name: 'Ricardo Oliveira', phone: '(21) 99887-1122', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC1wvwHSX97qTcYMBPLUUBxJqD5O5Q19XHOiH_sGGyByZlZffNZDWTfjGQG5N4Ks-s51FQK6cFxbsqkmtJi4ja7GGsYtsA-APISE0iiNf_Ks86XWeT1dVehItJ6uhYzL7U3EzSXT9Win_KZknKUS88fyiXRSPdzXbieK8m0J6dHoKcihV5BwrPbdpfuW73-hzkJJsd8oxmfWGstS8ThszsK-0rIJwnPwbToUAknqO9jvljfnBYLkKDCowXnzkhXldIMGVZyf_BQ-maw', status: 'Novo' },
];

export default function CRMPage() {
  return (
    <div className="min-h-screen bg-bg-deep">
      <Sidebar />
      <TopBar />
      <main className="ml-80 pt-24 p-8">
        <h1 className="text-4xl font-bold text-white mb-8">CRM Leads</h1>
        <div className="grid grid-cols-4 gap-6">
          {leads.map((lead, i) => (
            <motion.div 
              key={lead.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-card-bg/60 backdrop-blur-md border border-white/10"
            >
              <Image src={lead.img} alt={lead.name} width={48} height={48} className="rounded-full mb-4" referrerPolicy="no-referrer" />
              <h2 className="text-lg font-bold text-white">{lead.name}</h2>
              <p className="text-gray-400 text-sm">{lead.phone}</p>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}
