import React from 'react';
import { Info, Heart, Github, Mail, Globe } from 'lucide-react';
import { Language } from '../types';

interface AboutPageProps {
  language: Language;
}

export const AboutPage: React.FC<AboutPageProps> = ({ language }) => {
  const content = {
    title: language === 'hi' ? 'हमारे बारे में' : 'About Us',
    subtitle: language === 'hi' 
      ? 'प्राचीन ज्ञान और आधुनिक तकनीक का संगम' 
      : 'Bridging Ancient Wisdom with Modern Technology',
    
    missionTitle: language === 'hi' ? 'हमारा उद्देश्य' : 'Our Mission',
    missionText: language === 'hi'
      ? 'गीता ज्ञान एक डिजिटल अभ्यारण्य है जिसे श्रीमद्भगवद्गीता के शाश्वत ज्ञान को सभी के लिए सुलभ बनाने के लिए डिज़ाइन किया गया है। पारंपरिक संस्कृत श्लोकों को आधुनिक अनुवादों और एआई-संचालित अंतर्दृष्टि के साथ जोड़कर, हमारा उद्देश्य प्राचीन आध्यात्मिकता और समकालीन जीवन के बीच की खाई को पाटना है।'
      : 'Gita Wisdom is a digital sanctuary designed to make the eternal wisdom of the Shrimad Bhagavad Gita accessible to everyone. By combining traditional Sanskrit verses with modern translations and AI-powered insights, we aim to bridge the gap between ancient spirituality and contemporary life.',

    authorTitle: language === 'hi' ? 'लेखक और निर्माण' : 'Author & Build',
    authorText: language === 'hi'
      ? 'यह एप्लिकेशन प्रेम और भक्ति के साथ बनाया गया है। यह आधुनिक वेब प्रौद्योगिकियों की शक्ति और भारतीय विरासत की गहराई का प्रमाण है।'
      : 'This application was built with love and devotion. It stands as a testament to the power of modern web technologies and the depth of Indian heritage.',
      
    techStack: language === 'hi' ? 'तकनीकी विवरण' : 'Tech Stack',
    contact: language === 'hi' ? 'संपर्क करें' : 'Contact'
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 animate-fade-in">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-serif font-bold text-stone-800 mb-4">{content.title}</h2>
        <p className="text-xl text-amber-600 font-medium">{content.subtitle}</p>
      </div>

      <div className="grid gap-8">
        {/* Mission Section */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-amber-100 rounded-full text-amber-600">
              <Info size={24} />
            </div>
            <h3 className="text-2xl font-serif font-bold text-stone-800">{content.missionTitle}</h3>
          </div>
          <p className="text-stone-600 leading-relaxed text-lg">
            {content.missionText}
          </p>
        </div>

        {/* Author Section */}
        <div className="bg-stone-50 p-8 rounded-2xl border border-stone-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-stone-200 rounded-full text-stone-600">
              <Heart size={24} />
            </div>
            <h3 className="text-2xl font-serif font-bold text-stone-800">{content.authorTitle}</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-stone-600 leading-relaxed mb-6">
                {content.authorText}
              </p>
              <h4 className="font-bold text-stone-700 mb-2 text-sm uppercase tracking-wide">{content.contact}</h4>
              <div className="flex flex-wrap gap-3">
                <a href="#" className="flex items-center gap-2 px-3 py-2 bg-white border border-stone-300 rounded-lg text-stone-600 hover:text-stone-900 hover:border-stone-400 transition-colors text-sm">
                  <Github size={16} />
                  <span>GitHub</span>
                </a>
                <a href="#" className="flex items-center gap-2 px-3 py-2 bg-white border border-stone-300 rounded-lg text-stone-600 hover:text-stone-900 hover:border-stone-400 transition-colors text-sm">
                  <Globe size={16} />
                  <span>Website</span>
                </a>
                <a href="#" className="flex items-center gap-2 px-3 py-2 bg-white border border-stone-300 rounded-lg text-stone-600 hover:text-stone-900 hover:border-stone-400 transition-colors text-sm">
                  <Mail size={16} />
                  <span>Email</span>
                </a>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-stone-200">
               <h4 className="font-bold text-stone-700 mb-4 text-sm uppercase tracking-wide">{content.techStack}</h4>
               <ul className="space-y-2 text-sm text-stone-600">
                 <li className="flex items-center gap-2">
                   <span className="w-2 h-2 bg-blue-400 rounded-full"></span> React 18 & TypeScript
                 </li>
                 <li className="flex items-center gap-2">
                   <span className="w-2 h-2 bg-teal-400 rounded-full"></span> Tailwind CSS
                 </li>
                 <li className="flex items-center gap-2">
                   <span className="w-2 h-2 bg-purple-400 rounded-full"></span> Google Gemini AI (2.5 Flash)
                 </li>
                 <li className="flex items-center gap-2">
                   <span className="w-2 h-2 bg-orange-400 rounded-full"></span> Lucide Icons
                 </li>
               </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div className="text-center mt-12 text-stone-400 text-sm">
        <p>Version 1.0.0 • © {new Date().getFullYear()} Gita Wisdom</p>
      </div>
    </div>
  );
};
