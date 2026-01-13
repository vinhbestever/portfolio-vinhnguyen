import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { scrollToElement } from '../../utils/animations';

const Footer = () => {
  const { t } = useTranslation();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/vinhbestever', label: 'GitHub' },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/vinhbestever',
      label: 'LinkedIn',
    },
    { icon: Mail, href: 'mailto:vinh.dev.ai@gmail.com', label: 'Email' },
  ];

  const quickLinks = [
    { id: 'home', label: t('nav.home') },
    { id: 'about', label: t('nav.about') },
    { id: 'experience', label: t('nav.experience') },
    { id: 'projects', label: t('nav.projects') },
    { id: 'contact', label: t('nav.contact') },
  ];

  return (
    <footer className="relative z-10 bg-gray-950/50 backdrop-blur-sm border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <motion.button
                  key={link.id}
                  onClick={() => scrollToElement(link.id)}
                  whileHover={{ x: 5 }}
                  className="text-gray-400 hover:text-primary-400 transition-colors text-left"
                >
                  {link.label}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">
              {t('contact.social')}
            </h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-full bg-white/5 hover:bg-primary-600 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
