import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';
import { Mail, MapPin, Github, Linkedin } from 'lucide-react';
import { fadeInUp, staggerContainer, staggerItem } from '../../utils/animations';

const Contact = () => {
  const { t } = useTranslation();
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const contactInfo = [
    {
      icon: Mail,
      label: t('contact.email'),
      value: 'vinh.dev.ai@gmail.com',
      href: 'mailto:vinh.dev.ai@gmail.com',
    },
    {
      icon: MapPin,
      label: t('contact.location'),
      value: 'Ha Noi, Vietnam',
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/vinhbestever',
      color: 'hover:text-gray-400',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/vinhbestever',
      color: 'hover:text-blue-400',
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:vinh.dev.ai@gmail.com',
      color: 'hover:text-green-400',
    },
  ];

  return (
    <section id="contact" className="section-padding relative z-10">
      <div className="max-w-5xl mx-auto" ref={ref}>
        {/* Section Title */}
        <motion.div
          initial="initial"
          animate={inView ? 'animate' : 'initial'}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="gradient-text">{t('contact.title')}</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate={inView ? 'animate' : 'initial'}
          className="grid md:grid-cols-2 gap-12"
        >
          {/* Contact Information */}
          <motion.div variants={staggerItem} className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Get in touch</h3>
              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <motion.div
                    key={info.label}
                    whileHover={{ x: 10 }}
                    className="flex items-start gap-4"
                  >
                    <div className="p-3 rounded-lg bg-primary-600/20 text-primary-400">
                      <info.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1">{info.label}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-white hover:text-primary-400 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-white">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-bold mb-4">{t('contact.social')}</h3>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-4 rounded-full bg-white/5 hover:bg-primary-600 transition-all duration-300 ${social.color}`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={staggerItem}>
            <div className="card p-8">
              <h3 className="text-2xl font-bold mb-6">Send a message</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition-all"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition-all resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full btn-primary"
                >
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute -bottom-20 -left-20 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute -top-20 -right-20 w-96 h-96 bg-secondary-600/10 rounded-full blur-3xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;

